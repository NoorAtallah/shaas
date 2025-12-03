'use client'

import { Suspense, lazy, useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Brain, Zap, ChevronRight } from 'lucide-react'

const SplineLoader = lazy(() => import('@splinetool/react-spline'))

// SplineScene Component
function SplineScene({ 
  scene, 
  className
}: { 
  scene: string; 
  className?: string;
}) {
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
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Optimized grid background - smaller on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0079bf08_1px,transparent_1px),linear-gradient(to_bottom,#0079bf08_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />
      
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/10 via-black to-[#2de2fa]/10" />
      <div className="absolute top-0 left-0 right-0 h-[300px] sm:h-[600px] bg-gradient-to-b from-[#2de2fa]/5 to-transparent" />
      
      {/* Animated moving glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#2de2fa]/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse opacity-50" 
        style={{ 
          animation: 'pulse 3s ease-in-out infinite, float 8s ease-in-out infinite'
        }} 
      />
      <div className="absolute bottom-1/3 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#0079bf]/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse opacity-50" 
        style={{ 
          animation: 'pulse 4s ease-in-out infinite 2s, floatReverse 10s ease-in-out infinite'
        }} 
      />
      <div className="absolute top-1/2 left-1/2 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#2de2fa]/15 rounded-full blur-[80px] sm:blur-[100px] opacity-40" 
        style={{ 
          animation: 'float 12s ease-in-out infinite 4s'
        }} 
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          {/* Left content - Responsive Glassmorphism Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] backdrop-blur-xl sm:backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,121,191,0.2)] space-y-4 sm:space-y-5"
          >
            {/* Glassmorphism inner glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2de2fa]/5 via-transparent to-[#0079bf]/5 pointer-events-none" />
            
            {/* Content wrapper */}
            <div className="relative z-10 space-y-4 sm:space-y-5">
              {/* Glassmorphism Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(45,226,250,0.2)]"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2de2fa] shadow-[0_0_10px_#2de2fa] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium bg-gradient-to-r from-[#2de2fa] to-white bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
              </motion.div>

              {/* Main heading in glass container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/10 shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
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
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/10 shadow-lg"
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  Experience the next generation of AI technology. Built for creators, 
                  innovators, and visionaries who dare to push boundaries.
                </p>
              </motion.div>

              {/* Glassmorphism CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <button className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#0079bf]/80 to-[#2de2fa]/80 backdrop-blur-xl rounded-xl font-semibold text-white overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(45,226,250,0.4)] active:scale-95 sm:hover:shadow-[0_8px_40px_rgba(45,226,250,0.6)] transition-all duration-300 sm:hover:scale-105 sm:hover:-translate-y-1 touch-manipulation">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 active:bg-white/20 sm:hover:bg-white/15 sm:hover:border-[#2de2fa]/50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] touch-manipulation">
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
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/10 shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]"
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      99.9%
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Accuracy</div>
                  </div>
                  
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      50K+
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Users</div>
                  </div>
                  
                  <div className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,226,250,0.3)]">
                      24/7
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1">Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Glassmorphism Feature pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {['Neural Networks', 'Real-time Processing', 'Cloud Native', 'Enterprise Ready'].map((feature) => (
                  <div
                    key={feature}
                    className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 text-gray-200 text-[10px] sm:text-xs shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] active:bg-white/20 sm:hover:bg-white/15 sm:hover:border-[#2de2fa]/40 sm:hover:shadow-[0_4px_20px_0_rgba(45,226,250,0.3)] transition-all duration-300 touch-manipulation"
                  >
                    {feature}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Corner glass accents - smaller on mobile */}
            <div className="absolute top-0 left-0 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-l-2 border-white/20 rounded-tl-2xl sm:rounded-tl-3xl backdrop-blur-sm" />
            <div className="absolute bottom-0 right-0 w-12 sm:w-20 h-12 sm:h-20 border-b-2 border-r-2 border-white/20 rounded-br-2xl sm:rounded-br-3xl backdrop-blur-sm" />
          </motion.div>

          {/* Right content - 3D Robot - Responsive height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] order-first lg:order-last"
          >
            {/* Static background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0079bf]/20 via-transparent to-[#2de2fa]/20 blur-2xl sm:blur-3xl opacity-60" />
            
            {/* 3D Robot Scene */}
            <div className="relative z-10 w-full h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Glassmorphism Floating elements - Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-8 sm:top-20 left-0 bg-black/30 backdrop-blur-xl sm:backdrop-blur-2xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center shadow-[0_0_20px_rgba(45,226,250,0.5)]">
                  <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-base">Neural Processing</div>
                  <div className="text-gray-400 text-[10px] sm:text-sm">Advanced AI Core</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-12 sm:bottom-24 right-0 bg-black/30 backdrop-blur-xl sm:backdrop-blur-2xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2de2fa] to-[#0079bf] flex items-center justify-center shadow-[0_0_20px_rgba(0,121,191,0.5)]">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-base">Lightning Speed</div>
                  <div className="text-gray-400 text-[10px] sm:text-sm">Instant Response</div>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphism Corner accents - Responsive */}
            <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-r-2 border-white/20 rounded-tr-2xl sm:rounded-tr-3xl backdrop-blur-sm" />
            <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-b-2 border-l-2 border-white/20 rounded-bl-2xl sm:rounded-bl-3xl backdrop-blur-sm" />
          </motion.div>
        </div>
      </div>

      {/* Bottom glassmorphism fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none backdrop-blur-sm" />
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(40px, 10px) scale(1.05);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-40px, 30px) scale(0.95);
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
          }
          75% {
            transform: translate(-30px, -15px) scale(1);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(20px);
          }
        }
        
        @keyframes nodePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.6;
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes glitch {
          0%, 90%, 100% {
            opacity: 1;
            transform: translateX(0);
          }
          92% {
            opacity: 0.8;
            transform: translateX(-2px);
          }
          94% {
            opacity: 0.8;
            transform: translateX(2px);
          }
          96% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}