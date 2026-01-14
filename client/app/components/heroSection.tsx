'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight, Circle } from 'lucide-react'

export default function ElegantGalleryHero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [hoverState, setHoverState] = useState({ active: false, x: 0, y: 0 })
  const [textMorph, setTextMorph] = useState(0)
  const marqueeRef = useRef(null)

  useEffect(() => {
    interface MousePosition {
      x: number
      y: number
    }

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
    setTimeout(() => setIsLoaded(true), 200)
    setTimeout(() => setIsRevealed(true), 1000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Text morphing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextMorph(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const services = [
    { 
      id: '01', 
      title: 'Marketing', 
      subtitle: 'Consultancy',
      desc: 'Elevating brands through strategic vision',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      tag: 'Strategy'
    },
    { 
      id: '02', 
      title: 'Project', 
      subtitle: 'Development',
      desc: 'Transforming concepts into reality',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
      tag: 'Innovation'
    },
    { 
      id: '03', 
      title: 'Administrative', 
      subtitle: 'Excellence',
      desc: 'Architecting operational mastery',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
      tag: 'Operations'
    },
    { 
      id: '04', 
      title: 'Human', 
      subtitle: 'Capital',
      desc: 'Cultivating extraordinary talent',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
      tag: 'People'
    },
    { 
      id: '05', 
      title: 'Logistics', 
      subtitle: 'Intelligence',
      desc: 'Optimizing global supply networks',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
      tag: 'Systems'
    }
  ]

  const current = services[activeIndex]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050507]">
      
      {/* Elegant noise texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="elegantNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#elegantNoise)"/>
        </svg>
      </div>

      {/* Cinematic reveal overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050507] transition-transform duration-[1500ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isRevealed ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="text-[#0af]/20 text-sm tracking-[1em] uppercase animate-pulse"
            >
              SHAAS
            </div>
          </div>
        </div>
      </div>

      {/* Fluid background orb */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] transition-all duration-[3000ms] ease-out"
          style={{
            left: `${mousePos.x - 25}%`,
            top: `${mousePos.y - 25}%`,
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(0,170,255,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, rgba(0,100,200,0.05) 0%, transparent 50%)
            `,
            filter: 'blur(60px)',
            borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            animation: 'fluid-morph 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Elegant line accents */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="elegantLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0af" stopOpacity="0" />
            <stop offset="50%" stopColor="#0af" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0af" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizontal accent line */}
        <line 
          x1="0" y1="50%" x2="100%" y2="50%" 
          stroke="url(#elegantLine1)" 
          strokeWidth="1"
          className={`transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '500ms' }}
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        


        {/* Main hero area */}
        <div className="flex-1 flex items-center px-8 lg:px-20 py-12">
          <div className="w-full">
            
            {/* Upper section - Massive typography */}
            <div className="relative mb-16 lg:mb-24">
              {/* Floating service tag */}
              <div 
                className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${
                  isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '1500ms' }}
              >
                <div className="w-2 h-2 bg-[#0af] animate-pulse" />
                <span className="text-[#0af] text-[10px] tracking-[0.5em] uppercase">
                  {current.tag} — {current.id}
                </span>
              </div>

              {/* Giant headline with blend effects */}
              <div className="relative">
                {/* Background outline text */}
                <div 
                  className="absolute -top-8 lg:-top-16 left-0 right-0 overflow-hidden pointer-events-none select-none"
                  style={{ 
                    transform: `translateX(${(mousePos.x - 50) * 0.05}px)`,
                    transition: 'transform 1s ease-out'
                  }}
                >
                  <h1 
                    className={`text-[15vw] lg:text-[12vw] font-extralight tracking-[-0.04em] leading-none whitespace-nowrap transition-all duration-1000 ${
                      isRevealed ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(0,170,255,0.07)',
                      transitionDelay: '1600ms'
                    }}
                  >
                    Consultancy
                  </h1>
                </div>

                {/* Main headline */}
                <div className="relative z-10">
                  <div className="overflow-hidden">
                    <h1 
                      className={`text-[13vw] sm:text-[10vw] lg:text-[8vw] font-extralight text-white leading-[0.9] tracking-[-0.03em] transition-all duration-1000 ${
                        isRevealed ? 'translate-y-0' : 'translate-y-full'
                      }`}
                      style={{ transitionDelay: '1700ms' }}
                    >
                      Strategic
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 
                      className={`text-[13vw] sm:text-[10vw] lg:text-[8vw] font-extralight italic leading-[0.9] tracking-[-0.03em] transition-all duration-1000 ${
                        isRevealed ? 'translate-y-0' : 'translate-y-full'
                      }`}
                      style={{ 
                        transitionDelay: '1800ms',
                        background: 'linear-gradient(90deg, #0af 0%, #06f 50%, #0af 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'shimmer 4s linear infinite'
                      }}
                    >
                      Excellence
                    </h1>
                  </div>
                </div>

                {/* Floating elements around text */}
                <div 
                  className={`absolute top-0 right-0 lg:right-20 transition-all duration-1000 ${
                    isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ 
                    transitionDelay: '2000ms',
                    transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px)`
                  }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 border border-[#0af]/20 rotate-45" />
                </div>
              </div>

              {/* Subtext and CTA row */}
              <div 
                className={`flex flex-col lg:flex-row lg:items-end justify-between mt-12 lg:mt-16 gap-8 transition-all duration-1000 ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1900ms' }}
              >
                <p className="text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-md">
                  Transforming visionary enterprises through 
                  <span className="text-white/70"> precision consultancy</span> and 
                  <span className="text-white/70"> innovative strategy</span>.
                </p>

                <button className="group flex items-center gap-6 self-start lg:self-auto">
                  <div className="relative overflow-hidden">
                    <span className="block text-white text-[11px] tracking-[0.3em] group-hover:-translate-y-full transition-transform duration-500">
                      DISCOVER MORE
                    </span>
                    <span className="absolute top-0 left-0 text-[#0af] text-[11px] tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      DISCOVER MORE
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-white/20 group-hover:border-[#0af] flex items-center justify-center relative overflow-hidden transition-colors duration-500">
                    <div className="absolute inset-0 bg-[#0af] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white relative z-10 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Horizontal gallery section */}
            <div 
              className={`relative transition-all duration-1000 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '2100ms' }}
            >
              {/* Gallery label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#0af] to-transparent" />
                <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase">Featured Services</span>
              </div>

              {/* Horizontal scroll gallery */}
              <div className="relative">
                <div 
                  ref={marqueeRef}
                  className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {services.map((service, idx) => (
                    <div
                      key={service.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={(e) => setHoverState({ 
                        active: true, 
                        x: e.clientX, 
                        y: e.clientY 
                      })}
                      onMouseLeave={() => setHoverState({ active: false, x: 0, y: 0 })}
                      className={`group relative flex-shrink-0 w-[300px] lg:w-[400px] cursor-pointer transition-all duration-700 ${
                        idx === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      {/* Card */}
                      <div className="relative aspect-[4/5] overflow-hidden">
                        {/* Image */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/50 to-transparent" />
                        <div className={`absolute inset-0 bg-[#0af]/10 transition-opacity duration-500 ${
                          idx === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`} />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                          {/* Top */}
                          <div className="flex items-start justify-between">
                            <span className={`text-4xl lg:text-5xl font-extralight transition-colors duration-500 ${
                              idx === activeIndex ? 'text-[#0af]' : 'text-white/20'
                            }`}>
                              {service.id}
                            </span>
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                              idx === activeIndex 
                                ? 'border-[#0af] bg-[#0af]/10' 
                                : 'border-white/20 group-hover:border-white/40'
                            }`}>
                              <ArrowUpRight className={`w-4 h-4 transition-colors ${
                                idx === activeIndex ? 'text-[#0af]' : 'text-white/40'
                              }`} />
                            </div>
                          </div>

                          {/* Bottom */}
                          <div>
                            <div className={`text-[10px] tracking-[0.3em] uppercase mb-3 transition-colors duration-500 ${
                              idx === activeIndex ? 'text-[#0af]' : 'text-white/30'
                            }`}>
                              {service.tag}
                            </div>
                            <h3 className="text-xl lg:text-2xl text-white font-light mb-1">
                              {service.title}
                            </h3>
                            <h3 className="text-xl lg:text-2xl text-white/50 font-extralight italic">
                              {service.subtitle}
                            </h3>
                            
                            {/* Description - shows on active */}
                            <p className={`text-white/40 text-sm font-light mt-4 transition-all duration-500 ${
                              idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                              {service.desc}
                            </p>
                          </div>
                        </div>

                        {/* Active border */}
                        <div className={`absolute inset-0 border transition-colors duration-500 pointer-events-none ${
                          idx === activeIndex ? 'border-[#0af]/30' : 'border-white/5'
                        }`} />
                        
                        {/* Corner accents */}
                        <div className={`absolute top-0 left-0 w-6 h-6 border-l border-t transition-colors duration-500 ${
                          idx === activeIndex ? 'border-[#0af]' : 'border-transparent'
                        }`} />
                        <div className={`absolute bottom-0 right-0 w-6 h-6 border-r border-b transition-colors duration-500 ${
                          idx === activeIndex ? 'border-[#0af]' : 'border-transparent'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll fade edges */}
                <div className="absolute top-0 bottom-8 left-0 w-20 bg-gradient-to-r from-[#050507] to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-8 right-0 w-20 bg-gradient-to-l from-[#050507] to-transparent pointer-events-none" />
              </div>

              {/* Gallery navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  {services.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="group relative py-2"
                    >
                      <div className={`h-[2px] transition-all duration-500 ${
                        idx === activeIndex 
                          ? 'w-12 bg-[#0af]' 
                          : 'w-6 bg-white/20 group-hover:bg-white/40'
                      }`} />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-white/30 text-sm font-light">
                    <span className="text-[#0af]">{String(activeIndex + 1).padStart(2, '0')}</span>
                    <span className="mx-2">/</span>
                    <span>{String(services.length).padStart(2, '0')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div 
          className={`border-t border-white/5 transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '2300ms' }}
        >
          <div className="px-8 lg:px-20 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Years of Excellence' },
                { value: '50+', label: 'Global Partners' }
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-extralight text-white group-hover:text-[#0af] transition-colors duration-500">
                      {stat.value.replace(/[^0-9]/g, '')}
                    </span>
                    <span className="text-[#0af] text-lg">
                      {stat.value.replace(/[0-9]/g, '')}
                    </span>
                  </div>
                  <div className="text-white/30 text-[10px] tracking-[0.15em] uppercase mt-2 group-hover:text-white/50 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating side elements */}
        <div 
          className={`fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 transition-all duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '2400ms' }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#0af]/30 to-transparent" />
          <div 
            className="text-[9px] text-white/20 tracking-[0.4em] uppercase"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
          >
            Scroll to explore
          </div>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#0af]/30 to-transparent" />
        </div>

        {/* Right side - current year */}
        <div 
          className={`fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 transition-all duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '2400ms' }}
        >
          <div 
            className="text-[9px] text-white/20 tracking-[0.4em]"
            style={{ writingMode: 'vertical-lr' }}
          >
            EST. 2009
          </div>
          <div className="w-6 h-6 border border-white/10 rotate-45" />
          <div 
            className="text-[9px] text-[#0af]/40 tracking-[0.4em]"
            style={{ writingMode: 'vertical-lr' }}
          >
            © 2024
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
        
        * {
          font-family: 'Karla', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes fluid-morph {
          0%, 100% {
            border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
            transform: rotate(0deg);
          }
          33% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: rotate(10deg);
          }
          66% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(-5deg);
          }
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}