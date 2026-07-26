'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

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
  { num: '01', title: 'Integrity', desc: 'We operate with honesty, transparency, and professionalism, building relationships based on trust.' },
  { num: '02', title: 'Excellence', desc: 'We are committed to delivering high-quality advisory solutions that meet the highest professional standards.' },
  { num: '03', title: 'Partnership', desc: 'We work alongside our clients, becoming a trusted extension of their leadership teams.' },
  { num: '04', title: 'Practical Impact', desc: 'We focus on solutions that create measurable business value, not theoretical recommendations.' },
  { num: '05', title: 'Continuous Improvement', desc: 'We continuously learn, adapt, and improve to support our clients in an evolving business environment.' },
]

const whyUs = [
  {
    title: 'Integrated Expertise',
    desc: 'We bring together legal, financial, strategic, operational, and human capital expertise to address complex business challenges.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Commercial Perspective',
    desc: 'We understand that businesses require solutions that are practical, commercially viable, and aligned with objectives.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Every organisation is different. We develop solutions based on your industry, challenges, and growth ambitions.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
]

const approach = [
  { title: 'Strategic Advisory', desc: 'Helping leaders define direction, evaluate opportunities, and make informed decisions.' },
  { title: 'Financial Intelligence', desc: 'Supporting businesses with financial analysis, performance improvement, and value creation.' },
  { title: 'Risk Management', desc: 'Helping organisations identify, manage, and mitigate business, legal, and operational risks.' },
  { title: 'Organisational Capability', desc: 'Building stronger organisations through effective structures, processes, and people strategies.' },
]

export default function AboutPage() {
  const heroRef = useInView(0.1)
  const storyRef = useInView(0.15)
  const vmRef = useInView(0.15)
  const appRef = useInView(0.1)
  const whyRef = useInView(0.1)
  const valRef = useInView(0.1)

  return (
    <div style={{ background: '#fff', color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ab-fade { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        .ab-fade.in { opacity:1; transform:translateY(0); }
        .ab-fade-left { opacity:0; transform:translateX(-32px); transition:opacity .7s ease, transform .7s ease; }
        .ab-fade-left.in { opacity:1; transform:translateX(0); }
        .ab-fade-right { opacity:0; transform:translateX(32px); transition:opacity .7s ease, transform .7s ease; }
        .ab-fade-right.in { opacity:1; transform:translateX(0); }

        .ab-why-card { position:relative; overflow:hidden; }
        .ab-why-card img { width:100%; height:260px; object-fit:cover; display:block; filter:grayscale(25%) contrast(1.05); transition:transform .8s ease, filter .5s ease; }
        .ab-why-card:hover img { transform:scale(1.04); filter:grayscale(0%) contrast(1.05); }
        .ab-why-card-body { padding:24px 0 32px; border-bottom:1px solid rgba(0,0,0,0.08); }

        .ab-val-row { display:grid; grid-template-columns:60px 1fr; padding:28px 0; border-bottom:1px solid rgba(0,0,0,0.07); position:relative; overflow:hidden; transition:padding-left .25s; }
        .ab-val-row::before { content:''; position:absolute; left:0; top:0; bottom:0; width:0; background:${BLUE}; transition:width .3s ease; }
        .ab-val-row:hover::before { width:3px; }
        .ab-val-row:hover { padding-left:12px; }
        .ab-val-row:hover .ab-val-title { color:${BLUE}; }
        .ab-val-num { font-family:'Bebas Neue',sans-serif; font-size:12px; letter-spacing:0.2em; color:#ccc; padding-top:3px; transition:color .3s; }
        .ab-val-row:hover .ab-val-num { color:${BLUE}; }
        .ab-val-title { font-family:'Fraunces',serif; font-weight:800; font-size:18px; color:${INK}; margin-bottom:6px; transition:color .3s; }
        .ab-val-desc { font-size:12px; color:#888; font-weight:300; line-height:1.7; }

        .ab-app-card { padding:28px; border:1px solid rgba(0,0,0,0.08); transition:background .3s; }
        .ab-app-card:hover { background:${INK}; }
        .ab-app-num { font-family:'Bebas Neue',sans-serif; font-size:14px; letter-spacing:0.15em; color:${BLUE}; margin-bottom:14px; }
        .ab-app-title { font-family:'Fraunces',serif; font-weight:800; font-size:20px; color:${INK}; margin-bottom:8px; transition:color .3s; }
        .ab-app-card:hover .ab-app-title { color:#fff; }
        .ab-app-desc { font-size:13px; color:#888; font-weight:300; line-height:1.7; transition:color .3s; }
        .ab-app-card:hover .ab-app-desc { color:rgba(255,255,255,0.65); }

        .ab-img-tag { position:absolute; top:16px; left:16px; background:${BLUE}; color:#fff; font-size:8px; letter-spacing:0.3em; text-transform:uppercase; padding:4px 10px; font-weight:500; }

        .ab-btn { display:inline-flex; align-items:center; gap:8px; background:#fff; color:${INK}; padding:16px 28px; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; font-weight:500; text-decoration:none; transition:background .25s,color .25s; }
        .ab-btn:hover { background:${BLUE}; color:#fff; }

        @media (max-width:900px){
          .ab-story-grid { grid-template-columns:1fr !important; }
          .ab-vm-grid { grid-template-columns:1fr !important; }
          .ab-why-grid { grid-template-columns:1fr !important; }
          .ab-app-grid { grid-template-columns:1fr !important; }
          .ab-val-cols { grid-template-columns:1fr !important; }
          .ab-hero-img { display:none !important; }
          .ab-pad { padding-left:24px !important; padding-right:24px !important; }
        }
      `}</style>

      {/* 1. HERO */}
      <div ref={heroRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px' }}>
          <div className="ab-pad" style={{ padding: '120px 48px 72px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>About SHAAS</span>
            </div>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(34px, 4.4vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: INK }}>
                Strategic Advisors Supporting Businesses Through <em style={{ fontWeight: 300, fontStyle: 'italic', color: BLUE }}>Growth, Transformation, and Change</em>
              </div>
            </div>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '200ms', marginTop: 32 }}>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, maxWidth: 520, margin: 0, fontWeight: 300 }}>
                SHAAS is a UAE-based consulting firm providing integrated advisory solutions across Legal Advisory, Business &amp; Financial Advisory, Management Consulting, and Human Capital Advisory. We work with business owners, CEOs, investors, and leadership teams to navigate complex challenges, improve performance, manage risks, and unlock sustainable growth.
              </p>
            </div>
            <div className={`ab-fade${heroRef.inView ? ' in' : ''}`} style={{ transitionDelay: '300ms', display: 'flex', gap: 0, borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 32, marginTop: 40 }}>
              {[['Based in', 'UAE'], ['Model', 'Integrated'], ['Focus', 'Advisory']].map(([label, val], i) => (
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
          <div className="ab-hero-img" style={{ position: 'relative', overflow: 'hidden', minHeight: 460 }}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85" alt="UAE business district" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(15%) contrast(1.05)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.3) 0%, transparent 40%)' }} />
            <div className="ab-img-tag">United Arab Emirates</div>
          </div>
        </div>
      </div>

      {/* 2. OUR STORY */}
      <div ref={storyRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ab-story-grid">
          <div style={{ position: 'relative', background: '#f8f8f8', overflow: 'hidden', minHeight: 520 }}>
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=85" alt="Advisory meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(10%)', opacity: storyRef.inView ? 1 : 0, transform: storyRef.inView ? 'scale(1)' : 'scale(1.04)', transition: 'opacity .9s ease, transform 1.2s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.5) 100%)' }} />
            <div className="ab-img-tag">Our Story</div>
          </div>
          <div className="ab-pad" style={{ padding: '72px 56px', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Our Story</span>
            </div>
            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms', marginBottom: 28 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: INK }}>
                A trusted advisory partner for businesses in the <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>UAE and beyond.</em>
              </div>
            </div>
            <div className={`ab-fade${storyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: '0 0 20px' }}>
                Businesses today face interconnected challenges. Legal decisions impact commercial outcomes. Financial performance influences strategic choices. Organisational capability determines execution success.
              </p>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: '0 0 20px' }}>
                Recognising this reality, SHAAS was established with a vision to create a multidisciplinary advisory firm that brings together different areas of expertise under one platform — with a simple objective: to become a trusted strategic partner for businesses by providing practical advisory solutions that create measurable value.
              </p>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Rather than operating as a traditional consultancy focused only on recommendations, SHAAS works alongside leadership teams to understand challenges, develop solutions, and support implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. VISION & MISSION */}
      <div ref={vmRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="ab-pad" style={{ padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className={`ab-fade${vmRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 20, height: 2, background: BLUE }} />
            <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Direction</span>
          </div>
          <div className={`ab-fade${vmRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.025em', color: INK }}>
              Vision &amp; <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>Mission</em>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="ab-vm-grid">
          <div className="ab-pad" style={{ padding: '56px 48px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ab-fade-left${vmRef.inView ? ' in' : ''}`}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.35em', color: BLUE, marginBottom: 16 }}>VISION</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 26, lineHeight: 1.25, color: INK, marginBottom: 20 }}>
                Empowering businesses to achieve sustainable growth and long-term value creation.
              </div>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Our vision is to become a trusted advisory partner for organisations seeking to grow, transform, and create lasting value — supporting businesses with integrated expertise, practical solutions, and strategic guidance throughout their growth journey.
              </p>
            </div>
          </div>
          <div className="ab-pad" style={{ padding: '56px 48px' }}>
            <div className={`ab-fade-right${vmRef.inView ? ' in' : ''}`}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.35em', color: BLUE, marginBottom: 16 }}>MISSION</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 26, lineHeight: 1.25, color: INK, marginBottom: 20 }}>
                Delivering practical advisory solutions that create measurable impact.
              </div>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Our mission is to help businesses overcome challenges and capture opportunities by combining strategic insight, commercial expertise, industry understanding, and practical execution support — creating meaningful outcomes through trusted partnerships and tailored advisory solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ADVISORY APPROACH */}
      <div ref={appRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="ab-pad" style={{ padding: '56px 48px 40px' }}>
          <div className={`ab-fade${appRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 20, height: 2, background: BLUE }} />
            <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Our Advisory Approach</span>
          </div>
          <div className={`ab-fade${appRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms', marginBottom: 8 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1, letterSpacing: '-0.02em', color: INK }}>
              Expertise with practical <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>business understanding.</em>
            </div>
          </div>
        </div>
        <div className="ab-pad ab-app-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, padding: '0 48px 56px' }}>
          {approach.map((a, i) => (
            <div key={a.title} className={`ab-app-card ab-fade${appRef.inView ? ' in' : ''}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="ab-app-num">0{i + 1}</div>
              <div className="ab-app-title">{a.title}</div>
              <p className="ab-app-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. WHY SHAAS */}
      <div ref={whyRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="ab-pad" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`ab-fade${whyRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 20, height: 2, background: BLUE }} />
              <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>Why SHAAS</span>
            </div>
            <div className={`ab-fade${whyRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
                More than a consultant — a <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>strategic partner.</em>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-pad ab-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '0 48px' }}>
          {whyUs.map((item, idx) => (
            <div key={item.title} className="ab-why-card" style={{ paddingRight: idx < 2 ? 40 : 0, paddingLeft: idx > 0 ? 40 : 0, borderRight: idx < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none', opacity: whyRef.inView ? 1 : 0, transform: whyRef.inView ? 'translateY(0)' : 'translateY(32px)', transition: `opacity .65s ease ${idx * 100}ms, transform .65s ease ${idx * 100}ms` }}>
              <div style={{ position: 'relative', overflow: 'hidden', marginTop: 40 }}>
                <img src={item.img} alt={item.title} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.5) 100%)' }} />
              </div>
              <div className="ab-why-card-body">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: '0.2em', color: BLUE, marginBottom: 10, marginTop: 20 }}>0{idx + 1}</div>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 20, color: INK, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</div>
                <p style={{ fontSize: 12.5, color: '#888', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. VALUES */}
      <div ref={valRef.ref} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="ab-pad" style={{ padding: '56px 48px 40px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className={`ab-fade${valRef.inView ? ' in' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 20, height: 2, background: BLUE }} />
            <span style={{ fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase', color: BLUE, fontWeight: 500 }}>What We Stand For</span>
          </div>
          <div className={`ab-fade${valRef.inView ? ' in' : ''}`} style={{ transitionDelay: '80ms' }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: INK }}>
              Our <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#777' }}>Values</em>
            </div>
          </div>
        </div>
        <div className="ab-pad ab-val-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 48px 64px', columnGap: 48 }}>
          {values.map((val, idx) => (
            <div key={val.num} className="ab-val-row" style={{ opacity: valRef.inView ? 1 : 0, transform: valRef.inView ? 'translateY(0)' : 'translateY(24px)', transition: `opacity .6s ease ${idx * 80}ms, transform .6s ease ${idx * 80}ms` }}>
              <div className="ab-val-num">{val.num}</div>
              <div>
                <div className="ab-val-title">{val.title}</div>
                <div className="ab-val-desc">{val.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. CTA */}
     
    </div>
  )
}