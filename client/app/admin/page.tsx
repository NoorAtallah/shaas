'use client'
import { useEffect, useState } from 'react'
import AdminShell from '../components/admin/AdminShell'

const BLUE = '#00aaff', INK = '#0a0a0a'
type Row = { _id: string; title: string; status: string; publishAt: string; slug: string; updatedAt: string }

export default function AdminHome() {
  const [posts, setPosts] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    const res = await fetch('/api/admin/posts'); const d = await res.json()
    setPosts(d.posts || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function del(id: string) {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' }); load()
  }

  return (
    <AdminShell>
      <div style={{ padding: '36px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 32, margin: 0 }}>Insights</h1>
          <a href="/admin/new" style={{ background: INK, color: '#fff', padding: '11px 22px', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none' }}>+ New Insight</a>
        </div>
        {loading ? <p style={{ color: '#888' }}>Loading…</p> : posts.length === 0 ? (
          <div style={{ background: '#fff', border: '1px solid #eee', padding: 48, textAlign: 'center', color: '#999', fontWeight: 300 }}>
            No posts yet. <a href="/admin/new" style={{ color: BLUE }}>Create your first insight.</a>
          </div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid #eee' }}>
            {posts.map((p) => (
              <div key={p._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #f2f2f2', gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 16 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: '#999', marginTop: 3 }}>/insights/{p.slug} · {new Date(p.publishAt).toLocaleDateString('en-GB')}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 10px', background: p.status === 'published' ? 'rgba(0,170,255,0.12)' : p.status === 'scheduled' ? '#fff4e0' : '#f0f0f0', color: p.status === 'published' ? BLUE : '#888' }}>{p.status}</span>
                  <a href={`/admin/${p._id}`} style={{ fontSize: 11, color: INK, textDecoration: 'none', borderBottom: `1px solid ${BLUE}` }}>Edit</a>
                  <button onClick={() => del(p._id)} style={{ background: 'none', border: 'none', color: '#c0392b', fontSize: 11, cursor: 'pointer' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  )
}