'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, UploadCloud, Check } from 'lucide-react'
import RichText from './RichText'

const BLUE = '#00aaff', INK = '#0a0a0a'
export type PostForm = {
  _id?: string; title: string; slug: string; excerpt: string; body: string
  coverImageUrl: string; category: string; tags: string; seoTitle: string
  seoDescription: string; keywords: string; status: string; publishAt: string
}
const CATS = ['', 'Legal Advisory', 'Business & Financial Advisory', 'Management Consulting', 'Human Capital Advisory']

export default function PostEditor({ initial, mode }: { initial: PostForm; mode: 'create' | 'edit' }) {
  const router = useRouter()
  const [f, setF] = useState<PostForm>(initial)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const set = (k: keyof PostForm, v: string) => setF((p) => ({ ...p, [k]: v }))

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return
    setUploading(true); setErr(null)
    const fd = new FormData(); fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json(); setUploading(false)
    if (data.url) set('coverImageUrl', data.url); else setErr(data.error || 'Upload failed.')
  }

  async function save() {
    setSaving(true); setErr(null)
    const payload = {
      ...f,
      tags: f.tags.split(',').map((s) => s.trim()).filter(Boolean),
      keywords: f.keywords.split(',').map((s) => s.trim()).filter(Boolean),
    }
    const url = mode === 'create' ? '/api/admin/posts' : `/api/admin/posts/${f._id}`
    const method = mode === 'create' ? 'POST' : 'PUT'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setSaving(false)
    if (res.ok) router.push('/admin'); else { const d = await res.json().catch(() => ({})); setErr(d.error || 'Save failed.') }
  }

  return (
    <div style={{ color: INK, fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`
        .pe-wrap{ max-width:900px; margin:0 auto; padding:36px 40px 90px; }
        .pe-card{ background:#fff; border:1px solid #ececec; border-radius:12px; padding:28px 30px; margin-bottom:22px; }
        .pe-card-title{ font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:${BLUE}; font-weight:500; margin-bottom:20px; }
        .pe-label{ font-size:11px; font-weight:500; color:#555; display:block; margin-bottom:7px; }
        .pe-input, .pe-select, .pe-textarea{ width:100%; border:1px solid #e2e2e2; border-radius:8px; padding:11px 13px; font-size:14px; color:${INK}; background:#fff; outline:none; font-family:'DM Sans',sans-serif; transition:border-color .2s; }
        .pe-input:focus,.pe-select:focus,.pe-textarea:focus{ border-color:${BLUE}; }
        .pe-input::placeholder,.pe-textarea::placeholder{ color:#bbb; }
        .pe-field{ margin-bottom:18px; }
        .pe-row{ display:flex; gap:18px; flex-wrap:wrap; }
        .pe-row > div{ flex:1; min-width:200px; }
        .pe-hint{ font-size:12px; color:#999; font-weight:300; margin:6px 0 0; }
        .pe-upload{ display:inline-flex; align-items:center; gap:8px; border:1px dashed #ccc; border-radius:8px; padding:12px 16px; cursor:pointer; font-size:13px; color:#555; background:#fafafa; }
        .pe-upload:hover{ border-color:${BLUE}; color:${INK}; }
        .pe-upload input{ display:none; }
        .pe-save{ background:${INK}; color:#fff; border:none; border-radius:8px; padding:14px 34px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:background .2s; }
        .pe-save:hover{ background:${BLUE}; } .pe-save:disabled{ opacity:.6; cursor:not-allowed; }
        .pe-back{ display:inline-flex; align-items:center; gap:6px; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:#999; text-decoration:none; }
        .pe-back:hover{ color:${INK}; }
        .pe-h1{ font-family:'Fraunces',serif; font-weight:800; font-size:34px; margin:14px 0 26px; }
      `}</style>

      <div className="pe-wrap">
        <a href="/admin" className="pe-back"><ArrowLeft size={14} /> All posts</a>
        <h1 className="pe-h1">{mode === 'create' ? 'New Insight' : 'Edit Insight'}</h1>

        <div className="pe-card">
          <div className="pe-card-title">Content</div>
          <div className="pe-field">
            <label className="pe-label">Title</label>
            <input className="pe-input" value={f.title} onChange={(e) => set('title', e.target.value)} placeholder="e.g. Why Corporate Governance Matters for UAE Family Businesses" />
          </div>
          <div className="pe-row">
            <div className="pe-field">
              <label className="pe-label">URL slug</label>
              <input className="pe-input" value={f.slug} onChange={(e) => set('slug', e.target.value)} placeholder="leave blank to auto-generate" />
            </div>
            <div className="pe-field">
              <label className="pe-label">Category</label>
              <select className="pe-select" value={f.category} onChange={(e) => set('category', e.target.value)}>
                {CATS.map((c) => <option key={c} value={c}>{c || '— none —'}</option>)}
              </select>
            </div>
          </div>
          <div className="pe-field">
            <label className="pe-label">Excerpt <span style={{ color: '#aaa', fontWeight: 300 }}>(short summary shown on cards)</span></label>
            <textarea className="pe-textarea" style={{ minHeight: 70 }} value={f.excerpt} onChange={(e) => set('excerpt', e.target.value)} placeholder="One or two sentences summarising the article." />
          </div>
        </div>

        <div className="pe-card">
          <div className="pe-card-title">Article</div>
          <div className="pe-field">
            <label className="pe-label">Cover image</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <label className="pe-upload">
                <UploadCloud size={16} /> {uploading ? 'Uploading…' : 'Choose image'}
                <input type="file" accept="image/*" onChange={upload} />
              </label>
              {f.coverImageUrl && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <img src={f.coverImageUrl} alt="cover" style={{ height: 46, borderRadius: 6, border: '1px solid #eee' }} />
                  <Check size={16} color={BLUE} />
                </span>
              )}
            </div>
          </div>
          <div className="pe-field">
            <label className="pe-label">Body</label>
            <RichText value={f.body} onChange={(html) => set('body', html)} />
            <p className="pe-hint">Use the toolbar for headings, bold, lists and links — no code needed.</p>
          </div>
        </div>

        <div className="pe-card">
          <div className="pe-card-title">Search Engine (SEO)</div>
          <div className="pe-field">
            <label className="pe-label">SEO title</label>
            <input className="pe-input" value={f.seoTitle} onChange={(e) => set('seoTitle', e.target.value)} placeholder="Title shown in Google results" />
          </div>
          <div className="pe-field">
            <label className="pe-label">Meta description</label>
            <textarea className="pe-textarea" style={{ minHeight: 60 }} value={f.seoDescription} onChange={(e) => set('seoDescription', e.target.value)} placeholder="Short description shown under the title in Google" />
          </div>
          <div className="pe-row">
            <div className="pe-field">
              <label className="pe-label">Keywords <span style={{ color: '#aaa', fontWeight: 300 }}>(comma separated)</span></label>
              <input className="pe-input" value={f.keywords} onChange={(e) => set('keywords', e.target.value)} placeholder="corporate governance, family business" />
            </div>
            <div className="pe-field">
              <label className="pe-label">Tags <span style={{ color: '#aaa', fontWeight: 300 }}>(comma separated)</span></label>
              <input className="pe-input" value={f.tags} onChange={(e) => set('tags', e.target.value)} placeholder="governance, uae" />
            </div>
          </div>
        </div>

        <div className="pe-card">
          <div className="pe-card-title">Publishing</div>
          <div className="pe-row">
            <div className="pe-field">
              <label className="pe-label">Status</label>
              <select className="pe-select" value={f.status} onChange={(e) => set('status', e.target.value)}>
                <option value="draft">Draft — hidden from site</option>
                <option value="scheduled">Scheduled</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="pe-field">
              <label className="pe-label">Publish date &amp; time</label>
              <input type="datetime-local" className="pe-input" value={f.publishAt} onChange={(e) => set('publishAt', e.target.value)} />
            </div>
          </div>
          <p className="pe-hint">The article becomes visible on the site once its status is not “Draft” and the publish date/time has passed.</p>
        </div>

        {err && <div style={{ color: '#c0392b', fontSize: 13, margin: '4px 0 14px' }}>{err}</div>}
        <button className="pe-save" onClick={save} disabled={saving}>{saving ? 'Saving…' : mode === 'create' ? 'Create Insight' : 'Save Changes'}</button>
      </div>
    </div>
  )
}