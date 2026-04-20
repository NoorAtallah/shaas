'use client'

import { useState, useEffect, useRef } from 'react'

const services = [
  {
    num: '01', tag: 'Strategy', caption: 'Marketing Consultancy · 01',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    eyebrow: 'Featured Service',
    h1line1: 'Strategic', h1line2: 'Excellence',
    dek: 'Elevating brands through precision strategic vision — where insight meets execution at the highest level of consultancy.',
    body: 'Our marketing consultancy practice combines rigorous market analysis with creative strategic thinking. We partner with leading enterprises to develop brand narratives that resonate, positioning frameworks that differentiate, and go-to-market strategies that deliver measurable results across the MENA region and beyond.'
  },
  {
    num: '02', tag: 'Innovation', caption: 'Project Development · 02',
    img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
    eyebrow: 'Core Practice',
    h1line1: 'Transforming', h1line2: 'Concepts',
    dek: 'From ideation to delivery — we architect and execute complex initiatives that redefine what your organisation can achieve.',
    body: 'Our project development team brings structured innovation to every engagement. With deep expertise across industries, we translate visionary concepts into operational reality, managing risk, stakeholder alignment, and delivery timelines with precision and agility.'
  },
  {
    num: '03', tag: 'Operations', caption: 'Administrative Excellence · 03',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    eyebrow: 'Operational Mastery',
    h1line1: 'Architecting', h1line2: 'Systems',
    dek: 'Operational excellence is not a destination — it is a discipline. We embed efficiency, clarity, and control into every layer of your organisation.',
    body: 'Administrative excellence means building organisations that run with precision. Our consultants redesign workflows, governance structures, and operational frameworks to eliminate friction and create scalable, high-performance operating models that sustain competitive advantage.'
  },
  {
    num: '04', tag: 'People', caption: 'Human Capital · 04',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    eyebrow: 'Talent Practice',
    h1line1: 'Cultivating', h1line2: 'Talent',
    dek: 'The most enduring competitive advantage is people. We help organisations attract, develop, and retain extraordinary talent at every level.',
    body: 'Human capital is the ultimate differentiator. Our practice covers talent strategy, leadership development, culture transformation, and organisational design — creating the conditions for people to perform at their highest potential and organisations to thrive long-term.'
  },
  {
    num: '05', tag: 'Systems', caption: 'Logistics Intelligence · 05',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    eyebrow: 'Supply Intelligence',
    h1line1: 'Optimising', h1line2: 'Networks',
    dek: 'In a connected world, logistics is strategy. We design and optimise supply chains that are resilient, efficient, and intelligently adaptive.',
    body: 'Our logistics intelligence practice applies advanced analytics, network modelling, and process engineering to transform supply chains into strategic assets. We work with clients across the GCC to design distribution networks that deliver competitive speed and cost advantage.'
  }
]

const stats = [
  { val: '500', sym: '+', desc: 'Projects Completed' },
  { val: '98',  sym: '%', desc: 'Client Satisfaction' },
  { val: '50',  sym: '+', desc: 'Global Partners' },
  { val: '15',  sym: '+', desc: 'Years of Excellence', blue: true },
]

