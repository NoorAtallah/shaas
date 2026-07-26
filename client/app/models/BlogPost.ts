import mongoose, { Schema, model, models } from 'mongoose'

export type PostStatus = 'draft' | 'scheduled' | 'published'

export interface IBlogPost {
  title: string
  slug: string
  excerpt: string
  body: string
  coverImageUrl?: string
  category?: string
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  keywords: string[]
  status: PostStatus
  publishAt: Date
  createdAt: Date
  updatedAt: Date
}

const BlogPostSchema = new Schema<IBlogPost>(
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

BlogPostSchema.index({ status: 1, publishAt: -1 })

const BlogPost = (models.BlogPost as mongoose.Model<IBlogPost>) || model<IBlogPost>('BlogPost', BlogPostSchema)
export default BlogPost

/** Filter for posts visible to the public: not a draft, and publish time has passed. */
export function liveFilter() {
  return { status: { $ne: 'draft' as PostStatus }, publishAt: { $lte: new Date() } }
}
