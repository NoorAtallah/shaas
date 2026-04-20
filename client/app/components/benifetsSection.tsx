'use client'

import { useState, useEffect, useRef } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const services = [
  {
    num: '01', tag: 'Strategy',
    title: 'Marketing', sub: 'Consultancy',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=85',
    location: 'Abu Dhabi, UAE',
    dek: 'Elevating enterprises through precision strategic vision and deep regional market intelligence.',
    body: 'We craft brand narratives that resonate with Gulf audiences and international investors alike — from positioning frameworks that differentiate to go-to-market strategies that deliver measurable results across the UAE and MENA.',
  },
  {
    num: '02', tag: 'Innovation',
    title: 'Project', sub: 'Development',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85',
    location: 'ADGM Square, Abu Dhabi',
    dek: 'Transforming visionary concepts into operational reality with precision and agility.',
    body: 'Our project development team brings structured innovation to every engagement. We translate complex initiatives into delivery-ready programmes, managing risk and stakeholder alignment with the rigour Abu Dhabi demands.',
  },
  {
    num: '03', tag: 'Operations',
    title: 'Administrative', sub: 'Excellence',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85',
    location: 'Abu Dhabi Global Market',
    dek: 'Architecting operational mastery — embedding efficiency and control at every layer.',
    body: 'Administrative excellence means building organisations that run with precision. We redesign workflows, governance structures, and operating models to eliminate friction and create scalable high-performance enterprises.',
  },
  {
    num: '04', tag: 'People',
    title: 'Human', sub: 'Capital',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=85',
    location: 'Al Maryah Island, Abu Dhabi',
    dek: 'Cultivating extraordinary talent — the most enduring competitive advantage.',
    body: 'Our practice covers talent strategy, leadership development, and culture transformation — creating the conditions for people to perform at their highest potential and organisations to thrive across generations.',
  },
  {
    num: '05', tag: 'Systems',
    title: 'Logistics', sub: 'Intelligence',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=85',
    location: 'Khalifa Port, Abu Dhabi',
    dek: 'Optimising global supply networks — resilient, efficient, intelligently adaptive.',
    body: 'We apply advanced analytics and network modelling to transform supply chains into strategic assets. Leveraging Abu Dhabi\'s world-class logistics infrastructure, we design distribution networks that deliver competitive advantage.',
  },
]