export default function ShaasEditorialHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imgFade, setImgFade] = useState(true)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const s = services[activeIndex]

  function goTo(idx: number) {
    if (idx === activeIndex) return
    setImgFade(false)
    setTimeout(() => { setActiveIndex(idx); setImgFade(true) }, 280)
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', color: '#0a0a0a', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .sh-body-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          font-size: 12px;
          line-height: 1.75;
          color: #555;
          font-weight: 300;
        }

        .sh-progress-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: #00aaff;
          width: 0%;
        }
        .sh-progress-fill.run {
          animation: shprog 6s linear forwards;
        }
        @keyframes shprog { from { width: 0% } to { width: 100% } }

        .sh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0a0a0a;
          color: #fff;
          padding: 11px 22px;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.25s;
        }
        .sh-btn-primary:hover { background: #00aaff; }

        .sh-btn-ghost {
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #888;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          padding: 11px 0;
          transition: color 0.2s, border-color 0.2s;
        }
        .sh-btn-ghost:hover { color: #0a0a0a; border-bottom-color: #0a0a0a; }

        .sh-svc-item { cursor: pointer; padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.08); }
        .sh-svc-item:hover { opacity: 0.65; }
        .sh-svc-item.active .sh-svc-num { color: #00aaff; }
        .sh-svc-item.active .sh-svc-name { color: #0a0a0a; }

        .sh-tick { opacity: 0.4; cursor: pointer; transition: opacity 0.3s, color 0.3s; padding: 0 14px; white-space: nowrap; }
        .sh-tick.active { opacity: 1; color: #00aaff; }

        @media (max-width: 900px) {
          .sh-main-grid { grid-template-columns: 1fr !important; }
          .sh-col-left { display: none !important; }
          .sh-col-right { border-top: 1px solid #0a0a0a; padding: 24px 20px !important; }
          .sh-body-cols { grid-template-columns: 1fr !important; }
          .sh-headline { font-size: 40px !important; }
        }
      `}</style>

      {/* ── TOP BAR ─────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', borderBottom: '1px solid #0a0a0a' }}>
        <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888' }}>Est. 2009 · Riyadh, KSA</span>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: '0.15em' }}>SHAAS Consulting</span>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
          Vol. XVI · <span style={{ color: '#00aaff' }}>2025</span>
        </span>
      </div>

      {/* ── EDITION BAR ─────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0, padding: '8px 32px', background: '#0a0a0a', borderBottom: '2px solid #0a0a0a' }}>
        {['◆  Strategic Advisory', 'Project Development', 'Human Capital', 'Logistics Intelligence', '↗  50+ Global Partners'].map((item, i) => (
          <span key={i} style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: i === 0 || i === 4 ? '#00aaff' : '#fff', paddingRight: 20, marginRight: 20, borderRight: i < 4 ? '1px solid rgba(255,255,255,0.15)' : 'none', whiteSpace: 'nowrap' }}>
            {item}
          </span>
        ))}
      </div>

      {/* ── MAIN 3-COLUMN GRID ──────────────────────────── */}
      <div className="sh-main-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1px 1fr 1px 280px', minHeight: 'calc(100vh - 90px)' }}>

        {/* LEFT — Service Index */}
        <div className="sh-col-left" style={{ padding: '28px 20px 28px 32px', borderRight: '1px solid #0a0a0a', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: 4 }}>
            Services Index
          </div>

          {services.map((svc, idx) => (
            <div key={svc.num} className={`sh-svc-item${idx === activeIndex ? ' active' : ''}`} onClick={() => handleClick(idx)}>
              <div className="sh-svc-num" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.2em', color: '#bbb', marginBottom: 2, transition: 'color 0.3s' }}>
                {svc.num}
              </div>
              <div className="sh-svc-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, fontWeight: 400, color: '#666', lineHeight: 1.3, transition: 'color 0.3s' }}>
                {svc.caption.split(' · ')[0]}
              </div>
              <div style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.1em', marginTop: 1 }}>{svc.tag}</div>
              <div style={{ height: 2, background: '#00aaff', marginTop: 6, width: idx === activeIndex ? 20 : 0, transition: 'width 0.4s ease' }} />
            </div>
          ))}

          {/* Left stat */}
          <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: '0.05em', lineHeight: 1 }}>
              15<span style={{ color: '#00aaff', fontSize: 22 }}>+</span>
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginTop: 3 }}>Years of Excellence</div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ background: '#0a0a0a', width: 1 }} />

        {/* CENTER — Editorial */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Hero image */}
          <div style={{ position: 'relative', width: '100%', height: 340, overflow: 'hidden', flexShrink: 0 }}>
            <img
              src={s.img}
              alt={s.caption}
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'grayscale(20%) contrast(1.05)',
                opacity: imgFade ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            />
            {/* gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.55) 100%)', pointerEvents: 'none' }} />
            {/* stamp */}
            <div style={{ position: 'absolute', top: 20, right: 20, background: '#00aaff', color: '#fff', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', padding: '5px 12px', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {s.tag}
            </div>
            {/* caption */}
            <div style={{ position: 'absolute', bottom: 14, left: 24, fontSize: 10, color: '#444', letterSpacing: '0.1em' }}>
              {s.caption}
            </div>
          </div>

          {/* Text content */}
          <div style={{ padding: '28px 36px', flex: 1 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 24, height: 2, background: '#00aaff', flexShrink: 0 }} />
              <span style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#00aaff', fontWeight: 500 }}>{s.eyebrow}</span>
            </div>

            {/* Headline */}
            <div className="sh-headline" style={{ fontFamily: "'Playfair Display', serif", fontSize: 58, fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', color: '#0a0a0a' }}>
              {s.h1line1}
            </div>
            <div className="sh-headline" style={{ fontFamily: "'Playfair Display', serif", fontSize: 58, fontWeight: 400, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#333', marginBottom: 20 }}>
              {s.h1line2}
            </div>

            {/* Dek */}
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontStyle: 'italic', color: '#666', lineHeight: 1.55, padding: '14px 0', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: 20 }}>
              {s.dek}
            </div>

            {/* Body copy — proper 2-col grid */}
            <div className="sh-body-cols">
              <p style={{ margin: 0 }}>{s.body.slice(0, Math.floor(s.body.length / 2))}…</p>
              <p style={{ margin: 0 }}>…{s.body.slice(Math.floor(s.body.length / 2))}</p>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <button className="sh-btn-primary">Engage Now &nbsp;→</button>
              <button className="sh-btn-ghost">View Case Studies</button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ background: '#0a0a0a', width: 1 }} />

        {/* RIGHT — Stats + Pull Quote */}
        <div className="sh-col-right" style={{ padding: '28px 32px 28px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Performance Record</div>

          {/* Pull quote */}
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, lineHeight: 1.35, color: '#0a0a0a', padding: '18px 0', borderTop: '2px solid #00aaff', borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: 24 }}>
            "Precision strategy meets{' '}
            <em style={{ color: '#00aaff', fontStyle: 'italic' }}>visionary</em>{' '}
            execution."
          </div>

          {/* Stats — clean 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(0,0,0,0.08)', marginBottom: 24 }}>
            {stats.map((st, i) => (
              <div key={i} style={{ background: '#fff', padding: '16px 14px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 34, letterSpacing: '0.05em', lineHeight: 1, color: st.blue ? '#00aaff' : '#0a0a0a' }}>
                  {st.val}<span style={{ color: '#00aaff', fontSize: 20 }}>{st.sym}</span>
                </div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginTop: 4, lineHeight: 1.4 }}>
                  {st.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 20, marginTop: 'auto' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>Enquiries</div>
            {['Riyadh · Saudi Arabia', 'info@shaas.consulting', '+966 XX XXX XXXX'].map(line => (
              <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#555', marginBottom: 5 }}>
                <span style={{ width: 4, height: 4, background: '#00aaff', flexShrink: 0, display: 'inline-block' }} />
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TICKER BAR ──────────────────────────────────── */}
      <div style={{ background: '#0a0a0a', color: '#fff', padding: '8px 32px', display: 'flex', alignItems: 'center', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {services.map((svc, idx) => (
          <span key={svc.num} style={{ display: 'flex', alignItems: 'center' }}>
            {idx > 0 && <span style={{ color: 'rgba(255,255,255,0.15)', padding: '0 8px' }}>—</span>}
            <span className={`sh-tick${idx === activeIndex ? ' active' : ''}`} onClick={() => handleClick(idx)}>
              {svc.num} · {svc.tag}
            </span>
          </span>
        ))}
        {/* Progress bar */}
        <div style={{ flex: 1, marginLeft: 20, height: 2, background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div key={progressKey} className="sh-progress-fill run" />
        </div>
      </div>
    </div>
  )
}