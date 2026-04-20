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
    body: 'Administrative excellence means building organisations that run with precision. We redesign workflows, governance structures, and operating models to eliminate friction and create scalable, high-performance enterprises.',
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

const stats = [
  { val: '500', sym: '+', label: 'Projects' },
  { val: '98',  sym: '%', label: 'Satisfaction' },
  { val: '15',  sym: '+', label: 'Years' },
  { val: '50',  sym: '+', label: 'Partners' },
]

export default function ShaasHeroV2() {
  const [active, setActive]       = useState(0)
  const [imgFade, setImgFade]     = useState(true)
  const [textFade, setTextFade]   = useState(true)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const s = services[active]

  function goTo(idx: number) {
    if (idx === active) return
    setImgFade(false)
    setTextFade(false)
    setTimeout(() => { setActive(idx); setImgFade(true); setTextFade(true) }, 300)
    setProgressKey(k => k + 1)
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', color: INK, minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,600;0,700;1,300;1,600&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .sv2-root { position: relative; }

        /* NAV */
        .sv2-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 48px;
          mix-blend-mode: normal;
        }
        .sv2-nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: 0.18em; color: #fff;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }
        .sv2-nav-tagline {
          font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .sv2-nav-cta {
          display: flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: #fff; background: none; border: 1px solid rgba(255,255,255,0.4);
          padding: 9px 20px; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          transition: background 0.25s, border-color 0.25s;
        }
        .sv2-nav-cta:hover { background: ${BLUE}; border-color: ${BLUE}; }

        /* SPLIT LAYOUT */
        .sv2-split {
          display: grid;
          grid-template-columns: 52% 48%;
          min-height: 100vh;
        }

        /* LEFT PHOTO PANEL */
        .sv2-photo {
          position: relative; overflow: hidden;
        }
        .sv2-photo img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: opacity 0.45s ease, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .sv2-photo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%);
          pointer-events: none;
        }
        .sv2-photo-overlay-right {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 70%, #fff 100%);
          pointer-events: none;
        }

        /* Big service number on photo */
        .sv2-photo-num {
          position: absolute; bottom: 60px; left: 48px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 140px; line-height: 1; letter-spacing: -0.02em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
          pointer-events: none; user-select: none;
          transition: opacity 0.4s;
        }

        /* Location tag */
        .sv2-location {
          position: absolute; top: 100px; left: 48px;
          display: flex; align-items: center; gap: 10px;
        }
        .sv2-location-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${BLUE}; flex-shrink: 0;
          animation: sv2-pulse 2s ease-in-out infinite;
        }
        @keyframes sv2-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,170,255,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(0,170,255,0); }
        }
        .sv2-location-text {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }

        /* Diagonal slash accent on photo */
        .sv2-slash {
          position: absolute; top: 0; right: -1px; bottom: 0;
          width: 80px;
          background: #fff;
          clip-path: polygon(60% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
        }

        /* RIGHT TEXT PANEL */
        .sv2-text {
          display: flex; flex-direction: column;
          padding: 120px 56px 40px 48px;
          position: relative;
        }

        /* Thin vertical blue rule */
        .sv2-vrule {
          position: absolute; left: 0; top: 80px; bottom: 80px;
          width: 2px; background: ${BLUE};
        }

        .sv2-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .sv2-eyebrow-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.2em;
          color: ${BLUE};
        }
        .sv2-eyebrow-sep { width: 32px; height: 1px; background: ${BLUE}; }
        .sv2-eyebrow-tag {
          font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
          color: #aaa; font-weight: 500;
        }

        /* Giant headline */
        .sv2-h1-line1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(56px, 7vw, 88px);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: ${INK};
          transition: opacity 0.3s ease;
        }
        .sv2-h1-line2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(56px, 7vw, 88px);
          font-weight: 300;
          font-style: italic;
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: #444;
          margin-bottom: 32px;
          transition: opacity 0.3s ease;
        }

        /* Blue underline accent under headline */
        .sv2-h1-underline {
          width: 60px; height: 3px; background: ${BLUE}; margin-bottom: 28px;
        }

        .sv2-dek {
          font-family: 'Cormorant', serif;
          font-size: 17px; font-style: italic;
          color: #666; line-height: 1.55;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 20px;
          transition: opacity 0.3s ease;
        }

        .sv2-body {
          font-size: 13px; line-height: 1.75;
          color: #555; font-weight: 300;
          flex: 1;
          transition: opacity 0.3s ease;
        }

        /* Stats row */
        .sv2-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(0,0,0,0.1);
          margin-top: 32px;
        }
        .sv2-stat {
          padding: 16px 0;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .sv2-stat:last-child { border-right: none; }
        .sv2-stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px; letter-spacing: 0.05em;
          line-height: 1; color: ${INK};
        }
        .sv2-stat-sym { color: ${BLUE}; font-size: 18px; }
        .sv2-stat-label {
          font-size: 9px; letter-spacing: 0.25em;
          text-transform: uppercase; color: #aaa; margin-top: 3px;
        }

        /* BOTTOM SERVICE TABS */
        .sv2-tabs {
          background: ${INK};
          display: grid; grid-template-columns: repeat(5, 1fr);
          border-top: 2px solid ${INK};
        }
        .sv2-tab {
          padding: 20px 24px; cursor: pointer;
          border-right: 1px solid rgba(255,255,255,0.07);
          position: relative; overflow: hidden;
          transition: background 0.25s;
        }
        .sv2-tab:last-child { border-right: none; }
        .sv2-tab:hover { background: rgba(255,255,255,0.05); }
        .sv2-tab.active { background: rgba(0,170,255,0.1); }
        .sv2-tab-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 10px; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3); margin-bottom: 4px;
          transition: color 0.25s;
        }
        .sv2-tab.active .sv2-tab-num { color: ${BLUE}; }
        .sv2-tab-title {
          font-family: 'Cormorant', serif;
          font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.5);
          transition: color 0.25s;
        }
        .sv2-tab.active .sv2-tab-title { color: #fff; }
        .sv2-tab-sub {
          font-size: 9px; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25); margin-top: 1px;
          font-style: italic;
        }
        /* Blue bottom border on active tab */
        .sv2-tab-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: ${BLUE};
          transform: scaleX(0); transition: transform 0.35s ease;
          transform-origin: left;
        }
        .sv2-tab.active .sv2-tab-bar { transform: scaleX(1); }

        /* Progress bar */
        .sv2-progress {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .sv2-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: ${BLUE}; width: 0%;
        }
        .sv2-progress-fill.run {
          animation: sv2prog 6s linear forwards;
        }
        @keyframes sv2prog { from { width: 0% } to { width: 100% } }

        @media (max-width: 900px) {
          .sv2-split { grid-template-columns: 1fr; }
          .sv2-photo { height: 50vh; }
          .sv2-text { padding: 40px 24px 32px; }
          .sv2-tabs { grid-template-columns: repeat(3, 1fr); flex-wrap: wrap; }
          .sv2-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="sv2-nav">
        <div>
          <div className="sv2-nav-logo">SHAAS</div>
          <div className="sv2-nav-tagline">General Consulting · Abu Dhabi</div>
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {['Home', 'About', 'Solutions', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >{item}</span>
          ))}
        </div>
        <button className="sv2-nav-cta">Get Started ↗</button>
      </nav>

      {/* ── SPLIT HERO ─────────────────────────────── */}
      <div className="sv2-split sv2-root" style={{ flex: 1 }}>

        {/* LEFT — Photo */}
        <div className="sv2-photo">
          <img
            src={s.img}
            alt={s.title}
            style={{ opacity: imgFade ? 1 : 0, transform: imgFade ? 'scale(1)' : 'scale(1.03)' }}
          />
          <div className="sv2-photo-overlay" />
          <div className="sv2-photo-overlay-right" />

          {/* Diagonal slash */}
          <div className="sv2-slash" />

          {/* Location pill */}
          <div className="sv2-location">
            <div className="sv2-location-dot" />
            <span className="sv2-location-text">{s.location}</span>
          </div>

          {/* Ghost number */}
          <div className="sv2-photo-num" style={{ opacity: imgFade ? 1 : 0 }}>{s.num}</div>
        </div>

        {/* RIGHT — Text */}
        <div className="sv2-text">
          <div className="sv2-vrule" />

          {/* Eyebrow */}
          <div className="sv2-eyebrow">
            <span className="sv2-eyebrow-num">{s.num}</span>
            <div className="sv2-eyebrow-sep" />
            <span className="sv2-eyebrow-tag">{s.tag}</span>
          </div>

          {/* Headline */}
          <div className="sv2-h1-line1" style={{ opacity: textFade ? 1 : 0 }}>{s.title}</div>
          <div className="sv2-h1-line2" style={{ opacity: textFade ? 1 : 0 }}>{s.sub}</div>

          {/* Blue rule */}
          <div className="sv2-h1-underline" />

          {/* Dek */}
          <p className="sv2-dek" style={{ opacity: textFade ? 1 : 0 }}>{s.dek}</p>

          {/* Body */}
          <p className="sv2-body" style={{ opacity: textFade ? 1 : 0 }}>{s.body}</p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 28 }}>
            <button style={{ background: INK, color: '#fff', border: 'none', padding: '12px 28px', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, cursor: 'pointer', transition: 'background 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.background = BLUE)}
              onMouseLeave={e => (e.currentTarget.style.background = INK)}
            >Engage Now →</button>
            <button style={{ background: 'none', border: 'none', borderBottom: `1px solid transparent`, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', padding: '12px 0', transition: 'color 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = INK; e.currentTarget.style.borderBottomColor = INK }}
              onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderBottomColor = 'transparent' }}
            >View Case Studies</button>
          </div>

          {/* Stats */}
          <div className="sv2-stats">
            {stats.map((st, i) => (
              <div className="sv2-stat" key={i} style={{ paddingLeft: i === 0 ? 0 : 16 }}>
                <div className="sv2-stat-val">{st.val}<span className="sv2-stat-sym">{st.sym}</span></div>
                <div className="sv2-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE TABS ───────────────────────────── */}
      <div className="sv2-tabs">
        {services.map((svc, idx) => (
          <div
            key={svc.num}
            className={`sv2-tab${idx === active ? ' active' : ''}`}
            onClick={() => handleClick(idx)}
            style={{ position: 'relative' }}
          >
            <div className="sv2-tab-num">{svc.num}</div>
            <div className="sv2-tab-title">{svc.title}</div>
            <div className="sv2-tab-sub">{svc.sub}</div>
            <div className="sv2-tab-bar" />
            {/* Progress only under active tab */}
            {idx === active && (
              <div className="sv2-progress">
                <div key={progressKey} className="sv2-progress-fill run" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}