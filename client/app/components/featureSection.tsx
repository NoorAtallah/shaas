'use client'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const services = [
  {
    code: '7020039',
    title: 'Innovation & AI Research and Consultancies',
    icon: '◈',
    desc: 'Harnessing artificial intelligence and cutting-edge research to drive transformative innovation across industries.',
  },
  {
    code: '7320001',
    title: 'Marketing Consultancy And Studies',
    icon: '◇',
    desc: 'Strategic marketing analysis and go-to-market frameworks tailored to the UAE and MENA markets.',
  },
  {
    code: '7020020',
    title: 'Consultancy Project Development',
    icon: '△',
    desc: 'End-to-end project development consultancy — from feasibility through delivery and operational handover.',
  },
  {
    code: '0910018',
    title: 'Onshore & Offshore Oil and Gas Fields and Facilities Services',
    icon: '◉',
    desc: 'Specialist consultancy for oil and gas infrastructure, operations optimisation, and regulatory compliance.',
  },
  {
    code: '7020003',
    title: 'Administrative Consultancy And Studies',
    icon: '▣',
    desc: 'Governance frameworks, organisational design, and operational excellence programmes for leading enterprises.',
  },
  {
    code: '7020008',
    title: 'Human Resources Consultancy',
    icon: '○',
    desc: 'Talent strategy, workforce planning, and HR transformation aligned with UAE Emiratisation objectives.',
  },
  {
    code: '7020028',
    title: 'Logistics Consultancy',
    icon: '◻',
    desc: "Supply chain optimisation and logistics network design leveraging Abu Dhabi's world-class infrastructure.",
  },
  {
    code: '7220005',
    title: 'Consultancy and Studies and Researches In Legal Sciences',
    icon: '⬡',
    desc: 'Legal research, regulatory advisory, and compliance studies across UAE federal and emirate-level frameworks.',
  },
]

export default function ShaasServicesSection() {
  return (
    <section style={{ background: '#fff', borderTop: `2px solid ${INK}`, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ss-head {
          display: flex; align-items: flex-end; justify-content: space-between;
          padding: 48px 48px 28px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ss-title {
          font-family: 'Fraunces', serif; font-weight: 800;
          font-size: 52px; line-height: 0.95; letter-spacing: -0.02em; color: ${INK};
        }
        .ss-title em { font-weight: 300; font-style: italic; color: #777; }
        .ss-badge {
          text-align: right; font-size: 9px; letter-spacing: 0.35em;
          text-transform: uppercase; color: #aaa; line-height: 1.7;
        }
        .ss-badge strong {
          color: ${BLUE}; display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.15em; font-weight: 400;
        }

        .ss-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .ss-card {
          padding: 32px 28px 28px;
          border-right: 1px solid rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative; overflow: hidden;
          cursor: pointer;
          transition: background 0.25s;
        }
        .ss-card:nth-child(4n) { border-right: none; }
        .ss-card:hover { background: rgba(0,170,255,0.02); }
        .ss-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: ${BLUE};
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ss-card:hover::after { transform: scaleX(1); }

        .ss-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 20px;
        }
        .ss-code {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; color: #ddd;
        }
        .ss-icon {
          font-size: 18px; color: rgba(0,170,255,0.2);
          transition: color 0.25s;
        }
        .ss-card:hover .ss-icon { color: ${BLUE}; }

        .ss-title-text {
          font-family: 'Fraunces', serif; font-weight: 800;
          font-size: 15px; line-height: 1.25; color: ${INK};
          margin-bottom: 14px;
        }
        .ss-desc {
          font-size: 11px; line-height: 1.7; color: #888; font-weight: 300;
        }
        .ss-footer {
          display: flex; align-items: center; gap: 8px;
          margin-top: 20px; font-size: 9px;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #ccc; transition: color 0.25s;
        }
        .ss-card:hover .ss-footer { color: ${BLUE}; }
        .ss-footer-line { flex: 0 0 16px; height: 1px; background: currentColor; }

        @media (max-width: 1024px) {
          .ss-grid { grid-template-columns: repeat(3, 1fr); }
          .ss-card:nth-child(4n) { border-right: 1px solid rgba(0,0,0,0.07); }
          .ss-card:nth-child(3n) { border-right: none; }
        }
        @media (max-width: 720px) {
          .ss-grid { grid-template-columns: repeat(2, 1fr); }
          .ss-card:nth-child(3n) { border-right: 1px solid rgba(0,0,0,0.07); }
          .ss-card:nth-child(2n) { border-right: none; }
          .ss-head { flex-direction: column; gap: 16px; padding: 32px 24px 20px; }
          .ss-badge { text-align: left; }
          .ss-title { font-size: 38px; }
        }
      `}</style>

      {/* Head */}
      <div className="ss-head">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: BLUE, marginBottom: 12 }}>
            <div style={{ width: 20, height: 2, background: BLUE, flexShrink: 0 }} />
            Licensed Activities · Abu Dhabi
          </div>
          <div className="ss-title">What We <em>Do</em></div>
        </div>
        <div className="ss-badge">
          <strong>8 Services</strong>
          Registered &amp; Authorised<br />by Abu Dhabi Authorities
        </div>
      </div>

      {/* Grid */}
      <div className="ss-grid">
        {services.map(svc => (
          <div key={svc.code} className="ss-card">
            <div className="ss-card-top">
              <div className="ss-code">{svc.code}</div>
              <div className="ss-icon">{svc.icon}</div>
            </div>
            <div className="ss-title-text">{svc.title}</div>
            <div className="ss-desc">{svc.desc}</div>
            <div className="ss-footer">
              <div className="ss-footer-line" />
              Learn More
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}