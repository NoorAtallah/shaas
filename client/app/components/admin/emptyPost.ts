import type { PostForm } from './PostEditor'
export function emptyPost(): PostForm {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
  return { title: '', slug: '', excerpt: '', body: '', coverImageUrl: '', category: '', tags: '', seoTitle: '', seoDescription: '', keywords: '', status: 'draft', publishAt: local }
}
