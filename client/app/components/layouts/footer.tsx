'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

const navLinks = ['Home', 'About', 'Solutions', 'Contact']

const contact = [
  { icon: Mail, label: 'info@shaas.ae', href: 'mailto:info@shaas.ae' },
  { icon: Phone, label: '+971 56 847 4217', href: 'tel:+971568474217' },
]

export default function ShaasFooter() {
  return (
    <footer
      className="bg-white overflow-hidden border-t-2 border-[#0a0a0a]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts — kept as inline @import since Tailwind can't load these */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      {/* Main row — brand | nav + contact */}
      <div className="flex flex-col md:flex-row md:items-stretch border-b border-black/[0.08]">

        {/* Brand */}
        <div className="flex-[1.4] px-6 py-9 sm:px-10 sm:py-12 md:border-r border-b md:border-b-0 border-black/[0.08]">
          <div className="flex items-center gap-2.5 mb-5">
            <img src="/images/9.png" alt="SHAAS" className="w-8 h-8 object-contain" />
            <div>
              <div
                className="text-xl leading-none text-[#0a0a0a]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.18em' }}
              >
                SHAAS
              </div>
              <div className="text-[8px] uppercase text-[#aaa] mt-px" style={{ letterSpacing: '0.35em' }}>
                General Consulting
              </div>
            </div>
          </div>

          <p
            className="text-xs text-[#999] leading-relaxed max-w-[240px] font-light m-0 mb-6"
            style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}
          >
            Abu Dhabi&apos;s trusted consultancy across strategy, innovation, operations, and beyond.
          </p>

          <div className="flex items-start gap-2">
            <span className="relative mt-1.5 flex h-1.5 w-1.5 shrink-0">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full"
                style={{ background: BLUE }}
                animate={{ scale: [1, 2.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: BLUE }} />
            </span>
            <div className="text-[11px] text-[#999] font-light leading-relaxed">
              ADGM Square, Al Maryah Island<br />Abu Dhabi, UAE
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 px-6 py-9 sm:px-8 sm:py-12 border-b sm:border-b-0 sm:border-r border-black/[0.08]">
          <div className="flex items-center gap-2 mb-5 text-[9px] uppercase text-[#aaa]" style={{ letterSpacing: '0.4em' }}>
            <span className="block w-3 h-px shrink-0" style={{ background: BLUE }} />
            Navigate
          </div>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                initial="rest"
                whileHover="hover"
                className="group flex items-center gap-1.5 py-1.5 text-[13px] font-light text-[#aaa] hover:text-[#0a0a0a] cursor-pointer"
              >
                <motion.span
                  className="block h-px"
                  style={{ background: BLUE }}
                  variants={{ rest: { width: 0, opacity: 0 }, hover: { width: 10, opacity: 1 } }}
                  transition={{ duration: 0.2 }}
                />
                {link}
                <motion.span
                  variants={{ rest: { opacity: 0, x: -3 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={12} style={{ color: BLUE }} />
                </motion.span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex-1 px-6 py-9 sm:px-8 sm:py-12">
          <div className="flex items-center gap-2 mb-5 text-[9px] uppercase text-[#aaa]" style={{ letterSpacing: '0.4em' }}>
            <span className="block w-3 h-px shrink-0" style={{ background: BLUE }} />
            Get in touch
          </div>
          <div className="flex flex-col gap-3">
            {contact.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 text-[13px] font-light text-[#999] hover:text-[#0a0a0a] cursor-pointer"
              >
                <Icon size={14} style={{ color: BLUE }} className="shrink-0" />
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-6 sm:px-10 py-3.5">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-[9px] uppercase text-[#ccc]" style={{ letterSpacing: '0.2em' }}>
            © 2025 SHAAS General Consulting
          </span>
          <span className="w-px h-3 bg-black/10 shrink-0" />
          <span className="text-[9px] uppercase text-[#ccc]" style={{ letterSpacing: '0.2em' }}>
            Est. 2009
          </span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {['Privacy', 'Terms', 'Cookies'].map((l, i) => (
            <span key={l} className="flex items-center gap-4">
              {i > 0 && <span className="w-px h-3 bg-black/10 shrink-0" />}
              <a className="text-[9px] uppercase text-[#bbb] hover:text-[#00aaff] cursor-pointer transition-colors" style={{ letterSpacing: '0.2em' }}>
                {l}
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        className="select-none text-center leading-none text-[#0a0a0a] px-4 pb-3 text-[clamp(64px,18vw,200px)]"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}
      >
        SHAAS
      </div>
    </footer>
  )
}