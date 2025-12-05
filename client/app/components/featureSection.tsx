'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-transparent overflow-hidden"
    >
      {/* Continuous floating orbs throughout */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#2de2fa]/10 rounded-full blur-[120px] opacity-40" 
        style={{ animation: 'float 10s ease-in-out infinite' }} 
      />
      <div className="absolute top-[600px] left-1/4 w-[500px] h-[500px] bg-[#0079bf]/10 rounded-full blur-[120px] opacity-40" 
        style={{ animation: 'floatReverse 12s ease-in-out infinite' }} 
      />
      <div className="absolute top-[1200px] right-1/3 w-[400px] h-[400px] bg-[#2de2fa]/10 rounded-full blur-[120px] opacity-40" 
        style={{ animation: 'float 15s ease-in-out infinite 5s' }} 
      />
      <div className="absolute top-[1800px] left-1/3 w-[450px] h-[450px] bg-[#0079bf]/10 rounded-full blur-[120px] opacity-40" 
        style={{ animation: 'floatReverse 11s ease-in-out infinite 3s' }} 
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center pt-20 pb-32"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="block text-white">We are</span>
            <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
              AI Studio
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Virtual artificial intelligence digital platform
          </p>
        </motion.div>

        {/* SERVICES Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#2de2fa] mb-4">SERVICES</p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent mx-auto"></div>
        </motion.div>

        {/* Robot Image 1 + Machine Learning - Positioned freely */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-24 grid md:grid-cols-5 gap-8 items-center"
        >
          {/* Left side - Image */}
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2de2fa]/20 to-[#0079bf]/20 rounded-full blur-3xl"></div>
            <div className="relative aspect-square">
              <Image 
                src="/images/1.png" 
                alt="AI Robot"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#2de2fa]/20 backdrop-blur-xl border border-[#2de2fa]/30 flex items-center justify-center">
              <span className="text-sm font-bold text-[#2de2fa]">01</span>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-white">
              Machine<br/>
              <span className="text-[#2de2fa]">Learning</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Advanced neural networks and deep learning models tailored to your business needs. 
              Harness the power of AI to unlock insights and drive innovation through intelligent automation.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>→ Custom Models</span>
              <span>→ Neural Networks</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Text Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xs ml-auto mr-12 mb-32 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10"
        >
          <p className="text-sm text-gray-400 leading-relaxed">
            "With lifelike environments, stunning graphics, and 360-degree interaction, 
            our VR transports you fully into the virtual world like never before."
          </p>
        </motion.div>

        {/* Robot Image 2 + AI Automation - Reverse layout */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mb-24 grid md:grid-cols-5 gap-8 items-center"
        >
          {/* Left side - Content */}
          <div className="md:col-span-3 space-y-4 order-2 md:order-1">
            <h3 className="text-4xl sm:text-5xl font-bold text-white">
              AI<br/>
              <span className="text-[#0079bf]">Automation</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Streamline your workflows with intelligent automation. Reduce manual work and 
              increase efficiency with cutting-edge AI technology that learns and adapts.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>→ Smart Workflows</span>
              <span>→ Real-time Processing</span>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="md:col-span-2 relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0079bf]/20 to-[#2de2fa]/20 rounded-full blur-3xl"></div>
            <div className="relative aspect-square">
              <video 
                src="/robot-1.mb4" 
                
                autoPlay 
                loop 
                muted 
                playsInline
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0079bf]/20 backdrop-blur-xl border border-[#0079bf]/30 flex items-center justify-center">
              <span className="text-sm font-bold text-[#0079bf]">02</span>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#2de2fa] mb-16">PROCESS</p>
          
          <div className="grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#2de2fa]/10 to-[#0079bf]/10 border border-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#2de2fa]">1</span>
              </div>
              <h4 className="text-xl font-bold text-white">Design & Discovery</h4>
              <p className="text-sm text-gray-400">We analyze your needs and design custom AI solutions</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0079bf]/10 to-[#2de2fa]/10 border border-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0079bf]">2</span>
              </div>
              <h4 className="text-xl font-bold text-white">Development</h4>
              <p className="text-sm text-gray-400">Our team builds and trains intelligent models</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#2de2fa]/10 to-[#00a8cc]/10 border border-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#2de2fa]">3</span>
              </div>
              <h4 className="text-xl font-bold text-white">Deploy & Scale</h4>
              <p className="text-sm text-gray-400">Launch and continuously optimize performance</p>
            </div>
          </div>
        </motion.div>

        {/* Robot Image 3 + Data Intelligence */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mb-32 grid md:grid-cols-5 gap-8 items-center"
        >
          {/* Left side - Image */}
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2de2fa]/20 to-[#00a8cc]/20 rounded-full blur-3xl"></div>
            <div className="relative aspect-square">
              <Image 
                src="/robot-3.png" 
                alt="AI Robot"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#2de2fa]/20 backdrop-blur-xl border border-[#2de2fa]/30 flex items-center justify-center">
              <span className="text-sm font-bold text-[#2de2fa]">03</span>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-white">
              Data<br/>
              <span className="text-[#2de2fa]">Intelligence</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Transform raw data into actionable insights. Our AI-powered analytics help you 
              make smarter decisions faster with advanced pattern recognition and predictive modeling.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>→ Big Data</span>
              <span>→ Pattern Recognition</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-32"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#2de2fa] mb-12 text-center">FEATURES</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2de2fa]/5 to-[#0079bf]/5 border border-white/10 p-6 flex flex-col justify-end backdrop-blur-xl">
              <h5 className="text-lg font-bold text-white mb-2">Real-time</h5>
              <p className="text-xs text-gray-500">Lightning fast</p>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0079bf]/5 to-[#2de2fa]/5 border border-white/10 p-6 flex flex-col justify-end backdrop-blur-xl">
              <h5 className="text-lg font-bold text-white mb-2">Secure</h5>
              <p className="text-xs text-gray-500">Bank-grade</p>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2de2fa]/5 to-[#00a8cc]/5 border border-white/10 p-6 flex flex-col justify-end backdrop-blur-xl">
              <h5 className="text-lg font-bold text-white mb-2">Scalable</h5>
              <p className="text-xs text-gray-500">Grows with you</p>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00a8cc]/5 to-[#0079bf]/5 border border-white/10 p-6 flex flex-col justify-end backdrop-blur-xl">
              <h5 className="text-lg font-bold text-white mb-2">Custom</h5>
              <p className="text-xs text-gray-500">Your needs</p>
            </div>
          </div>
        </motion.div>

        {/* Subscribe/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center py-20 mb-20"
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Subscribe to our<br/>
            <span className="bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">Newsletter</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Stay updated with the latest AI innovations and insights
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-semibold hover:shadow-[0_0_40px_rgba(45,226,250,0.5)] transition-all duration-300 hover:scale-105">
            Subscribe
          </button>
        </motion.div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(0.95);
          }
          66% {
            transform: translate(30px, -20px) scale(1.1);
          }
        }
      `}</style>
    </section>
  )
}