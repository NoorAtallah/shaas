'use client'

import { ArrowUpRight } from 'lucide-react'
import { categories, getServices } from '../../content/services'
import mains from '../../content/mains.json'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'
type MainEntry = { subtitle: string; intro: string[] }
const M = mains as Record<string, MainEntry>

export default function ServicesIndex() {
  const services = M['services']
  return (
    <main className="six">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .six { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; cursor:pointer; transition:background .25s,color .25s; }
        .btn-light { background:#fff; color:${INK}; } .btn-light:hover { background:${BLUE}; color:#fff; }
        .btn svg { transition:transform .2s; } .btn:hover svg { transform:translate(2px,-2px); }

        .six-hero { position:relative; background:${INK}; color:#fff; padding:170px 64px 120px; overflow:hidden; }
        .six-hero-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.35; }
        .six-hero-veil { position:absolute; inset:0; background:linear-gradient(90deg,${INK} 20%,rgba(10,10,10,0.55) 70%,rgba(10,10,10,0.75) 100%),linear-gradient(0deg,${INK},transparent 55%); }
        .six-hero-glow { position:absolute; inset:0; opacity:0.10; background:radial-gradient(circle at 85% 15%,${BLUE},transparent 50%); }
        .six-hero-bar { position:absolute; left:0; bottom:0; height:4px; width:100%; background:${BLUE}; }
        .six-hero-inner { position:relative; z-index:2; max-width:64rem; }
        .six-eyebrow { font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:24px; }
        .six-h1 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(34px,4.6vw,58px); line-height:1.05; margin:0; max-width:20ch; }
        .six-hero-p { font-weight:300; font-size:clamp(17px,1.8vw,20px); color:rgba(255,255,255,0.7); max-width:46rem; margin:32px 0 0; line-height:1.7; }

        .six-intro { padding:56px 64px; border-bottom:1px solid rgba(0,0,0,0.1); }
        .six-intro-wrap { max-width:48rem; }
        .six-intro-p { font-weight:300; font-size:16px; line-height:1.75; color:#3a3a3a; margin:0 0 16px; }

        .six-cards { padding:80px 64px; }
        .six-cards-wrap { max-width:72rem; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:32px; }
        .six-card { position:relative; overflow:hidden; border:1px solid rgba(0,0,0,0.1); min-height:300px; display:flex; flex-direction:column; text-decoration:none; }
        .six-card-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity .5s; }
        .six-card:hover .six-card-img { opacity:1; }
        .six-card-veil { position:absolute; inset:0; background:${INK}; opacity:0; transition:opacity .5s; }
        .six-card:hover .six-card-veil { opacity:0.8; }
        .six-card-inner { position:relative; z-index:2; padding:32px; display:flex; flex-direction:column; height:100%; }
        .six-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
        .six-card-num { font-family:'Bebas Neue',sans-serif; font-size:36px; color:${BLUE}; }
        .six-card-arrow { color:#ccc; transition:color .2s,transform .2s; }
        .six-card:hover .six-card-arrow { color:#fff; transform:translate(4px,-4px); }
        .six-card-title { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(22px,2.6vw,30px); line-height:1.2; color:${INK}; transition:color .3s; }
        .six-card:hover .six-card-title { color:#fff; }
        .six-card-sub { font-weight:300; font-size:15px; color:#666; max-width:28rem; margin:12px 0 0; transition:color .3s; }
        .six-card:hover .six-card-sub { color:rgba(255,255,255,0.7); }
        .six-card-count { margin-top:auto; padding-top:24px; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#999; transition:color .3s; }
        .six-card:hover .six-card-count { color:rgba(255,255,255,0.6); }
        .six-card-bar { position:relative; z-index:2; height:4px; background:${BLUE}; }

        .six-band { position:relative; padding:80px 64px; background:${INK}; color:#fff; overflow:hidden; }
        .six-band-glow { position:absolute; inset:0; opacity:0.07; background:radial-gradient(circle at 85% 50%,${BLUE},transparent 55%); }
        .six-band-wrap { position:relative; max-width:72rem; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; }
        .six-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,48px); line-height:1.05; max-width:36rem; margin:0; }

        @media (max-width:900px){
          .six-hero{ padding:130px 24px 80px; }
          .six-intro,.six-cards,.six-band{ padding-left:24px; padding-right:24px; }
          .six-cards-wrap{ grid-template-columns:1fr; }
        }
      `}</style>

      <section className="six-hero">
        <img className="six-hero-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85" alt="SHAAS advisory" />
        <div className="six-hero-veil" />
        <div className="six-hero-glow" />
        <div className="six-hero-inner">
          <div className="six-eyebrow">Services</div>
          <h1 className="six-h1">Integrated Advisory Solutions to Help Businesses Grow, Transform, and Create Long-Term Value</h1>
          <p className="six-hero-p">{services?.intro?.[0]}</p>
        </div>
        <div className="six-hero-bar" />
      </section>

      <section className="six-intro">
        <div className="six-intro-wrap">
          {services?.intro?.slice(1).map((t, i) => (
            <p key={i} className="six-intro-p">{t}</p>
          ))}
        </div>
      </section>

      <section className="six-cards">
        <div className="six-cards-wrap">
          {categories.map((c, i) => {
            const count = getServices(c.slug).length
            const sub = M[c.slug]?.subtitle ?? c.tagline
            return (
              <a key={c.slug} href={`/${c.slug}`} className="six-card">
                <img className="six-card-img" src={categoryHero[c.slug]} alt={c.name} />
                <div className="six-card-veil" />
                <div className="six-card-inner">
                  <div className="six-card-top">
                    <span className="six-card-num">0{i + 1}</span>
                    <ArrowUpRight size={22} className="six-card-arrow" />
                  </div>
                  <h2 className="six-card-title">{c.name}</h2>
                  <p className="six-card-sub">{sub}</p>
                  <div className="six-card-count">{count} Services</div>
                </div>
                <div className="six-card-bar" />
              </a>
            )
          })}
        </div>
      </section>

      <section className="six-band">
        <div className="six-band-glow" />
        <div className="six-band-wrap">
          <h2>Ready to discuss your business challenges?</h2>
          <a href="/contact" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={14} /></a>
        </div>
      </section>
    </main>
  )
}