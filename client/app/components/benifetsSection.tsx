'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function ElegantProcessSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  const steps = [
    {
      id: '01',
      phase: 'Discovery',
      title: 'Understanding',
      subtitle: 'Your World',
      desc: 'We immerse ourselves in your challenges through deep analysis and strategic thinking, finding opportunities hidden in complexity.',
      timeline: 'Weeks 1-2',
      details: ['Stakeholder Interviews', 'Market Analysis', 'Goal Definition', 'Resource Assessment']
    },
    {
      id: '02',
      phase: 'Design & Build',
      title: 'Architecting',
      subtitle: 'Excellence',
      desc: 'Custom solutions designed precisely for your unique needs, built with precision methodology and attention to every detail.',
      timeline: 'Weeks 3-8',
      details: ['Strategic Planning', 'Solution Design', 'Implementation', 'Quality Assurance']
    },
    {
      id: '03',
      phase: 'Deploy',
      title: 'Launch &',
      subtitle: 'Transform',
      desc: 'Seamless deployment with real-time monitoring and continuous optimization. Your solution evolves and improves every day.',
      timeline: 'Week 9+',
      details: ['System Integration', 'Team Training', 'Performance Monitoring', 'Iterative Refinement']
    },
    {
      id: '04',
      phase: 'Partnership',
      title: 'Growing',
      subtitle: 'Together',
      desc: 'Your success drives us. We provide ongoing support, strategic guidance, and continuous innovation as your needs evolve.',
      timeline: 'Ongoing',
      details: ['Continuous Support', 'Strategic Reviews', 'Scalability Planning', 'Innovation Updates']
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#050507] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="processNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#processNoise)"/>
        </svg>
      </div>

      {/* Fluid background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] transition-all duration-[3000ms] ease-out"
          style={{
            left: `${mousePos.x - 30}%`,
            top: '15%',
            background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.05) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] transition-all duration-[4000ms] ease-out"
          style={{
            right: `${100 - mousePos.x - 20}%`,
            top: '50%',
            background: 'radial-gradient(ellipse at center, rgba(0,100,200,0.04) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] transition-all duration-[3500ms] ease-out"
          style={{
            left: '30%',
            bottom: '10%',
            background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.04) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* Elegant vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
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
                The Journey
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
                    From Vision
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 
                    className={`text-[12vw] lg:text-[6vw] font-extralight leading-[0.9] tracking-[-0.03em] transition-all duration-1000 delay-200 ${
                      isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
                  >
                    <span className="text-white/40">To </span>
                    <span 
                      className="italic"
                      style={{
                        background: 'linear-gradient(90deg, #0af 0%, #06f 50%, #0af 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'shimmer 4s linear infinite'
                      }}
                    >
                      Reality
                    </span>
                  </h2>
                </div>
              </div>

              <p 
                className={`text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-md lg:ml-auto transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Every breakthrough starts with a single step. Here's how we transform
                <span className="text-white/70"> ambitious ideas</span> into 
                <span className="text-white/70"> intelligent, living systems</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="px-8 lg:px-20 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-32 lg:space-y-48">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0
                
                return (
                  <div
                    key={step.id}
                    className={`relative transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                    style={{ transitionDelay: `${400 + idx * 200}ms` }}
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    {/* Giant background number */}
                    <div 
                      className={`absolute -top-24 lg:-top-40 pointer-events-none select-none ${
                        isEven ? 'left-0 lg:-left-12' : 'right-0 lg:-right-12'
                      }`}
                    >
                      <span 
                        className={`text-[18rem] lg:text-[25rem] font-extralight leading-none transition-all duration-700 ${
                          activeStep === idx ? 'opacity-100' : 'opacity-50'
                        }`}
                        style={{ 
                          color: 'transparent',
                          WebkitTextStroke: activeStep === idx ? '1px rgba(0,170,255,0.12)' : '1px rgba(0,170,255,0.04)',
                        }}
                      >
                        {step.id}
                      </span>
                    </div>

                    {/* Content grid */}
                    <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                      isEven ? '' : 'lg:text-right'
                    }`}>
                      
                      {/* Timeline indicator - Mobile */}
                      <div className={`lg:hidden flex items-center gap-4 ${isEven ? '' : 'justify-end'}`}>
                        <div className={`w-2 h-2 ${activeStep === idx ? 'bg-[#0af]' : 'bg-white/20'} transition-colors`} />
                        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">{step.phase}</span>
                      </div>

                      {/* Left column */}
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'}`}>
                        {/* Phase tag */}
                        <div className={`hidden lg:flex items-center gap-4 mb-8 ${isEven ? '' : 'justify-end'}`}>
                          <div className={`flex items-center gap-3 px-4 py-2 border backdrop-blur-sm transition-all duration-500 ${
                            activeStep === idx 
                              ? 'border-[#0af]/30 bg-[#0af]/5' 
                              : 'border-white/5 bg-white/[0.02]'
                          }`}>
                            <div className={`w-1.5 h-1.5 transition-colors duration-500 ${
                              activeStep === idx ? 'bg-[#0af]' : 'bg-white/20'
                            }`} />
                            <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                              activeStep === idx ? 'text-[#0af]' : 'text-white/40'
                            }`}>
                              {step.phase}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <div className={`mb-6 ${isEven ? '' : 'lg:text-right'}`}>
                          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                            {step.title}
                            <br />
                            <span className={`italic transition-colors duration-500 ${
                              activeStep === idx ? 'text-[#0af]' : 'text-white/40'
                            }`}>
                              {step.subtitle}
                            </span>
                          </h3>
                        </div>

                        {/* Description */}
                        <p className={`text-white/50 text-base lg:text-lg font-light leading-relaxed mb-8 ${
                          isEven ? 'max-w-md' : 'max-w-md lg:ml-auto'
                        }`}>
                          {step.desc}
                        </p>

                        {/* Timeline */}
                        <div className={`flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}`}>
                          <div className={`h-[1px] transition-all duration-500 ${
                            activeStep === idx ? 'w-12 bg-[#0af]' : 'w-8 bg-white/20'
                          }`} />
                          <span className="text-white/30 text-sm font-light">{step.timeline}</span>
                        </div>
                      </div>

                      {/* Center spacer with connecting line */}
                      <div className="hidden lg:flex lg:col-span-2 justify-center relative order-2">
                        <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        
                        {/* Step indicator dot */}
                        <div className={`sticky top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          activeStep === idx 
                            ? 'border-[#0af] bg-[#0af]/20 shadow-[0_0_20px_rgba(0,170,255,0.5)]' 
                            : 'border-white/20 bg-[#050507]'
                        }`}>
                          <div className={`absolute inset-1 rounded-full transition-colors duration-500 ${
                            activeStep === idx ? 'bg-[#0af]' : 'bg-transparent'
                          }`} />
                        </div>
                      </div>

                      {/* Right column - Details card */}
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                        <div className={`relative p-8 lg:p-10 transition-all duration-500 ${
                          activeStep === idx 
                            ? 'bg-white/[0.03] border border-[#0af]/20' 
                            : 'bg-white/[0.01] border border-white/5'
                        }`}>
                          {/* Corner accents */}
                          <div className={`absolute top-0 left-0 w-6 h-6 border-l border-t transition-colors duration-500 ${
                            activeStep === idx ? 'border-[#0af]' : 'border-white/10'
                          }`} />
                          <div className={`absolute bottom-0 right-0 w-6 h-6 border-r border-b transition-colors duration-500 ${
                            activeStep === idx ? 'border-[#0af]' : 'border-white/10'
                          }`} />

                          {/* Card header */}
                          <div className="flex items-center justify-between mb-8">
                            <span className={`text-3xl font-extralight transition-colors duration-500 ${
                              activeStep === idx ? 'text-[#0af]' : 'text-white/20'
                            }`}>
                              {step.id}
                            </span>
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                              activeStep === idx 
                                ? 'border-[#0af]/50 bg-[#0af]/10' 
                                : 'border-white/10'
                            }`}>
                              <ArrowUpRight className={`w-4 h-4 transition-colors duration-500 ${
                                activeStep === idx ? 'text-[#0af]' : 'text-white/30'
                              }`} />
                            </div>
                          </div>

                          {/* Details list */}
                          <div className="space-y-4">
                            {step.details.map((detail, didx) => (
                              <div 
                                key={didx}
                                className="flex items-center gap-4 group"
                              >
                                <div className={`w-1.5 h-1.5 transition-colors duration-300 ${
                                  activeStep === idx ? 'bg-[#0af]' : 'bg-white/20 group-hover:bg-white/40'
                                }`} />
                                <span className={`text-sm font-light transition-colors duration-300 ${
                                  activeStep === idx ? 'text-white/70' : 'text-white/40 group-hover:text-white/60'
                                }`}>
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="px-8 lg:px-20 py-24">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`relative text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {/* Decorative lines */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/30" />
                <div className="w-2 h-2 rotate-45 border border-[#0af]/30" />
                <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/30" />
              </div>

              <blockquote className="relative">
                <p className="text-2xl lg:text-3xl font-light text-white/70 leading-relaxed italic">
                  "Innovation isn't just building something new—it's building something that
                  <span className="text-[#0af] not-italic font-normal"> transforms</span> how you work."
                </p>
              </blockquote>

              {/* Decorative lines */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#0af]/30" />
                <div className="w-2 h-2 rotate-45 border border-[#0af]/30" />
                <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#0af]/30" />
              </div>
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
              style={{ transitionDelay: '1400ms' }}
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
                style={{ transitionDelay: '1500ms' }}
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
                  Begin?
                </span>
              </h2>
            </div>

            <p 
              className={`text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1600ms' }}
            >
              Your transformation starts with a conversation. 
              Let's build the future together.
            </p>

            {/* Button */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1700ms' }}
            >
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0af] to-[#06f]" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-4 px-12 py-5 text-white text-[11px] tracking-[0.25em]">
                  START YOUR JOURNEY
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400;500&display=swap');
        
        * {
          font-family: 'Karla', sans-serif;
        }
        
        h1, h2, h3, h4, blockquote {
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