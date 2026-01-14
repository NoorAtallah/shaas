'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function ElegantServicesSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
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

  const services = [
    {
      id: '01',
      title: 'Marketing',
      subtitle: 'Consultancy',
      desc: 'Strategic brand elevation and market positioning that transforms emerging companies into industry-defining leaders through data-driven insights.',
      features: ['Brand Strategy', 'Market Analysis', 'Growth Planning', 'Digital Presence'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tag: 'Strategy'
    },
    {
      id: '02',
      title: 'Project',
      subtitle: 'Development',
      desc: 'End-to-end execution frameworks converting ambitious visions into measurable market success stories with precision methodology.',
      features: ['Agile Methodology', 'Risk Management', 'Quality Assurance', 'Delivery Excellence'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tag: 'Innovation'
    },
    {
      id: '03',
      title: 'Administrative',
      subtitle: 'Excellence',
      desc: 'Operational frameworks engineered for sustainable excellence and organizational transformation across all business verticals.',
      features: ['Process Optimization', 'Compliance', 'Documentation', 'Workflow Design'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      tag: 'Operations'
    },
    {
      id: '04',
      title: 'Human',
      subtitle: 'Capital',
      desc: 'Building extraordinary teams through strategic talent architecture, leadership development, and culture transformation initiatives.',
      features: ['Talent Acquisition', 'Leadership Dev', 'Culture Building', 'Performance'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      tag: 'People'
    },
    {
      id: '05',
      title: 'Logistics',
      subtitle: 'Intelligence',
      desc: 'Optimizing global supply networks through advanced analytics, innovative distribution strategies, and cost optimization.',
      features: ['Supply Chain', 'Distribution', 'Inventory Mgmt', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      tag: 'Systems'
    }
  ]

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
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="sectionNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#sectionNoise)"/>
        </svg>
      </div>

      {/* Fluid background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] transition-all duration-[3000ms] ease-out"
          style={{
            left: `${mousePos.x - 30}%`,
            top: '10%',
            background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] transition-all duration-[4000ms] ease-out"
          style={{
            right: `${100 - mousePos.x - 20}%`,
            top: '50%',
            background: 'radial-gradient(ellipse at center, rgba(0,100,200,0.05) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] transition-all duration-[3500ms] ease-out"
          style={{
            left: '20%',
            bottom: '10%',
            background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.04) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Section content */}
      <div className="relative z-10">
        
        {/* Section header */}
        <div className="px-8 lg:px-20 pt-32 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Label */}
            <div 
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-2 h-2 bg-[#0af]" />
              <span className="text-[#0af] text-[10px] tracking-[0.5em] uppercase">
                Our Expertise
              </span>
              <div className="w-20 h-[1px] bg-gradient-to-r from-[#0af]/50 to-transparent" />
            </div>

            {/* Main heading */}
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <div className="overflow-hidden">
                  <h2 
                    className={`text-[12vw] lg:text-[6vw] font-extralight text-white leading-[0.9] tracking-[-0.03em] transition-all duration-1000 delay-100 ${
                      isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
                  >
                    Services
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 
                    className={`text-[12vw] lg:text-[6vw] font-extralight italic leading-[0.9] tracking-[-0.03em] transition-all duration-1000 delay-200 ${
                      isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
                    style={{
                      background: 'linear-gradient(90deg, #0af 0%, #06f 50%, #0af 100%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'shimmer 4s linear infinite'
                    }}
                  >
                    & Solutions
                  </h2>
                </div>
              </div>

              <p 
                className={`text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-md lg:ml-auto transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Five core disciplines working in harmony to transform 
                <span className="text-white/70"> ambitious visions</span> into 
                <span className="text-white/70"> measurable success</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Services - Alternating layout */}
        <div className="px-8 lg:px-20">
          <div className="max-w-7xl mx-auto space-y-32 lg:space-y-48">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0
              
              return (
                <div
                  key={service.id}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 150}ms` }}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}>
                    
                    {/* Image side */}
                    <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Large background number */}
                      <div 
                        className={`absolute -top-16 ${isEven ? '-left-8' : '-right-8'} pointer-events-none select-none z-0`}
                      >
                        <span 
                          className="text-[20rem] lg:text-[25rem] font-extralight leading-none transition-all duration-700"
                          style={{ 
                            color: 'transparent',
                            WebkitTextStroke: hoveredService === idx ? '1px rgba(0,170,255,0.15)' : '1px rgba(0,170,255,0.05)',
                          }}
                        >
                          {service.id}
                        </span>
                      </div>

                      {/* Image container */}
                      <div className="relative z-10 group">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className={`w-full h-full object-cover transition-all duration-1000 ${
                              hoveredService === idx ? 'scale-105' : 'scale-100'
                            }`}
                          />
                          
                          {/* Overlays */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent" />
                          <div className={`absolute inset-0 bg-[#0af]/10 mix-blend-overlay transition-opacity duration-500 ${
                            hoveredService === idx ? 'opacity-100' : 'opacity-0'
                          }`} />

                          {/* Frame border */}
                          <div className={`absolute inset-0 border transition-colors duration-500 ${
                            hoveredService === idx ? 'border-[#0af]/30' : 'border-white/5'
                          }`} />
                          
                          {/* Corner accents */}
                          <div className={`absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 transition-all duration-500 ${
                            hoveredService === idx ? 'border-[#0af] w-16 h-16' : 'border-[#0af]/30'
                          }`} />
                          <div className={`absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 transition-all duration-500 ${
                            hoveredService === idx ? 'border-[#0af] w-16 h-16' : 'border-[#0af]/30'
                          }`} />

                          {/* Service tag */}
                          <div className="absolute top-6 right-6">
                            <span className={`text-[10px] tracking-[0.3em] uppercase px-4 py-2 border backdrop-blur-sm transition-all duration-500 ${
                              hoveredService === idx 
                                ? 'border-[#0af]/50 text-[#0af] bg-[#0af]/10' 
                                : 'border-white/10 text-white/40 bg-white/5'
                            }`}>
                              {service.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={`relative z-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Service number & title */}
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`text-4xl font-extralight transition-colors duration-500 ${
                            hoveredService === idx ? 'text-[#0af]' : 'text-white/20'
                          }`}>
                            {service.id}
                          </span>
                          <div className={`h-[1px] transition-all duration-500 ${
                            hoveredService === idx ? 'w-16 bg-[#0af]' : 'w-8 bg-white/20'
                          }`} />
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                          {service.title}
                          <br />
                          <span className={`italic transition-colors duration-500 ${
                            hoveredService === idx ? 'text-[#0af]' : 'text-white/50'
                          }`}>
                            {service.subtitle}
                          </span>
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-lg">
                        {service.desc}
                      </p>

                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                        {service.features.map((feature, fidx) => (
                          <div 
                            key={fidx}
                            className="flex items-center gap-3 group/feature"
                          >
                            <div className={`w-1.5 h-1.5 transition-colors duration-300 ${
                              hoveredService === idx ? 'bg-[#0af]' : 'bg-white/20'
                            }`} />
                            <span className="text-white/40 text-sm font-light group-hover/feature:text-white/70 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <a 
                        href="#"
                        className="group/btn inline-flex items-center gap-4"
                      >
                        <span className={`text-[11px] tracking-[0.25em] transition-all duration-500 ${
                          hoveredService === idx ? 'text-[#0af]' : 'text-white/50'
                        }`}>
                          EXPLORE SERVICE
                        </span>
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          hoveredService === idx 
                            ? 'border-[#0af] bg-[#0af]/10' 
                            : 'border-white/20 group-hover/btn:border-white/40'
                        }`}>
                          <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                            hoveredService === idx ? 'text-[#0af]' : 'text-white/40'
                          } group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5`} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="px-8 lg:px-20 py-32">
          <div className="max-w-7xl mx-auto flex items-center gap-8">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="w-3 h-3 border border-[#0af]/30 rotate-45" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Stats section */}
        <div className="px-8 lg:px-20 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`group relative text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${1200 + idx * 100}ms` }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-[#0af]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <span className="text-5xl lg:text-6xl font-extralight text-white group-hover:text-[#0af] transition-colors duration-500">
                        {stat.value}
                      </span>
                      <span className="text-2xl text-[#0af]">{stat.suffix}</span>
                    </div>
                    <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/50 transition-colors">
                      {stat.label}
                    </div>
                    {/* Underline */}
                    <div className="w-0 group-hover:w-12 h-[1px] bg-[#0af] mt-4 mx-auto transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative px-8 lg:px-20 py-32 border-t border-white/5">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-[800px] h-[800px] bg-[#0af]/5 rounded-full blur-[200px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Decorative element */}
            <div 
              className={`flex items-center justify-center gap-4 mb-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1600ms' }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/30" />
              <div className="w-2 h-2 bg-[#0af] animate-pulse" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/30" />
            </div>

            {/* Heading */}
            <div className="overflow-hidden mb-8">
              <h2 
                className={`text-[10vw] lg:text-[5vw] font-extralight text-white leading-[1.1] tracking-[-0.03em] transition-all duration-1000 ${
                  isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: '1700ms' }}
              >
                Ready to
                <span 
                  className="italic ml-4"
                  style={{
                    background: 'linear-gradient(90deg, #0af, #06f)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transform?
                </span>
              </h2>
            </div>

            <p 
              className={`text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1800ms' }}
            >
              Join visionary enterprises who trust us to architect their success. 
              Let's build something extraordinary together.
            </p>

            {/* Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1900ms' }}
            >
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0af] to-[#06f]" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-4 px-10 py-5 text-white text-[11px] tracking-[0.25em]">
                  START A PROJECT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex items-center gap-4 px-8 py-5 border border-white/10 hover:border-[#0af]/50 transition-colors duration-500">
                <span className="text-white/50 group-hover:text-white text-[11px] tracking-[0.2em] transition-colors">
                  VIEW PORTFOLIO
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#0af] transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 lg:px-20 py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 border border-[#0af]/30 flex items-center justify-center">
                    <span className="text-[#0af] text-lg font-light">S</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0af]" />
                </div>
                <div>
                  <div className="text-white/90 text-xs tracking-[0.3em] font-light">SHAAS</div>
                  <div className="text-white/30 text-[8px] tracking-[0.2em]">CONSULTING GROUP</div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#"
                    className="text-white/30 hover:text-[#0af] text-[10px] tracking-[0.15em] transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-white/20 text-[10px] tracking-[0.1em]">
                © 2024 SHAAS CONSULTING
              </div>
            </div>
          </div>
        </footer>
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

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}