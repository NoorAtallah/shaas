'use client'

import { ArrowUpRight, ArrowRight, Check, Phone, Mail } from 'lucide-react'
import type { ServicePage, Category } from '../../content/services'
import { niceTitle } from '../../content/services'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

type Related = { slug: string; title: string; url: string }

export default function InnerServicePage({
  page, category, related, index,
}: { page: ServicePage; category: Category; related: Related[]; index: number }) {
  const title = niceTitle(page.title)
  const img = categoryHero[category.slug]
  const num = String(index + 1).padStart(2, '0')

  return (
    <main className="svc">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .svc { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }

        .svc-hero { position:relative; background:${INK}; color:#fff; overflow:hidden; }
        .svc-hero-grid { display:grid; grid-template-columns:1.15fr 1fr; min-height:86vh; }
        .svc-hero-copy { display:flex; flex-direction:column; justify-content:center; padding:130px 64px 64px; position:relative; z-index:2; }
        .svc-eyebrow { display:flex; align-items:center; gap:12px; margin-bottom:32px; }
        .svc-eyebrow-num { font-family:'Bebas Neue',sans-serif; font-size:52px; line-height:1; color:rgba(255,255,255,0.15); }
        .svc-eyebrow-link { display:inline-flex; align-items:center; gap:8px; font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:rgba(255,255,255,0.5); text-decoration:none; transition:color .2s; }
        .svc-eyebrow-link:hover { color:#fff; }
        .svc-eyebrow-rule { width:24px; height:1px; background:${BLUE}; }
        .svc-h1 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(34px,5vw,68px); line-height:1.02; margin:0; }
        .svc-sub { font-family:'Fraunces',serif; font-weight:300; font-style:italic; font-size:clamp(18px,2vw,22px); color:rgba(255,255,255,0.7); max-width:36rem; margin:28px 0 0; }
        .svc-cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-top:40px; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; cursor:pointer; transition:background .25s,color .25s,border-color .25s; }
        .btn-light { background:#fff; color:${INK}; border:none; }
        .btn-light:hover { background:${BLUE}; color:#fff; }
        .btn-ghost { background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.25); }
        .btn-ghost:hover { border-color:#fff; }
        .btn svg { transition:transform .2s; }
        .btn:hover svg { transform:translate(2px,-2px); }
        .svc-hero-media { position:relative; min-height:100%; }
        .svc-hero-media img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .svc-hero-media .veil { position:absolute; inset:0; background:linear-gradient(90deg,${INK} 0%,transparent 35%),linear-gradient(0deg,rgba(10,10,10,0.4),transparent 60%); }
        .svc-hero-loc { position:absolute; bottom:24px; right:24px; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:rgba(255,255,255,0.6); }
        .svc-accent-bar { height:4px; width:100%; background:${BLUE}; position:relative; z-index:2; }

        .svc-body { padding:80px 64px 96px; }
        .svc-body-wrap { max-width:72rem; margin:0 auto; display:grid; grid-template-columns:1fr 320px; gap:64px; }
        .svc-section { margin-top:56px; }
        .svc-section:first-child { margin-top:0; }
        .svc-sec-head { display:flex; align-items:baseline; gap:16px; margin-bottom:24px; }
        .svc-sec-num { font-family:'Bebas Neue',sans-serif; letter-spacing:0.15em; font-size:14px; color:${BLUE}; }
        .svc-h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(22px,3vw,32px); line-height:1.2; margin:0; }
        .svc-p { font-weight:300; font-size:16px; line-height:1.75; color:#3a3a3a; margin:0 0 16px; }
        .svc-quote { font-family:'Fraunces',serif; font-style:italic; font-weight:300; font-size:20px; color:${INK}; padding-left:20px; border-left:2px solid ${BLUE}; margin:28px 0 12px; }
        .svc-list { list-style:none; padding:0; margin:24px 0; display:grid; grid-template-columns:1fr 1fr; gap:12px 32px; }
        .svc-list li { display:flex; align-items:flex-start; gap:12px; font-size:15px; font-weight:300; color:#2a2a2a; }
        .svc-check { margin-top:5px; flex-shrink:0; width:16px; height:16px; border-radius:50%; background:rgba(0,170,255,0.1); display:flex; align-items:center; justify-content:center; }

        .svc-aside { position:sticky; top:96px; align-self:start; display:flex; flex-direction:column; gap:24px; }
        .svc-card { border:1px solid rgba(0,0,0,0.1); padding:24px; }
        .svc-card-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:16px; }
        .svc-rel { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.06); font-size:14px; color:#333; text-decoration:none; }
        .svc-rel:last-child { border-bottom:none; }
        .svc-rel:hover { color:${INK}; }
        .svc-rel svg { color:#ccc; flex-shrink:0; transition:color .2s,transform .2s; }
        .svc-rel:hover svg { color:${BLUE}; transform:translateX(2px); }
        .svc-cta-card { background:${INK}; color:#fff; padding:24px; }
        .svc-cta-card h3 { font-family:'Fraunces',serif; font-weight:800; font-size:20px; margin:0 0 12px; }
        .svc-cta-card p { font-size:14px; font-weight:300; color:rgba(255,255,255,0.7); margin:0 0 20px; }
        .svc-cta-card .mini { display:flex; align-items:center; justify-content:space-between; background:#fff; color:${INK}; padding:12px 16px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; transition:background .25s,color .25s; }
        .svc-cta-card .mini:hover { background:${BLUE}; color:#fff; }
        .svc-contact { display:flex; align-items:center; gap:8px; font-size:14px; font-weight:300; color:rgba(255,255,255,0.8); text-decoration:none; margin-top:14px; }
        .svc-contact:hover { color:#fff; }

        .svc-band { position:relative; padding:80px 64px; background:${INK}; color:#fff; overflow:hidden; }
        .svc-band-glow { position:absolute; inset:0; opacity:0.07; background:radial-gradient(circle at 85% 50%,${BLUE},transparent 55%); }
        .svc-band-wrap { position:relative; max-width:72rem; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; }
        .svc-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,48px); line-height:1.05; max-width:36rem; margin:0; }

        @media (max-width:900px){
          .svc-hero-grid{ grid-template-columns:1fr; }
          .svc-hero-copy{ padding:120px 24px 56px; }
          .svc-hero-media{ min-height:300px; order:-1; }
          .svc-body{ padding:56px 24px 72px; }
          .svc-body-wrap{ grid-template-columns:1fr; gap:48px; }
          .svc-aside{ position:static; }
          .svc-list{ grid-template-columns:1fr; }
          .svc-band{ padding:64px 24px; }
        }
      `}</style>

      <section className="svc-hero">
        <div className="svc-hero-grid">
          <div className="svc-hero-copy">
            <div className="svc-eyebrow">
              <span className="svc-eyebrow-num">{num}</span>
              <a href={`/${category.slug}`} className="svc-eyebrow-link">
                <span className="svc-eyebrow-rule" />{category.name}
              </a>
            </div>
            <h1 className="svc-h1">{title}</h1>
            <p className="svc-sub">{page.subtitle}</p>
            <div className="svc-cta-row">
              <a href="/contact" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={14} /></a>
              <a href={`/${category.slug}`} className="btn btn-ghost">All {category.name}</a>
            </div>
          </div>
          <div className="svc-hero-media">
            {img && <img src={img} alt={title} />}
            <div className="veil" />
            <div className="svc-hero-loc">Abu Dhabi · UAE</div>
          </div>
        </div>
        <div className="svc-accent-bar" />
      </section>

      <section className="svc-body">
        <div className="svc-body-wrap">
          <div>
            {page.sections.map((sec, i) => (
              <div className="svc-section" key={i}>
                {sec.heading && (
                  <div className="svc-sec-head">
                    <span className="svc-sec-num">{String(i).padStart(2, '0')}</span>
                    <h2 className="svc-h2">{sec.heading}</h2>
                  </div>
                )}
                {sec.blocks.map((b, j) =>
                  b.type === 'p' ? (
                    <p key={j} className={b.text.startsWith('"') ? 'svc-quote' : 'svc-p'}>{b.text}</p>
                  ) : (
                    <ul key={j} className="svc-list">
                      {b.items.map((it, k) => (
                        <li key={k}><span className="svc-check"><Check size={11} color={BLUE} /></span>{it}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </div>

          <aside className="svc-aside">
            {related.length > 0 && (
              <div className="svc-card">
                <div className="svc-card-label">Related Services</div>
                {related.map((r) => (
                  <a key={r.slug} href={r.url} className="svc-rel">{niceTitle(r.title)} <ArrowRight size={14} /></a>
                ))}
              </div>
            )}
            <div className="svc-cta-card">
              <h3>Speak with an advisor</h3>
              <p>Discuss your challenges with the SHAAS advisory team.</p>
              <a href="/contact" className="mini">Get in touch <ArrowUpRight size={14} /></a>
              <a href="tel:+971568474217" className="svc-contact"><Phone size={13} /> +971 56 847 4217</a>
              <a href="mailto:info@shaas.ae" className="svc-contact"><Mail size={13} /> info@shaas.ae</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="svc-band">
        <div className="svc-band-glow" />
        <div className="svc-band-wrap">
          <h2>Ready to discuss your business challenges?</h2>
          <a href="/contact" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={14} /></a>
        </div>
      </section>
    </main>
  )
}