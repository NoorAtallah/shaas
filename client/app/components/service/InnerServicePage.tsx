'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check, Phone, Mail, Quote, Plus, Minus } from 'lucide-react'
import type { ServicePage, Category, Section } from '../../content/services'
import { niceTitle } from '../../content/services'
import { categoryHero } from '../../content/heroImages'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

type Related = { slug: string; title: string; url: string }

/* A top-level section is either a bare group header (no body) or a heading
   matching a known pillar pattern. Everything else is a child of the
   preceding top-level heading. */
const TOP_LEVEL =
  /^(what is|what are|why |who we (support|work)|industries we|business challenges|our .*(services|approach|process|methodology|solutions|capabilities)|how we|what you can expect|frequently asked|our services)/i

type Group = { heading: string | null; lead: Section['blocks']; children: Section[]; kind: Kind }
type Kind = 'default' | 'faq' | 'approach' | 'cards'

function kindOf(heading: string | null, children: Section[]): Kind {
  const h = (heading ?? '').toLowerCase()
  if (/frequently asked|faq/.test(h)) return 'faq'
  if (/approach|methodology|process|how we work|engagement/.test(h)) return 'approach'
  if (children.length > 0 && children.every((c) => c.blocks.length <= 1)) return 'cards'
  return 'default'
}

