'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import { categories, getServices } from '../../content/services'
import mains from '../../content/mains.json'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

type Pillar = { tagline: string; paras: string[]; cta: string }
type ServicesEntry = {
  subtitle?: string
  intro?: string[]
  pillarsHeading?: string
  pillarsSubtitle?: string
  pillarsLead?: string
  pillars?: Record<string, Pillar>
  challenges?: { heading: string; subtitle?: string; lead?: string[]; items: { title: string; paras: string[] }[] }
  approach?: { heading: string; subtitle?: string; lead?: string; steps: { name: string; text: string }[] }
  who?: { heading: string; subtitle?: string; lead?: string; items: { title: string; text: string }[] }
  industries?: { heading: string; subtitle?: string; lead?: string; items: string[] }
  why?: { heading: string; subtitle?: string; items: { title: string; text: string }[] }
  closing?: { eyebrow?: string; heading: string; paras?: string[]; cta?: string }
}

const M = mains as unknown as Record<string, ServicesEntry & { subtitle: string }>

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const reveal = { initial: 'hidden' as const, whileInView: 'show' as const, viewport: { once: true, amount: 0.15 } }

export default function ServicesIndex() {
  const s = M['services'] as ServicesEntry
  const { challenges, approach, who, industries, why, closing, pillars } = s

  return (
    <main className="six">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .six { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; cursor:pointer; transition:background .25s,color .25s; }
        .btn-light { background:#fff; color:${INK}; } .btn-light:hover { background:${BLUE}; color:#fff; }
        .btn svg { transition:transform .2s; } .btn:hover svg { transform:translate(2px,-2px); }

        .six-sec { padding:88px 64px; border-top:1px solid rgba(0,0,0,0.1); }
        .six-tint { background:#fafafa; }
        .six-wrap { max-width:72rem; margin:0 auto; }
        .six-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:14px; }
        .six-h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(26px,3.4vw,42px); line-height:1.12; margin:0; max-width:26ch; }
        .six-lead { font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; margin:20px 0 0; max-width:46rem; }

        .six-hero { position:relative; background:${INK}; color:#fff; padding:170px 64px 120px; overflow:hidden; }
        .six-hero-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.35; }
        .six-hero-veil { position:absolute; inset:0; background:linear-gradient(90deg,${INK} 20%,rgba(10,10,10,0.55) 70%,rgba(10,10,10,0.75) 100%),linear-gradient(0deg,${INK},transparent 55%); }
        .six-hero-glow { position:absolute; inset:0; opacity:0.10; background:radial-gradient(circle at 85% 15%,${BLUE},transparent 50%); }
        .six-hero-bar { position:absolute; left:0; bottom:0; height:4px; width:100%; background:${BLUE}; }
        .six-hero-inner { position:relative; z-index:2; max-width:64rem; }
        .six-eyebrow { font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:24px; }
        .six-h1 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(34px,4.6vw,58px); line-height:1.05; margin:0; max-width:20ch; }
        .six-hero-p { font-weight:300; font-size:clamp(17px,1.8vw,20px); color:rgba(255,255,255,0.7); max-width:46rem; margin:32px 0 0; line-height:1.7; }

        .six-intro { padding:64px; border-bottom:1px solid rgba(0,0,0,0.1); }
        .six-intro-wrap { max-width:48rem; }
        .six-intro-p { font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; margin:0 0 16px; }

        /* pillar detail rows */
        .six-pillars { margin-top:48px; border-top:1px solid rgba(0,0,0,0.1); }
        .six-pillar { display:grid; grid-template-columns:0.85fr 1.15fr; gap:48px; padding:48px 0; border-bottom:1px solid rgba(0,0,0,0.1); }
        .six-pillar-media { position:relative; min-height:220px; overflow:hidden; background:${INK}; }
        .six-pillar-media img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.55; transition:opacity .5s, transform .8s; }
        .six-pillar:hover .six-pillar-media img { opacity:.75; transform:scale(1.04); }
        .six-pillar-accent { position:absolute; left:0; bottom:0; height:4px; width:100%; }
        .six-pillar-title { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(24px,2.8vw,32px); line-height:1.15; margin:0; }
        .six-pillar-tag { font-family:'Fraunces',serif; font-weight:300; font-style:italic; font-size:17px; color:#666; margin:10px 0 20px; }
        .six-pillar-p { font-weight:300; font-size:15px; line-height:1.8; color:#3a3a3a; margin:0 0 12px; }
        .six-pillar-meta { display:flex; align-items:center; gap:20px; margin-top:22px; flex-wrap:wrap; }
        .six-pillar-link { display:inline-flex; align-items:center; gap:8px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; color:${INK}; border-bottom:1px solid transparent; padding-bottom:4px; transition:border-color .25s; }
        .six-pillar-link:hover { border-bottom-color:currentColor; }
        .six-pillar-count { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#aaa; }

        /* challenges */
        .six-chal { margin-top:40px; border-top:1px solid rgba(0,0,0,0.1); }
        .six-chal-row { display:grid; grid-template-columns:0.9fr 1.1fr; gap:40px; padding:34px 0; border-bottom:1px solid rgba(0,0,0,0.1); }
        .six-chal-t { font-family:'Fraunces',serif; font-weight:800; font-size:21px; line-height:1.3; margin:0; }
        .six-chal-p { font-weight:300; font-size:15px; line-height:1.8; color:#3a3a3a; margin:0 0 12px; }

        /* steps */
        .six-steps { display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); margin-top:36px; }
        .six-step { background:#fff; padding:28px 22px; }
        .six-step-num { font-family:'Bebas Neue',sans-serif; font-size:32px; color:${BLUE}; margin-bottom:8px; line-height:1; }
        .six-step-name { font-family:'Fraunces',serif; font-weight:800; font-size:18px; }
        .six-step-text { font-size:13px; line-height:1.7; color:#777; font-weight:300; margin:10px 0 0; }

        /* card grids */
        .six-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); margin-top:36px; }
        .six-cell { background:#fff; padding:30px 26px; }
        .six-cell h3 { font-family:'Fraunces',serif; font-weight:800; font-size:18px; margin:0 0 10px; }
        .six-cell p { font-size:14px; line-height:1.75; color:#777; font-weight:300; margin:0; }
        .six-tint .six-cell { background:#fff; }

        .six-chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:32px; }
        .six-chip { background:#fff; border:1px solid rgba(0,0,0,0.1); padding:12px 18px; font-size:13px; color:#3a3a3a; font-weight:300; display:flex; align-items:center; gap:8px; }
        .six-chip svg { color:${BLUE}; }

        .six-band { position:relative; padding:96px 64px; background:${INK}; color:#fff; overflow:hidden; }
        .six-band-glow { position:absolute; inset:0; opacity:0.07; background:radial-gradient(circle at 85% 50%,${BLUE},transparent 55%); }
        .six-band-wrap { position:relative; max-width:72rem; margin:0 auto; }
        .six-band-eyebrow { font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:${BLUE}; margin-bottom:20px; }
        .six-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,48px); line-height:1.08; max-width:34ch; margin:0 0 24px; }
        .six-band p { font-weight:300; font-size:16px; line-height:1.8; color:rgba(255,255,255,0.65); max-width:44rem; margin:0 0 28px; }

        @media (max-width:900px){
          .six-hero{ padding:130px 24px 80px; }
          .six-intro,.six-sec,.six-band{ padding-left:24px; padding-right:24px; }
          .six-pillar,.six-chal-row{ grid-template-columns:1fr; gap:24px; }
          .six-grid{ grid-template-columns:1fr; }
          .six-steps{ grid-template-columns:repeat(2,1fr); }
        }
      `}</style>

      {/* HERO */}
      <section className="six-hero">
        <img className="six-hero-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85" alt="SHAAS advisory" />
        <div className="six-hero-veil" />
        <div className="six-hero-glow" />
        <div className="six-hero-inner">
          <div className="six-eyebrow">Services</div>
          <h1 className="six-h1">{s.subtitle}</h1>
          <p className="six-hero-p">{s.intro?.[0]}</p>
        </div>
        <div className="six-hero-bar" />
      </section>

      <section className="six-intro">
        <div className="six-intro-wrap">
          {s.intro?.slice(1).map((t, i) => <p key={i} className="six-intro-p">{t}</p>)}
        </div>
      </section>

      {/* ADVISORY PILLARS */}
      <motion.section className="six-sec" variants={stagger} {...reveal}>
        <div className="six-wrap">
          <motion.div variants={rise}>
            <div className="six-label">{s.pillarsHeading ?? 'Our Advisory Services'}</div>
            <h2 className="six-h2">{s.pillarsSubtitle}</h2>
            {s.pillarsLead && <p className="six-lead">{s.pillarsLead}</p>}
          </motion.div>

          <div className="six-pillars">
            {categories.map((c) => {
              const p = pillars?.[c.slug]
              const count = getServices(c.slug).length
              return (
                <motion.div className="six-pillar" key={c.slug} variants={rise}>
                  <div className="six-pillar-media">
                    <img src={categoryHero[c.slug]} alt={c.name} />
                    <span className="six-pillar-accent" style={{ background: c.accent || BLUE }} />
                  </div>
                  <div>
                    <h3 className="six-pillar-title">{c.name}</h3>
                    <p className="six-pillar-tag">{p?.tagline ?? c.tagline}</p>
                    {p?.paras.map((t, i) => <p key={i} className="six-pillar-p">{t}</p>)}
                    <div className="six-pillar-meta">
                      <a href={`/${c.slug}`} className="six-pillar-link" style={{ color: c.accent || INK }}>
                        {p?.cta ?? `Explore ${c.name}`} <ArrowRight size={13} />
                      </a>
                      <span className="six-pillar-count">{count} Services</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* CHALLENGES */}
      {challenges && (
        <motion.section className="six-sec six-tint" variants={stagger} {...reveal}>
          <div className="six-wrap">
            <motion.div variants={rise}>
              <div className="six-label">{challenges.heading}</div>
              <h2 className="six-h2">{challenges.subtitle}</h2>
              {challenges.lead?.map((t, i) => <p key={i} className="six-lead">{t}</p>)}
            </motion.div>
            <div className="six-chal">
              {challenges.items.map((it) => (
                <motion.div className="six-chal-row" key={it.title} variants={rise}>
                  <h3 className="six-chal-t">{it.title}</h3>
                  <div>{it.paras.map((t, i) => <p key={i} className="six-chal-p">{t}</p>)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* APPROACH */}
      {approach && (
        <motion.section className="six-sec" variants={stagger} {...reveal}>
          <div className="six-wrap">
            <motion.div variants={rise}>
              <div className="six-label">{approach.heading}</div>
              <h2 className="six-h2">{approach.subtitle}</h2>
              {approach.lead && <p className="six-lead">{approach.lead}</p>}
            </motion.div>
            <motion.div className="six-steps" variants={stagger}>
              {approach.steps.map((st, i) => (
                <motion.div className="six-step" key={st.name} variants={rise}>
                  <div className="six-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="six-step-name">{st.name}</div>
                  <p className="six-step-text">{st.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* WHO WE SUPPORT */}
      {who && (
        <motion.section className="six-sec six-tint" variants={stagger} {...reveal}>
          <div className="six-wrap">
            <motion.div variants={rise}>
              <div className="six-label">{who.heading}</div>
              <h2 className="six-h2">{who.subtitle}</h2>
              {who.lead && <p className="six-lead">{who.lead}</p>}
            </motion.div>
            <motion.div className="six-grid" variants={stagger}>
              {who.items.map((w) => (
                <motion.div className="six-cell" key={w.title} variants={rise}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* INDUSTRIES */}
      {industries && (
        <motion.section className="six-sec" variants={stagger} {...reveal}>
          <div className="six-wrap">
            <motion.div variants={rise}>
              <div className="six-label">{industries.heading}</div>
              <h2 className="six-h2">{industries.subtitle}</h2>
              {industries.lead && <p className="six-lead">{industries.lead}</p>}
            </motion.div>
            <motion.div className="six-chips" variants={stagger}>
              {industries.items.map((t) => (
                <motion.span className="six-chip" key={t} variants={rise}>
                  <Check size={12} />{t}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* WHY SHAAS */}
      {why && (
        <motion.section className="six-sec six-tint" variants={stagger} {...reveal}>
          <div className="six-wrap">
            <motion.div variants={rise}>
              <div className="six-label">{why.heading}</div>
              <h2 className="six-h2">{why.subtitle}</h2>
            </motion.div>
            <motion.div className="six-grid" variants={stagger}>
              {why.items.map((w) => (
                <motion.div className="six-cell" key={w.title} variants={rise}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CLOSING */}
      <section className="six-band">
        <div className="six-band-glow" />
        <div className="six-band-wrap">
          {closing?.eyebrow && <div className="six-band-eyebrow">{closing.eyebrow}</div>}
          <h2>{closing?.heading ?? 'Ready to discuss your business challenges?'}</h2>
          {closing?.paras?.map((p, i) => <p key={i}>{p}</p>)}
          <a href="/contact" className="btn btn-light">
            {closing?.cta ?? 'Schedule a Consultation'} <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  )
}
