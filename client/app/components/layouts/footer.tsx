'use client'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const footerLinks = {
  'Services': [
    'Marketing Consultancy',
    'Project Development',
    'Administrative Studies',
    'Human Resources',
    'Logistics Consultancy',
    'AI & Innovation',
    'Oil & Gas Services',
    'Legal Sciences',
  ],
  'Company': [
    'About SHAAS',
    'Our Team',
    'Careers',
    'News & Insights',
  ],
  'Legal': [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Disclaimer',
  ],
}

export default function ShaasFooter() {
  return (
    <footer style={{
      background: '#fff',
      fontFamily: "'DM Sans', sans-serif",
      borderTop: `2px solid ${INK}`,
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ft-link {
          display: block; font-size: 11px; font-weight: 300;
          color: #aaa; text-decoration: none; padding: 5px 0;
          cursor: pointer; transition: color 0.2s, padding-left 0.2s;
        }
        .ft-link:hover { color: ${INK}; padding-left: 4px; }

        .ft-bottom-link {
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #bbb; text-decoration: none; cursor: pointer;
          transition: color 0.2s;
        }
        .ft-bottom-link:hover { color: ${BLUE}; }

        .ft-loc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${BLUE}; flex-shrink: 0;
          animation: ftpulse 2s infinite;
        }
        @keyframes ftpulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,170,255,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(0,170,255,0); }
        }

        /* MAIN GRID — desktop */
        .ft-main-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(3, 1fr);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .ft-brand-col {
          padding: 48px 40px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }

        .ft-link-col {
          padding: 48px 28px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .ft-link-col:last-child { border-right: none; }

        .ft-col-heading {
          font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase;
          color: #aaa; margin-bottom: 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-col-heading-line {
          width: 12px; height: 1px; background: ${BLUE}; flex-shrink: 0;
        }

        /* BOTTOM BAR */
        .ft-bottom-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 40px; flex-wrap: wrap; gap: 10px;
        }
        .ft-bottom-left {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .ft-bottom-right {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .ft-divider { width: 1px; height: 12px; background: rgba(0,0,0,0.1); flex-shrink: 0; }

        /* MOBILE */
        @media (max-width: 768px) {
          .ft-main-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ft-brand-col {
            grid-column: 1 / -1;
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            padding: 32px 24px;
          }
          .ft-link-col {
            padding: 28px 24px;
            border-right: 1px solid rgba(0,0,0,0.08);
            border-bottom: 1px solid rgba(0,0,0,0.08);
          }
          .ft-link-col:nth-child(3) { border-right: none; }
          .ft-link-col:last-child { border-right: none; }
          .ft-bottom-bar { padding: 14px 24px; }
        }

        @media (max-width: 480px) {
          .ft-main-grid { grid-template-columns: 1fr; }
          .ft-link-col { border-right: none !important; }
          .ft-brand-col { padding: 28px 20px; }
          .ft-link-col { padding: 20px 20px; }
          .ft-bottom-bar { padding: 14px 20px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* Main grid */}
      <div className="ft-main-grid">

        {/* Brand col */}
        <div className="ft-brand-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <img src="/images/9.png" alt="SHAAS" style={{ width: 32, height: 32, objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.18em', color: INK, lineHeight: 1 }}>SHAAS</div>
              <div style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', marginTop: 1 }}>General Consulting</div>
            </div>
          </div>

          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 12, color: '#999', lineHeight: 1.7, maxWidth: 240, fontWeight: 300, margin: '0 0 24px' }}>
            Abu Dhabi's trusted consultancy across strategy, innovation, operations, and beyond.
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <div className="ft-loc-dot" style={{ marginTop: 3 }} />
            <div style={{ fontSize: 11, color: '#999', fontWeight: 300, lineHeight: 1.6 }}>
              ADGM Square, Al Maryah Island<br />Abu Dhabi, UAE
            </div>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="ft-link-col">
            <div className="ft-col-heading">
              <div className="ft-col-heading-line" />
              {heading}
            </div>
            {links.map(link => (
              <a key={link} className="ft-link">{link}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom-bar">
        <div className="ft-bottom-left">
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ccc' }}>
            © 2025 SHAAS General Consulting
          </span>
          <div className="ft-divider" />
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ccc' }}>
            Est. 2009
          </span>
        </div>

        <div className="ft-bottom-right">
          {['Privacy', 'Terms', 'Cookies'].map((l, i) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {i > 0 && <div className="ft-divider" />}
              <a className="ft-bottom-link">{l}</a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}