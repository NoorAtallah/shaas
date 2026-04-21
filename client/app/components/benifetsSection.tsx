'use client'

import { useEffect, useRef, useState } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', desc: 'Delivered across the UAE, GCC, and MENA region' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', desc: 'Retained client rate across all service lines' },
  { value: 15,  suffix: '+', label: 'Years of Excellence', desc: 'Operating from Abu Dhabi since 2009' },
  { value: 50,  suffix: '+', label: 'Global Partners', desc: 'Strategic alliances across 4 continents' },
  { value: 8,   suffix: '',  label: 'Licensed Activities', desc: 'Authorised by Abu Dhabi authorities' },
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
      // ease out cubic
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
  const isLast = index === 5

  return (
    <div
      className="ss-stat-card"
      style={{
        padding: '40px 36px',
        borderRight: (index + 1) % 3 === 0 ? 'none' : `1px solid rgba(0,0,0,0.08)`,
        borderBottom: index < 3 ? `1px solid rgba(0,0,0,0.08)` : 'none',
        position: 'relative',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {/* top accent line — only on first card */}
      {index === 0 && (
        <div style={{ position: 'absolute', top: 0, left: 36, width: 32, height: 2, background: BLUE }} />
      )}

      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(52px, 6vw, 80px)',
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: INK,
        marginBottom: 12,
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
      }}>
        <span>{count}</span>
        <span style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: BLUE }}>{suffix}</span>
      </div>

      <div style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 800,
        fontSize: 16,
        color: INK,
        marginBottom: 8,
        lineHeight: 1.2,
      }}>
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: '#fff', borderTop: `1px solid rgba(0,0,0,0.08)`, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ss-stat-card { background: #fff; }
        .ss-stat-card:hover { background: rgba(0,170,255,0.015); }
        .ss-stat-card:hover .ss-stat-card-label { color: ${BLUE}; }
      `}</style>

      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '48px 48px 28px',
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
      }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
            color: BLUE, marginBottom: 12,
          }}>
            <div style={{ width: 20, height: 2, background: BLUE, flexShrink: 0 }} />
            By The Numbers
          </div>
          <div style={{
            fontFamily: "'Fraunces', serif", fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 0.95,
            letterSpacing: '-0.02em', color: INK,
          }}>
            Measured in<br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>Results</em>
          </div>
        </div>

        <p style={{
          maxWidth: 320, fontSize: 13, lineHeight: 1.7,
          color: '#888', fontWeight: 300, textAlign: 'right',
          fontFamily: "'Fraunces', serif", fontStyle: 'italic',
        }}>
          Two decades of consultancy excellence across Abu Dhabi and the broader Gulf region — every number tells a story of trust, precision, and impact.
        </p>
      </div>

      {/* Stats grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {stats.map((stat, idx) => (
          <StatCard key={stat.label} {...stat} index={idx} inView={inView} />
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px',
        borderTop: `1px solid rgba(0,0,0,0.08)`,
        background: INK,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {['Est. 2009', 'Abu Dhabi, UAE', 'ADGM Registered'].map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)' }} />}
              <span style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE, animation: 'nbpulse 2s infinite' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            Active Operations
          </span>
        </div>
      </div>
    </section>
  )
}