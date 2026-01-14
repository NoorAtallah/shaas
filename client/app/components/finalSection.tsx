'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

export default function ElegantFinalSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '500', suffix: '+', label: 'Projects Delivered' },
    { value: '98', suffix: '%', label: 'Client Satisfaction' },
    { value: '15', suffix: '+', label: 'Years Excellence' },
    { value: '50', suffix: '+', label: 'Global Partners' }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#050507] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="finalNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#finalNoise)"/>
        </svg>
      </div>

      {/* Animated wave dots background */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] overflow-hidden pointer-events-none">
        <div className="wave-container">
          {[...Array(20)].map((_, rowIndex) => (
            <div key={rowIndex} className="wave-row" style={{ '--row': rowIndex } as React.CSSProperties}>
              {[...Array(40)].map((_, dotIndex) => (
                <div 
                  key={dotIndex} 
                  className="wave-dot"
                  style={{ 
                    '--dot': dotIndex,
                    '--delay': (rowIndex * 0.1 + dotIndex * 0.05)
                  } as React.CSSProperties}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent" />
      </div>

      {/* Fluid background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] transition-all duration-[3000ms] ease-out"
          style={{
            left: `${mousePos.x - 30}%`,
            top: '10%',
            background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.08) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] transition-all duration-[4000ms] ease-out"
          style={{
            right: '10%',
            bottom: '20%',
            background: 'radial-gradient(ellipse at center, rgba(0,100,200,0.06) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        
        {/* CTA Section */}
        <div className="px-8 lg:px-20 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Top decorative element */}
            <div 
              className={`flex items-center justify-center gap-6 mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/30" />
              <div className="relative">
                <div className="w-3 h-3 rotate-45 border border-[#0af]/50" />
                <div className="absolute inset-0 w-3 h-3 rotate-45 border border-[#0af]/30 animate-ping" />
              </div>
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/30" />
            </div>

            {/* Label */}
            <div 
              className={`mb-8 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-[#0af] text-[10px] tracking-[0.5em] uppercase">
                Let's Build The Future
              </span>
            </div>

            {/* Main headline */}
            <div className="mb-8">
              <div className="overflow-hidden">
                <h2 
                  className={`text-[10vw] lg:text-[5vw] font-extralight text-white leading-[1.1] tracking-[-0.03em] transition-all duration-1000 delay-200 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Ready to Transform
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-[10vw] lg:text-[5vw] font-extralight text-white/40 leading-[1.1] tracking-[-0.03em] transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Your Business?
                </h2>
              </div>
            </div>

            {/* Decorative line */}
            <div 
              className={`flex items-center justify-center gap-4 mb-10 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/50" />
              <div className="w-1.5 h-1.5 bg-[#0af]/50 rotate-45" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/50" />
            </div>

            {/* Description */}
            <p 
              className={`text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-14 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Join visionary enterprises who are already leveraging our expertise. 
              Your transformation journey starts with a 
              <span className="text-white/70"> single conversation</span>.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0af] to-[#06f]" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-4 px-10 py-5 text-white text-[11px] tracking-[0.25em]">
                  START YOUR JOURNEY
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex items-center gap-4 px-10 py-5 border border-white/10 hover:border-[#0af]/50 bg-white/[0.02] hover:bg-[#0af]/5 transition-all duration-500">
                <span className="text-white/50 group-hover:text-white text-[11px] tracking-[0.2em] transition-colors">
                  SCHEDULE A CALL
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#0af] transition-colors" />
              </button>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group text-center"
                  style={{ transitionDelay: `${800 + idx * 100}ms` }}
                >
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl lg:text-5xl font-extralight text-white group-hover:text-[#0af] transition-colors duration-500">
                      {stat.value}
                    </span>
                    <span className="text-xl text-[#0af]">{stat.suffix}</span>
                  </div>
                  <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/50 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="px-8 lg:px-20 py-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Contact info */}
              <div 
                className={`text-center lg:text-left transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <Mail className="w-4 h-4 text-[#0af]" />
                  <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Email</span>
                </div>
                <a 
                  href="mailto:info@shaas-consulting.ae" 
                  className="text-white/60 hover:text-[#0af] text-sm font-light transition-colors"
                >
                  info@shaas-consulting.ae
                </a>
              </div>

              <div 
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Phone className="w-4 h-4 text-[#0af]" />
                  <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Phone</span>
                </div>
                <a 
                  href="tel:+971568474217" 
                  className="text-white/60 hover:text-[#0af] text-sm font-light transition-colors"
                >
                  +971 568 474 217
                </a>
              </div>

              <div 
                className={`text-center lg:text-right transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
                <div className="flex items-center justify-center lg:justify-end gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-[#0af]" />
                  <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Location</span>
                </div>
                <span className="text-white/60 text-sm font-light">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
   
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
        
        * {
          font-family: 'Karla', sans-serif;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Cormorant Garamond', serif;
        }

        .wave-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) perspective(500px) rotateX(60deg);
          width: 200%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
          padding-bottom: 50px;
        }

        .wave-row {
          display: flex;
          gap: 30px;
          justify-content: center;
        }

        .wave-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0af, #06f);
          opacity: 0.6;
          animation: wave-float 4s ease-in-out infinite;
          animation-delay: calc(var(--delay) * -0.1s);
        }

        @keyframes wave-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.8;
          }
        }

        .wave-row:nth-child(odd) .wave-dot {
          animation-delay: calc(var(--delay) * -0.1s + 0.5s);
        }
      `}</style>
    </section>
  )
}