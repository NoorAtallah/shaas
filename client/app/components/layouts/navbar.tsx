'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

const navItems = [
  { name: 'Home',      href: '/' },
  { name: 'About',     href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Contact',   href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted]       = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function close() {
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .nb-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .nb-root.hidden-nav { transform: translateY(-100%); opacity: 0; }
        .nb-root.visible-nav { transform: translateY(0); opacity: 1; }

        .nb-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 64px; padding: 0 48px;
          background: #fff; border-bottom: 1px solid ${INK};
          transition: box-shadow 0.3s ease;
        }
        .nb-inner.scrolled { box-shadow: 0 1px 0 ${INK}; }

        .nb-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; cursor: pointer; }
        .nb-logo-img { width: 36px; height: 36px; object-fit: contain; }
        .nb-logo-text { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.18em; color: ${INK}; line-height: 1; }
        .nb-logo-sub { font-size: 8px; letter-spacing: 0.35em; text-transform: uppercase; color: #aaa; margin-top: 1px; }

        .nb-links { display: flex; align-items: center; gap: 36px; }
        .nb-link {
          position: relative; padding: 4px 0;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: #888; text-decoration: none; cursor: pointer;
          transition: color 0.2s ease;
          background: none; border: none; font-family: 'DM Sans', sans-serif;
        }
        .nb-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: ${BLUE}; transition: width 0.3s ease; }
        .nb-link:hover { color: ${INK}; }
        .nb-link:hover::after { width: 100%; }
        .nb-link.nb-active { color: ${INK}; }
        .nb-link.nb-active::after { width: 100%; background: ${BLUE}; }

        .nb-loc { display: flex; align-items: center; gap: 7px; font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: #aaa; }
        .nb-loc-dot { width: 6px; height: 6px; border-radius: 50%; background: ${BLUE}; flex-shrink: 0; animation: nbpulse 2s infinite; }
        @keyframes nbpulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,170,255,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(0,170,255,0); }
        }

        .nb-cta {
          display: flex; align-items: center; gap: 10px;
          background: ${INK}; color: #fff; border: none;
          padding: 9px 20px; cursor: pointer;
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          transition: background 0.25s ease; white-space: nowrap;
        }
        .nb-cta:hover { background: ${BLUE}; }

        .nb-toggle {
          display: none; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          background: none; border: 1px solid rgba(0,0,0,0.12); cursor: pointer;
          transition: border-color 0.2s;
        }
        .nb-toggle:hover { border-color: ${BLUE}; }
        .nb-toggle svg { width: 18px; height: 18px; color: ${INK}; }

        /* OVERLAY — full screen, clicking it closes drawer */
        .nb-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(10,10,10,0.45);
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nb-overlay.open { opacity: 1; pointer-events: all; }

        /* DRAWER — sits above overlay */
        .nb-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 201;
          width: 100%; max-width: 340px;
          background: #fff; border-left: 1px solid ${INK};
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .nb-drawer.open { transform: translateX(0); }

        .nb-drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          height: 64px; padding: 0 24px;
          border-bottom: 1px solid ${INK}; flex-shrink: 0;
        }
        .nb-drawer-label { font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase; color: #aaa; }

        .nb-drawer-close {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: none; border: 1px solid rgba(0,0,0,0.1); cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          /* make sure it's always clickable */
          position: relative; z-index: 1;
        }
        .nb-drawer-close:hover { border-color: ${BLUE}; background: rgba(0,170,255,0.05); }
        .nb-drawer-close svg { width: 16px; height: 16px; color: ${INK}; pointer-events: none; }

        .nb-drawer-links { flex: 1; overflow-y: auto; }

        .nb-drawer-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px; height: 72px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          text-decoration: none; cursor: pointer;
          transition: background 0.2s;
          position: relative; overflow: hidden;
        }
        .nb-drawer-link::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 0; background: ${BLUE}; transition: width 0.3s ease;
        }
        .nb-drawer-link:hover::before { width: 3px; }
        .nb-drawer-link:hover { background: rgba(0,170,255,0.02); }
        .nb-drawer-link-num { font-family: 'Bebas Neue', sans-serif; font-size: 11px; letter-spacing: 0.15em; color: #ddd; margin-bottom: 2px; }
        .nb-drawer-link-name { font-family: 'Fraunces', serif; font-weight: 800; font-size: 18px; color: ${INK}; line-height: 1; }
        .nb-drawer-link svg { width: 15px; height: 15px; color: #ccc; transition: color 0.2s, transform 0.2s; flex-shrink: 0; pointer-events: none; }
        .nb-drawer-link:hover svg { color: ${BLUE}; transform: translate(2px,-2px); }

        .nb-drawer-footer { padding: 20px 24px; border-top: 1px solid rgba(0,0,0,0.08); flex-shrink: 0; }
        .nb-drawer-cta {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: ${INK}; color: #fff; border: none; padding: 13px 18px;
          cursor: pointer; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          transition: background 0.25s; margin-bottom: 18px;
        }
        .nb-drawer-cta:hover { background: ${BLUE}; }
        .nb-drawer-cta svg { width: 14px; height: 14px; pointer-events: none; }
        .nb-drawer-contact-label { font-size: 8px; letter-spacing: 0.35em; text-transform: uppercase; color: #bbb; margin-bottom: 6px; }
        .nb-drawer-contact-val { font-size: 12px; color: #555; font-weight: 300; transition: color 0.2s; text-decoration: none; display: block; margin-bottom: 4px; }
        .nb-drawer-contact-val:hover { color: ${BLUE}; }

        @media (max-width: 960px) {
          .nb-links, .nb-loc, .nb-cta { display: none !important; }
          .nb-toggle { display: flex !important; }
          .nb-inner { padding: 0 20px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`nb-root ${mounted ? 'visible-nav' : 'hidden-nav'}`}>
        <div className={`nb-inner${isScrolled ? ' scrolled' : ''}`}>
          <a href="/" className="nb-logo">
            <img src="/images/9.png" alt="SHAAS" className="nb-logo-img" />
            <div>
              <div className="nb-logo-text">SHAAS</div>
              <div className="nb-logo-sub">General Consulting</div>
            </div>
          </a>

          <div className="nb-links">
            {navItems.map(item => (
              <a key={item.name} href={item.href}
                className={`nb-link${activeItem === item.name ? ' nb-active' : ''}`}
                onClick={() => setActiveItem(item.name)}
              >{item.name}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="nb-loc">
              <div className="nb-loc-dot" />
              Abu Dhabi, UAE
            </div>
            <button className="nb-cta">
              Get Started <ArrowUpRight size={13} />
            </button>
            <button className="nb-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY — clicking anywhere on it closes the drawer */}
      <div
        className={`nb-overlay${mobileOpen ? ' open' : ''}`}
        onClick={close}
      />

      {/* DRAWER */}
      <div className={`nb-drawer${mobileOpen ? ' open' : ''}`}>
        <div className="nb-drawer-head">
          <div className="nb-drawer-label">Navigation</div>
          <button
            type="button"
            className="nb-drawer-close"
            onClick={close}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="nb-drawer-links">
          {navItems.map((item, idx) => (
            <a key={item.name} href={item.href} className="nb-drawer-link" onClick={close}>
              <div>
                <div className="nb-drawer-link-num">0{idx + 1}</div>
                <div className="nb-drawer-link-name">{item.name}</div>
              </div>
              <ArrowUpRight />
            </a>
          ))}
        </div>

        <div className="nb-drawer-footer">
          <button type="button" className="nb-drawer-cta" onClick={close}>
            Get Started <ArrowUpRight size={14} />
          </button>
          <div className="nb-drawer-contact-label">Contact</div>
          <a href="mailto:info@shaas.com" className="nb-drawer-contact-val">info@shaas.com</a>
          <a href="tel:+97100000000" className="nb-drawer-contact-val">+971 XX XXX XXXX</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 14, fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa' }}>
            <div className="nb-loc-dot" />
            Abu Dhabi, UAE
          </div>
        </div>
      </div>
    </>
  )
}