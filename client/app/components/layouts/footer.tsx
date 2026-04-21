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
      `}</style>

      {/* Main grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1px repeat(3, 1fr)',
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
      }}>

        {/* Brand col */}
        <div style={{ padding: '56px 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <img src="/images/9.png" alt="SHAAS" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: '0.18em', color: INK, lineHeight: 1 }}>SHAAS</div>
              <div style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', marginTop: 1 }}>General Consulting</div>
            </div>
          </div>

          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 13, color: '#999', lineHeight: 1.7, maxWidth: 260, fontWeight: 300, margin: '0 0 32px' }}>
            Abu Dhabi's trusted consultancy across strategy, innovation, operations, and beyond.
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div className="ft-loc-dot" style={{ marginTop: 4 }} />
            <div style={{ fontSize: 11, color: '#999', fontWeight: 300, lineHeight: 1.6 }}>
              ADGM Square, Al Maryah Island<br />Abu Dhabi, UAE
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div style={{ background: 'rgba(0,0,0,0.08)' }} />

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} style={{ padding: '56px 36px', borderLeft: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 1, background: BLUE, flexShrink: 0 }} />
              {heading}
            </div>
            {links.map(link => (
              <a key={link} className="ft-link">{link}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px', flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ccc' }}>
            © 2025 SHAAS General Consulting
          </span>
          <div style={{ width: 1, height: 12, background: 'rgba(0,0,0,0.1)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ccc' }}>
            Est. 2009
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {['Privacy', 'Terms', 'Cookies'].map((l, i) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {i > 0 && <div style={{ width: 1, height: 10, background: 'rgba(0,0,0,0.1)' }} />}
              <a className="ft-bottom-link">{l}</a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}