'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden py-32"
    >
      {/* Rich Animated Network Background */}
      <div className="absolute inset-0 opacity-60">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2de2fa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0079bf" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0079bf" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Multiple flowing lines */}
          <motion.path
            d="M 0,100 Q 400,50 800,120 T 1600,100"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 0,300 Q 500,200 1000,350 T 2000,300"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 0,500 Q 600,400 1200,550 T 2400,500"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 0,700 Q 700,600 1400,750"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Vertical connections */}
          <motion.path
            d="M 400,0 L 400,800"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="8,8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 900,0 L 900,900"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="8,8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 1400,0 L 1400,700"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="8,8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Pulsing nodes */}
          <circle cx="400" cy="120" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="180" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="350" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="250" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="500" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="400" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="3;9;3" dur="4.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="4.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-[15%] left-[8%] w-40 h-40">
          <motion.div
            className="absolute inset-0 border-2 border-[#2de2fa]/70 rounded-lg shadow-[0_0_20px_rgba(45,226,250,0.6)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-px h-4 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-px h-4 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-4 h-px bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-4 h-px bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-y-1/2" />
          </motion.div>
        </div>
        
        <div className="absolute top-[45%] right-[12%] w-32 h-32">
          <motion.div
            className="absolute inset-0 border-2 border-[#0079bf]/70 rounded-lg shadow-[0_0_20px_rgba(0,121,191,0.6)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-px h-3 bg-[#0079bf] shadow-[0_0_10px_rgba(0,121,191,0.8)] -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-px h-3 bg-[#0079bf] shadow-[0_0_10px_rgba(0,121,191,0.8)] -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-3 h-px bg-[#0079bf] shadow-[0_0_10px_rgba(0,121,191,0.8)] -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-3 h-px bg-[#0079bf] shadow-[0_0_10px_rgba(0,121,191,0.8)] -translate-y-1/2" />
          </motion.div>
        </div>

        <div className="absolute bottom-[20%] left-[25%] w-36 h-36">
          <motion.div
            className="absolute inset-0 border-2 border-[#2de2fa]/70 shadow-[0_0_20px_rgba(45,226,250,0.6)]"
            style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-px h-5 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-px h-5 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
          </motion.div>
        </div>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <motion.div
          className="absolute top-[25%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[55%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0079bf] to-transparent shadow-[0_0_15px_rgba(0,121,191,0.8)]"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div
          className="absolute top-[75%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(45, 226, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 226, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Neural Network Nodes */}
      <motion.div
        className="absolute top-[35%] left-[15%] w-4 h-4 rounded-full bg-[#2de2fa] shadow-[0_0_20px_rgba(45,226,250,0.9)]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[38%] left-[18%] w-3 h-3 rounded-full bg-[#0079bf] shadow-[0_0_15px_rgba(0,121,191,0.9)]"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[32%] left-[20%] w-3.5 h-3.5 rounded-full bg-[#2de2fa] shadow-[0_0_18px_rgba(45,226,250,0.9)]"
        animate={{
          scale: [1, 1.9, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
      />
      
      <motion.div
        className="absolute top-[60%] right-[20%] w-4 h-4 rounded-full bg-[#0079bf] shadow-[0_0_20px_rgba(0,121,191,0.9)]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[63%] right-[23%] w-3 h-3 rounded-full bg-[#2de2fa] shadow-[0_0_15px_rgba(45,226,250,0.9)]"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
      />
      <motion.div
        className="absolute top-[57%] right-[18%] w-3.5 h-3.5 rounded-full bg-[#0079bf] shadow-[0_0_18px_rgba(0,121,191,0.9)]"
        animate={{
          scale: [1, 1.7, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 1.2 }}
      />

      {/* Hexagon Tech Elements */}
      <motion.div
        className="absolute top-[18%] right-[30%] w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-[#2de2fa]/60 shadow-[0_0_25px_rgba(45,226,250,0.7)]" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}>
          <motion.div
            className="absolute inset-2 border-2 border-[#2de2fa]/80 shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] left-[40%] w-20 h-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-[#0079bf]/60 shadow-[0_0_25px_rgba(0,121,191,0.7)]" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}>
          <motion.div
            className="absolute inset-2 border-2 border-[#0079bf]/80 shadow-[0_0_15px_rgba(0,121,191,0.8)]"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Multiple dynamic glows */}
      <div className="absolute top-[10%] left-[10%] w-[700px] h-[700px] bg-[#2de2fa]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[40%] right-[15%] w-[800px] h-[800px] bg-[#0079bf]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[15%] left-[25%] w-[600px] h-[600px] bg-[#2de2fa]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[5%] w-[500px] h-[500px] bg-[#0079bf]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute top-0 left-[10%] text-[#2de2fa] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_8px_rgba(45,226,250,0.9)]"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {`1\n0\n1\n1\n0\n1\n0\n1`}
        </motion.div>
        <motion.div
          className="absolute top-0 left-[30%] text-[#0079bf] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_8px_rgba(0,121,191,0.9)]"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        >
          {`0\n1\n0\n1\n1\n0\n1\n0`}
        </motion.div>
        <motion.div
          className="absolute top-0 right-[20%] text-[#2de2fa] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_8px_rgba(45,226,250,0.9)]"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 4 }}
        >
          {`1\n1\n0\n1\n0\n0\n1\n1`}
        </motion.div>
        <motion.div
          className="absolute top-0 right-[45%] text-[#0079bf] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_8px_rgba(0,121,191,0.9)]"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 1 }}
        >
          {`0\n0\n1\n1\n0\n1\n1\n0`}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-[#2de2fa] shadow-[0_0_15px_rgba(45,226,250,1)] animate-ping" />
      <div className="absolute top-[35%] right-[20%] w-3 h-3 rounded-full bg-[#0079bf] shadow-[0_0_15px_rgba(0,121,191,1)] animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[70%] left-[30%] w-3 h-3 rounded-full bg-[#2de2fa] shadow-[0_0_15px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[50%] right-[35%] w-3 h-3 rounded-full bg-[#0079bf] shadow-[0_0_15px_rgba(0,121,191,1)] animate-ping" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[25%] right-[15%] w-3 h-3 rounded-full bg-[#2de2fa] shadow-[0_0_15px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '2s' }} />
      
      {/* Additional scattered particles */}
      <div className="absolute top-[42%] left-[22%] w-2.5 h-2.5 rounded-full bg-[#2de2fa] shadow-[0_0_12px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-[65%] right-[28%] w-2.5 h-2.5 rounded-full bg-[#0079bf] shadow-[0_0_12px_rgba(0,121,191,1)] animate-ping" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[40%] left-[45%] w-2.5 h-2.5 rounded-full bg-[#2de2fa] shadow-[0_0_12px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '1.8s' }} />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-48 relative"
        >
          {/* Peeking Robot 1 - Behind text with elegant entrance */}
          <motion.div
            initial={{ x: -120, y: 80, opacity: 0, scale: 0.8 }}
            animate={isInView ? { x: -80, y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1.6, 
              ease: [0.34, 1.56, 0.64, 1], // Custom elastic ease
              delay: 0.6,
            }}
            className="absolute -left-20 top-32 w-80 h-80 pointer-events-none hidden lg:block z-0"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(45,226,250,0.3)]"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            />
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#2de2fa]/20 to-transparent rounded-full blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8 px-6 py-3 bg-white/[0.03] backdrop-blur-xl rounded-full relative z-10"
          >
            <span className="text-sm text-[#2de2fa] font-mono tracking-widest">THE JOURNEY</span>
          </motion.div>

          <h2 className="text-6xl lg:text-8xl font-bold leading-none mb-8 relative z-10">
            <span className="text-white">From Vision</span>
            <br/>
            <span className="text-white">To</span>
            <br/>
            <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
              Reality
            </span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed relative z-10">
            Every breakthrough starts with a single step. Here's how we transform 
            ambitious ideas into intelligent, living systems.
          </p>
        </motion.div>

        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-48 ml-auto max-w-5xl"
        >
          <div className="absolute -top-32 -left-32 text-[15rem] font-bold text-[#2de2fa]/5 leading-none select-none">
            01
          </div>

          <div className="relative space-y-8 pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#2de2fa]/10 to-transparent backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#2de2fa] font-medium">Discovery</span>
            </motion.div>

            <h3 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Understanding
              <br/>
              Your World
            </h3>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
              We immerse ourselves in your challenges. Deep analysis. Strategic thinking. 
              Finding the opportunities hidden in complexity.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="h-px w-20 bg-gradient-to-r from-[#2de2fa] to-transparent" />
              <span className="text-sm text-gray-500">Weeks 1-2</span>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mb-48 mr-auto max-w-5xl"
        >
          <div className="absolute -top-32 -right-32 text-[15rem] font-bold text-[#0079bf]/5 leading-none select-none">
            02
          </div>

          <div className="relative space-y-8 pr-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#0079bf]/10 to-transparent backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#0079bf] font-medium">Design & Build</span>
            </motion.div>

            <h3 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Architecting
              <br/>
              Intelligence
            </h3>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Custom neural networks. Advanced algorithms. Every model trained on your data, 
              designed for your unique needs.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="h-px w-20 bg-gradient-to-r from-[#0079bf] to-transparent" />
              <span className="text-sm text-gray-500">Weeks 3-8</span>
            </div>
          </div>
        </motion.div>

        {/* Floating insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-3xl mx-auto mb-48 text-center relative"
        >
          {/* Peeking Robot 2 - Right edge with graceful slide */}
          <motion.div
            initial={{ x: 150, opacity: 0, scale: 0.85 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1], // Smooth deceleration
              delay: 1.2,
            }}
            className="absolute -right-40 -top-20 w-72 h-72 pointer-events-none hidden xl:block z-20"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain transform scale-x-[-1] drop-shadow-[0_0_30px_rgba(0,121,191,0.3)]"
              animate={{ 
                y: [0, -6, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            />
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#0079bf]/20 to-transparent rounded-full blur-2xl"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.15, 0.9]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <div className="relative inline-block px-16 py-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-3xl">
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#2de2fa]/30 animate-pulse" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#0079bf]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <p className="text-2xl text-gray-200 leading-relaxed">
              "Innovation isn't just building something new—
              <br/>
              it's building something that{' '}
              <span className="text-[#2de2fa] font-semibold">transforms</span> how you work."
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative mb-48 ml-auto max-w-5xl"
        >
          <div className="absolute -top-32 -left-32 text-[15rem] font-bold text-[#2de2fa]/5 leading-none select-none">
            03
          </div>

          <div className="relative space-y-8 pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#2de2fa]/10 to-transparent backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#2de2fa] font-medium">Deploy</span>
            </motion.div>

            <h3 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Launch &
              <br/>
              Evolve
            </h3>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Seamless deployment. Real-time monitoring. Continuous optimization. 
              Your AI doesn't just launch—it learns and improves every day.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="h-px w-20 bg-gradient-to-r from-[#2de2fa] to-transparent" />
              <span className="text-sm text-gray-500">Week 9 & Beyond</span>
            </div>
          </div>
        </motion.div>

        {/* Step 4 - Different layout */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative mb-40"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 text-[18rem] font-bold text-[#0079bf]/5 leading-none select-none">
            04
          </div>

          <div className="relative text-center space-y-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#0079bf]/10 via-[#2de2fa]/10 to-[#0079bf]/10 backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#2de2fa] font-medium">Partnership</span>
            </motion.div>

            <h3 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Growing
              <br/>
              <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                Together
              </span>
            </h3>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your success drives us. We provide ongoing support, strategic guidance, 
              and continuous innovation as your needs evolve.
            </p>

            <div className="flex justify-center items-center gap-6 pt-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent" />
              <span className="text-sm text-gray-500 whitespace-nowrap">Forever & Always</span>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center relative"
        >
          {/* Peeking Robot 3 - Bottom with gentle rise */}
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 2, 
              ease: [0.16, 1, 0.3, 1], // Smooth anticipation curve
              delay: 2,
            }}
            className="absolute -left-24 bottom-0 w-60 h-60 pointer-events-none hidden lg:block z-20"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(45,226,250,0.25)]"
              animate={{ 
                y: [0, -7, 0],
              }}
              transition={{ 
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            />
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#2de2fa]/15 to-transparent rounded-full blur-xl"
              animate={{
                opacity: [0.25, 0.5, 0.25],
                scale: [0.85, 1.2, 0.85]
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Begin?
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Your transformation starts with a conversation. Let's build the future.
          </p>
          <button className="px-14 py-5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-bold text-xl hover:shadow-[0_0_60px_rgba(45,226,250,0.6)] transition-all duration-300 hover:scale-105">
            Start Your Journey
          </button>
        </motion.div>

      </div>
    </section>
  )
}