'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, Users, Sparkles, Brain, Cpu, LineChart, Settings, Rocket, Eye } from 'lucide-react'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push boundaries and challenge conventions. Every solution we create is designed to leap ahead, not just keep pace.",
      position: "top-0 left-0 md:left-[5%]",
      delay: 0.2
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Your success is our metric. We're obsessed with delivering measurable impact that transforms your business fundamentally.",
      position: "top-0 md:top-[15%] right-0 md:right-[8%]",
      delay: 0.4
    },
    {
      icon: Users,
      title: "True Partnership",
      description: "We don't just consult—we collaborate. Your challenges become our mission, your victories become our celebration.",
      position: "top-0 md:top-[55%] left-0 md:left-[10%]",
      delay: 0.6
    },
    {
      icon: Sparkles,
      title: "Future Focused",
      description: "We build for tomorrow, today. Every strategy anticipates what's next, ensuring you're always ahead of the curve.",
      position: "top-0 md:top-[70%] right-0 md:right-[12%]",
      delay: 0.8
    }
  ]

  const expertise = [
    {
      icon: Brain,
      title: "AI Strategy & Implementation",
      description: "Transform your operations with intelligent automation and data-driven decision making",
      position: "top-0 left-0 md:left-[8%]",
      delay: 0.2
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "Modernize your infrastructure and processes for the digital-first world",
      position: "top-0 md:top-[10%] right-0 md:right-[15%]",
      delay: 0.4
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Unlock insights from your data with advanced analytics and visualization",
      position: "top-0 md:top-[50%] left-0 md:left-[12%]",
      delay: 0.6
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamline operations and maximize efficiency with smart solutions",
      position: "top-0 md:top-[55%] right-0 md:right-[10%]",
      delay: 0.8
    }
  ]

  return (
    <div className="relative w-full bg-black">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-70">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2de2fa" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0079bf" stopOpacity="1" />
                <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0079bf" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M 0,300 Q 400,200 800,300 T 1600,300"
              stroke="url(#heroGrad)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0,500 Q 500,400 1000,500 T 2000,500"
              stroke="url(#heroGrad)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0,200 Q 600,100 1200,200 T 2400,200"
              stroke="url(#heroGrad2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0,700 Q 700,600 1400,700 T 2800,700"
              stroke="url(#heroGrad2)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Vertical connections */}
            <motion.path
              d="M 400,0 L 400,1000"
              stroke="url(#heroGrad)"
              strokeWidth="1.5"
              strokeDasharray="10,10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 1000,0 L 1000,1000"
              stroke="url(#heroGrad2)"
              strokeWidth="1.5"
              strokeDasharray="10,10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 1600,0 L 1600,1000"
              stroke="url(#heroGrad)"
              strokeWidth="1.5"
              strokeDasharray="10,10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Pulsing nodes */}
            <circle cx="400" cy="200" r="8" fill="#2de2fa" opacity="0.9">
              <animate attributeName="r" values="4;12;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="300" r="8" fill="#0079bf" opacity="0.9">
              <animate attributeName="r" values="4;12;4" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="1000" cy="500" r="8" fill="#2de2fa" opacity="0.9">
              <animate attributeName="r" values="4;12;4" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1200" cy="200" r="8" fill="#0079bf" opacity="0.9">
              <animate attributeName="r" values="4;12;4" dur="3.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="1600" cy="400" r="8" fill="#2de2fa" opacity="0.9">
              <animate attributeName="r" values="4;12;4" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="4.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[10%] left-[12%] w-40 h-40">
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
          
          <div className="absolute top-[50%] right-[15%] w-32 h-32">
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

          <div className="absolute bottom-[25%] left-[35%] w-36 h-36">
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

        {/* Hexagon Tech Elements */}
        <motion.div
          className="absolute top-[25%] right-[25%] w-28 h-28 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-2 border-[#2de2fa]/70 shadow-[0_0_25px_rgba(45,226,250,0.7)]" style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}>
            <motion.div
              className="absolute inset-2 border-2 border-[#2de2fa]/90 shadow-[0_0_15px_rgba(45,226,250,0.8)]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] left-[20%] w-24 h-24 opacity-50"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-2 border-[#0079bf]/70 shadow-[0_0_25px_rgba(0,121,191,0.7)]" style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}>
            <motion.div
              className="absolute inset-2 border-2 border-[#0079bf]/90 shadow-[0_0_15px_rgba(0,121,191,0.8)]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(45, 226, 250, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 250, 0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Glowing orbs - brighter */}
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[#2de2fa]/25 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-[700px] h-[700px] bg-[#0079bf]/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[50%] left-[40%] w-[500px] h-[500px] bg-[#2de2fa]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Data Streams */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <motion.div
            className="absolute top-[30%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[60%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0079bf] to-transparent shadow-[0_0_15px_rgba(0,121,191,0.8)]"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </div>

        {/* Neural Network Nodes */}
        <motion.div
          className="absolute top-[25%] left-[20%] w-4 h-4 rounded-full bg-[#2de2fa] shadow-[0_0_20px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[45%] right-[22%] w-4 h-4 rounded-full bg-[#0079bf] shadow-[0_0_20px_rgba(0,121,191,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[35%] left-[45%] w-3.5 h-3.5 rounded-full bg-[#2de2fa] shadow-[0_0_18px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
        />

        {/* Floating particles - more visible */}
        <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#2de2fa] shadow-[0_0_15px_rgba(45,226,250,1)] animate-ping" />
        <div className="absolute top-[70%] right-[25%] w-3 h-3 rounded-full bg-[#0079bf] shadow-[0_0_15px_rgba(0,121,191,1)] animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#2de2fa] shadow-[0_0_12px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[45%] right-[18%] w-2.5 h-2.5 rounded-full bg-[#0079bf] shadow-[0_0_12px_rgba(0,121,191,1)] animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[55%] left-[35%] w-2.5 h-2.5 rounded-full bg-[#2de2fa] shadow-[0_0_12px_rgba(45,226,250,1)] animate-ping" style={{ animationDelay: '2s' }} />

        {/* Scattered robot images */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -10 }}
          animate={heroInView ? { x: 0, opacity: 0.4, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-[5%] top-[15%] w-48 h-48 pointer-events-none hidden lg:block"
        >
          <motion.img 
            src="/images/4.png" 
            alt=""
            className="w-full h-full object-contain opacity-60"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 10 }}
          animate={heroInView ? { x: 0, opacity: 0.3, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute right-[8%] top-[60%] w-56 h-56 pointer-events-none hidden lg:block"
        >
          <motion.img 
            src="/images/11.png" 
            alt=""
            className="w-full h-full object-contain opacity-50 scale-x-[-1]"
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="ml-0 lg:ml-32"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8 px-8 py-3 bg-white/[0.05] backdrop-blur-xl rounded-full"
            >
              <span className="text-sm text-[#2de2fa] font-mono tracking-widest">ABOUT SHAAS</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-10">
              <span className="text-white">We Build</span>
              <br/>
              <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12">
              A next-generation consulting firm where cutting-edge AI meets strategic vision. 
              We do not just adapt to the future—we create it.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="px-8 py-4 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
                <div className="text-3xl font-bold text-[#2de2fa] mb-1">2025</div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
              <div className="px-8 py-4 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
                <div className="text-3xl font-bold text-[#2de2fa] mb-1">100%</div>
                <div className="text-sm text-gray-400">AI-Powered</div>
              </div>
              <div className="px-8 py-4 bg-white/[0.03] backdrop-blur-xl rounded-2xl">
                <div className="text-3xl font-bold text-[#2de2fa] mb-1">∞</div>
                <div className="text-sm text-gray-400">Possibilities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="relative py-40 px-6 overflow-hidden"
      >
        {/* Background elements - enhanced grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(45, 226, 250, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 250, 0.4) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Multiple Floating data streams */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <motion.div
            className="absolute top-[30%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[50%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0079bf] to-transparent shadow-[0_0_15px_rgba(0,121,191,0.8)]"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.div
            className="absolute top-[70%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </div>

        {/* Circuit elements */}
        <div className="absolute top-[20%] left-[8%] w-32 h-32 opacity-40">
          <motion.div
            className="absolute inset-0 border-2 border-[#2de2fa]/60 rounded-lg shadow-[0_0_20px_rgba(45,226,250,0.5)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute bottom-[30%] right-[20%] w-28 h-28 opacity-40">
          <motion.div
            className="absolute inset-0 border-2 border-[#0079bf]/60 shadow-[0_0_20px_rgba(0,121,191,0.5)]"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-[#2de2fa]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[15%] w-[600px] h-[600px] bg-[#0079bf]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Neural nodes */}
        <motion.div
          className="absolute top-[40%] left-[25%] w-4 h-4 rounded-full bg-[#2de2fa] shadow-[0_0_20px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[60%] right-[30%] w-3.5 h-3.5 rounded-full bg-[#0079bf] shadow-[0_0_18px_rgba(0,121,191,0.9)]"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
        />

        {/* Scattered robot images */}
        <motion.div
          initial={{ opacity: 280, scale: 0.8 }}
          animate={storyInView ? { opacity: 280, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute right-[15%] top-[10%] w-72 h-72 pointer-events-none hidden xl:block"
        >
          <motion.img 
            src="/images/15.png" 
            alt=""
            className="w-full h-full object-contain"
           
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 50, y: 50 }}
          animate={storyInView ? { opacity: 20, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-[10%] bottom-[15%] w-64 h-64 pointer-events-none hidden lg:block"
        >
          <motion.img 
            src="/images/16.png" 
            alt=""
            className="w-full h-full object-contain scale-x-[-1]"
          
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Mission block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-32 ml-0 lg:ml-24"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#2de2fa]/10 to-transparent backdrop-blur-xl rounded-full">
              <span className="text-sm text-[#2de2fa] font-medium">OUR MISSION</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-3xl">
              Redefining What is 
              <span className="text-[#2de2fa]"> Possible</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              <p>
                At <span className="text-[#2de2fa] font-semibold">Shaas</span>, we believe the future 
                belongs to those who dare to reimagine it. Born in 2025, we are not bound by legacy 
                thinking or outdated methodologies.
              </p>
              <p>
                We harness the power of artificial intelligence, advanced analytics, and human 
                creativity to solve problems that others say cannot be solved. Every client engagement 
                is an opportunity to break new ground.
              </p>
            </div>
          </motion.div>

          {/* Vision block */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mr-0 lg:mr-32 ml-auto max-w-3xl"
          >
            <div className="relative p-12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-3xl">
              <Rocket className="w-16 h-16 text-[#2de2fa] mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To be the catalyst for businesses ready to transcend limitations and embrace 
                exponential growth. We are building a world where AI amplifies human potential, 
                not replaces it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Scattered Layout */}
      <section 
        ref={valuesRef}
        className="relative py-40 px-6 overflow-hidden"
      >
        {/* Background glow - brighter */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#0079bf]/20 rounded-full blur-[130px]" />
        <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-[#2de2fa]/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-[700px] h-[700px] bg-[#0079bf]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(45, 226, 250, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 250, 0.35) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Floating data streams */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <motion.div
            className="absolute top-[35%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[65%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0079bf] to-transparent shadow-[0_0_15px_rgba(0,121,191,0.8)]"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </div>

        {/* Circuit patterns */}
        <div className="absolute top-[15%] left-[10%] w-36 h-36 opacity-40">
          <motion.div
            className="absolute inset-0 border-2 border-[#2de2fa]/70 rounded-lg shadow-[0_0_20px_rgba(45,226,250,0.6)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-px h-4 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-px h-4 bg-[#2de2fa] shadow-[0_0_10px_rgba(45,226,250,0.8)] -translate-x-1/2" />
          </motion.div>
        </div>

        <div className="absolute bottom-[25%] right-[12%] w-32 h-32 opacity-40">
          <motion.div
            className="absolute inset-0 border-2 border-[#0079bf]/70 shadow-[0_0_20px_rgba(0,121,191,0.6)]"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Neural Network Nodes - more visible */}
        <motion.div
          className="absolute top-[30%] left-[15%] w-4 h-4 rounded-full bg-[#2de2fa] shadow-[0_0_20px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[50%] right-[18%] w-4 h-4 rounded-full bg-[#0079bf] shadow-[0_0_20px_rgba(0,121,191,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[40%] w-3.5 h-3.5 rounded-full bg-[#2de2fa] shadow-[0_0_18px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
        />

        {/* Robot images scattered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={valuesInView ? { opacity: 0.15 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-[20%] right-[5%] w-80 h-80 pointer-events-none hidden xl:block"
        >
          <motion.img 
            src="/images/14.png" 
            alt=""
            className="w-full h-full object-contain"
        
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={valuesInView ? { opacity: 0.2 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-[10%] left-[8%] w-60 h-60 pointer-events-none hidden lg:block"
        >
   
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/[0.05] backdrop-blur-xl rounded-full">
              <span className="text-sm text-[#2de2fa] font-mono tracking-widest">CORE VALUES</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These are not just words on a page—they are the principles that guide every decision, 
              every strategy, every innovation we deliver.
            </p>
          </motion.div>

          {/* Scattered borderless value cards */}
          <div className="relative min-h-[1200px] md:min-h-[800px]">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: value.delay }}
                  className={`relative md:absolute ${value.position} w-full md:w-[400px] lg:w-[450px] mb-8 md:mb-0`}
                >
                  <div className="relative group">
                    <div className="p-10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-2xl rounded-3xl hover:from-white/[0.08] hover:to-white/[0.02] transition-all duration-500">
                      <Icon className="w-12 h-12 text-[#2de2fa] mb-6" strokeWidth={1.5} />
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2de2fa] transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section 
        ref={teamRef}
        className="relative py-40 px-6 overflow-hidden"
      >
        {/* Binary rain - more visible */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <motion.div
            className="absolute top-0 left-[15%] text-[#2de2fa] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(45,226,250,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {`1\n0\n1\n1\n0\n1\n0\n1`}
          </motion.div>
          <motion.div
            className="absolute top-0 left-[35%] text-[#0079bf] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(0,121,191,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          >
            {`0\n1\n0\n1\n1\n0\n1\n0`}
          </motion.div>
          <motion.div
            className="absolute top-0 right-[25%] text-[#2de2fa] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(45,226,250,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 4 }}
          >
            {`1\n1\n0\n1\n0\n0\n1\n1`}
          </motion.div>
          <motion.div
            className="absolute top-0 right-[55%] text-[#0079bf] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(0,121,191,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 1 }}
          >
            {`0\n0\n1\n1\n0\n1\n1\n0`}
          </motion.div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(45, 226, 250, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 250, 0.3) 1px, transparent 1px)',
            backgroundSize: '90px 90px'
          }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[#2de2fa]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[25%] right-[20%] w-[700px] h-[700px] bg-[#0079bf]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Floating data streams */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <motion.div
            className="absolute top-[40%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[70%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0079bf] to-transparent shadow-[0_0_15px_rgba(0,121,191,0.8)]"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </div>

        {/* Hexagon tech elements */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-28 h-28 opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-2 border-[#2de2fa]/70 shadow-[0_0_25px_rgba(45,226,250,0.7)]" style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}>
            <motion.div
              className="absolute inset-2 border-2 border-[#2de2fa]/90"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[30%] left-[18%] w-24 h-24 opacity-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-2 border-[#0079bf]/70 shadow-[0_0_25px_rgba(0,121,191,0.7)]" style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}>
            <motion.div
              className="absolute inset-2 border-2 border-[#0079bf]/90"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Neural nodes */}
        <motion.div
          className="absolute top-[35%] left-[25%] w-4 h-4 rounded-full bg-[#2de2fa] shadow-[0_0_20px_rgba(45,226,250,0.9)]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[45%] right-[30%] w-3.5 h-3.5 rounded-full bg-[#0079bf] shadow-[0_0_18px_rgba(0,121,191,0.9)]"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
        />

        {/* Additional scattered robot images */}
        <motion.div
          initial={{ opacity: 15, rotate: 20 }}
          animate={teamInView ? { opacity: 25, rotate: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-[5%] left-[5%] w-52 h-52 pointer-events-none hidden lg:block"
        >
          <motion.img 
            src="/images/6.png" 
            alt=""
            className="w-full h-full object-contain"
            animate={{ 
              y: [0, -18, 0],
            }}
            transition={{ 
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>



        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-32 ml-0 lg:ml-20"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#0079bf]/10 via-[#2de2fa]/10 to-[#0079bf]/10 backdrop-blur-xl rounded-full">
              <span className="text-sm text-[#2de2fa] font-medium">WHAT WE DO</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Our</span>
              <br/>
              <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Comprehensive consulting services powered by cutting-edge AI and decades 
              of combined industry experience.
            </p>
          </motion.div>

          {/* Scattered expertise cards with images */}
          <div className="relative min-h-[1200px] md:min-h-[900px]">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 100, y: 60 }}
                  animate={teamInView ? { opacity: 190, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: item.delay }}
                  className={`relative md:absolute ${item.position} w-full md:w-[420px] lg:w-[480px] mb-8 md:mb-0`}
                >
                  <div className="relative group">
                    <div className="p-8 bg-white/[0.03] backdrop-blur-xl rounded-2xl hover:bg-white/[0.05] transition-all duration-300">
                      {/* Small robot image in corner */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                        <img 
                          src="/images/9.png"
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <Icon className="w-10 h-10 text-[#2de2fa] mb-4" strokeWidth={1.5} />
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2de2fa] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0079bf]/5 to-black" />
        
        {/* Glowing center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2de2fa]/20 rounded-full blur-[150px] animate-pulse" />

        {/* Final robot images */}
        <motion.div
          initial={{ opacity: 40 }}
          whileInView={{ opacity: 40 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-[5%] top-[20%] w-72 h-72 pointer-events-none hidden xl:block"
        >
          <motion.img 
            src="/images/4.png" 
            alt=""
            className="w-full h-full object-contain"
          
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

  

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Eye className="w-16 h-16 text-[#2de2fa] mx-auto mb-8" strokeWidth={1.5} />
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the companies that are already building their future with Shaas. 
              Let us create something extraordinary together.
            </p>
            <button className="px-14 py-5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-bold text-xl hover:shadow-[0_0_60px_rgba(45,226,250,0.6)] transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}