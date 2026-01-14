'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), 1200)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Elegant noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="navNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#navNoise)"/>
        </svg>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isRevealed ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled
            ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-[#0af]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="px-8 lg:px-20">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="/" className="group flex items-center gap-4 relative z-10">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/9.png" 
                    alt="SHAAS" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Accent corner */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-[#0af] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-[#0af] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-light text-xl tracking-[-0.02em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  SHAAS
                </span>
                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-light">
                  General Consulting
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative py-2"
                  style={{ transitionDelay: `${1400 + idx * 100}ms` }}
                >
                  <span className="text-white/60 hover:text-white text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-500">
                    {item.name}
                  </span>
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0af] group-hover:w-full transition-all duration-500" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="group flex items-center gap-4">
                <span className="text-[#0af] text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
                  Get Started
                </span>
                <div className="w-11 h-11 rounded-full border border-[#0af]/30 group-hover:border-[#0af] flex items-center justify-center relative overflow-hidden transition-all duration-500">
                  <div className="absolute inset-0 bg-[#0af] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                  <ArrowUpRight className="w-4 h-4 text-[#0af] group-hover:text-white relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#0af]/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#0af]/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white/60 relative z-10" />
              ) : (
                <Menu className="w-5 h-5 text-white/60 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Elegant bottom accent line */}
        <div 
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#0af]/20 to-transparent transition-opacity duration-700 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#050507]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#050507] border-l border-[#0af]/10">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-8 h-24 border-b border-white/5">
                  <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#0af]/30 transition-all duration-500"
                  >
                    <X className="w-5 h-5 text-white/60" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-8 py-12 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group block py-4 border-b border-white/5 hover:border-[#0af]/20 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white text-2xl font-light group-hover:text-[#0af] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {item.name}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#0af] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase mt-1 block">
                        0{index + 1}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="px-8 py-8 border-t border-white/5">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group w-full relative overflow-hidden border border-[#0af]/30 hover:border-[#0af] py-5 flex items-center justify-between px-6 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-[#0af] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <span className="text-[#0af] group-hover:text-white text-[10px] tracking-[0.3em] uppercase relative z-10 transition-colors duration-500">
                      Get Started
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#0af] group-hover:text-white relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.button>

                  {/* Contact info */}
                  <div className="mt-8 space-y-3">
                    <div>
                      <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-1">Email</div>
                      <a href="mailto:info@shaas.com" className="text-white/40 hover:text-[#0af] text-sm transition-colors duration-300">
                        info@shaas.com
                      </a>
                    </div>
                    <div>
                      <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-1">Phone</div>
                      <a href="tel:+1234567890" className="text-white/40 hover:text-[#0af] text-sm transition-colors duration-300">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[#0af]/10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#0af]/10 pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
      `}</style>
    </>
  )
}