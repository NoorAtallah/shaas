'use client'

import { useState, useEffect, useRef } from 'react'

export default function CinematicBreakerSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
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
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)))
        setScrollProgress(progress)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050507] overflow-hidden flex items-center justify-center"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.02]">
        <svg width="100%" height="100%">
          <filter id="cinematicNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#cinematicNoise)"/>
        </svg>
      </div>

      {/* Dynamic background layers */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div 
          className="absolute w-[120vw] h-[120vw] rounded-full transition-all duration-[2000ms] ease-out"
          style={{
            left: `${mousePos.x - 60}%`,
            top: `${mousePos.y - 60}%`,
            background: 'radial-gradient(circle, rgba(0,170,255,0.08) 0%, rgba(0,100,200,0.04) 30%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Accent orbs */}
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full transition-all duration-[3000ms] ease-out opacity-60"
          style={{
            right: '10%',
            top: '20%',
            background: 'radial-gradient(circle, rgba(0,170,255,0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
            transform: `translate(${(mousePos.x - 50) * -0.1}px, ${(mousePos.y - 50) * -0.1}px)`,
          }}
        />
        <div 
          className="absolute w-[30vw] h-[30vw] rounded-full transition-all duration-[3500ms] ease-out opacity-40"
          style={{
            left: '15%',
            bottom: '15%',
            background: 'radial-gradient(circle, rgba(0,100,255,0.2) 0%, transparent 60%)',
            filter: 'blur(100px)',
            transform: `translate(${(mousePos.x - 50) * 0.15}px, ${(mousePos.y - 50) * 0.15}px)`,
          }}
        />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal flowing lines */}
        <div 
          className="absolute top-[30%] left-0 right-0 h-[1px] opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,170,255,0.5) 20%, rgba(0,170,255,0.8) 50%, rgba(0,170,255,0.5) 80%, transparent)',
            transform: `translateX(${(scrollProgress - 0.5) * 200}px)`,
          }}
        />
        <div 
          className="absolute top-[70%] left-0 right-0 h-[1px] opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,100,255,0.5) 20%, rgba(0,100,255,0.8) 50%, rgba(0,100,255,0.5) 80%, transparent)',
            transform: `translateX(${(0.5 - scrollProgress) * 200}px)`,
          }}
        />
        
        {/* Vertical accent lines */}
        <div 
          className={`absolute left-[20%] top-0 bottom-0 w-[1px] transition-all duration-1000 ${
            isVisible ? 'opacity-10' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(0,170,255,0.3) 30%, rgba(0,170,255,0.3) 70%, transparent)',
          }}
        />
        <div 
          className={`absolute right-[20%] top-0 bottom-0 w-[1px] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-10' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(0,170,255,0.3) 30%, rgba(0,170,255,0.3) 70%, transparent)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#0af]/40"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i % 5) * 15}%`,
              animation: `float-particle ${8 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 lg:px-20 w-full max-w-7xl mx-auto">
        <div className="text-center">
          
          {/* Top decorative element */}
          <div 
            className={`flex items-center justify-center gap-6 mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/30" />
            <div className="relative">
              <div className="w-3 h-3 rotate-45 border border-[#0af]/50" />
              <div className="absolute inset-0 w-3 h-3 rotate-45 border border-[#0af]/30 animate-ping" />
            </div>
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/30" />
          </div>

          {/* Eyebrow text */}
          <div 
            className={`mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#0af] text-[11px] tracking-[0.6em] uppercase">
              Redefining Excellence
            </span>
          </div>

          {/* Giant headline */}
          <div className="relative mb-12">
            {/* Background ghost text */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              style={{
                transform: `translateX(${(mousePos.x - 50) * 0.05}px)`,
              }}
            >
              <span 
                className={`text-[25vw] lg:text-[20vw] font-extralight leading-none transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(0,170,255,0.03)',
                }}
              >
                VISION
              </span>
            </div>

            {/* Main headline */}
            <div className="relative">
              <div className="overflow-hidden">
                <h2 
                  className={`text-[14vw] lg:text-[10vw] font-extralight text-white leading-[0.85] tracking-[-0.04em] transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Where
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-[14vw] lg:text-[10vw] font-extralight leading-[0.85] tracking-[-0.04em] transition-all duration-1000 delay-400 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, #0af 0%, #06f 30%, #0af 60%, #06f 100%)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-flow 8s linear infinite',
                  }}
                >
                  Vision
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-[14vw] lg:text-[10vw] font-extralight text-white/30 italic leading-[0.85] tracking-[-0.04em] transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Meets Reality
                </h2>
              </div>
            </div>
          </div>

          {/* Decorative center line */}
          <div 
            className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/50" />
            <div className="w-2 h-2 bg-[#0af]/50 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/50" />
          </div>

          {/* Subtitle */}
          <p 
            className={`text-white/40 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We don't just consult — we <span className="text-white/70">architect transformations</span> that 
            redefine what's possible for ambitious enterprises.
          </p>

          {/* Stats row */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-12 lg:gap-20 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: '500', suffix: '+', label: 'Projects' },
              { number: '15', suffix: 'Y', label: 'Excellence' },
              { number: '98', suffix: '%', label: 'Success' },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group text-center"
                style={{ transitionDelay: `${900 + idx * 100}ms` }}
              >
                <div className="relative">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl lg:text-6xl font-extralight text-white group-hover:text-[#0af] transition-colors duration-500">
                      {stat.number}
                    </span>
                    <span className="text-2xl text-[#0af]">{stat.suffix}</span>
                  </div>
                  <div className="text-white/30 text-[10px] tracking-[0.25em] uppercase mt-2">
                    {stat.label}
                  </div>
                  {/* Hover underline */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[1px] bg-[#0af] transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div 
            className={`flex items-center justify-center gap-4 mt-20 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-white/10" />
              <div className="w-1.5 h-1.5 bg-[#0af]/50 rounded-full animate-pulse" />
              <div className="w-8 h-[1px] bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-12 left-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-l border-t border-[#0af]/20" />
      </div>
      <div className={`absolute top-12 right-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-r border-t border-[#0af]/20" />
      </div>
      <div className={`absolute bottom-12 left-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-l border-b border-[#0af]/20" />
      </div>
      <div className={`absolute bottom-12 right-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-r border-b border-[#0af]/20" />
      </div>

      {/* Side labels */}
      <div 
        className={`absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="text-[9px] text-white/15 tracking-[0.5em] uppercase"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Strategic Excellence
        </div>
      </div>
      <div 
        className={`absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="text-[9px] text-white/15 tracking-[0.5em] uppercase"
          style={{ writingMode: 'vertical-lr' }}
        >
          Since 2009
        </div>
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

        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  )
}