function buildGroups(sections: Section[]): { intro: Section['blocks']; groups: Group[]; closing: Section | null } {
  const list = [...sections]
  const intro = list.length && list[0].heading === null ? (list.shift() as Section).blocks : []
  // The final section is the closing narrative + CTA.
  const closing = list.length > 1 ? (list.pop() as Section) : null

  const groups: Group[] = []
  for (const sec of list) {
    const current = groups[groups.length - 1]
    // Once inside an FAQ block every following section is a question, even
    // though questions often start with "Why…" / "What is…".
    const inFaq = current && /frequently asked|faq/i.test(current.heading ?? '')
    const isTop =
      groups.length === 0 ||
      (!inFaq && (sec.blocks.length === 0 || TOP_LEVEL.test(sec.heading ?? '')))
    if (isTop) groups.push({ heading: sec.heading, lead: sec.blocks, children: [], kind: 'default' })
    else groups[groups.length - 1].children.push(sec)
  }
  for (const g of groups) g.kind = kindOf(g.heading, g.children)
  return { intro, groups, closing }
}

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const reveal = { initial: 'hidden' as const, whileInView: 'show' as const, viewport: { once: true, amount: 0.12 } }

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function Blocks({ blocks }: { blocks: Section['blocks'] }) {
  return (
    <>
      {blocks.map((b, j) =>
        b.type === 'p' ? (
          b.text.startsWith('"') || b.text.startsWith('“') ? (
            <p key={j} className="svc-quote">
              <Quote size={15} />
              <span>{b.text.replace(/^["“]|["”]$/g, '')}</span>
            </p>
          ) : (
            <p key={j} className="svc-p">{b.text}</p>
          )
        ) : (
          <ul key={j} className="svc-list">
            {b.items.map((it, k) => (
              <li key={k}>
                <span className="svc-check"><Check size={11} color={BLUE} /></span>
                {it}
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}

export default function InnerServicePage({
  page, category, related,
}: { page: ServicePage; category: Category; related: Related[]; index?: number }) {
  const title = niceTitle(page.title)
  const img = categoryHero[category.slug]
  const { intro, groups, closing } = useMemo(() => buildGroups(page.sections), [page.sections])
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <main className="svc">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .svc { background:#fff; color:${INK}; font-family:'DM Sans',sans-serif; }

        .svc-hero { position:relative; background:${INK}; color:#fff; overflow:hidden; }
        .svc-hero-grid { display:grid; grid-template-columns:1.15fr 1fr; min-height:80vh; }
        .svc-hero-copy { display:flex; flex-direction:column; justify-content:center; padding:130px 64px 64px; position:relative; z-index:2; }
        .svc-eyebrow { display:flex; align-items:center; gap:12px; margin-bottom:28px; }
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
        .svc-body-wrap { max-width:76rem; margin:0 auto; display:grid; grid-template-columns:1fr 320px; gap:64px; }

        .svc-lead { font-family:'Fraunces',serif; font-weight:300; font-size:clamp(19px,2.2vw,24px); line-height:1.55; color:${INK}; margin:0 0 20px; }
        .svc-lead-rest { font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; margin:0 0 16px; }

        .svc-group { margin-top:72px; padding-top:8px; }
        .svc-group:first-child { margin-top:0; }
        .svc-h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(24px,3vw,34px); line-height:1.2; margin:0 0 22px; scroll-margin-top:100px; }
        .svc-h2-rule { display:block; width:32px; height:2px; background:${BLUE}; margin-bottom:18px; }
        .svc-p { font-weight:300; font-size:16px; line-height:1.8; color:#3a3a3a; margin:0 0 16px; }
        .svc-quote { display:flex; gap:12px; font-family:'Fraunces',serif; font-style:italic; font-weight:300; font-size:19px; line-height:1.45; color:${INK}; padding-left:20px; border-left:2px solid ${BLUE}; margin:34px 0 14px; }
        .svc-quote svg { flex:0 0 auto; margin-top:5px; color:${BLUE}; opacity:.55; }
        .svc-list { list-style:none; padding:0; margin:22px 0; display:grid; grid-template-columns:1fr 1fr; gap:12px 32px; }
        .svc-list li { display:flex; align-items:flex-start; gap:12px; font-size:15px; font-weight:300; color:#2a2a2a; line-height:1.5; }
        .svc-check { margin-top:4px; flex-shrink:0; width:16px; height:16px; border-radius:50%; background:rgba(0,170,255,0.1); display:flex; align-items:center; justify-content:center; }

        /* sub-sections */
        .svc-sub-list { display:flex; flex-direction:column; gap:0; border-top:1px solid rgba(0,0,0,0.09); }
        .svc-subsec { padding:30px 0; border-bottom:1px solid rgba(0,0,0,0.09); }
        .svc-h3 { font-family:'Fraunces',serif; font-weight:800; font-size:19px; line-height:1.3; margin:0 0 12px; }

        /* card grid for short child sections */
        .svc-cards { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(0,0,0,0.09); border:1px solid rgba(0,0,0,0.09); }
        .svc-card-cell { background:#fff; padding:26px 24px; }
        .svc-card-cell .svc-h3 { margin-bottom:8px; }
        .svc-card-cell p { font-size:14px; line-height:1.7; color:#777; font-weight:300; margin:0; }

        /* approach steps — the only place numbering is meaningful */
        .svc-steps { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(0,0,0,0.09); border:1px solid rgba(0,0,0,0.09); }
        .svc-step { background:#fff; padding:26px 24px; }
        .svc-step-num { font-family:'Bebas Neue',sans-serif; font-size:26px; line-height:1; color:${BLUE}; margin-bottom:10px; }
        .svc-step p { font-size:14px; line-height:1.7; color:#777; font-weight:300; margin:0; }

        /* faq */
        .svc-faq { border-top:1px solid rgba(0,0,0,0.1); }
        .svc-faq-row { border-bottom:1px solid rgba(0,0,0,0.1); }
        .svc-faq-q { width:100%; background:none; border:none; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:24px; padding:22px 0; text-align:left; font-family:'Fraunces',serif; font-weight:800; font-size:17px; color:${INK}; }
        .svc-faq-q svg { flex:0 0 auto; color:${BLUE}; }
        .svc-faq-a { font-size:15px; line-height:1.8; color:#666; font-weight:300; margin:0; padding-bottom:22px; }

        .svc-aside { position:sticky; top:96px; align-self:start; display:flex; flex-direction:column; gap:24px; }
        .svc-card { border:1px solid rgba(0,0,0,0.1); padding:24px; }
        .svc-card-label { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#888; margin-bottom:16px; }
        .svc-toc a { display:block; padding:9px 0; font-size:13px; font-weight:300; color:#666; text-decoration:none; border-bottom:1px solid rgba(0,0,0,0.06); transition:color .2s,padding-left .2s; }
        .svc-toc a:last-child { border-bottom:none; }
        .svc-toc a:hover { color:${INK}; padding-left:6px; }
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
        .svc-band-wrap { position:relative; max-width:72rem; margin:0 auto; }
        .svc-band h2 { font-family:'Fraunces',serif; font-weight:800; font-size:clamp(28px,4vw,46px); line-height:1.08; max-width:38rem; margin:0 0 26px; }
        .svc-band p { font-weight:300; font-size:16px; line-height:1.8; color:rgba(255,255,255,0.65); max-width:44rem; margin:0 0 16px; }

        @media (max-width:900px){
          .svc-hero-grid{ grid-template-columns:1fr; }
          .svc-hero-copy{ padding:120px 24px 56px; }
          .svc-hero-media{ min-height:300px; order:-1; }
          .svc-body{ padding:56px 24px 72px; }
          .svc-body-wrap{ grid-template-columns:1fr; gap:48px; }
          .svc-aside{ position:static; }
          .svc-list,.svc-cards,.svc-steps{ grid-template-columns:1fr; }
          .svc-band{ padding:64px 24px; }
        }
      `}</style>

      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-grid">
          <div className="svc-hero-copy">
            <div className="svc-eyebrow">
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
            {/* intro */}
            {intro.length > 0 && (
              <div>
                {intro.map((b, i) =>
                  b.type === 'p' ? (
                    <p key={i} className={i === 0 ? 'svc-lead' : 'svc-lead-rest'}>{b.text}</p>
                  ) : (
                    <ul key={i} className="svc-list">
                      {b.items.map((it, k) => (
                        <li key={k}><span className="svc-check"><Check size={11} color={BLUE} /></span>{it}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            )}

            {groups.map((g, gi) => (
              <motion.section
                className="svc-group"
                key={`${g.heading ?? 'g'}-${gi}`}
                variants={stagger}
                {...reveal}
              >
                {g.heading && (
                  <motion.div variants={rise}>
                    <span className="svc-h2-rule" />
                    <h2 className="svc-h2" id={slugify(g.heading)}>{g.heading}</h2>
                  </motion.div>
                )}

                <motion.div variants={rise}>
                  <Blocks blocks={g.lead} />
                </motion.div>

                {g.children.length > 0 && g.kind === 'faq' && (
                  <div className="svc-faq">
                    {g.children.map((c) => {
                      const key = c.heading ?? ''
                      const open = openFaq === key
                      const answer = c.blocks.find((b) => b.type === 'p')
                      return (
                        <motion.div className="svc-faq-row" key={key} variants={rise}>
                          <button className="svc-faq-q" aria-expanded={open} onClick={() => setOpenFaq(open ? null : key)}>
                            <span>{c.heading}</span>
                            {open ? <Minus size={16} /> : <Plus size={16} />}
                          </button>
                          <motion.div
                            initial={false}
                            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className="svc-faq-a">{answer && answer.type === 'p' ? answer.text : ''}</p>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {g.children.length > 0 && g.kind === 'approach' && (
                  <div className="svc-steps">
                    {g.children.map((c, i) => {
                      const first = c.blocks.find((b) => b.type === 'p')
                      return (
                        <motion.div className="svc-step" key={c.heading ?? i} variants={rise}>
                          <div className="svc-step-num">{String(i + 1).padStart(2, '0')}</div>
                          <h3 className="svc-h3">{c.heading}</h3>
                          {first && first.type === 'p' && <p>{first.text}</p>}
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {g.children.length > 0 && g.kind === 'cards' && (
                  <div className="svc-cards">
                    {g.children.map((c, i) => {
                      const first = c.blocks.find((b) => b.type === 'p')
                      return (
                        <motion.div className="svc-card-cell" key={c.heading ?? i} variants={rise}>
                          <h3 className="svc-h3">{c.heading}</h3>
                          {first && first.type === 'p' && <p>{first.text}</p>}
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {g.children.length > 0 && g.kind === 'default' && (
                  <div className="svc-sub-list">
                    {g.children.map((c, i) => (
                      <motion.div className="svc-subsec" key={c.heading ?? i} variants={rise}>
                        {c.heading && <h3 className="svc-h3">{c.heading}</h3>}
                        <Blocks blocks={c.blocks} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          <aside className="svc-aside">
            {groups.filter((g) => g.heading).length > 2 && (
              <div className="svc-card svc-toc">
                <div className="svc-card-label">On This Page</div>
                {groups.filter((g) => g.heading).map((g) => (
                  <a key={g.heading} href={`#${slugify(g.heading as string)}`}>{g.heading}</a>
                ))}
              </div>
            )}

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

      {/* CLOSING */}
      <section className="svc-band">
        <div className="svc-band-glow" />
        <div className="svc-band-wrap">
          <h2>{closing?.heading ?? 'Ready to discuss your business challenges?'}</h2>
          {closing?.blocks.map((b, i) =>
            b.type === 'p' ? <p key={i}>{b.text}</p> : null
          )}
          <a href="/contact" className="btn btn-light" style={{ marginTop: 14 }}>
            Schedule a Consultation <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  )
}
