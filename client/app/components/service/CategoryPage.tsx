'use client'

import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, Quote } from 'lucide-react'
import type { Category, ServicePage } from '../../content/services'
import { niceTitle } from '../../content/services'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'
const DEFAULT_STEPS = ['Understand', 'Analyse', 'Design', 'Implement', 'Optimise']
const DEFAULT_ORDER: SectionKey[] = ['narrative', 'challenges', 'solve', 'services', 'who', 'industries', 'approach', 'why', 'expect', 'faqs']

export type SectionKey = 'narrative' | 'challenges' | 'solve' | 'services' | 'who' | 'industries' | 'approach' | 'why' | 'expect' | 'faqs'

export type NarrativeBlock = { heading: string; paras: string[]; list?: string[]; close?: string }

export type ChallengesBlock = { heading: string; lead: string[]; items: string[]; close?: string }
export type SolveItem = {
  quote: string
  paras: string[]
  list?: string[]
  close?: string
  link?: { label: string; href: string }
}
export type SolveBlock = { heading: string; lead: string[]; items: SolveItem[] }
export type IndustriesBlock = { heading: string; lead: string; items: string[]; close?: string }
export type ApproachBlock = { heading: string; lead?: string; steps: { name: string; text: string }[] }
export type WhyBlock = {
  heading: string
  lead?: string
  items: { title: string; text: string; list?: string[]; close?: string }[]
  /** Some pages express "why us" as a flat list of principles rather than cards. */
  list?: string[]
}
export type WhoBlock = { heading: string; lead?: string; items: { title: string; text: string }[] }
export type ExpectBlock = { heading: string; lead?: string; items: string[] }
export type FaqBlock = { heading: string; items: { q: string; a: string }[] }
export type ClosingBlock = { heading: string; paras: string[] }

export type CategoryPageProps = {
  category: Category
  intro: string[]
  subtitle: string
  services: ServicePage[]
  catIndex: number
  order?: SectionKey[]
  narrative?: NarrativeBlock
  challenges?: ChallengesBlock
  solve?: SolveBlock
  servicesHeading?: string
  servicesLead?: string
  who?: WhoBlock
  industries?: IndustriesBlock
  approach?: ApproachBlock
  why?: WhyBlock
  expect?: ExpectBlock
  faqs?: FaqBlock
  closing?: ClosingBlock
}

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const reveal = {
  initial: 'hidden' as const,
  whileInView: 'show' as const,
  viewport: { once: true, amount: 0.15 },
}

