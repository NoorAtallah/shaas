'use client'

import { Suspense, lazy, useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, Brain, Zap, ChevronRight } from 'lucide-react'

const SplineLoader = lazy(() => import('@splinetool/react-spline'))

export default function InstantLoad3DHero() {
  const [show, setShow] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const sectionRef = useRef(null)
  const splineContainerRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => {
      setShow(true)
    })
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleVisibilityChange = useCallback((isVisible) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    
    rafRef.current = requestAnimationFrame(() => {
      setIsInView(isVisible)
      
      // Fixed: Use splineContainerRef instead and check properly
      if (splineContainerRef.current) {
        const canvas = splineContainerRef.current.querySelector('canvas')
        if (canvas) {
          if (!isVisible) {
            canvas.style.visibility = 'hidden'
            canvas.style.pointerEvents = 'none'
            canvas.style.display = 'none'
          } else {
            canvas.style.visibility = 'visible'
            canvas.style.pointerEvents = 'auto'
            canvas.style.display = 'block'
          }
        }
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleVisibilityChange(entry.isIntersecting)
        })
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleVisibilityChange])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/8 via-black to-[#2de2fa]/8"
        style={{ transform: 'translateZ(0)' }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          <div 
            className={`space-y-5 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'translateZ(0)' }}
          >
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0079bf]/20 border border-[#2de2fa]/30">
              <div className="w-2 h-2 rounded-full bg-[#2de2fa]" />
              <span className="text-xs font-medium text-[#2de2fa]">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">The Future of</span>
              <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent mt-1">
                Artificial Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              Experience the next generation of AI technology. Built for creators, 
              innovators, and visionaries who dare to push boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#2de2fa]/20 active:scale-95 transition-all duration-200">
                <span className="flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="px-6 py-3 rounded-lg font-semibold text-white bg-white/5 border border-white/20 hover:bg-white/10 active:scale-95 transition-all duration-200">
                <span className="flex items-center justify-center gap-2">
                  Watch Demo
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2de2fa]">99.9%</div>
                <div className="text-xs text-gray-400 mt-1">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2de2fa]">50K+</div>
                <div className="text-xs text-gray-400 mt-1">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2de2fa]">24/7</div>
                <div className="text-xs text-gray-400 mt-1">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Neural Networks', 'Real-time', 'Cloud Native', 'Enterprise'].map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div 
            ref={splineContainerRef}
            className={`relative h-[500px] md:h-[600px] lg:h-[700px] order-first lg:order-last transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              contain: 'layout style paint',
              contentVisibility: isInView ? 'visible' : 'hidden',
              isolation: 'isolate',
              transform: 'translateZ(0)',
              willChange: isInView ? 'transform' : 'auto'
            }}
          >
            <Suspense 
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[#2de2fa]/20 border-t-[#2de2fa] rounded-full animate-spin" />
                    <span className="text-sm text-gray-400">Loading 3D Scene...</span>
                  </div>
                </div>
              }
            >
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  transform: 'translateZ(0)'
                }}
              >
                <SplineLoader
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Suspense>

            {/* Floating card 1 */}
            <div 
              className="absolute top-12 left-0 sm:left-4 bg-black/85 rounded-lg p-4 border border-white/10 shadow-xl pointer-events-none"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm">Neural Processing</div>
                  <div className="text-gray-400 text-xs">Advanced AI Core</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div 
              className="absolute bottom-16 right-0 sm:right-4 bg-black/85 rounded-lg p-4 border border-white/10 shadow-xl pointer-events-none"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2de2fa] to-[#0079bf] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm">Lightning Speed</div>
                  <div className="text-xs text-gray-400">Instant Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}