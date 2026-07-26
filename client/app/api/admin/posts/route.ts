import { NextResponse } from 'next/server'
import { dbConnect } from '../../../lib/mongodb'
import BlogPost from '../../../models/BlogPost'
import { isAdmin } from '../../../lib/requireAdmin'
import { slugify } from '../../../lib/slug'

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  await dbConnect()
  const posts = await BlogPost.find().sort({ updatedAt: -1 }).lean()
  return NextResponse.json({ posts })
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const b = await req.json()
  const title = String(b.title ?? '').trim()
  if (!title) return NextResponse.json({ error: 'Title is required.' }, { status: 400 })

  await dbConnect()
  let slug = slugify(b.slug || title)
  // ensure unique slug
  let n = 1
  while (await BlogPost.exists({ slug })) { slug = `${slugify(b.slug || title)}-${++n}` }

  const post = await BlogPost.create({
    title,
    slug,
    excerpt: b.excerpt ?? '',
    body: b.body ?? '',
    coverImageUrl: b.coverImageUrl ?? '',
    category: b.category ?? '',
    tags: Array.isArray(b.tags) ? b.tags : [],
    seoTitle: b.seoTitle ?? '',
    seoDescription: b.seoDescription ?? '',
    keywords: Array.isArray(b.keywords) ? b.keywords : [],
    status: b.status ?? 'draft',
    publishAt: b.publishAt ? new Date(b.publishAt) : new Date(),
  })
  return NextResponse.json({ post }, { status: 201 })
}
