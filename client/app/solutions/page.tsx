'use client'

import { useState, useEffect, useRef } from 'react'

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

const services = [
  {
    code: '7020039',
    short: 'AI & Innovation',
    title: 'Innovation & AI Research',
    sub: 'Consultancies',
    icon: '◈',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1000&q=85',
    tagline: 'Harnessing intelligence to drive transformation.',
    desc: 'We help organisations navigate the rapidly evolving landscape of artificial intelligence and emerging technologies. From feasibility assessments to full-scale AI adoption roadmaps, our team brings both technical depth and strategic clarity to every engagement.',
    offerings: ['AI Readiness Assessment', 'Digital Transformation Strategy', 'Innovation Lab Design', 'Technology Vendor Selection', 'AI Ethics & Governance Frameworks'],
    outcome: 'Clients typically achieve 30–50% reduction in manual process time and identify 3–5 high-impact AI use cases within the first engagement.',
  },
  {
    code: '7320001',
    short: 'Marketing',
    title: 'Marketing Consultancy',
    sub: 'And Studies',
    icon: '◇',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85',
    tagline: 'Strategic clarity. Market-defining narratives.',
    desc: 'Our marketing consultancy practice combines rigorous market analysis with creative strategic thinking. We develop brand narratives, positioning frameworks, and go-to-market strategies tailored to the UAE and broader MENA markets.',
    offerings: ['Brand Strategy & Positioning', 'Market Entry Studies', 'Consumer Research & Insights', 'Campaign Strategy', 'Competitive Intelligence'],
    outcome: 'Our clients consistently outperform sector benchmarks in brand recall and market penetration within 12 months of engagement.',
  },
  {
    code: '7020020',
    short: 'Project Dev',
    title: 'Consultancy Project',
    sub: 'Development',
    icon: '△',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=85',
    tagline: 'From concept to completion — with precision.',
    desc: 'We translate visionary concepts into delivery-ready programmes. Our project development consultancy covers the full lifecycle — from initial feasibility and stakeholder mapping through to launch and post-delivery review.',
    offerings: ['Feasibility Studies', 'Project Governance Design', 'Stakeholder Management', 'Risk Assessment & Mitigation', 'Programme Management Office Setup'],
    outcome: 'Over 500 projects delivered on time and within budget across the UAE and GCC, with a 98% client retention rate.',
  },
  {
    code: '0910018',
    short: 'Oil & Gas',
    title: 'Oil & Gas Fields',
    sub: 'And Facilities Services',
    icon: '◉',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&q=85',
    tagline: 'Specialist expertise for the energy sector.',
    desc: 'We provide consultancy for onshore and offshore oil and gas infrastructure, covering operational optimisation, regulatory compliance, and facilities management. Our team understands the unique demands of Abu Dhabi\'s energy ecosystem.',
    offerings: ['Operations Optimisation', 'Facilities Management Consulting', 'HSE Compliance Advisory', 'Asset Lifecycle Management', 'Regulatory & Licensing Support'],
    outcome: 'Clients achieve measurable improvements in operational efficiency and regulatory compliance across upstream and downstream operations.',
  },
  {
    code: '7020003',
    short: 'Administrative',
    title: 'Administrative Consultancy',
    sub: 'And Studies',
    icon: '▣',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=85',
    tagline: 'Precision-engineered operating models.',
    desc: 'We redesign governance structures, workflows, and operating models to eliminate friction and create scalable, high-performance organisations. Our administrative consultancy practice is grounded in data and driven by results.',
    offerings: ['Organisational Design', 'Process Re-engineering', 'Governance Framework Design', 'Policy & Procedure Development', 'Performance Management Systems'],
    outcome: 'Organisations typically reduce administrative overhead by 20–35% and report significant improvements in cross-functional coordination.',
  },
  {
    code: '7020008',
    short: 'Human Resources',
    title: 'Human Resources',
    sub: 'Consultancy',
    icon: '○',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=85',
    tagline: 'Talent is your most enduring advantage.',
    desc: 'Our HR consultancy covers the full people lifecycle — from talent acquisition strategy and Emiratisation planning to leadership development and culture transformation. We help organisations build the human foundations for sustained performance.',
    offerings: ['Talent Strategy & Workforce Planning', 'Emiratisation Advisory', 'Leadership Development Programmes', 'Culture Transformation', 'Compensation & Benefits Benchmarking'],
    outcome: 'Clients see measurable improvements in employee engagement, retention rates, and Emiratisation compliance within the first year.',
  },
  {
    code: '7020028',
    short: 'Logistics',
    title: 'Logistics',
    sub: 'Consultancy',
    icon: '◻',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&q=85',
    tagline: 'Supply chains built for competitive advantage.',
    desc: 'We apply advanced analytics and network modelling to transform supply chains into strategic assets. Leveraging Abu Dhabi\'s world-class logistics infrastructure including Khalifa Port and KIZAD, we design distribution networks that deliver speed and cost efficiency.',
    offerings: ['Supply Chain Optimisation', 'Logistics Network Design', 'Warehousing & Distribution Strategy', 'Last-Mile Delivery Solutions', 'Customs & Trade Compliance'],
    outcome: 'Average 18–25% reduction in logistics costs and significant improvements in delivery lead times across client supply chains.',
  },
  {
    code: '7220005',
    short: 'Legal Sciences',
    title: 'Legal Sciences',
    sub: 'Consultancy & Research',
    icon: '⬡',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=85',
    tagline: 'Regulatory clarity in a complex landscape.',
    desc: 'Our legal sciences practice provides research, regulatory advisory, and compliance studies across UAE federal and emirate-level frameworks. We support businesses in navigating the legal landscape of Abu Dhabi, ADGM, and the wider Gulf region.',
    offerings: ['Regulatory Compliance Audits', 'Legal Research & Studies', 'Contract Review & Advisory', 'ADGM Regulatory Guidance', 'Policy Impact Assessments'],
    outcome: 'Clients achieve full regulatory compliance and reduce legal risk exposure significantly across their UAE and GCC operations.',
  },
]

