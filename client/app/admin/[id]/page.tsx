'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminShell from '../../components/admin/AdminShell'
import PostEditor, { type PostForm } from '../../components/admin/PostEditor'
import { emptyPost } from '../../components/admin/emptyPost'

export default function EditPost() {
  const params = useParams<{ id: string }>()
  const [form, setForm] = useState<PostForm | null>(null)

  useEffect(() => {
    fetch(`/api/admin/posts/${params.id}`).then((r) => r.json()).then((d) => {
      if (!d.post) return
      const p = d.post
      const dt = new Date(p.publishAt)
      const local = new Date(dt.getTime() - dt.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
      setForm({
        ...emptyPost(), _id: p._id, title: p.title || '', slug: p.slug || '', excerpt: p.excerpt || '',
        body: p.body || '', coverImageUrl: p.coverImageUrl || '', category: p.category || '',
        tags: (p.tags || []).join(', '), seoTitle: p.seoTitle || '', seoDescription: p.seoDescription || '',
        keywords: (p.keywords || []).join(', '), status: p.status || 'draft', publishAt: local,
      })
    })
  }, [params.id])

  return <AdminShell>{!form ? <div style={{ padding: 60, color: '#888' }}>Loading…</div> : <PostEditor mode="edit" initial={form} />}</AdminShell>
}
