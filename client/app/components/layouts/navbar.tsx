'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, ChevronDown, Plus } from 'lucide-react'
import menuData from '../../content/menu.json'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', mega: true },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
]

type MenuCol = { slug: string; name: string; accent: string; href: string; items: { title: string; url: string }[] }
const megaCols = menuData as MenuCol[]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileCat, setMobileCat] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => { setMobileOpen(false); setMobileCat(null) }

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className={`flex items-center justify-between h-16 px-5 lg:px-12 bg-white border-b border-[#0a0a0a] ${isScrolled ? 'shadow-[0_1px_0_#0a0a0a]' : ''}`}>
          <a href="/" className="flex items-center gap-2.5">
            <img src="/images/9.png" alt="SHAAS" className="w-9 h-9 object-contain" />
            <div>
              <div className="text-[22px] leading-none text-[#0a0a0a]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.18em' }}>SHAAS</div>
              <div className="text-[8px] uppercase text-[#aaa] mt-px" style={{ letterSpacing: '0.35em' }}>General Consulting</div>
            </div>
          </a>

          <div className="hidden min-[960px]:flex items-center gap-9">
            {navItems.map((item) =>
              item.mega ? (
                <div key={item.name} onMouseEnter={() => setMegaOpen(true)} className="relative">
                  <a href={item.href} className="flex items-center gap-1 py-1 text-[10px] uppercase tracking-[0.3em] text-[#888] hover:text-[#0a0a0a] transition-colors">
                    {item.name}
                    <ChevronDown size={12} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              ) : (
                <a key={item.name} href={item.href} className="py-1 text-[10px] uppercase tracking-[0.3em] text-[#888] hover:text-[#0a0a0a] transition-colors">
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden min-[960px]:flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#aaa]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} /> Abu Dhabi, UAE
            </div>
            <a href="/contact" className="hidden min-[960px]:flex items-center gap-2 bg-[#0a0a0a] text-white px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[#00aaff] transition-colors">
              Get Started <ArrowUpRight size={13} />
            </a>
            <button className="min-[960px]:hidden w-10 h-10 flex items-center justify-center border border-black/10 hover:border-[#00aaff] transition-colors" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        <div className={`hidden min-[960px]:block overflow-hidden bg-white border-b border-[#0a0a0a] transition-all duration-300 ${megaOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0 border-b-0'}`}>
          <div className="grid grid-cols-4 gap-0 px-12 py-8">
            {megaCols.map((col) => (
              <div key={col.slug} className="px-5 border-r border-black/[0.07] last:border-0">
                <a href={col.href} className="group flex items-center gap-2 mb-4">
                  <span className="w-4 h-px" style={{ background: col.accent }} />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a] group-hover:text-[#00aaff] transition-colors">{col.name}</span>
                </a>
                <ul className="space-y-1.5">
                  {col.items.map((it) => (
                    <li key={it.url}>
                      <a href={it.url} className="block text-[13px] text-[#666] hover:text-[#0a0a0a] transition-colors leading-snug" style={{ fontWeight: 300 }}>
                        {it.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY + DRAWER */}
      <div className={`fixed inset-0 z-[200] bg-black/45 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={close} />
      <div className={`fixed top-0 right-0 bottom-0 z-[201] w-full max-w-[360px] bg-white border-l border-[#0a0a0a] flex flex-col transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-[#0a0a0a] flex-shrink-0">
          <div className="text-[9px] uppercase tracking-[0.4em] text-[#aaa]">Navigation</div>
          <button className="w-9 h-9 flex items-center justify-center border border-black/10 hover:border-[#00aaff] transition-colors" onClick={close} aria-label="Close menu"><X size={16} /></button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {navItems.filter((n) => !n.mega).map((item, i) => (
            <a key={item.name} href={item.href} onClick={close} className="flex items-center justify-between px-6 h-16 border-b border-black/[0.07]">
              <span className="text-lg" style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}>{item.name}</span>
              <ArrowUpRight size={15} className="text-[#ccc]" />
            </a>
          ))}
          {/* services accordion */}
          <div className="px-6 pt-5 pb-2 text-[9px] uppercase tracking-[0.4em] text-[#aaa]">Services</div>
          {megaCols.map((col) => (
            <div key={col.slug} className="border-b border-black/[0.07]">
              <button className="w-full flex items-center justify-between px-6 h-14" onClick={() => setMobileCat(mobileCat === col.slug ? null : col.slug)}>
                <span className="flex items-center gap-2 text-[15px]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}>
                  <span className="w-3 h-px" style={{ background: col.accent }} />{col.name}
                </span>
                <Plus size={15} className={`text-[#999] transition-transform ${mobileCat === col.slug ? 'rotate-45' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileCat === col.slug ? 'max-h-[600px]' : 'max-h-0'}`}>
                <a href={col.href} onClick={close} className="block px-6 py-2 text-[13px] text-[#00aaff]">All {col.name} →</a>
                {col.items.map((it) => (
                  <a key={it.url} href={it.url} onClick={close} className="block px-6 py-2 text-[13px] text-[#666]" style={{ fontWeight: 300 }}>{it.title}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-black/10 flex-shrink-0">
          <a href="/contact" onClick={close} className="w-full flex items-center justify-between bg-[#0a0a0a] text-white px-5 py-3.5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-[#00aaff] transition-colors mb-4">
            Get Started <ArrowUpRight size={14} />
          </a>
          <a href="mailto:info@shaas-consulting.ae" className="block text-[13px] text-[#555] hover:text-[#00aaff]">info@shaas-consulting.ae</a>
          <a href="tel:+971568474217" className="block text-[13px] text-[#555] hover:text-[#00aaff] mt-1">+971 56 847 4217</a>
        </div>
      </div>
    </>
  )
}
