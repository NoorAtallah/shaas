'use client'

import { useEffect, useRef, useState } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

const values = [
  { num: '01', title: 'Integrity', desc: 'We operate with complete transparency and ethical rigour in every engagement, earning trust through consistent action.' },
  { num: '02', title: 'Excellence', desc: 'We hold ourselves to the highest standards of professional delivery — mediocrity is never an option.' },
  { num: '03', title: 'Innovation', desc: 'We embrace emerging technologies and forward-thinking methodologies to deliver solutions that are ahead of the curve.' },
  { num: '04', title: 'Partnership', desc: 'We treat every client as a long-term partner. Your success is our benchmark, not just the completion of a brief.' },
  { num: '05', title: 'Regional Depth', desc: 'Our deep understanding of the UAE, GCC, and MENA landscape gives our clients a decisive advantage.' },
  { num: '06', title: 'Impact', desc: 'Every recommendation we make is measured by the tangible, lasting impact it creates for people and organisations.' },
]

const whyUs = [
  {
    title: 'Licensed & Authorised',
    desc: 'Operating under 8 official Abu Dhabi licensed activities — fully registered with ADGM and Abu Dhabi authorities.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Deep Gulf Expertise',
    desc: 'Over 15 years embedded in the Abu Dhabi business ecosystem — we understand the culture, regulation, and opportunity landscape intimately.',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
  {
    title: 'Multidisciplinary Team',
    desc: 'Our consultants span strategy, technology, law, HR, logistics, and energy — delivering integrated thinking across every challenge.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
]

export default function AboutPage() {
  const heroRef   = useInView(0.1)
  const storyRef  = useInView(0.15)
  const vmRef     = useInView(0.15)
  const whyRef    = useInView(0.1)
  const valRef    = useInView(0.1)

  return (
    <div style={{ background: '#fff', color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ab-fade {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ab-fade.in { opacity: 1; transform: translateY(0); }

        .ab-fade-left {
          opacity: 0; transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ab-fade-left.in { opacity: 1; transform: translateX(0); }

        .ab-fade-right {
          opacity: 0; transform: translateX(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ab-fade-right.in { opacity: 1; transform: translateX(0); }

        /* WHY US cards */
        .ab-why-card {
          position: relative; overflow: hidden;
          cursor: default;
        }
        .ab-why-card img {
          width: 100%; height: 260px; object-fit: cover; display: block;
          filter: grayscale(25%) contrast(1.05);
          transition: transform 0.8s ease, filter 0.5s ease;
        }
        .ab-why-card:hover img { transform: scale(1.04); filter: grayscale(0%) contrast(1.05); }
        .ab-why-card-body {
          padding: 24px 0 32px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ab-why-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: ${BLUE};
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-why-card:hover::after { transform: scaleX(1); }

        /* VALUES */
        .ab-val-row {
          display: grid; grid-template-columns: 60px 1fr;
          gap: 0; padding: 28px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative; overflow: hidden;
          transition: padding-left 0.25s;
          cursor: default;
        }
        .ab-val-row::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 0; background: ${BLUE};
          transition: width 0.3s ease;
        }
        .ab-val-row:hover::before { width: 3px; }
        .ab-val-row:hover { padding-left: 12px; }
        .ab-val-row:hover .ab-val-title { color: ${BLUE}; }

        .ab-val-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px; letter-spacing: 0.2em;
          color: #ccc; padding-top: 3px;
          transition: color 0.3s;
        }
        .ab-val-row:hover .ab-val-num { color: ${BLUE}; }

        .ab-val-title {
          font-family: 'Fraunces', serif; font-weight: 800;
          font-size: 18px; color: ${INK}; margin-bottom: 6px;
          transition: color 0.3s;
        }
        .ab-val-desc {
          font-size: 12px; color: #888; font-weight: 300; line-height: 1.7;
        }

        /* IMAGE stamp tag */
        .ab-img-tag {
          position: absolute; top: 16px; left: 16px;
          background: ${BLUE}; color: #fff;
          font-size: 8px; letter-spacing: 0.3em; text-transform: uppercase;
          padding: 4px 10px; font-family: 'DM Sans', sans-serif; font-weight: 500;
        }

        @media (max-width: 900px) {
          .ab-story-grid { grid-template-columns: 1fr !important; }
          .ab-vm-grid { grid-template-columns: 1fr !important; }
          .ab-why-grid { grid-template-columns: 1fr !important; }
          .ab-val-cols { grid-template-columns: 1fr !important; }
          .ab-hero-img { display: none !important; }
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <div ref={heroRef.ref} style={{ borderBottom: `1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px' }} className="ab-hero-img-wrap">

          {/* Left text */}
          <div style={{ padding: '80px 48px 72px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>About SHAAS</span>
            </div>

            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 0.9, letterSpacing: '-0.025em', color: INK }}>
                Built on trust.
              </div>
            </div>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '150ms', marginBottom: 36 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 0.9, letterSpacing: '-0.025em', color: BLUE }}>
                Driven by results.
              </div>
            </div>

            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '220ms', marginBottom: 40 }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 16, color: '#888', lineHeight: 1.7, maxWidth: 480, margin: 0, fontWeight: 300 }}>
                SHAAS General Consulting is an Abu Dhabi-based consultancy licensed across eight disciplines — from AI and strategy to logistics, HR, and legal sciences. We partner with enterprises across the UAE, GCC, and MENA to unlock their full potential.
              </p>
            </div>

            {/* Quick facts row */}
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '290ms', display: 'flex', gap: 0, borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 32 }}>
              {[['Est.', '2009'], ['Based in', 'Abu Dhabi'], ['Licensed', '8 Activities']].map(([label, val], i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: 1, height: 32, background: 'rgba(0,0,0,0.08)', margin: '0 28px' }} />}
                  <div>
                    <div style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#bbb', marginBottom: 3 }}>{label}</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.1em', color: INK }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="ab-hero-img" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85"
              alt="Abu Dhabi skyline"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(15%) contrast(1.05)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.3) 0%, transparent 40%)' }} />
            <div className="ab-img-tag">Abu Dhabi, UAE</div>
            {/* ghost year */}
            <div style={{ position: 'absolute', bottom: -8, right: 16, fontFamily: "'Bebas Neue', sans-serif", fontSize: 120, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.07)', pointerEvents: 'none', userSelect: 'none' }}>2009</div>
          </div>
        </div>
      </div>

      {/* ── 2. OUR STORY ─────────────────────────────────── */}
      <div ref={storyRef.ref} style={{ borderBottom: `1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ab-story-grid">

          {/* Left image stack */}
          <div style={{ position: 'relative', background: '#f8f8f8', overflow: 'hidden', minHeight: 520 }}>
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=85"
              alt="Consulting meeting"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'grayscale(10%)',
                opacity: storyRef.inView ? 1 : 0,
                transform: storyRef.inView ? 'scale(1)' : 'scale(1.04)',
                transition: 'opacity 0.9s ease, transform 1.2s ease',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.5) 100%)' }} />
            <div className="ab-img-tag">Our Story</div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: 32, right: 32,
              background: '#fff', padding: '20px 24px',
              borderLeft: `3px solid ${BLUE}`,
              opacity: storyRef.inView ? 1 : 0,
              transform: storyRef.inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, lineHeight: 1, color: INK }}>
                15<span style={{ color: BLUE, fontSize: 24 }}>+</span>
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#aaa', marginTop: 2 }}>Years Active</div>
            </div>
          </div>

          {/* Right text */}
          <div style={{ padding: '72px 56px', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Our Story</span>
            </div>

            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms', marginBottom: 28 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: INK }}>
                From Abu Dhabi,
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#777' }}>
                for the world.
              </div>
            </div>

            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: '0 0 20px' }}>
                SHAAS was founded in 2009 with a singular conviction — that the UAE deserved a consultancy that truly understood its ambition. Established in Abu Dhabi, we set out to build an institution that could serve the region's most demanding enterprises with international-grade rigour and local depth.
              </p>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: '0 0 20px' }}>
                Over fifteen years, we have grown from a boutique strategy firm into a fully licensed, multi-disciplinary consultancy spanning eight practice areas. From advising sovereign-adjacent entities to scaling family businesses, our portfolio reflects the breadth and diversity of the UAE economy itself.
              </p>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Today, SHAAS operates from Al Maryah Island — the heart of Abu Dhabi's financial district — with a team of over 120 experts committed to delivering measurable, lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. VISION & MISSION ──────────────────────────── */}
      <div ref={vmRef.ref} style={{ borderBottom: `1px solid rgba(0,0,0,0.08)` }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`ab-fade${vmRef.inView ? ' in' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Direction</span>
            </div>
            <div className={`ab-fade${vmRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
                Vision &amp; <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>Mission</em>
              </div>
            </div>
          </div>
        </div>

        {/* Vision / Mission split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ab-vm-grid">

          {/* Vision */}
          <div style={{ padding: '56px 48px', borderRight: '1px solid rgba(0,0,0,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div className={`ab-fade-left${vmRef.inView ? ' in' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.35em', color: BLUE, marginBottom: 16 }}>VISION</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 28, lineHeight: 1.2, color: INK, marginBottom: 20 }}>
                To be the most trusted consultancy in the Arab world — a benchmark for excellence across every discipline we serve.
              </div>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                We envision a future where organisations across the Gulf and beyond are equipped with the strategic clarity, operational precision, and human capital needed to lead in an increasingly complex world.
              </p>
            </div>

            {/* Background image */}
            <div style={{ marginTop: 40, position: 'relative', height: 220, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                alt="Vision"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)',
                  opacity: vmRef.inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.6) 100%)' }} />
              <div className="ab-img-tag">Vision</div>
            </div>
          </div>

          {/* Mission */}
          <div style={{ padding: '56px 48px', position: 'relative', overflow: 'hidden' }}>
            <div className={`ab-fade-right${vmRef.inView ? ' in' : ''}`} style={{ transitionDelay: '180ms' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.35em', color: BLUE, marginBottom: 16 }}>MISSION</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 28, lineHeight: 1.2, color: INK, marginBottom: 20 }}>
                To deliver transformative consultancy that creates lasting, measurable value for every client we serve.
              </div>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Our mission is to combine world-class expertise with genuine partnership — going beyond advice to walk alongside our clients through implementation, challenge, and growth, ensuring that every engagement leaves a real and positive mark.
              </p>
            </div>

            <div style={{ marginTop: 40, position: 'relative', height: 220, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Mission"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)',
                  opacity: vmRef.inView ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.6) 100%)' }} />
              <div className="ab-img-tag">Mission</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. WHY CHOOSE US ─────────────────────────────── */}
      <div ref={whyRef.ref} style={{ borderBottom: `1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`ab-fade${whyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Why Us</span>
            </div>
            <div className={`ab-fade${whyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
                Why Choose <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>SHAAS</em>
              </div>
            </div>
          </div>
          <p style={{ maxWidth: 340, fontSize: 13, color: '#aaa', lineHeight: 1.7, fontWeight: 300, fontFamily: "'Fraunces', serif", fontStyle: 'italic', margin: 0 }}>
            Three defining reasons why Abu Dhabi's leading enterprises choose to work with us.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '0 48px 0' }} className="ab-why-grid">
          {whyUs.map((item, idx) => (
            <div
              key={item.title}
              className="ab-why-card"
              style={{
                paddingRight: idx < 2 ? 40 : 0,
                paddingLeft: idx > 0 ? 40 : 0,
                borderRight: idx < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                opacity: whyRef.inView ? 1 : 0,
                transform: whyRef.inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.65s ease ${idx * 100}ms, transform 0.65s ease ${idx * 100}ms`,
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', marginTop: 40 }}>
                <img src={item.img} alt={item.title} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.5) 100%)' }} />
              </div>
              <div className="ab-why-card-body">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.2em', color: BLUE, marginBottom: 10, marginTop: 20 }}>
                  0{idx + 1}
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 20, color: INK, marginBottom: 10, lineHeight: 1.2 }}>
                  {item.title}
                </div>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. VALUES ────────────────────────────────────── */}
      <div ref={valRef.ref}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`ab-fade${valRef.inView ? ' in' : ''}`} style={{ transitionDelay: '0ms', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>What We Stand For</span>
            </div>
            <div className={`ab-fade${valRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
                Our <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>Values</em>
              </div>
            </div>
          </div>
        </div>

        {/* Values — two column list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 48px 64px' }} className="ab-val-cols">
          {values.map((val, idx) => (
            <div
              key={val.num}
              className="ab-val-row"
              style={{
                gridColumn: idx % 2 === 0 ? 1 : 2,
                borderRight: idx % 2 === 0 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                paddingRight: idx % 2 === 0 ? 48 : 0,
                paddingLeft: idx % 2 === 1 ? 48 : 0,
                opacity: valRef.inView ? 1 : 0,
                transform: valRef.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
              }}
            >
              <div className="ab-val-num">{val.num}</div>
              <div>
                <div className="ab-val-title">{val.title}</div>
                <div className="ab-val-desc">{val.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}