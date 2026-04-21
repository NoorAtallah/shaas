'use client'

import { useEffect, useRef, useState } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'
const BG   = '#f0f7ff'   // very light blue-white tint

export default function ShaasBreaker() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top)  / rect.height) * 100,
      })
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])

  const marqueeItems = ['Strategic Advisory', 'Project Development', 'Human Capital', 'Logistics Intelligence', 'AI & Innovation', 'Legal Sciences', 'Oil & Gas', 'Administrative Excellence']
  const marqueeLocations = ['Abu Dhabi', 'UAE', 'MENA', 'GCC', 'Gulf Region', 'Al Maryah Island', 'ADGM', 'Khalifa Port']

  return (
    <section
      ref={ref}
      style={{
        background: BG,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
        borderTop: `1px solid rgba(0,0,0,0.08)`,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .brk-marquee-wrap {
          overflow: hidden;
          border-top: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .brk-marquee-track {
          display: flex; white-space: nowrap;
          animation: brk-scroll 20s linear infinite;
        }
        .brk-marquee-track:hover { animation-play-state: paused; }
        @keyframes brk-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brk-marquee-item {
          display: inline-flex; align-items: center; gap: 20px;
          padding: 13px 28px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px; letter-spacing: 0.25em;
          color: rgba(0,0,0,0.2);
          flex-shrink: 0;
        }
        .brk-marquee-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: ${BLUE}; opacity: 0.6; flex-shrink: 0;
        }

        .brk-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: ${INK}; color: #fff; border: none;
          padding: 14px 32px; cursor: pointer;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          transition: background 0.25s;
        }
        .brk-cta-btn:hover { background: ${BLUE}; }
        .brk-cta-btn:hover .brk-arr { transform: translate(3px,-3px); }
        .brk-arr { transition: transform 0.25s; display: inline-block; }

        .brk-cta-ghost {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent; color: #888;
          border: 1px solid rgba(0,0,0,0.15); padding: 14px 32px;
          cursor: pointer; font-size: 10px; letter-spacing: 0.3em;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
          font-weight: 500; transition: border-color 0.25s, color 0.25s;
        }
        .brk-cta-ghost:hover { border-color: ${BLUE}; color: ${INK}; }

        .brk-line {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .brk-line.visible { opacity: 1; transform: translateY(0); }

        .brk-contact-val {
          font-size: 12px; color: #777; font-weight: 300;
          transition: color 0.2s; text-decoration: none; display: block;
        }
        .brk-contact-val:hover { color: ${BLUE}; }
      `}</style>

      {/* Subtle mouse-tracking radial */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(ellipse 55% 70% at ${mousePos.x}% ${mousePos.y}%, rgba(0,170,255,0.1) 0%, transparent 70%)`,
          transition: 'background 1s ease',
        }}
      />

      {/* Top marquee */}
      <div className="brk-marquee-wrap">
        <div className="brk-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div className="brk-marquee-item" key={i}>
              <div className="brk-marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '80px 48px 72px', maxWidth: 1000, margin: '0 auto' }}>

        {/* Eyebrow */}
        <div className={`brk-line${inView ? ' visible' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          <div style={{ width: 20, height: 2, background: BLUE, flexShrink: 0 }} />
          <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>
            Abu Dhabi · Est. 2009
          </span>
        </div>

        {/* Headline lines */}
        <div className={`brk-line${inView ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 0.9, letterSpacing: '-0.025em', color: INK }}>
            Ready to
          </div>
        </div>

        <div className={`brk-line${inView ? ' visible' : ''}`} style={{ transitionDelay: '160ms' }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 0.9, letterSpacing: '-0.025em', color: BLUE }}>
            transform your
          </div>
        </div>

        <div className={`brk-line${inView ? ' visible' : ''}`} style={{ transitionDelay: '240ms', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 0.9, letterSpacing: '-0.025em', color: INK }}>
            enterprise?
          </div>
        </div>

        {/* Divider */}
        <div className={`brk-line${inView ? ' visible' : ''}`} style={{ transitionDelay: '300ms', marginBottom: 36 }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(0,0,0,0.08)' }} />
        </div>

        {/* Subtext + CTAs */}
        <div
          className={`brk-line${inView ? ' visible' : ''}`}
          style={{
            transitionDelay: '360ms',
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
          }}
        >
          <p style={{
            fontFamily: "'Fraunces', serif", fontStyle: 'italic',
            fontSize: 16, color: '#888',
            lineHeight: 1.7, maxWidth: 440, margin: 0, fontWeight: 300,
          }}>
            Partner with Abu Dhabi's leading general consultancy — licensed across eight disciplines, trusted by enterprises across the Gulf and beyond.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
            <button className="brk-cta-btn">
              Engage Now <span className="brk-arr">↗</span>
            </button>
            <button className="brk-cta-ghost">Learn More</button>
          </div>
        </div>

        {/* Contact strip */}
        <div
          className={`brk-line${inView ? ' visible' : ''}`}
          style={{
            transitionDelay: '420ms',
            display: 'flex', alignItems: 'center', gap: 0,
            marginTop: 48, paddingTop: 28,
            borderTop: '1px solid rgba(0,0,0,0.08)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Email',  val: 'info@shaas.com' },
            { label: 'Phone',  val: '+971 XX XXX XXXX' },
            { label: 'Office', val: 'ADGM Square, Al Maryah Island, Abu Dhabi' },
          ].map((item, i) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(0,0,0,0.1)', margin: '0 32px' }} />}
              <div>
                <div style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#bbb', marginBottom: 4 }}>
                  {item.label}
                </div>
                <div className="brk-contact-val">{item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee — reversed */}
      <div className="brk-marquee-wrap">
        <div className="brk-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '24s' }}>
          {[...marqueeLocations, ...marqueeLocations].map((item, i) => (
            <div className="brk-marquee-item" key={i}>
              <div className="brk-marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}