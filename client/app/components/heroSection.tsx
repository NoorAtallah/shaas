'use client'

import { Suspense, lazy, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Brain, Zap, ChevronRight } from 'lucide-react'

const SplineLoader = lazy(() => import('@splinetool/react-spline'))

// SplineScene Component
function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#2de2fa] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <SplineLoader
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

export default function AIHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Static grid background - no animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0079bf08_1px,transparent_1px),linear-gradient(to_bottom,#0079bf08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Static gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/10 via-black to-[#2de2fa]/10" />
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#2de2fa]/5 to-transparent" />
      
      {/* CSS-only animated glow orbs - GPU accelerated */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2de2fa]/10 rounded-full blur-[100px] animate-pulse opacity-50" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#0079bf]/10 rounded-full blur-[100px] animate-pulse opacity-50" style={{ animationDelay: '2s', animationDuration: '4s' }} />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left content - Compact Glassmorphism Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative p-6 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,121,191,0.2)] space-y-5"
          >
            {/* Glassmorphism inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2de2fa]/5 via-transparent to-[#0079bf]/5 pointer-events-none" />
            
            {/* Content wrapper */}
            <div className="relative z-10 space-y-5">
              {/* Glassmorphism Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(45,226,250,0.2)]"
              >
                <div className="w-2 h-2 rounded-full bg-[#2de2fa] shadow-[0_0_10px_#2de2fa] animate-pulse" />
                <span className="text-xs font-medium bg-gradient-to-r from-[#2de2fa] to-white bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
              </motion.div>

              {/* Main heading in glass container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                  <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    The Future of
                  </span>
                  <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent mt-1 drop-shadow-[0_0_30px_rgba(45,226,250,0.5)]">
                    Artificial Intelligence
                  </span>
                </h1>
              </motion.div>

              {/* Description in glass panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg"
              >
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  Experience the next generation of AI technology. Built for creators, 
                  innovators, and visionaries who dare to push boundaries.
                </p>
              </motion.div>

              {/* Glassmorphism CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <button className="group relative px-6 py-3 bg-gradient-to-r from-[#0079bf]/80 to-[#2de2fa]/80 backdrop-blur-xl rounded-xl font-semibold text-white overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(45,226,250,0.4)] hover:shadow-[0_8px_40px_rgba(45,226,250,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button className="group px-6 py-3 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/15 hover:border-[#2de2fa]/50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
                  <span className="flex items-center justify-center gap-2 text-sm">
                    Watch Demo
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>

              {/* Glassmorphism Stats Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]"
              >
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      99.9%
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Accuracy</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      50K+
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Users</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      24/7
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Glassmorphism Feature pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-2"
              >
                {['Neural Networks', 'Real-time Processing', 'Cloud Native', 'Enterprise Ready'].map((feature) => (
                  <div
                    key={feature}
                    className="px-3 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-gray-200 text-xs shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] hover:bg-white/15 hover:border-[#2de2fa]/40 hover:shadow-[0_4px_20px_0_rgba(45,226,250,0.3)] transition-all duration-300"
                  >
                    {feature}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Corner glass accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl backdrop-blur-sm" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl backdrop-blur-sm" />
          </motion.div>

          {/* Right content - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] lg:h-[800px]"
          >
            {/* Static background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0079bf]/20 via-transparent to-[#2de2fa]/20 blur-3xl opacity-60" />
            
            {/* 3D Robot Scene */}
            <div className="relative z-10 w-full h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Glassmorphism Floating elements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-20 left-0 bg-black/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center shadow-[0_0_20px_rgba(45,226,250,0.5)]">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Neural Processing</div>
                  <div className="text-gray-400 text-sm">Advanced AI Core</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-24 right-0 bg-black/30 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2de2fa] to-[#0079bf] flex items-center justify-center shadow-[0_0_20px_rgba(0,121,191,0.5)]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Lightning Speed</div>
                  <div className="text-gray-400 text-sm">Instant Response</div>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphism Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/20 rounded-tr-3xl backdrop-blur-sm" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/20 rounded-bl-3xl backdrop-blur-sm" />
          </motion.div>
        </div>
      </div>

      {/* Bottom glassmorphism fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none backdrop-blur-sm" />
    </section>
  )
}