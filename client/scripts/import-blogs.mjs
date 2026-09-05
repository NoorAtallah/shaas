/**
 * Bulk-import SHAAS insight articles into MongoDB.
 *
 *   node scripts/import-blogs.mjs                # dry run, shows what would change
 *   node scripts/import-blogs.mjs --write        # imports as drafts
 *   node scripts/import-blogs.mjs --write --publish
 *   node scripts/import-blogs.mjs --write --publish --stagger 3   # 3 days apart
 *
 * Idempotent: matches on slug, updates existing posts instead of duplicating.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import mongoose from 'mongoose'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// --- load .env.local ---------------------------------------------------------
for (const f of ['.env.local', '.env']) {
  const p = path.join(root, f)
  if (!fs.existsSync(p)) continue
  for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI not found in .env.local')

// --- args --------------------------------------------------------------------
const args = process.argv.slice(2)
const WRITE = args.includes('--write')
const PUBLISH = args.includes('--publish')
const STAGGER = Number(args[args.indexOf('--stagger') + 1]) || 0   // days between posts
const DATA = path.join(__dirname, 'blogs.json')

// --- schema (mirrors app/models/BlogPost.ts) ---------------------------------
const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, default: '', trim: true, maxlength: 400 },
    body: { type: String, default: '' },
    coverImageUrl: { type: String, default: '' },
    category: { type: String, default: '' },
    tags: { type: [String], default: [] },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
    keywords: { type: [String], default: [] },
    status: { type: String, enum: ['draft', 'scheduled', 'published'], default: 'draft' },
    publishAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true }
)
const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema)

// --- run ---------------------------------------------------------------------
const posts = JSON.parse(fs.readFileSync(DATA, 'utf8'))
console.log(`${posts.length} articles loaded from ${path.basename(DATA)}`)
console.log(WRITE ? `MODE: write (${PUBLISH ? 'published' : 'draft'}${STAGGER ? `, ${STAGGER}d apart` : ''})` : 'MODE: dry run — nothing will be saved\n')

await mongoose.connect(process.env.MONGODB_URI)

let created = 0, updated = 0, skipped = 0
const now = Date.now()

for (const [i, p] of posts.entries()) {
  const publishAt = new Date(now + (STAGGER ? i * STAGGER * 86400000 : 0))
  const status = PUBLISH ? (publishAt.getTime() > now ? 'scheduled' : 'published') : 'draft'

  const doc = {
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    body: p.body,
    category: p.category,
    tags: p.tags,
    seoTitle: p.seoTitle,
    seoDescription: p.seoDescription,
    keywords: p.keywords,
    status,
    publishAt,
  }

  const existing = await BlogPost.findOne({ slug: p.slug }).lean()
  if (!WRITE) {
    console.log(`${existing ? 'update' : 'create'}  ${p.slug}  (${p.category})`)
    existing ? updated++ : created++
    continue
  }

  if (existing) {
    // don't clobber a cover image or a publish date that was set by hand
    if (existing.coverImageUrl) doc.coverImageUrl = existing.coverImageUrl
    await BlogPost.updateOne({ _id: existing._id }, { $set: doc })
    updated++
    console.log(`updated  ${p.slug}`)
  } else {
    await BlogPost.create(doc)
    created++
    console.log(`created  ${p.slug}`)
  }
}

console.log(`\ncreated ${created} · updated ${updated} · skipped ${skipped}`)
if (!WRITE) console.log('Re-run with --write to apply.')
await mongoose.disconnect()
