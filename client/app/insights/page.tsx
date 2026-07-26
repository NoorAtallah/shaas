import type { Metadata } from 'next'
import { dbConnect } from '../lib/mongodb'
import BlogPost, { liveFilter } from '../models/BlogPost'

export const metadata: Metadata = {
  title: 'Insights & Business Knowledge | SHAAS Consulting UAE',
  description: 'Practical insights on business growth, legal developments, financial management, organisational performance, and leadership from SHAAS.',
  alternates: { canonical: '/insights' },
}

export const revalidate = 300
const BLUE = '#00aaff', INK = '#111111'

type Card = { slug: string; title: string; excerpt: string; coverImageUrl?: string; category?: string; publishAt: string }
const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function InsightsPage() {
  await dbConnect()
  const docs = await BlogPost.find(liveFilter()).sort({ publishAt: -1 }).limit(60).lean()
  const posts: Card[] = docs.map((d) => ({
    slug: d.slug, title: d.title, excerpt: d.excerpt ?? '',
    coverImageUrl: d.coverImageUrl, category: d.category, publishAt: new Date(d.publishAt).toISOString(),
  }))
  const [lead, ...rest] = posts

  return (
    <main style={{ background: '#fff', color: INK, fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');
        .in-lead:hover .in-lead-title{ color:${BLUE}; }
        .in-lead img,.in-cell img{ transition:transform .7s ease; }
        .in-lead:hover img,.in-cell:hover img{ transform:scale(1.03); }
        .in-cell:hover .in-cell-title{ color:${BLUE}; }
        @media (max-width:900px){
          .in-pad{ padding-left:22px !important; padding-right:22px !important; }
          .in-lead{ grid-template-columns:1fr !important; }
          .in-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>

      <header className="in-pad" style={{ padding: '150px 64px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 26, height: 2, background: BLUE }} />
          <span style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Insights &amp; Knowledge Centre</span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0, color: INK }}>
          Business Insights
        </h1>
        <p style={{ maxWidth: 620, marginTop: 22, fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: '#555' }}>
          Practical perspectives on growth, finance, legal developments, organisational performance, and leadership — from the SHAAS advisory team.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="in-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 64px 120px', color: '#888', fontWeight: 300, fontSize: 17 }}>
          New insights are being published soon. Please check back shortly.
        </div>
      ) : (
        <div className="in-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '30px 64px 110px' }}>
          {lead && (
            <a href={`/insights/${lead.slug}`} className="in-lead" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center', textDecoration: 'none', color: INK, borderTop: `2px solid ${INK}`, paddingTop: 40, marginBottom: 72 }}>
              <div style={{ aspectRatio: '16/11', overflow: 'hidden', background: '#f2f2f2' }}>
                {lead.coverImageUrl && <img src={lead.coverImageUrl} alt={lead.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  <span style={{ color: BLUE, fontWeight: 500 }}>Featured</span>
                  {lead.category && <span style={{ color: '#aaa' }}>· {lead.category}</span>}
                </div>
                <h2 className="in-lead-title" style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.12, margin: 0, transition: 'color .2s' }}>{lead.title}</h2>
                {lead.excerpt && <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.7, color: '#555', margin: '18px 0 0', maxWidth: 460 }}>{lead.excerpt}</p>}
                <div style={{ marginTop: 22, fontSize: 12, letterSpacing: '0.05em', color: '#999' }}>{fmt(lead.publishAt)}</div>
              </div>
            </a>
          )}

          {rest.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 34px' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999' }}>More Insights</span>
                <span style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.1)' }} />
              </div>
              <div className="in-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '56px 40px' }}>
                {rest.map((p) => (
                  <a key={p.slug} href={`/insights/${p.slug}`} className="in-cell" style={{ textDecoration: 'none', color: INK, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#f2f2f2', marginBottom: 20 }}>
                      {p.coverImageUrl && <img src={p.coverImageUrl} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    </div>
                    {p.category && <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, marginBottom: 10, fontWeight: 500 }}>{p.category}</div>}
                    <h3 className="in-cell-title" style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 21, lineHeight: 1.25, margin: 0, color: INK, transition: 'color .2s' }}>{p.title}</h3>
                    {p.excerpt && <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.65, color: '#666', margin: '12px 0 0' }}>{p.excerpt}</p>}
                    <div style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>{fmt(p.publishAt)}</div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </main>
  )
}