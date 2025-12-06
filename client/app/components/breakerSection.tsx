'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BreakerSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden py-40"
    >
      {/* Animated Network Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="breakerLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2de2fa" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0079bf" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M 0,300 Q 600,200 1200,300 T 2400,300"
            stroke="url(#breakerLineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          
          <circle cx="600" cy="250" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="4;10;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="300" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="4;10;4" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#2de2fa]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0079bf]/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Robot Image - Clean, no cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Subtle glow behind robot */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2de2fa]/20 via-[#0079bf]/10 to-transparent blur-3xl" />
            
            {/* Robot image - completely clean, no borders */}
            {/* <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            > */}
              <img 
                src="/images/5.png" 
                alt="AI Robot"
                className="w-full h-auto relative z-10"
              />
            {/* </motion.div> */}

            {/* Decorative elements around robot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-10 -left-10 w-20 h-20 rounded-full border border-[#2de2fa]/30"
              style={{ 
                background: 'radial-gradient(circle, rgba(45,226,250,0.1) 0%, transparent 70%)' 
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-t-2 border-[#2de2fa]/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-10 -right-10 w-16 h-16 rounded-full border border-[#0079bf]/30"
              style={{ 
                background: 'radial-gradient(circle, rgba(0,121,191,0.1) 0%, transparent 70%)' 
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-t-2 border-[#0079bf]/50"
              />
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#2de2fa]/10 to-transparent backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#2de2fa] font-mono tracking-widest">THE FUTURE IS NOW</span>
            </motion.div>

            <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Intelligence</span>
              <br/>
              <span className="text-white">That</span>
              <br/>
              <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                Evolves
              </span>
            </h2>

            <p className="text-2xl text-gray-400 leading-relaxed">
              Not just algorithms. Not just automation. True intelligence that learns, 
              adapts, and grows with every interaction.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="px-6 py-3 bg-white/[0.05] backdrop-blur-xl rounded-full"
              >
                <span className="text-gray-300">Self-Learning</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="px-6 py-3 bg-white/[0.05] backdrop-blur-xl rounded-full"
              >
                <span className="text-gray-300">Always Improving</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="px-6 py-3 bg-white/[0.05] backdrop-blur-xl rounded-full"
              >
                <span className="text-gray-300">Future-Ready</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}