export default function CategoryPage({
  category, intro, subtitle, services,
  order, narrative, challenges, solve, servicesHeading, servicesLead,
  who, industries, approach, why, expect, faqs, closing,
}: CategoryPageProps) {
  const img = categoryHero[category.slug]
  const ACCENT = category.accent || BLUE
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const blocks: Partial<Record<SectionKey, ReactNode>> = {}

  if (narrative) blocks.narrative = (
    <motion.section className="cat-sec cat-tint" key="narrative" variants={stagger} {...reveal}>
      <div className="cat-wrap cat-narrative">
        <motion.h2 className="cat-h2" variants={rise}>{narrative.heading}</motion.h2>
        {narrative.paras.map((p, i) => (
          <motion.p key={i} className={i === 0 ? 'cat-narrative-lead' : 'cat-lead'} variants={rise}>{p}</motion.p>
        ))}
        {narrative.list && narrative.list.length > 0 && (
          <motion.ul className="cat-why-principles" variants={stagger}>
            {narrative.list.map((t) => (
              <motion.li key={t} variants={rise}>
                <span className="cat-why-tick"><Check size={12} /></span>{t}
              </motion.li>
            ))}
          </motion.ul>
        )}
        {narrative.close && <motion.p className="cat-lead" variants={rise}>{narrative.close}</motion.p>}
      </div>
    </motion.section>
  )

  if (challenges) blocks.challenges = (
    <motion.section className="cat-sec cat-tint" key="challenges" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">The Reality of Growth</div>
          <h2 className="cat-h2">{challenges.heading}</h2>
          {challenges.lead.map((t, i) => <p key={i} className="cat-lead">{t}</p>)}
        </motion.div>
        <motion.div className="cat-chal-grid" variants={stagger}>
          {challenges.items.map((t) => (
            <motion.div key={t} className="cat-chal-cell" variants={rise}>
              <ArrowRight size={14} /><span>{t}</span>
            </motion.div>
          ))}
        </motion.div>
        {challenges.close && <motion.p className="cat-chal-close" variants={rise}>{challenges.close}</motion.p>}
      </div>
    </motion.section>
  )

  if (solve) blocks.solve = (
    <motion.section className="cat-sec" key="solve" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">How We Help</div>
          <h2 className="cat-h2">{solve.heading}</h2>
          {solve.lead.map((t, i) => <p key={i} className="cat-lead">{t}</p>)}
        </motion.div>
        <div className="cat-solve-list">
          {solve.items.map((it) => (
            <motion.div key={it.quote} className="cat-solve-item" variants={rise}>
              <div className="cat-solve-qi">
                <Quote size={18} />
                <h3 className="cat-solve-q">&ldquo;{it.quote}&rdquo;</h3>
              </div>
              <div>
                {it.paras.map((p, i) => <p key={i} className="cat-solve-p">{p}</p>)}
                {it.list && it.list.length > 0 && (
                  <ul className="cat-solve-ul">{it.list.map((l) => <li key={l}>{l}</li>)}</ul>
                )}
                {it.close && <p className="cat-solve-close">{it.close}</p>}
                {it.link && (
                  <a className="cat-solve-link" href={it.link.href}>{it.link.label} <ArrowUpRight size={12} /></a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )

  blocks.services = (
    <motion.section className="cat-sec" key="services" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <div className="cat-services-head">
          <motion.div variants={rise}>
            <div className="cat-label">What We Offer</div>
            <h2 className="cat-h2">{servicesHeading ?? `Our ${category.name} Services`}</h2>
          </motion.div>
          <div className="cat-services-count">{services.length} services</div>
        </div>
        {servicesLead && <motion.p className="cat-lead" variants={rise}>{servicesLead}</motion.p>}
        <motion.div className="cat-grid" variants={stagger}>
          {services.map((s) => (
            <motion.a key={s.slug} href={s.url} className="cat-tile" variants={rise}>
              <div className="cat-tile-top">
                <span />
                <ArrowUpRight size={18} className="cat-tile-arrow" />
              </div>
              <div>
                <h3 className="cat-tile-title">{niceTitle(s.title)}</h3>
                <p className="cat-tile-sub">{s.subtitle}</p>
                <span className="cat-tile-more">Learn More <ArrowRight size={11} /></span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

  if (who) blocks.who = (
    <motion.section className="cat-sec" key="who" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">Who We Work With</div>
          <h2 className="cat-h2">{who.heading}</h2>
          {who.lead && <p className="cat-lead">{who.lead}</p>}
        </motion.div>
        <motion.div className="cat-why-grid" variants={stagger}>
          {who.items.map((w) => (
            <motion.div key={w.title} className="cat-why-cell" variants={rise}>
              <h3 className="cat-why-t">{w.title}</h3>
              <p className="cat-why-x">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

  if (industries) blocks.industries = (
    <motion.section className="cat-sec cat-tint" key="industries" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">Sector Experience</div>
          <h2 className="cat-h2">{industries.heading}</h2>
          <p className="cat-lead">{industries.lead}</p>
        </motion.div>
        <motion.div className="cat-ind-grid" variants={stagger}>
          {industries.items.map((t) => (
            <motion.span key={t} className="cat-ind-chip" variants={rise}>{t}</motion.span>
          ))}
        </motion.div>
        {industries.close && <motion.p className="cat-lead" variants={rise} style={{ marginTop: 28 }}>{industries.close}</motion.p>}
      </div>
    </motion.section>
  )

  blocks.approach = (
    <motion.section className="cat-sec" key="approach" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">Methodology</div>
          <h2 className="cat-h2">{approach?.heading ?? 'Our Advisory Approach'}</h2>
          {approach?.lead && <p className="cat-lead">{approach.lead}</p>}
        </motion.div>
        <motion.div className="cat-approach-grid" variants={stagger}>
          {(approach?.steps ?? DEFAULT_STEPS.map((n) => ({ name: n, text: '' }))).map((st, i) => (
            <motion.div key={st.name} className="cat-step" variants={rise}>
              <div className="cat-step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="cat-step-name">{st.name}</div>
              {st.text && <p className="cat-step-text">{st.text}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

  if (why) blocks.why = (
    <motion.section className="cat-sec cat-tint" key="why" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">The SHAAS Difference</div>
          <h2 className="cat-h2">{why.heading}</h2>
          {why.lead && <p className="cat-lead">{why.lead}</p>}
        </motion.div>
        {why.list && why.list.length > 0 && (
          <motion.ul className="cat-why-principles" variants={stagger}>
            {why.list.map((t) => (
              <motion.li key={t} variants={rise}>
                <span className="cat-why-tick"><Check size={12} /></span>{t}
              </motion.li>
            ))}
          </motion.ul>
        )}
        {why.items.length > 0 && (
        <motion.div className="cat-why-grid" variants={stagger}>
          {why.items.map((w) => (
            <motion.div key={w.title} className="cat-why-cell" variants={rise}>
              <h3 className="cat-why-t">{w.title}</h3>
              <p className="cat-why-x">{w.text}</p>
              {w.list && w.list.length > 0 && (
                <ul className="cat-why-ul">
                  {w.list.map((l) => <li key={l}><Check size={12} /> {l}</li>)}
                </ul>
              )}
              {w.close && <p className="cat-why-x" style={{ marginTop: 12 }}>{w.close}</p>}
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
    </motion.section>
  )

  if (expect) blocks.expect = (
    <motion.section className="cat-sec cat-expect" key="expect" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">Deliverables</div>
          <h2 className="cat-h2">{expect.heading}</h2>
          {expect.lead && <p className="cat-lead">{expect.lead}</p>}
        </motion.div>
        <motion.div className="cat-expect-grid" variants={stagger}>
          {expect.items.map((t) => (
            <motion.div key={t} className="cat-expect-cell" variants={rise}>
              <Check size={14} /><span>{t}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

  if (faqs) blocks.faqs = (
    <motion.section className="cat-sec" key="faqs" variants={stagger} {...reveal}>
      <div className="cat-wrap">
        <motion.div variants={rise}>
          <div className="cat-label">Questions</div>
          <h2 className="cat-h2">{faqs.heading}</h2>
        </motion.div>
        <div className="cat-faq-list">
          {faqs.items.map((f, i) => (
            <motion.div key={f.q} className="cat-faq-row" variants={rise}>
              <button className="cat-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                <span>{f.q}</span>
                {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p className="cat-faq-a">{f.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )

  const sequence = (order ?? DEFAULT_ORDER).filter((k) => blocks[k])

  return (
    <main className="cat">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .cat { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; cursor:pointer; transition:background .25s,color .25s; }
        .btn-light { background:#fff; color:${INK}; } .btn-light:hover { background:${ACCENT}; color:#fff; }
        .btn svg { transition:transform .2s; } .btn:hover svg { transform:translate(2px,-2px); }

        .cat-sec { padding:88px 64px; border-top:1px solid rgba(0,0,0,0.1); }
        .cat-tint { background:#fafafa; }
        .cat-wrap { max-width:72rem; margin:0 auto; }
        .cat-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:14px; }
        .cat-h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(26px,3.4vw,42px); line-height:1.1; margin:0; }
        .cat-lead { font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; margin:20px 0 0; max-width:46rem; }

        .cat-hero { position:relative; background:${INK}; color:#fff; overflow:hidden; }
        .cat-hero img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.3; }
        .cat-hero .veil { position:absolute; inset:0; background:linear-gradient(90deg,${INK} 30%,rgba(10,10,10,0.4) 100%); }
        .cat-hero-inner { position:relative; z-index:2; padding:150px 64px 112px; max-width:64rem; }
        .cat-eyebrow { display:flex; align-items:center; gap:12px; margin-bottom:32px; }
        .cat-eyebrow-link { display:inline-flex; align-items:center; gap:8px; font-size:10px; letter-spacing:0.35em; text-transform:uppercase; color:rgba(255,255,255,0.5); text-decoration:none; }
        .cat-eyebrow-link:hover { color:#fff; }
        .cat-eyebrow-rule { width:24px; height:1px; background:${ACCENT}; }
        .cat-h1 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(36px,6vw,72px); line-height:1.02; margin:0; }
        .cat-sub { font-family:'Fraunces',serif; font-weight:300; font-style:italic; font-size:clamp(18px,2.4vw,26px); color:rgba(255,255,255,0.75); max-width:42rem; margin:28px 0 40px; }
        .cat-accent-bar { position:relative; z-index:2; height:4px; background:${ACCENT}; }

        .cat-intro { padding:80px 64px; border-bottom:1px solid rgba(0,0,0,0.1); }
        .cat-intro-wrap { max-width:48rem; }
        .cat-intro-lead { font-family:'Fraunces',serif; font-weight:300; font-size:clamp(20px,2.4vw,26px); line-height:1.5; color:${INK}; margin:0 0 24px; }
        .cat-intro-p { font-weight:300; font-size:16px; line-height:1.75; color:#3a3a3a; margin:0 0 16px; }

        .cat-chal-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(0,0,0,0.09); border:1px solid rgba(0,0,0,0.09); margin-top:36px; }
        .cat-chal-cell { background:#fff; padding:20px 22px; display:flex; gap:12px; align-items:flex-start; font-size:14px; line-height:1.6; color:#3a3a3a; font-weight:300; }
        .cat-chal-cell svg { flex:0 0 auto; margin-top:3px; color:${ACCENT}; }
        .cat-chal-close { margin-top:32px; font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; max-width:52rem; }

        .cat-solve-list { margin-top:40px; border-top:1px solid rgba(0,0,0,0.1); }
        .cat-solve-item { display:grid; grid-template-columns:0.9fr 1.1fr; gap:40px; padding:40px 0; border-bottom:1px solid rgba(0,0,0,0.1); }
        .cat-solve-q { font-family:'Fraunces',serif; font-weight:300; font-style:italic; font-size:clamp(19px,2.1vw,24px); line-height:1.35; color:${INK}; margin:0; }
        .cat-solve-qi { display:flex; gap:12px; }
        .cat-solve-qi svg { flex:0 0 auto; color:${ACCENT}; opacity:0.5; }
        .cat-solve-p { font-weight:300; font-size:15px; line-height:1.8; color:#3a3a3a; margin:0 0 12px; }
        .cat-solve-ul { list-style:none; padding:0; margin:12px 0; display:flex; flex-wrap:wrap; gap:8px; }
        .cat-solve-ul li { font-size:12px; letter-spacing:0.05em; padding:6px 12px; border:1px solid rgba(0,0,0,0.12); color:#444; }
        .cat-solve-close { font-size:14px; font-weight:400; color:${INK}; margin:12px 0 0; }
        .cat-solve-link { display:inline-flex; align-items:center; gap:6px; margin-top:12px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:${ACCENT}; text-decoration:none; }
        .cat-solve-link:hover { color:${INK}; }

        .cat-services-head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:14px; gap:24px; }
        .cat-services-count { font-size:14px; color:#999; white-space:nowrap; }
        .cat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); margin-top:36px; }
        .cat-tile { background:#fff; padding:28px; min-height:190px; display:flex; flex-direction:column; justify-content:space-between; text-decoration:none; transition:background .3s; }
        .cat-tile:hover { background:${INK}; }
        .cat-tile-top { display:flex; align-items:flex-start; justify-content:space-between; }
        .cat-tile-arrow { color:#ccc; transition:color .2s,transform .2s; }
        .cat-tile:hover .cat-tile-arrow { color:#fff; transform:translate(2px,-2px); }
        .cat-tile-title { font-family:'Fraunces',serif; font-weight:800; font-size:20px; line-height:1.3; color:${INK}; transition:color .3s; margin:0; }
        .cat-tile-sub { font-weight:300; font-size:14px; color:#888; margin:8px 0 0; transition:color .3s; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .cat-tile:hover .cat-tile-title { color:#fff; }
        .cat-tile:hover .cat-tile-sub { color:rgba(255,255,255,0.6); }
        .cat-tile-more { display:inline-flex; align-items:center; gap:6px; font-size:9px; letter-spacing:0.25em; text-transform:uppercase; color:#ccc; margin-top:14px; transition:color .3s; }
        .cat-tile:hover .cat-tile-more { color:${ACCENT}; }

        .cat-ind-grid { display:flex; flex-wrap:wrap; gap:10px; margin-top:32px; }
        .cat-ind-chip { background:#fff; border:1px solid rgba(0,0,0,0.1); padding:12px 18px; font-size:13px; color:#3a3a3a; font-weight:300; }

        .cat-approach-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); margin-top:36px; }
        .cat-step { background:#fff; padding:28px 22px; }
        .cat-step-num { font-family:'Bebas Neue',sans-serif; font-size:32px; color:${ACCENT}; margin-bottom:8px; line-height:1; }
        .cat-step-name { font-family:'Fraunces',serif; font-weight:800; font-size:18px; }
        .cat-step-text { font-size:13px; line-height:1.7; color:#777; font-weight:300; margin:10px 0 0; }

        .cat-why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.1); margin-top:36px; }
        .cat-why-cell { background:#fff; padding:30px 26px; }
        .cat-why-t { font-family:'Fraunces',serif; font-weight:800; font-size:18px; margin:0 0 10px; }
        .cat-why-x { font-size:14px; line-height:1.75; color:#777; font-weight:300; margin:0; }
        .cat-why-ul { list-style:none; padding:0; margin:12px 0 0; display:flex; flex-direction:column; gap:7px; }
        .cat-why-ul li { display:flex; align-items:center; gap:8px; font-size:13px; font-weight:300; color:#444; }
        .cat-why-ul svg { flex:0 0 auto; color:${ACCENT}; }
        .cat-why-principles { list-style:none; padding:0; margin:36px 0 0; display:grid; grid-template-columns:repeat(2,1fr); gap:18px 40px; max-width:64rem; }
        .cat-why-principles li { display:flex; align-items:flex-start; gap:12px; font-size:15px; line-height:1.7; font-weight:300; color:#3a3a3a; }
        .cat-why-tick { flex:0 0 auto; margin-top:4px; width:18px; height:18px; border-radius:50%; background:${ACCENT}1f; display:flex; align-items:center; justify-content:center; color:${ACCENT}; }

        .cat-narrative { max-width:52rem; }
        .cat-narrative-lead { font-family:'Fraunces',serif; font-weight:300; font-size:clamp(19px,2.2vw,24px); line-height:1.55; color:${INK}; margin:24px 0 0; }

        .cat-expect { background:${INK}; color:#fff; }
        .cat-expect .cat-label { color:rgba(255,255,255,0.45); }
        .cat-expect .cat-h2 { color:#fff; }
        .cat-expect .cat-lead { color:rgba(255,255,255,0.6); }
        .cat-expect-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.12); margin-top:36px; }
        .cat-expect-cell { background:${INK}; padding:18px 20px; display:flex; gap:10px; align-items:center; font-size:13px; color:rgba(255,255,255,0.8); font-weight:300; }
        .cat-expect-cell svg { flex:0 0 auto; color:${ACCENT}; }

        .cat-faq-list { margin-top:36px; border-top:1px solid rgba(0,0,0,0.1); max-width:56rem; }
        .cat-faq-row { border-bottom:1px solid rgba(0,0,0,0.1); }
        .cat-faq-q { width:100%; background:none; border:none; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:24px; padding:24px 0; text-align:left; font-family:'Fraunces',serif; font-weight:800; font-size:17px; color:${INK}; }
        .cat-faq-q svg { flex:0 0 auto; color:${ACCENT}; }
        .cat-faq-a { font-size:15px; line-height:1.8; color:#666; font-weight:300; margin:0; padding-bottom:24px; max-width:48rem; }

        .cat-band { position:relative; padding:88px 64px; background:${INK}; color:#fff; overflow:hidden; }
        .cat-band-glow { position:absolute; inset:0; opacity:0.07; background:radial-gradient(circle at 85% 50%,${ACCENT},transparent 55%); }
        .cat-band-wrap { position:relative; max-width:72rem; margin:0 auto; }
        .cat-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,48px); line-height:1.05; max-width:38rem; margin:0 0 28px; }
        .cat-band p { font-weight:300; font-size:16px; line-height:1.8; color:rgba(255,255,255,0.65); max-width:44rem; margin:0 0 16px; }

        @media (max-width:900px){
          .cat-hero-inner{ padding:130px 24px 80px; }
          .cat-intro,.cat-sec,.cat-band{ padding-left:24px; padding-right:24px; }
          .cat-grid,.cat-why-grid,.cat-expect-grid,.cat-chal-grid,.cat-why-principles{ grid-template-columns:1fr; }
          .cat-approach-grid{ grid-template-columns:repeat(2,1fr); }
          .cat-solve-item{ grid-template-columns:1fr; gap:20px; }
          .cat-services-head{ flex-direction:column; align-items:flex-start; gap:8px; }
        }
      `}</style>

      <section className="cat-hero">
        {img && <img src={img} alt={category.name} />}
        <div className="veil" />
        <div className="cat-hero-inner">
          <div className="cat-eyebrow">
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

      {sequence.map((k) => blocks[k])}

      <section className="cat-band">
        <div className="cat-band-glow" />
        <div className="cat-band-wrap">
          <h2>{closing?.heading ?? "Let's discuss how we can support your business."}</h2>
          {closing?.paras.map((p, i) => <p key={i}>{p}</p>)}
          <a href="/contact" className="btn btn-light" style={{ marginTop: 16 }}>
            Schedule a Consultation <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  )
}