const process = [
  { num: '01', title: 'Discovery', desc: 'We immerse ourselves in your business — understanding your context, challenges, stakeholders, and ambitions before any recommendations are made.' },
  { num: '02', title: 'Diagnosis', desc: 'Through rigorous analysis of data, interviews, and benchmarking, we identify the root causes and opportunities that matter most.' },
  { num: '03', title: 'Strategy', desc: 'We co-develop a clear, actionable strategy with your leadership team — one that is grounded in evidence and aligned to your goals.' },
  { num: '04', title: 'Delivery', desc: 'We work alongside your team through implementation — not just as advisors, but as active partners in execution and change management.' },
  { num: '05', title: 'Impact', desc: 'We measure, refine, and report on outcomes — ensuring every engagement delivers the tangible, lasting value we promised.' },
]

const caseStudies = [
  {
    tag: 'AI & Innovation',
    title: 'AI Transformation for a UAE Financial Institution',
    result: '40% reduction in manual processing time',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    tag: 'Human Resources',
    title: 'Emiratisation Programme for a Government Entity',
    result: 'Exceeded Emiratisation targets by 22%',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    tag: 'Logistics',
    title: 'Supply Chain Redesign for FMCG Distributor',
    result: '23% cost reduction across distribution network',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
  },
]

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [imgFade, setImgFade]     = useState(true)
  const heroRef    = useInView(0.1)
  const tabsRef    = useInView(0.05)
  const processRef = useInView(0.1)
  const casesRef   = useInView(0.1)
  const ctaRef     = useInView(0.2)

  function switchTab(idx: number) {
    if (idx === activeTab) return
    setImgFade(false)
    setTimeout(() => { setActiveTab(idx); setImgFade(true) }, 250)
  }

  const s = services[activeTab]

  return (
    <div style={{ background: '#fff', color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .sl-fade { opacity:0; transform:translateY(28px); transition:opacity .65s ease,transform .65s ease; }
        .sl-fade.in { opacity:1; transform:translateY(0); }

        /* ── SERVICE TABS ── */
        .sl-tab-bar {
          display: grid; grid-template-columns: repeat(8,1fr);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          overflow-x: auto;
        }
        .sl-tab {
          padding: 16px 14px; cursor: pointer;
          border-right: 1px solid rgba(0,0,0,0.07);
          position: relative; overflow: hidden;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .sl-tab:last-child { border-right: none; }
        .sl-tab:hover { background: rgba(0,170,255,0.03); }
        .sl-tab.active { background: rgba(0,170,255,0.04); }
        .sl-tab::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:${BLUE}; transform:scaleX(0); transform-origin:left;
          transition: transform 0.35s ease;
        }
        .sl-tab.active::after { transform:scaleX(1); }
        .sl-tab-code { font-family:'Bebas Neue',sans-serif; font-size:10px; letter-spacing:0.15em; color:#ddd; margin-bottom:4px; transition:color 0.25s; }
        .sl-tab.active .sl-tab-code { color:${BLUE}; }
        .sl-tab-name { font-family:'Fraunces',serif; font-weight:800; font-size:13px; color:#bbb; line-height:1.1; transition:color 0.25s; }
        .sl-tab.active .sl-tab-name { color:${INK}; }
        .sl-tab-icon { font-size:14px; color:rgba(0,170,255,0.2); margin-bottom:6px; transition:color 0.25s; }
        .sl-tab.active .sl-tab-icon { color:${BLUE}; }

        /* ── SERVICE PANEL ── */
        .sl-panel {
          display: grid; grid-template-columns: 1fr 420px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          min-height: 520px;
        }
        .sl-panel-img img {
          width:100%; height:100%; object-fit:cover; display:block;
          filter:grayscale(15%) contrast(1.05);
          transition: opacity 0.35s ease, transform 0.8s ease;
        }
        .sl-img-tag {
          position:absolute; top:20px; left:20px;
          background:${BLUE}; color:#fff;
          font-size:8px; letter-spacing:0.3em; text-transform:uppercase;
          padding:4px 10px; font-family:'DM Sans',sans-serif; font-weight:500;
        }
        .sl-offering {
          display:flex; align-items:center; gap:10px;
          padding:9px 0; border-bottom:1px solid rgba(0,0,0,0.06);
          font-size:12px; color:#555; font-weight:300;
          transition: color 0.2s, padding-left 0.2s;
          cursor:default;
        }
        .sl-offering:hover { color:${INK}; padding-left:4px; }
        .sl-offering:hover .sl-offering-dot { background:${BLUE}; }
        .sl-offering-dot { width:4px; height:4px; border-radius:50%; background:#ccc; flex-shrink:0; transition:background 0.2s; }

        /* ── PROCESS ── */
        .sl-proc-row {
          display:grid; grid-template-columns:80px 1fr;
          padding:28px 0; border-bottom:1px solid rgba(0,0,0,0.07);
          position:relative; overflow:hidden; transition:padding-left 0.25s;
          cursor:default;
        }
        .sl-proc-row::before {
          content:''; position:absolute; left:0; top:0; bottom:0;
          width:0; background:${BLUE}; transition:width 0.3s ease;
        }
        .sl-proc-row:hover::before { width:3px; }
        .sl-proc-row:hover { padding-left:14px; }
        .sl-proc-row:hover .sl-proc-num { color:${BLUE}; }
        .sl-proc-num { font-family:'Bebas Neue',sans-serif; font-size:32px; letter-spacing:0.05em; color:#e0e0e0; line-height:1; transition:color 0.3s; }
        .sl-proc-title { font-family:'Fraunces',serif; font-weight:800; font-size:20px; color:${INK}; margin-bottom:6px; }
        .sl-proc-desc { font-size:12px; color:#888; font-weight:300; line-height:1.7; }

        /* ── CASE STUDIES ── */
        .sl-case-card {
          position:relative; overflow:hidden; cursor:pointer;
        }
        .sl-case-card img {
          width:100%; height:220px; object-fit:cover; display:block;
          filter:grayscale(20%); transition:transform 0.7s ease, filter 0.4s ease;
        }
        .sl-case-card:hover img { transform:scale(1.04); filter:grayscale(0%); }
        .sl-case-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:${BLUE}; transform:scaleX(0); transform-origin:left;
          transition:transform 0.35s ease;
        }
        .sl-case-card:hover::after { transform:scaleX(1); }

        /* ── CTA ── */
        .sl-cta-btn {
          display:inline-flex; align-items:center; gap:12px;
          background:${INK}; color:#fff; border:none;
          padding:14px 32px; font-size:10px; letter-spacing:0.3em;
          text-transform:uppercase; font-family:'DM Sans',sans-serif;
          font-weight:500; cursor:pointer; transition:background 0.25s;
        }
        .sl-cta-btn:hover { background:${BLUE}; }
        .sl-cta-ghost {
          display:inline-flex; align-items:center; gap:12px;
          background:transparent; border:1px solid rgba(0,0,0,0.15); color:#888;
          padding:14px 32px; font-size:10px; letter-spacing:0.3em;
          text-transform:uppercase; font-family:'DM Sans',sans-serif;
          font-weight:500; cursor:pointer; transition:border-color 0.25s,color 0.25s;
        }
        .sl-cta-ghost:hover { border-color:${BLUE}; color:${INK}; }

        .sl-loc-dot {
          width:6px; height:6px; border-radius:50%; background:${BLUE};
          animation:slpulse 2s infinite; flex-shrink:0;
        }
        @keyframes slpulse {
          0%,100%{box-shadow:0 0 0 0 rgba(0,170,255,0.5);}
          50%{box-shadow:0 0 0 5px rgba(0,170,255,0);}
        }

        @media(max-width:900px){
          .sl-tab-bar{grid-template-columns:repeat(4,1fr);}
          .sl-panel{grid-template-columns:1fr;}
          .sl-panel-img{height:260px;}
          .sl-process-grid{grid-template-columns:1fr!important;}
          .sl-cases-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* ── HERO ── */}
      <div ref={heroRef.ref} style={{ display:'grid', gridTemplateColumns:'1fr 440px', borderBottom:`1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ padding:'80px 48px 72px', borderRight:'1px solid rgba(0,0,0,0.08)' }}>
          <div className={`sl-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:28 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Our Solutions</span>
          </div>
          <div className={`sl-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(44px,5.5vw,76px)', lineHeight:0.9, letterSpacing:'-0.025em', color:INK }}>
              Eight disciplines.
            </div>
          </div>
          <div className={`sl-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'150ms', marginBottom:36 }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(44px,5.5vw,76px)', lineHeight:0.9, letterSpacing:'-0.025em', color:BLUE }}>
              One partner.
            </div>
          </div>
          <div className={`sl-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'220ms', marginBottom:40 }}>
            <p style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:15, color:'#888', lineHeight:1.7, maxWidth:460, margin:0, fontWeight:300 }}>
              From AI and strategy to logistics, HR, and legal sciences — SHAAS delivers integrated, expert consultancy across every discipline your enterprise demands. All under one roof, in Abu Dhabi.
            </p>
          </div>
          <div className={`sl-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'290ms', display:'flex', gap:12 }}>
            <button className="sl-cta-btn">Explore Services ↓</button>
            <button className="sl-cta-ghost">Contact Us</button>
          </div>
        </div>

        {/* right image */}
        <div style={{ position:'relative', overflow:'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
            alt="Solutions"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', filter:'grayscale(10%) contrast(1.05)',
              opacity:heroRef.inView?1:0, transform:heroRef.inView?'scale(1)':'scale(1.04)',
              transition:'opacity 0.9s ease 0.3s, transform 1.2s ease 0.3s' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(255,255,255,0.3) 0%,transparent 40%)' }} />
          <div className="sl-img-tag">Abu Dhabi, UAE</div>
          <div style={{ position:'absolute', bottom:-8, right:12, fontFamily:"'Bebas Neue',sans-serif", fontSize:110, lineHeight:1, color:'transparent', WebkitTextStroke:'1px rgba(0,0,0,0.06)', pointerEvents:'none', userSelect:'none' }}>8</div>
        </div>
      </div>

      {/* ── SERVICES TABS ── */}
      <div ref={tabsRef.ref}>

        {/* Tab bar */}
        <div className="sl-tab-bar">
          {services.map((svc,idx) => (
            <div
              key={svc.code}
              className={`sl-tab${idx===activeTab?' active':''}`}
              onClick={() => switchTab(idx)}
            >
              <div className="sl-tab-icon">{svc.icon}</div>
              <div className="sl-tab-code">{svc.code}</div>
              <div className="sl-tab-name">{svc.short}</div>
            </div>
          ))}
        </div>

        {/* Service panel */}
        <div className="sl-panel">

          {/* Left — text */}
          <div style={{ padding:'56px 52px', borderRight:'1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <div style={{ width:20, height:2, background:BLUE }} />
              <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>{s.code}</span>
            </div>

            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(32px,4vw,52px)', lineHeight:0.92, letterSpacing:'-0.02em', color:INK, opacity:imgFade?1:0, transition:'opacity 0.3s ease' }}>
              {s.title}
            </div>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(32px,4vw,52px)', lineHeight:0.92, letterSpacing:'-0.02em', color:'#777', marginBottom:20, opacity:imgFade?1:0, transition:'opacity 0.3s ease 0.05s' }}>
              {s.sub}
            </div>

            <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:15, color:BLUE, marginBottom:20, opacity:imgFade?1:0, transition:'opacity 0.3s ease 0.08s' }}>
              "{s.tagline}"
            </div>

            <p style={{ fontSize:13, color:'#666', lineHeight:1.8, fontWeight:300, marginBottom:32, opacity:imgFade?1:0, transition:'opacity 0.3s ease 0.1s' }}>
              {s.desc}
            </p>

            <div style={{ marginBottom:28, opacity:imgFade?1:0, transition:'opacity 0.3s ease 0.12s' }}>
              <div style={{ fontSize:9, letterSpacing:'0.35em', textTransform:'uppercase', color:'#aaa', marginBottom:12 }}>What We Offer</div>
              {s.offerings.map(o => (
                <div key={o} className="sl-offering">
                  <div className="sl-offering-dot" />
                  {o}
                </div>
              ))}
            </div>

            <div style={{ background:'rgba(0,170,255,0.04)', borderLeft:`3px solid ${BLUE}`, padding:'16px 20px', opacity:imgFade?1:0, transition:'opacity 0.3s ease 0.15s' }}>
              <div style={{ fontSize:8, letterSpacing:'0.35em', textTransform:'uppercase', color:BLUE, marginBottom:6 }}>Typical Outcome</div>
              <div style={{ fontSize:12, color:'#555', fontWeight:300, lineHeight:1.6 }}>{s.outcome}</div>
            </div>
          </div>

          {/* Right — image */}
          <div className="sl-panel-img" style={{ position:'relative', overflow:'hidden' }}>
            <img
              src={s.img}
              alt={s.title}
              style={{ opacity:imgFade?1:0, transform:imgFade?'scale(1)':'scale(1.03)' }}
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 50%,rgba(255,255,255,0.5) 100%)', pointerEvents:'none' }} />
            <div className="sl-img-tag">{s.short}</div>
            <div style={{ position:'absolute', bottom:-8, right:16, fontFamily:"'Bebas Neue',sans-serif", fontSize:130, lineHeight:1, color:'transparent', WebkitTextStroke:'1px rgba(0,0,0,0.05)', pointerEvents:'none', userSelect:'none', opacity:imgFade?1:0, transition:'opacity 0.4s' }}>{String(activeTab+1).padStart(2,'0')}</div>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div ref={processRef.ref} style={{ borderTop:`2px solid ${INK}` }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', padding:'56px 48px 40px', borderBottom:'1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`sl-fade${processRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
              <div style={{ width:20, height:2, background:BLUE }} />
              <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>How We Work</span>
            </div>
            <div className={`sl-fade${processRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
              <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(36px,4vw,56px)', lineHeight:0.92, letterSpacing:'-0.025em', color:INK }}>
                Our <em style={{ fontWeight:300, fontStyle:'italic', color:'#777' }}>Process</em>
              </div>
            </div>
          </div>
          <p style={{ maxWidth:340, fontSize:13, color:'#aaa', lineHeight:1.7, fontWeight:300, fontFamily:"'Fraunces',serif", fontStyle:'italic', margin:0 }}>
            A structured, five-stage methodology proven across 500+ engagements.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', padding:'0 48px 56px' }} className="sl-process-grid">
          <div>
            {process.map((p,idx) => (
              <div
                key={p.num}
                className="sl-proc-row"
                style={{
                  opacity:processRef.inView?1:0,
                  transform:processRef.inView?'translateY(0)':'translateY(24px)',
                  transition:`opacity 0.6s ease ${idx*80}ms,transform 0.6s ease ${idx*80}ms`,
                }}
              >
                <div className="sl-proc-num">{p.num}</div>
                <div>
                  <div className="sl-proc-title">{p.title}</div>
                  <div className="sl-proc-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — process image */}
          <div style={{ paddingLeft:56, display:'flex', alignItems:'center' }}>
            <div style={{ position:'relative', width:'100%', overflow:'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=85"
                alt="Our process"
                style={{ width:'100%', height:420, objectFit:'cover', display:'block', filter:'grayscale(15%)',
                  opacity:processRef.inView?1:0, transition:'opacity 0.9s ease 0.3s' }}
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 50%,rgba(255,255,255,0.5) 100%)' }} />
              <div className="sl-img-tag">Methodology</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES ── */}
      <div ref={casesRef.ref} style={{ borderTop:`1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', padding:'56px 48px 40px', borderBottom:'1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <div className={`sl-fade${casesRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
              <div style={{ width:20, height:2, background:BLUE }} />
              <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Proof of Impact</span>
            </div>
            <div className={`sl-fade${casesRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
              <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(36px,4vw,56px)', lineHeight:0.92, letterSpacing:'-0.025em', color:INK }}>
                Case <em style={{ fontWeight:300, fontStyle:'italic', color:'#777' }}>Studies</em>
              </div>
            </div>
          </div>
          <button className="sl-cta-ghost" style={{ flexShrink:0 }}>View All Cases ↗</button>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', padding:'0 48px 64px', paddingTop:40, gap:40 }} className="sl-cases-grid">
          {caseStudies.map((c,idx) => (
            <div
              key={c.title}
              className="sl-case-card"
              style={{
                opacity:casesRef.inView?1:0,
                transform:casesRef.inView?'translateY(0)':'translateY(32px)',
                transition:`opacity 0.65s ease ${idx*100}ms,transform 0.65s ease ${idx*100}ms`,
              }}
            >
              <div style={{ position:'relative', overflow:'hidden' }}>
                <img src={c.img} alt={c.title} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.5) 100%)' }} />
                <div className="sl-img-tag">{c.tag}</div>
              </div>
              <div style={{ paddingTop:20, borderBottom:'1px solid rgba(0,0,0,0.08)', paddingBottom:20 }}>
                <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:17, color:INK, lineHeight:1.25, marginBottom:10 }}>{c.title}</div>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ width:16, height:1, background:BLUE }} />
                  <div style={{ fontSize:11, color:BLUE, letterSpacing:'0.1em' }}>{c.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div ref={ctaRef.ref} style={{ borderTop:`2px solid ${INK}`, padding:'80px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
        <div>
          <div className={`sl-fade${ctaRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Start Today</span>
          </div>
          <div className={`sl-fade${ctaRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(36px,4.5vw,60px)', lineHeight:0.92, letterSpacing:'-0.025em', color:INK }}>
              Ready to engage
            </div>
          </div>
          <div className={`sl-fade${ctaRef.inView?' in':''}`} style={{ transitionDelay:'150ms', marginBottom:32 }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(36px,4.5vw,60px)', lineHeight:0.92, letterSpacing:'-0.025em', color:BLUE }}>
              SHAAS?
            </div>
          </div>
          <div className={`sl-fade${ctaRef.inView?' in':''}`} style={{ transitionDelay:'220ms', display:'flex', gap:12, flexWrap:'wrap' }}>
            <button className="sl-cta-btn">Get In Touch ↗</button>
            <button className="sl-cta-ghost">Download Brochure</button>
          </div>
        </div>

        <div className={`sl-fade${ctaRef.inView?' in':''}`} style={{ transitionDelay:'150ms' }}>
          <p style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:16, color:'#999', lineHeight:1.75, margin:'0 0 32px', fontWeight:300 }}>
            Our team is based in Abu Dhabi and ready to discuss how SHAAS can support your organisation across any of our eight licensed disciplines.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {[
              { label:'Email', val:'info@shaas.com' },
              { label:'Phone', val:'+971 XX XXX XXXX' },
              { label:'Office', val:'ADGM Square, Al Maryah Island, Abu Dhabi' },
            ].map(item => (
              <div key={item.label} style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#bbb', width:40, flexShrink:0 }}>{item.label}</div>
                <div style={{ width:1, height:16, background:'rgba(0,0,0,0.1)', flexShrink:0 }} />
                <div style={{ fontSize:12, color:'#666', fontWeight:300 }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:24 }}>
            <div className="sl-loc-dot" />
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#aaa' }}>Abu Dhabi, UAE</span>
          </div>
        </div>
      </div>
    </div>
  )
}