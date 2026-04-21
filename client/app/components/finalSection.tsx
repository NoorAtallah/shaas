'use client'

import { useEffect, useRef, useState } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

export default function ShaasCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      style={{
        background: '#fff',
        borderTop: `2px solid ${INK}`,
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .cta-reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .cta-reveal.visible { opacity: 1; transform: translateY(0); }

        .cta-input {
          flex: 1; height: 52px; border: 1px solid rgba(0,0,0,0.15);
          border-right: none; padding: 0 20px;
          font-size: 12px; font-family: 'DM Sans', sans-serif;
          font-weight: 300; color: ${INK}; background: #fff;
          outline: none; transition: border-color 0.2s;
          min-width: 0;
        }
        .cta-input::placeholder { color: #bbb; }
        .cta-input:focus { border-color: ${BLUE}; }

        .cta-submit {
          height: 52px; padding: 0 28px;
          background: ${INK}; color: #fff; border: none;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          cursor: pointer; white-space: nowrap;
          transition: background 0.25s;
          flex-shrink: 0;
        }
        .cta-submit:hover { background: ${BLUE}; }

        .cta-social-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          text-decoration: none; cursor: pointer;
          transition: padding-left 0.25s;
        }
        .cta-social-link:hover { padding-left: 6px; }
        .cta-social-link:hover .cta-social-name { color: ${BLUE}; }
        .cta-social-link:hover .cta-social-arr { color: ${BLUE}; transform: translate(2px,-2px); }
        .cta-social-name {
          font-family: 'Fraunces', serif; font-weight: 800;
          font-size: 15px; color: ${INK}; transition: color 0.25s;
        }
        .cta-social-arr {
          font-size: 14px; color: #ccc;
          transition: color 0.25s, transform 0.25s; display: inline-block;
        }

        .cta-footer-link {
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          color: #aaa; text-decoration: none; cursor: pointer;
          transition: color 0.2s;
        }
        .cta-footer-link:hover { color: ${BLUE}; }

        .cta-loc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${BLUE}; flex-shrink: 0;
          animation: ctaloc 2s infinite;
        }
        @keyframes ctaloc {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,170,255,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(0,170,255,0); }
        }
      `}</style>

      {/* ── TOP — Main CTA ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1px 420px',
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
      }}>

        {/* Left — headline */}
        <div style={{ padding: '64px 48px' }}>
          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 20, height: 2, background: BLUE }} />
            <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>
              Get In Touch
            </span>
          </div>

          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
              Let's build
            </div>
          </div>
          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '150ms', marginBottom: 32 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: BLUE }}>
              something great.
            </div>
          </div>

          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '220ms', marginBottom: 36 }}>
            <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 14, color: '#999', lineHeight: 1.7, maxWidth: 380, margin: 0, fontWeight: 300 }}>
              Reach out to our Abu Dhabi team and discover how SHAAS can elevate your enterprise across all eight of our licensed disciplines.
            </p>
          </div>

          {/* Email form */}
          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '290ms' }}>
            <div style={{ display: 'flex', maxWidth: 440 }}>
              <input className="cta-input" type="email" placeholder="Your email address" />
              <button className="cta-submit">Send ↗</button>
            </div>
            <div style={{ marginTop: 10, fontSize: 10, color: '#bbb', letterSpacing: '0.1em' }}>
              We'll respond within 24 hours.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ background: 'rgba(0,0,0,0.08)' }} />

        {/* Right — contact details + social */}
        <div style={{ padding: '64px 40px', display: 'flex', flexDirection: 'column', gap: 0 }}>

          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '100ms', marginBottom: 32 }}>
            <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Contact</div>
            {[
              { label: 'Email',   val: 'info@shaas.com' },
              { label: 'Phone',   val: '+971 XX XXX XXXX' },
              { label: 'Address', val: 'ADGM Square, Al Maryah Island\nAbu Dhabi, UAE' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ccc', marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#555', fontWeight: 300, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', marginBottom: 24 }} />

          {/* Social links */}
          <div className={`cta-reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '180ms' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>Follow</div>
            {['LinkedIn', 'X (Twitter)', 'Instagram'].map(s => (
              <div key={s} className="cta-social-link">
                <span className="cta-social-name">{s}</span>
                <span className="cta-social-arr">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '16px 48px',
        borderTop: `1px solid rgba(0,0,0,0.08)`,
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="cta-loc-dot" />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa' }}>
            Abu Dhabi, UAE
          </span>
        </div>

        {/* Center — logo */}
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '0.2em', color: INK, textAlign: 'center' }}>
          SHAAS
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'flex-end' }}>
          {['Privacy', 'Terms', 'Sitemap'].map((l, i) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {i > 0 && <span style={{ color: '#ddd', fontSize: 10 }}>·</span>}
              <a className="cta-footer-link">{l}</a>
            </span>
          ))}
          <span style={{ color: '#ddd', fontSize: 10 }}>·</span>
          <span style={{ fontSize: 9, letterSpacing: '0.15em', color: '#ccc' }}>© 2025 SHAAS</span>
        </div>
      </div>
    </footer>
  )
}