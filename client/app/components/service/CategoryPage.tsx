'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Category, ServicePage } from '../../content/services'
import { niceTitle } from '../../content/services'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'
const STEPS = ['Understand', 'Analyse', 'Design', 'Implement', 'Optimise']

export default function CategoryPage({
  category, intro, subtitle, services, catIndex,
}: { category: Category; intro: string[]; subtitle: string; services: ServicePage[]; catIndex: number }) {
  const img = categoryHero[category.slug]
  const num = String(catIndex + 1).padStart(2, '0')

  return (
    <main className="cat">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .cat { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; cursor:pointer; transition:background .25s,color .25s; }
        .btn-light { background:#fff; color:${INK}; } .btn-light:hover { background:${BLUE}; color:#fff; }
        .btn svg { transition:transform .2s; } .btn:hover svg { transform:translate(2px,-2px); }

        .cat-hero { position:relative; background:${INK}; color:#fff; overflow:hidden; }
        .cat-hero img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.3; }
        .cat-hero .veil { position:absolute; inset:0; background:linear-gradient(90deg,${INK} 30%,rgba(10,10,10,0.4) 100%); }
        .cat-hero-inner { position:relative; z-index:2; padding:150px 64px 112px; max-width:64rem; }
        .cat-eyebrow { display:flex; align-items:center; gap:12px; margin-bottom:32px; }
        .cat-eyebrow-num { font-family:'Bebas Neue',sans-serif; font-size:52px; line-height:1; color:rgba(255,255,255,0.15); }
        .cat-eyebrow-link { display:inline-flex; align-items:center; gap:8px; font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:rgba(255,255,255,0.5); text-decoration:none; }
        .cat-eyebrow-link:hover { color:#fff; }
        .cat-eyebrow-rule { width:24px; height:1px; background:${BLUE}; }
        .cat-h1 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(36px,6vw,72px); line-height:1.02; margin:0; }
        .cat-sub { font-family:'Fraunces',serif; font-weight:300; font-style:italic; font-size:clamp(18px,2.4vw,26px); color:rgba(255,255,255,0.75); max-width:42rem; margin:28px 0 40px; }
        .cat-accent-bar { position:relative; z-index:2; height:4px; background:${BLUE}; }

        .cat-intro { padding:80px 64px; border-bottom:1px solid rgba(0,0,0,0.1); }
        .cat-intro-wrap { max-width:48rem; }
        .cat-intro-lead { font-family:'Fraunces',serif; font-weight:300; font-size:clamp(20px,2.4vw,26px); line-height:1.5; color:${INK}; margin:0 0 24px; }
        .cat-intro-p { font-weight:300; font-size:16px; line-height:1.75; color:#3a3a3a; margin:0 0 16px; }

        .cat-services { padding:80px 64px; }
        .cat-services-wrap { max-width:72rem; margin:0 auto; }
        .cat-services-head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:40px; }
        .cat-services-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:12px; }
        .cat-services-title { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(26px,3.4vw,40px); margin:0; }
        .cat-services-count { font-size:14px; color:#999; }
        .cat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); }
        .cat-tile { background:#fff; padding:28px; min-height:190px; display:flex; flex-direction:column; justify-content:space-between; text-decoration:none; transition:background .3s; }
        .cat-tile:hover { background:${INK}; }
        .cat-tile-top { display:flex; align-items:flex-start; justify-content:space-between; }
        .cat-tile-num { font-family:'Bebas Neue',sans-serif; letter-spacing:0.15em; font-size:14px; color:${BLUE}; }
        .cat-tile-arrow { color:#ccc; transition:color .2s,transform .2s; }
        .cat-tile:hover .cat-tile-arrow { color:#fff; transform:translate(2px,-2px); }
        .cat-tile-title { font-family:'Fraunces',serif; font-weight:800; font-size:20px; line-height:1.3; color:${INK}; transition:color .3s; }
        .cat-tile:hover .cat-tile-title { color:#fff; }
        .cat-tile-sub { font-weight:300; font-size:14px; color:#888; margin:8px 0 0; transition:color .3s; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .cat-tile:hover .cat-tile-sub { color:rgba(255,255,255,0.6); }

        .cat-approach { padding:64px; border-top:1px solid rgba(0,0,0,0.1); background:#fafafa; }
        .cat-approach-wrap { max-width:72rem; margin:0 auto; }
        .cat-approach-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:32px; }
        .cat-approach-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:32px; }
        .cat-step-num { font-family:'Bebas Neue',sans-serif; font-size:32px; color:${BLUE}; margin-bottom:8px; }
        .cat-step-name { font-family:'Fraunces',serif; font-weight:800; font-size:18px; }

        .cat-band { position:relative; padding:80px 64px; background:${INK}; color:#fff; overflow:hidden; }
        .cat-band-glow { position:absolute; inset:0; opacity:0.07; background:radial-gradient(circle at 85% 50%,${BLUE},transparent 55%); }
        .cat-band-wrap { position:relative; max-width:72rem; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; }
        .cat-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,48px); line-height:1.05; max-width:36rem; margin:0; }

        @media (max-width:900px){
          .cat-hero-inner{ padding:130px 24px 80px; }
          .cat-intro,.cat-services,.cat-approach,.cat-band{ padding-left:24px; padding-right:24px; }
          .cat-grid{ grid-template-columns:1fr; }
          .cat-approach-grid{ grid-template-columns:repeat(2,1fr); }
          .cat-services-head{ flex-direction:column; align-items:flex-start; gap:8px; }
        }
      `}</style>

      <section className="cat-hero">
        {img && <img src={img} alt={category.name} />}
        <div className="veil" />
        <div className="cat-hero-inner">
          <div className="cat-eyebrow">
            <span className="cat-eyebrow-num">{num}</span>
            <a href="/services" className="cat-eyebrow-link"><span className="cat-eyebrow-rule" /> Services</a>
          </div>
          <h1 className="cat-h1">{category.name}</h1>
          <p className="cat-sub">{subtitle}</p>
          <a href="/contact" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={14} /></a>
        </div>
        <div className="cat-accent-bar" />
      </section>

      <section className="cat-intro">
        <div className="cat-intro-wrap">
          {intro.map((t, i) => (
            <p key={i} className={i === 0 ? 'cat-intro-lead' : 'cat-intro-p'}>{t}</p>
          ))}
        </div>
      </section>

      <section className="cat-services">
        <div className="cat-services-wrap">
          <div className="cat-services-head">
            <div>
              <div className="cat-services-label">What We Offer</div>
              <h2 className="cat-services-title">Our {category.name} Services</h2>
            </div>
            <div className="cat-services-count">{services.length} services</div>
          </div>
          <div className="cat-grid">
            {services.map((s, i) => (
              <a key={s.slug} href={s.url} className="cat-tile">
                <div className="cat-tile-top">
                  <span className="cat-tile-num">{String(i + 1).padStart(2, '0')}</span>
                  <ArrowUpRight size={18} className="cat-tile-arrow" />
                </div>
                <div>
                  <h3 className="cat-tile-title">{niceTitle(s.title)}</h3>
                  <p className="cat-tile-sub">{s.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cat-approach">
        <div className="cat-approach-wrap">
          <div className="cat-approach-label">Our Approach</div>
          <div className="cat-approach-grid">
            {STEPS.map((st, i) => (
              <div key={st}>
                <div className="cat-step-num">0{i + 1}</div>
                <div className="cat-step-name">{st}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cat-band">
        <div className="cat-band-glow" />
        <div className="cat-band-wrap">
          <h2>Let&apos;s discuss how we can support your business.</h2>
          <a href="/contact" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={14} /></a>
        </div>
      </section>
    </main>
  )
}