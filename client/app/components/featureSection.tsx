'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden py-32"
    >
      {/* Animated Network Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2de2fa" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0079bf" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2de2fa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Flowing connection lines */}
          <motion.path
            d="M 0,100 Q 400,50 800,100 T 1600,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,300 Q 500,250 1000,300 T 2000,300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M 0,500 Q 600,450 1200,500 T 2400,500"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
          />
          
          {/* Vertical connections */}
          <motion.path
            d="M 300,0 L 300,600"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.path
            d="M 900,0 L 900,700"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.path
            d="M 1400,0 L 1400,600"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Pulsing nodes */}
          <circle cx="300" cy="100" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="150" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="4;8;4" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="300" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="400" r="6" fill="#0079bf" opacity="0.8">
            <animate attributeName="r" values="4;8;4" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="500" r="6" fill="#2de2fa" opacity="0.8">
            <animate attributeName="r" values="4;8;4" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] bg-[#2de2fa]/8 rounded-full blur-[150px]" />
      <div className="absolute top-[60%] left-[10%] w-[600px] h-[600px] bg-[#0079bf]/8 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Service 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-20 items-center mb-48"
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-sm text-[#2de2fa] font-mono tracking-widest">01 / MACHINE LEARNING</span>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Neural</span>
                <br/>
                <span className="text-white">Networks That</span>
                <br/>
                <span className="bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                  Think
                </span>
              </h3>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Advanced deep learning models that understand patterns, predict outcomes, 
              and continuously improve with every interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-[500px] mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2de2fa]/20 to-transparent blur-3xl" />
            <img 
              src="/images/1.png" 
              alt="Machine Learning"
              className="relative w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-20 items-center mb-48"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-2 lg:order-1 max-w-[500px] mx-auto lg:mr-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0079bf]/20 to-transparent blur-3xl" />
            <img 
              src="/images/2.png" 
              alt="AI Automation"
              className="relative w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-2">
              <span className="text-sm text-[#0079bf] font-mono tracking-widest">02 / AI AUTOMATION</span>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Systems That</span>
                <br/>
                <span className="text-white">Never</span>
                <br/>
                <span className="bg-gradient-to-r from-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                  Sleep
                </span>
              </h3>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Intelligent automation that works 24/7, learning from every task 
              and optimizing processes without human intervention.
            </p>
          </motion.div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 items-center mb-48"
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-sm text-[#2de2fa] font-mono tracking-widest">03 / DATA INTELLIGENCE</span>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Transform</span>
                <br/>
                <span className="text-white">Chaos Into</span>
                <br/>
                <span className="bg-gradient-to-r from-[#2de2fa] to-[#00a8cc] bg-clip-text text-transparent">
                  Clarity
                </span>
              </h3>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Extract meaningful insights from billions of data points with 
              AI-powered analytics and predictive modeling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="relative max-w-[500px] mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2de2fa]/20 to-transparent blur-3xl" />
            <img 
              src="/images/3.png" 
              alt="Data Intelligence"
              className="relative w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Simple inline features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-16 mb-40"
        >
          {['Real-time', 'Secure', 'Scalable', 'Custom'].map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 + idx * 0.1 }}
              className="text-center"
            >
              <h5 className="text-2xl font-bold text-white mb-1">{feature}</h5>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent mx-auto" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center"
        >
          <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform?
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join the AI revolution. Get exclusive insights and early access.
          </p>
          <button className="px-14 py-5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-bold text-xl hover:shadow-[0_0_50px_rgba(45,226,250,0.5)] transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </motion.div>

      </div>
    </section>
  )
}