export default function ShaasHeroV3() {
  const [active, setActive]     = useState(0)
  const [fade, setFade]         = useState(true)
  const [progressKey, setPK]    = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const s = services[active]

  function goTo(idx: number) {
    if (idx === active) return
    setFade(false)
    setTimeout(() => { setActive(idx); setFade(true) }, 320)
    setPK(k => k + 1)
  }

  function schedule(from: number) {
    timerRef.current = setTimeout(() => {
      const next = (from + 1) % services.length
      goTo(next)
      schedule(next)
    }, 6000)
  }

  function handleClick(idx: number) {
    if (timerRef.current) clearTimeout(timerRef.current)
    goTo(idx)
    schedule(idx)
  }

  useEffect(() => {
    schedule(0)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', color: INK, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        /* ── HEADER ── */
        .v3-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 64px;
          border-bottom: 1px solid ${INK};
          flex-shrink: 0;
        }
        .v3-logo { font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 0.18em; }
        .v3-nav { display: flex; gap: 32px; }
        .v3-nav a {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: #888; text-decoration: none; cursor: pointer;
          transition: color 0.2s;
        }
        .v3-nav a:hover { color: ${INK}; }
        .v3-header-right { display: flex; align-items: center; gap: 20px; }
        .v3-location-badge {
          display: flex; align-items: center; gap: 7px;
          font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: #aaa;
        }
        .v3-loc-dot {
          width: 6px; height: 6px; border-radius: 50%; background: ${BLUE};
          animation: v3pulse 2s infinite;
        }
        @keyframes v3pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,170,255,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(0,170,255,0); }
        }
        .v3-cta-btn {
          background: ${INK}; color: #fff; border: none;
          padding: 10px 22px; font-size: 10px; letter-spacing: 0.25em;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
          font-weight: 500; cursor: pointer; transition: background 0.25s;
        }
        .v3-cta-btn:hover { background: ${BLUE}; }

        /* ── MAIN AREA ── */
        .v3-main {
          flex: 1; display: grid;
          grid-template-rows: 1fr auto;
        }

        /* ── HERO ROW ── */
        .v3-hero {
          display: grid;
          grid-template-columns: 380px 1fr;
          border-bottom: 1px solid ${INK};
          overflow: hidden;
          min-height: 0;
        }

        /* LEFT PANEL — stacked service list */
        .v3-sidebar {
          border-right: 1px solid ${INK};
          display: flex; flex-direction: column;
          overflow: hidden;
        }

        .v3-sidebar-head {
          padding: 20px 28px 16px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          font-size: 9px; letter-spacing: 0.45em;
          text-transform: uppercase; color: #aaa;
        }

        .v3-svc-row {
          display: grid;
          grid-template-columns: 40px 1fr 28px;
          align-items: center;
          padding: 0 28px;
          height: 72px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .v3-svc-row::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 0; background: ${BLUE};
          transition: width 0.3s ease;
        }
        .v3-svc-row.active::before { width: 3px; }
        .v3-svc-row:hover { background: rgba(0,170,255,0.03); }

        .v3-svc-n {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.15em;
          color: #ccc; transition: color 0.3s;
        }
        .v3-svc-row.active .v3-svc-n { color: ${BLUE}; }

        .v3-svc-info { padding-left: 4px; }
        .v3-svc-t {
          font-family: 'Fraunces', serif;
          font-size: 15px; font-weight: 800;
          color: #bbb; transition: color 0.3s; line-height: 1.1;
        }
        .v3-svc-row.active .v3-svc-t { color: ${INK}; }
        .v3-svc-s {
          font-size: 10px; color: #ccc; font-style: italic;
          font-family: 'Fraunces', serif; font-weight: 300;
          transition: color 0.3s;
        }
        .v3-svc-row.active .v3-svc-s { color: #888; }

        .v3-svc-arr {
          font-size: 14px; color: #ddd;
          transition: color 0.3s, transform 0.3s;
          text-align: right;
        }
        .v3-svc-row.active .v3-svc-arr { color: ${BLUE}; transform: translateX(2px); }

        /* sidebar bottom stats */
        .v3-sidebar-stats {
          margin-top: auto;
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .v3-ss-cell {
          padding: 16px 20px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .v3-ss-cell:nth-child(2), .v3-ss-cell:nth-child(4) { border-right: none; }
        .v3-ss-cell:nth-child(3), .v3-ss-cell:nth-child(4) { border-top: 1px solid rgba(0,0,0,0.08); }
        .v3-ss-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; line-height: 1; color: ${INK};
        }
        .v3-ss-sym { color: ${BLUE}; font-size: 16px; }
        .v3-ss-lbl {
          font-size: 8px; letter-spacing: 0.25em;
          text-transform: uppercase; color: #aaa; margin-top: 2px;
        }

        /* RIGHT PANEL — photo + content stacked */
        .v3-content {
          display: grid;
          grid-template-rows: 1fr auto;
          overflow: hidden;
        }

        /* photo fills top */
        .v3-img-wrap {
          position: relative; overflow: hidden;
        }
        .v3-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: opacity 0.4s ease, transform 1s ease;
        }
        .v3-img-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.9) 100%);
          pointer-events: none;
        }

        /* floating tag on image */
        .v3-img-tag {
          position: absolute; top: 24px; left: 28px;
          background: ${BLUE}; color: #fff;
          font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
          padding: 5px 14px; font-family: 'DM Sans', sans-serif; font-weight: 500;
        }

        /* Big ghost number */
        .v3-ghost-num {
          position: absolute; bottom: -10px; right: 24px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 160px; line-height: 1; letter-spacing: -0.03em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.07);
          pointer-events: none; user-select: none;
          transition: opacity 0.4s;
        }

        /* text block below image */
        .v3-text-block {
          padding: 28px 40px 28px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .v3-headline-wrap {}
        .v3-h-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
        }
        .v3-h-line { width: 20px; height: 2px; background: ${BLUE}; flex-shrink: 0; }
        .v3-h-etxt {
          font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
          color: ${BLUE}; font-weight: 500;
        }
        .v3-headline {
          font-family: 'Fraunces', serif; font-weight: 800;
          font-size: clamp(38px, 4.5vw, 60px);
          line-height: 0.92; letter-spacing: -0.02em; color: ${INK};
        }
        .v3-headline-i {
          font-family: 'Fraunces', serif; font-weight: 300; font-style: italic;
          font-size: clamp(38px, 4.5vw, 60px);
          line-height: 0.92; letter-spacing: -0.02em; color: #555;
          margin-bottom: 16px;
        }
        .v3-dek {
          font-family: 'Fraunces', serif; font-style: italic;
          font-size: 13px; color: #777; line-height: 1.55;
        }

        .v3-body-wrap {
          display: flex; flex-direction: column; gap: 16px;
        }
        .v3-body-text {
          font-size: 12px; line-height: 1.75; color: #555; font-weight: 300;
        }
        .v3-actions {
          display: flex; gap: 12px; align-items: center;
        }
        .v3-btn-p {
          background: ${INK}; color: #fff; border: none;
          padding: 10px 22px; font-size: 10px; letter-spacing: 0.25em;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
          font-weight: 500; cursor: pointer; transition: background 0.25s;
          white-space: nowrap;
        }
        .v3-btn-p:hover { background: ${BLUE}; }
        .v3-btn-g {
          background: none; border: none; border-bottom: 1px solid transparent;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #aaa; font-family: 'DM Sans', sans-serif; cursor: pointer;
          padding: 10px 0; transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .v3-btn-g:hover { color: ${INK}; border-bottom-color: ${INK}; }

        /* ── BOTTOM STRIP ── */
        .v3-bottom {
          display: grid;
          grid-template-columns: 380px 1fr;
          border-top: 1px solid ${INK};
          flex-shrink: 0;
        }
        .v3-bottom-left {
          border-right: 1px solid ${INK};
          padding: 14px 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .v3-progress-track {
          flex: 1; height: 2px; background: rgba(0,0,0,0.08);
          position: relative; overflow: hidden;
        }
        .v3-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: ${BLUE}; width: 0%;
        }
        .v3-progress-fill.run {
          animation: v3prog 6s linear forwards;
        }
        @keyframes v3prog { from { width:0% } to { width:100% } }
        .v3-prog-label {
          font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: #aaa;
          white-space: nowrap;
        }
        .v3-counter {
          font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 0.1em;
          color: ${BLUE};
        }

        .v3-bottom-right {
          padding: 14px 40px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .v3-addr {
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: #aaa;
        }
        .v3-copy {
          font-size: 9px; letter-spacing: 0.2em; color: #ccc;
        }
        .v3-social {
          display: flex; gap: 16px;
        }
        .v3-social span {
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          color: #aaa; cursor: pointer; transition: color 0.2s;
        }
        .v3-social span:hover { color: ${BLUE}; }

        @media (max-width: 960px) {
          .v3-hero { grid-template-columns: 1fr; }
          .v3-sidebar { display: none; }
          .v3-text-block { grid-template-columns: 1fr; gap: 16px; }
          .v3-bottom { grid-template-columns: 1fr; }
          .v3-bottom-left { border-right: none; border-bottom: 1px solid ${INK}; }
        }
      `}</style>

      {/* ── HEADER ──────────────────────────────── */}
      <header className="v3-header">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <div className="v3-logo">SHAAS</div>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa' }}>General Consulting</div>
        </div>
        <nav className="v3-nav">
          {['Home', 'About', 'Solutions', 'Contact'].map(n => <a key={n}>{n}</a>)}
        </nav>
        <div className="v3-header-right">
          <div className="v3-location-badge">
            <div className="v3-loc-dot" />
            Abu Dhabi, UAE
          </div>
          <button className="v3-cta-btn">Get Started ↗</button>
        </div>
      </header>

      {/* ── MAIN ────────────────────────────────── */}
      <div className="v3-main">
        <div className="v3-hero">

          {/* SIDEBAR */}
          <div className="v3-sidebar">
            <div className="v3-sidebar-head">Our Services</div>

            {services.map((svc, idx) => (
              <div
                key={svc.num}
                className={`v3-svc-row${idx === active ? ' active' : ''}`}
                onClick={() => handleClick(idx)}
              >
                <div className="v3-svc-n">{svc.num}</div>
                <div className="v3-svc-info">
                  <div className="v3-svc-t">{svc.title}</div>
                  <div className="v3-svc-s">{svc.sub}</div>
                </div>
                <div className="v3-svc-arr">→</div>
              </div>
            ))}

            <div className="v3-sidebar-stats">
              {[['500+','Projects'],['98%','Satisfaction'],['15+','Years'],['50+','Partners']].map(([v,l],i)=>(
                <div className="v3-ss-cell" key={i}>
                  <div className="v3-ss-val" style={{ color: i===3 ? BLUE : INK }}>
                    {v.replace(/[^0-9]/g,'')}
                    <span className="v3-ss-sym">{v.replace(/[0-9]/g,'')}</span>
                  </div>
                  <div className="v3-ss-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="v3-content">
            {/* Photo */}
            <div className="v3-img-wrap">
              <img
                src={s.img} alt={s.title}
                style={{ opacity: fade ? 1 : 0, transform: fade ? 'scale(1)' : 'scale(1.04)' }}
              />
              <div className="v3-img-grad" />
              <div className="v3-img-tag">{s.tag}</div>
              <div className="v3-ghost-num" style={{ opacity: fade ? 1 : 0 }}>{s.num}</div>
            </div>

            {/* Text block */}
            <div className="v3-text-block">
              <div className="v3-headline-wrap">
                <div className="v3-h-eyebrow">
                  <div className="v3-h-line" />
                  <div className="v3-h-etxt">{s.tag} · {s.num}</div>
                </div>
                <div className="v3-headline" style={{ opacity: fade ? 1 : 0 }}>{s.title}</div>
                <div className="v3-headline-i" style={{ opacity: fade ? 1 : 0 }}>{s.sub}</div>
                <p className="v3-dek" style={{ opacity: fade ? 1 : 0 }}>{s.dek}</p>
              </div>

              <div className="v3-body-wrap">
                <p className="v3-body-text" style={{ opacity: fade ? 1 : 0 }}>{s.body}</p>
                <div className="v3-actions">
                  <button className="v3-btn-p">Engage Now →</button>
                  <button className="v3-btn-g">Case Studies</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM STRIP ─────────────────────── */}
        <div className="v3-bottom">
          <div className="v3-bottom-left">
            <span className="v3-counter">{String(active + 1).padStart(2,'0')} / {String(services.length).padStart(2,'0')}</span>
            <div className="v3-progress-track">
              <div key={progressKey} className="v3-progress-fill run" />
            </div>
            <span className="v3-prog-label">Auto-advance</span>
          </div>
          <div className="v3-bottom-right">
            <div className="v3-addr">ADGM Square · Al Maryah Island · Abu Dhabi</div>
            <div className="v3-social">
              {['LinkedIn','X','Instagram'].map(s => <span key={s}>{s}</span>)}
            </div>
            <div className="v3-copy">© 2025 SHAAS</div>
          </div>
        </div>
      </div>
    </div>
  )
}