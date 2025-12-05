'use client'

import { Suspense, lazy, useRef, useState, useEffect } from 'react'
import { ArrowRight, Brain, Zap, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const SplineLoader = lazy(() => import('@splinetool/react-spline'))

// Optimized Spline wrapper with proper isolation
function OptimizedSplineScene({ 
  scene, 
  className
}: { 
  scene: string; 
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div 
      className={className}
      style={{
        contain: 'strict', // CRITICAL: Isolate Spline from rest of page
        contentVisibility: 'auto',
        position: 'relative',
        isolation: 'isolate' // Create stacking context
      }}
    >
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            <div className="relative w-full h-full max-w-[600px] flex items-center justify-center">
              <Image 
                src="/images/1.png" 
                alt="AI Robot"
                width={600}
                height={600}
                className="object-contain opacity-50 animate-pulse"
                priority
              />
            </div>
          </div>
        }
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            transform: 'translateZ(0)', // Force GPU layer
            willChange: 'transform' // Hint to browser
          }}
        >
          <SplineLoader
            scene={scene}
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'auto' // Enable interaction
            }}
          />
        </div>
      </Suspense>
    </div>
  )
}

export default function ProperlyOptimizedHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true)
          })
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Load before it comes into view
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Static background - no animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0079bf08_1px,transparent_1px),linear-gradient(to_bottom,#0079bf08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      {/* Static gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/10 via-black to-[#2de2fa]/10" />
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#2de2fa]/5 to-transparent" />
      
      {/* Reduced orbs - lighter blur */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[#2de2fa]/12 rounded-full opacity-40"
        style={{
          filter: 'blur(50px)',
          transform: 'translateZ(0)',
          animation: 'gentleFloat 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#0079bf]/12 rounded-full opacity-40"
        style={{
          filter: 'blur(50px)',
          transform: 'translateZ(0)',
          animation: 'gentleFloat 25s ease-in-out infinite reverse'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          
          {/* Left content - Isolated from Spline */}
          <div
            className={`relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 shadow-xl space-y-4 sm:space-y-5 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              contain: 'layout style', // Isolate from 3D scene
              transform: 'translateZ(0)'
            }}
          >
            {/* Static inner glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2de2fa]/3 via-transparent to-[#0079bf]/3 pointer-events-none" />
            
            {/* Content wrapper */}
            <div className="relative z-10 space-y-4 sm:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2de2fa] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium bg-gradient-to-r from-[#2de2fa] to-white bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
              </div>

              {/* Main heading */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="block text-white">
                    The Future of
                  </span>
                  <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent mt-1">
                    Artificial Intelligence
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  Experience the next generation of AI technology. Built for creators, 
                  innovators, and visionaries who dare to push boundaries.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-xl font-semibold text-white border border-white/20 active:scale-95 transition-transform duration-150 touch-manipulation">
                  <span className="flex items-center justify-center gap-2 text-sm">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-white/10 border border-white/20 active:bg-white/20 transition-colors duration-150 touch-manipulation">
                  <span className="flex items-center justify-center gap-2 text-sm">
                    Watch Demo
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                      99.9%
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Accuracy</div>
                  </div>
                  
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                      50K+
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Users</div>
                  </div>
                  
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Support</div>
                  </div>
                </div>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {['Neural Networks', 'Real-time Processing', 'Cloud Native', 'Enterprise Ready'].map((feature) => (
                  <div
                    key={feature}
                    className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-gray-200 text-[10px] sm:text-xs touch-manipulation"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-l-2 border-white/20 rounded-tl-2xl sm:rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 sm:w-20 h-12 sm:h-20 border-b-2 border-r-2 border-white/20 rounded-br-2xl sm:rounded-br-3xl" />
          </div>

          {/* Right content - ISOLATED 3D Scene */}
          <div
            className={`relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] order-first lg:order-last transition-opacity duration-700 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              contain: 'strict', // CRITICAL: Isolate 3D rendering
              transform: 'translateZ(0)',
              isolation: 'isolate'
            }}
          >
            {/* Static glow behind 3D */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#0079bf]/15 via-transparent to-[#2de2fa]/15 opacity-50 pointer-events-none"
              style={{
                filter: 'blur(40px)',
                transform: 'translateZ(0)'
              }}
            />
            
            {/* Spline 3D Scene - Properly Isolated */}
            <OptimizedSplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="relative z-10 w-full h-full"
            />

            {/* Floating elements - Outside 3D container */}
            <div
              className="absolute top-8 sm:top-20 left-0 bg-black/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 pointer-events-none z-20"
              style={{
                contain: 'layout style',
                transform: 'translateZ(0)'
              }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center">
                  <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-base">Neural Processing</div>
                  <div className="text-gray-400 text-[10px] sm:text-sm">Advanced AI Core</div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-12 sm:bottom-24 right-0 bg-black/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 pointer-events-none z-20"
              style={{
                contain: 'layout style',
                transform: 'translateZ(0)'
              }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2de2fa] to-[#0079bf] flex items-center justify-center">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-base">Lightning Speed</div>
                  <div className="text-gray-400 text-[10px] sm:text-sm">Instant Response</div>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-r-2 border-white/20 rounded-tr-2xl sm:rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-b-2 border-l-2 border-white/20 rounded-bl-2xl sm:rounded-bl-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      
      {/* Optimized animations */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(15px, -15px, 0);
          }
        }
      `}</style>
    </section>
  )
}