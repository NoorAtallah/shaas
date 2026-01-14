'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-[#050507] overflow-hidden"
    >
      {/* Elegant noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="footerNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#footerNoise)"/>
        </svg>
      </div>

      {/* Subtle fluid orb */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0af]/5 rounded-full blur-[120px] opacity-50" />

      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0af]/20 to-transparent" />

      <div className="relative z-10 px-8 lg:px-20 pt-20 pb-12">
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Section - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="lg:col-span-4 relative"
          >
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l border-t border-[#0af]/10" />
            
            <div className="mb-8">
              <h3 
                className="text-4xl font-light text-white mb-2 tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                SHAAS
              </h3>
              <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                General Consulting
              </p>
            </div>
            
            <p className="text-white/40 leading-relaxed mb-8 font-light max-w-sm">
              Transforming visionary enterprises through precision consultancy and innovative strategy since 2009.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: 'twitter', href: '#' },
                { icon: 'github', href: '#' },
                { icon: 'linkedin', href: '#' }
              ].map((social, idx) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="group w-11 h-11 flex items-center justify-center border border-white/10 hover:border-[#0af]/30 relative overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-[#0af]/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <svg className="w-4 h-4 text-white/40 group-hover:text-[#0af] relative z-10 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'twitter' && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    )}
                    {social.icon === 'github' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    )}
                    {social.icon === 'linkedin' && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>

       
          </motion.div>

          {/* Links Sections - Spans 8 columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
            >
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8 font-light">
                Services
              </h4>
              <ul className="space-y-4">
                {['Marketing Consultancy', 'Project Development', 'Administrative Excellence', 'Human Capital', 'Logistics Intelligence'].map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-500 font-light"
                    >
                      <span className="w-0 h-[1px] bg-[#0af] group-hover:w-3 transition-all duration-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
            >
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8 font-light">
                Company
              </h4>
              <ul className="space-y-4">
                {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Partners'].map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-500 font-light"
                    >
                      <span className="w-0 h-[1px] bg-[#0af] group-hover:w-3 transition-all duration-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.87, 0, 0.13, 1] }}
            >
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8 font-light">
                Get in Touch
              </h4>
              <ul className="space-y-6">
                <li>
                  <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-2">Email</div>
                  <a 
                    href="mailto:info@shaas-consulting.ae" 
                    className="text-white/50 hover:text-[#0af] transition-colors duration-300 font-light"
                  >
                    info@shaas-consulting.ae
                  </a>
                </li>
                <li>
                  <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-2">Phone</div>
                  <a 
                    href="tel:+971568474217" 
                    className="text-white/50 hover:text-[#0af] transition-colors duration-300 font-light"
                  >
                    +971 568 474 217
                  </a>
                </li>
                <li>
                  <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-2">Location</div>
                  <p className="text-white/50 font-light leading-relaxed">
                    AL Bateen<br/>
                    Abu Dhabi, UAE
                  </p>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.87, 0, 0.13, 1] }}
          className="mb-20 pb-20 border-b border-white/5"
        >
          <div className="max-w-2xl">
            <h4 
              className="text-2xl lg:text-3xl font-light text-white mb-4 tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Stay Updated
            </h4>
            <p className="text-white/40 mb-8 font-light">
              Subscribe to our newsletter for insights on strategic consultancy and industry trends.
            </p>
            <form className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#0af]/30 transition-colors duration-500 font-light"
              />
              <button 
                type="submit"
                className="group px-8 py-4 border border-[#0af]/30 hover:border-[#0af] text-[#0af] hover:text-white relative overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[#0af] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase">
                  Subscribe
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="text-white/30 text-sm font-light">
              © 2024 SHAAS General Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#0af] animate-pulse" />
              <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
                Est. 2009
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
              <a 
                key={idx}
                href="#" 
                className="text-white/30 hover:text-[#0af] transition-colors duration-300 font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Decorative corner element */}
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-[#0af]/10 pointer-events-none hidden lg:block" />

      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
      `}</style>
    </footer>
  )
}