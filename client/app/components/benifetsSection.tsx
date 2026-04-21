'use client'

import { useEffect, useRef, useState } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed',    desc: 'Delivered across the UAE, GCC, and MENA region' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction',   desc: 'Retained client rate across all service lines' },
  { value: 15,  suffix: '+', label: 'Years of Excellence',   desc: 'Operating from Abu Dhabi since 2009' },
  { value: 50,  suffix: '+', label: 'Global Partners',       desc: 'Strategic alliances across 4 continents' },
  { value: 8,   suffix: '',  label: 'Licensed Activities',   desc: 'Authorised by Abu Dhabi authorities' },
  { value: 120, suffix: '+', label: 'Experts & Consultants', desc: 'Multidisciplinary professionals on our team' },
]

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ value, suffix, label, desc, index, inView }: {
  value: number; suffix: string; label: string; desc: string; index: number; inView: boolean
}) {
  const count = useCountUp(value, 1600 + index * 100, inView)
  return (
    <div
      style={{
        padding: '36px 28px',
        background: '#fff',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        position: 'relative',
      }}
    >
      {index === 0 && (
        <div style={{ position: 'absolute', top: 0, left: 28, width: 32, height: 2, background: BLUE }} />
      )}
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(44px, 6vw, 72px)',
        lineHeight: 1, letterSpacing: '-0.01em', color: INK,
        marginBottom: 10, display: 'flex', alignItems: 'baseline', gap: 3,
      }}>
        <span>{count}</span>
        <span style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: BLUE }}>{suffix}</span>
      </div>
      <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 15, color: INK, marginBottom: 6, lineHeight: 1.2 }}>
        {label}
      </div>
      <div style={{ fontSize: 11, color: '#999', fontWeight: 300, lineHeight: 1.6 }}>
        {desc}
      </div>
    </div>
  )
}

export default function ShaasStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        borderTop: `1px solid rgba(0,0,0,0.08)`,
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .sts-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 48px 48px 28px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          gap: 24px;
          flex-wrap: wrap;
        }

        .sts-header-desc {
          max-width: 320px;
          font-size: 13px;
          line-height: 1.7;
          color: #888;
          font-weight: 300;
          text-align: right;
          font-family: 'Fraunces', serif;
          font-style: italic;
          margin: 0;
        }

        .sts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: rgba(0,0,0,0.06);
          gap: 1px;
        }

        .sts-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 48px;
          border-top: 1px solid rgba(0,0,0,0.08);
          background: ${INK};
          flex-wrap: wrap;
          gap: 10px;
        }

        .sts-bottom-left {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }

        .sts-loc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${BLUE}; animation: stspulse 2s infinite;
        }
        @keyframes stspulse {
          0%,100%{box-shadow:0 0 0 0 rgba(0,170,255,0.5);}
          50%{box-shadow:0 0 0 5px rgba(0,170,255,0);}
        }

        @media (max-width: 768px) {
          .sts-header {
            padding: 32px 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .sts-header-desc {
            text-align: left;
            max-width: 100%;
          }
          .sts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sts-bottom-bar {
            padding: 14px 24px;
          }
        }

        @media (max-width: 480px) {
          .sts-grid {
            grid-template-columns: 1fr;
          }
          .sts-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 20px;
          }
          .sts-header { padding: 28px 20px 16px; }
        }
      `}</style>

      {/* Header */}
      <div className="sts-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: BLUE, marginBottom: 12 }}>
            <div style={{ width: 20, height: 2, background: BLUE, flexShrink: 0 }} />
            By The Numbers
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: INK }}>
            Measured in
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#777' }}>
            Results
          </div>
        </div>
        <p className="sts-header-desc">
          Two decades of consultancy excellence across Abu Dhabi and the broader Gulf region — every number tells a story of trust, precision, and impact.
        </p>
      </div>

      {/* Stats grid */}
      <div className="sts-grid">
        {stats.map((stat, idx) => (
          <StatCard key={stat.label} {...stat} index={idx} inView={inView} />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="sts-bottom-bar">
        <div className="sts-bottom-left">
          {['Est. 2009', 'Abu Dhabi, UAE', 'ADGM Registered'].map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {i > 0 && <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />}
              <span style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="sts-loc-dot" />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            Active Operations
          </span>
        </div>
      </div>
    </section>
  )
}