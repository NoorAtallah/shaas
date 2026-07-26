import { NextResponse } from 'next/server'
import { dbConnect } from '../../../../lib/mongodb'
import BlogPost from '../../../../models/BlogPost'
import { isAdmin } from '../../../../lib/requireAdmin'
import { slugify } from '../../../../lib/slug'

type Ctx = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  await dbConnect()
  const post = await BlogPost.findById(id).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post })
}

export async function PUT(req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const b = await req.json()
  await dbConnect()

  const update: Record<string, unknown> = {
    title: b.title, excerpt: b.excerpt, body: b.body, coverImageUrl: b.coverImageUrl,
    category: b.category, tags: b.tags, seoTitle: b.seoTitle, seoDescription: b.seoDescription,
    keywords: b.keywords, status: b.status,
    publishAt: b.publishAt ? new Date(b.publishAt) : undefined,
  }
  if (b.slug) {
    let slug = slugify(b.slug)
    let n = 1
    while (await BlogPost.exists({ slug, _id: { $ne: id } })) { slug = `${slugify(b.slug)}-${++n}` }
    update.slug = slug
  }
  Object.keys(update).forEach((k) => update[k] === undefined && delete update[k])

  const post = await BlogPost.findByIdAndUpdate(id, update, { new: true }).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post })
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  await dbConnect()
  await BlogPost.findByIdAndDelete(id)
  return NextResponse.json({ ok: true })
}
