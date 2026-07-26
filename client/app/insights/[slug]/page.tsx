import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { dbConnect } from '../../lib/mongodb'
import BlogPost, { liveFilter } from '../../models/BlogPost'

export const revalidate = 300
type Params = Promise<{ slug: string }>
const BLUE = '#00aaff', INK = '#111111'

async function getPost(slug: string) {
  await dbConnect()
  return BlogPost.findOne({ slug, ...liveFilter() }).lean()
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.seoTitle || `${post.title} | SHAAS Insights`,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { title: post.seoTitle || post.title, description: post.seoDescription || post.excerpt, images: post.coverImageUrl ? [post.coverImageUrl] : [], type: 'article' },
  }
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()
  const date = new Date(post.publishAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <main style={{ background: '#fff', color: INK, fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');
        .art{ max-width:720px; margin:0 auto; }
        .art-body{ font-size:19px; line-height:1.8; color:#1a1a1a; font-weight:300; }
        .art-body h2{ font-family:'Fraunces',serif; font-weight:800; font-size:30px; line-height:1.2; margin:44px 0 14px; color:${INK}; }
        .art-body h3{ font-family:'Fraunces',serif; font-weight:800; font-size:23px; line-height:1.25; margin:34px 0 12px; color:${INK}; }
        .art-body p{ margin:0 0 22px; }
        .art-body ul,.art-body ol{ margin:0 0 22px 22px; } .art-body li{ margin:0 0 10px; }
        .art-body blockquote{ border-left:3px solid ${BLUE}; margin:28px 0; padding:4px 0 4px 22px; font-family:'Fraunces',serif; font-style:italic; font-size:22px; color:#333; }
        .art-body a{ color:${BLUE}; text-underline-offset:3px; }
        @media (max-width:820px){ .art-pad{ padding-left:22px !important; padding-right:22px !important; } }
      `}</style>

      <header className="art art-pad" style={{ padding: '140px 24px 34px' }}>
        <a href="/insights" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>← All insights</a>
        {post.category && <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: BLUE, fontWeight: 500, margin: '26px 0 16px' }}>{post.category}</div>}
        <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 'clamp(30px,4.6vw,50px)', lineHeight: 1.1, letterSpacing: '-0.015em', margin: 0, color: INK }}>{post.title}</h1>
        <div style={{ marginTop: 20, fontSize: 13, color: '#999', letterSpacing: '0.03em' }}>{date}</div>
      </header>

      {post.coverImageUrl && (
        <div style={{ maxWidth: 960, margin: '18px auto 0', padding: '0 24px' }}>
          <img src={post.coverImageUrl} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      )}

      <article className="art art-pad" style={{ padding: '50px 24px 40px' }}>
        {post.excerpt && (
          <p style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: 23, lineHeight: 1.5, color: '#333', margin: '0 0 36px', paddingBottom: 32, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>{post.excerpt}</p>
        )}
        <div className="art-body" dangerouslySetInnerHTML={{ __html: post.body || '' }} />
      </article>

      <section className="art-pad" style={{ background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: 40, padding: '56px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 24, maxWidth: 380, lineHeight: 1.2 }}>Discuss this topic with our advisory team.</div>
          <a href="/contact" style={{ background: INK, color: '#fff', padding: '15px 30px', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none' }}>Schedule a Consultation ↗</a>
        </div>
      </section>
    </main>
  )
}