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
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2de2fa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0079bf" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.4" />
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

      {/* Multiple dynamic glows */}
      <div className="absolute top-[10%] left-[10%] w-[700px] h-[700px] bg-[#2de2fa]/12 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-[40%] right-[15%] w-[800px] h-[800px] bg-[#0079bf]/12 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[15%] left-[25%] w-[600px] h-[600px] bg-[#2de2fa]/12 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[5%] w-[500px] h-[500px] bg-[#0079bf]/12 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Floating particles */}
      <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#2de2fa]/40 animate-ping" />
      <div className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-[#0079bf]/40 animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[70%] left-[30%] w-2 h-2 rounded-full bg-[#2de2fa]/40 animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[50%] right-[35%] w-2 h-2 rounded-full bg-[#0079bf]/40 animate-ping" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[25%] right-[15%] w-2 h-2 rounded-full bg-[#2de2fa]/40 animate-ping" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Peeking Robot 1 - Top left edge */}
        {/* <motion.div
          initial={{ x: -200, opacity: 0, rotate: -15 }}
          animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut", 
            delay: 0.5,
            type: "spring",
            stiffness: 80
          }}
          className="absolute -left-32 top-[600px] w-64 h-64 pointer-events-none hidden lg:block z-20"
        >
          <motion.img 
            src="/images/4.png" 
            alt="Robot"
            className="w-full h-full object-contain"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div> */}

        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-48 relative"
        >
          {/* Peeking Robot behind text with pop-up animation */}
          <motion.div
            initial={{ x: -150, y: 100, opacity: 0, scale: 0.5, rotate: -20 }}
            animate={isInView ? { x: -80, y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut", 
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="absolute -left-20 top-32 w-80 h-80 pointer-events-none hidden lg:block z-0"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
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
          {/* Peeking Robot 2 - Right edge */}
          <motion.div
            initial={{ x: 200, opacity: 0, rotate: 15 }}
            animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut", 
              delay: 1.5,
              type: "spring",
              stiffness: 80
            }}
            className="absolute -right-40 -top-20 w-72 h-72 pointer-events-none hidden xl:block z-20"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain transform scale-x-[-1]"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 4,
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
          {/* Peeking Robot 3 - Bottom left */}
          <motion.div
            initial={{ x: -200, y: 100, opacity: 0, scale: 0.7 }}
            animate={isInView ? { x: 0, y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut", 
              delay: 2.2,
              type: "spring",
              stiffness: 90
            }}
            className="absolute -left-24 bottom-0 w-60 h-60 pointer-events-none hidden lg:block z-20"
          >
            <motion.img 
              src="/images/4.png" 
              alt="Robot"
              className="w-full h-full object-contain"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ 
                duration: 3.2,
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