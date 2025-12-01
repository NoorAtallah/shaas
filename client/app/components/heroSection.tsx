'use client'

import { Suspense, lazy, useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView, useSpring, useTransform, SpringOptions } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Brain, ChevronRight } from 'lucide-react'

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

// Spotlight Component
function Spotlight({
  className = '',
  size = 200,
  springOptions = { bounce: 0 },
}: {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);
  
  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);
  
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );
  
  useEffect(() => {
    if (!parentElement) return;
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));
    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, [parentElement, handleMouseMove]);
  
  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}

export default function AIHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden "
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0079bf15_1px,transparent_1px),linear-gradient(to_bottom,#0079bf15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/20 via-black to-[#2de2fa]/20" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#2de2fa]/10 to-transparent" />
      
      {/* Spotlight effect */}
      <Spotlight 
        className="from-[#2de2fa]/50 via-[#0079bf]/30 to-transparent"
        size={700}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2de2fa]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#0079bf]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0079bf]/20 to-[#2de2fa]/20 border border-[#2de2fa]/30 backdrop-blur-xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#2de2fa] animate-pulse" />
              <span className="text-sm font-medium text-[#2de2fa]">
                Powered by Advanced AI
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  The Future of
                </span>
                <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent mt-2">
                  Artificial Intelligence
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Experience the next generation of AI technology. Built for creators, 
                innovators, and visionaries who dare to push boundaries.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full font-semibold text-white overflow-hidden shadow-2xl shadow-[#0079bf]/50 hover:shadow-[#2de2fa]/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2de2fa] to-[#0079bf] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-[#0079bf]/50 hover:border-[#2de2fa] hover:bg-[#2de2fa]/10 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  Watch Demo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-[#0079bf]/30"
            >
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Accuracy</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Users</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Support</div>
              </div>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {['Neural Networks', 'Real-time Processing', 'Cloud Native', 'Enterprise Ready'].map((feature, index) => (
                <div
                  key={feature}
                  className="px-4 py-2 rounded-full bg-white/5 border border-[#0079bf]/30 backdrop-blur-sm text-gray-400 text-sm"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px] lg:h-[800px]"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0079bf]/30 via-transparent to-[#2de2fa]/30 blur-3xl" />
            
            {/* 3D Robot Scene */}
            <div className="relative z-10 w-full h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-20 left-0 bg-black/40 backdrop-blur-2xl rounded-2xl p-5 border border-[#0079bf]/30 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center shadow-lg shadow-[#0079bf]/50">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Neural Processing</div>
                  <div className="text-gray-400 text-sm">Advanced AI Core</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-24 right-0 bg-black/40 backdrop-blur-2xl rounded-2xl p-5 border border-[#2de2fa]/30 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2de2fa] to-[#0079bf] flex items-center justify-center shadow-lg shadow-[#2de2fa]/50">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Lightning Speed</div>
                  <div className="text-gray-400 text-sm">Instant Response</div>
                </div>
              </div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#2de2fa]/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#0079bf]/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}