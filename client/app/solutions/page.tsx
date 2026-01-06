'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  Brain, Cloud, Database, Shield, Code, Rocket,
  Sparkles, ArrowRight, Zap, Star, Hexagon, Orbit
} from 'lucide-react'

export default function SolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 })
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <div ref={containerRef} className="relative w-full bg-black text-white overflow-hidden">
      
      {/* Hero - Extreme Diagonal Layout */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
      >
        {/* Massive diagonal glow - responsive */}
        <div className="absolute inset-0 -rotate-12">
          <div className="absolute top-[30%] left-[-40%] sm:left-[-20%] w-[600px] sm:w-[1200px] h-[600px] sm:h-[1200px] bg-[#2de2fa]/25 rounded-full blur-[100px] sm:blur-[180px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[-20%] sm:right-[-10%] w-[500px] sm:w-[1000px] h-[500px] sm:h-[1000px] bg-[#0079bf]/25 rounded-full blur-[100px] sm:blur-[180px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Scattered particles - fewer on mobile */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-[#2de2fa] ${i > 30 ? 'hidden sm:block' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
              animate={{
                y: [0, Math.random() * -300, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Diagonal robots */}
        <motion.img
          src="/images/4.png"
          className="absolute top-[5%] right-[15%] w-32 sm:w-40 lg:w-56 h-32 sm:h-40 lg:h-56 object-contain opacity-10 pointer-events-none hidden md:block -rotate-12"
          style={{ rotate: rotate1 }}
        />

        <motion.img
          src="/images/11.png"
          className="absolute bottom-[10%] left-[10%] w-48 sm:w-56 xl:w-72 h-48 sm:h-56 xl:h-72 object-contain opacity-15 pointer-events-none hidden lg:block rotate-12"
          style={{ rotate: rotate2 }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Diagonal text layout */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotate: -5 }}
            animate={heroInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="transform -rotate-1 sm:-rotate-2"
          >
            <div className="inline-block mb-4 sm:mb-8">
              <Sparkles className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-[#2de2fa] inline-block" />
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] font-bold leading-[0.85] mb-4 sm:mb-8">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -100, rotate: -3 }}
                animate={heroInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Next
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent ml-8 sm:ml-16 lg:ml-24"
                initial={{ opacity: 0, x: 100, rotate: 3 }}
                animate={heroInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Level
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-2xl ml-4 sm:ml-16 lg:ml-32 mt-6 sm:mt-12 leading-relaxed"
          >
            Solutions that don't just solve problems—they redefine what's possible
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="group mt-8 sm:mt-12 lg:mt-16 ml-8 sm:ml-24 lg:ml-48 px-8 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#2de2fa] to-[#0079bf] rounded-full text-base sm:text-lg lg:text-xl font-bold hover:shadow-[0_0_80px_rgba(45,226,250,0.8)] transition-all duration-300 inline-flex items-center gap-3 sm:gap-4"
          >
            Discover
            <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* AI Solution - Diagonal Composition */}
      <section className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          {/* Background blur - diagonal */}
          <div className="absolute top-[20%] right-[10%] w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px] bg-[#2de2fa]/20 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px] -rotate-45" />

          {/* Content scattered diagonally */}
          <div className="relative">
            {/* Icon floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -top-8 sm:-top-12 lg:-top-16 left-[5%] sm:left-[8%] z-10"
            >
              <div className="relative">
                <Brain className="w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 text-[#2de2fa]" strokeWidth={1} />
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Hexagon className="w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 text-[#2de2fa]/30" strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>

            {/* Title - extreme diagonal */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="ml-4 sm:ml-12 lg:ml-24 mt-20 sm:mt-28 lg:mt-32 transform -rotate-1"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="block text-white mb-2 sm:mb-4">Artificial</span>
                <span className="block text-[#2de2fa] ml-4 sm:ml-8 lg:ml-16">Intelligence</span>
              </h2>
            </motion.div>

            {/* Description - offset */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl ml-auto mr-4 sm:mr-10 lg:mr-20 mt-8 sm:mt-12 lg:mt-16 leading-relaxed"
            >
              Neural networks that evolve. Machine learning that predicts before you ask. 
              Deep learning architectures that rewrite the rules.
            </motion.p>

            {/* Robot - large background */}
            <motion.img
              src="/images/11.png"
              initial={{ opacity: 0, scale: 1.3, rotate: 20 }}
              whileInView={{ opacity: 0.5, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute -top-16 sm:-top-24 lg:-top-32 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] object-contain pointer-events-none hidden lg:block"
            />

            {/* Features - completely scattered - stacked on mobile */}
            <div className="relative mt-16 sm:mt-24 lg:mt-32 min-h-[300px] sm:min-h-[400px]">
              {[
                { text: 'Neural Networks', delay: 0.4 },
                { text: 'Deep Learning', delay: 0.5 },
                { text: 'Computer Vision', delay: 0.6 },
                { text: 'Predictive Analytics', delay: 0.7 },
                { text: 'NLP Integration', delay: 0.8 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -5 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="mb-4 sm:mb-0 sm:absolute transform -rotate-1 sm:rotate-0"
                  style={{
                    top: i % 2 === 0 ? `${i * 60}px` : `${i * 75}px`,
                    left: i % 2 === 0 ? `${12 + (i * 2)}%` : 'auto',
                    right: i % 2 === 0 ? 'auto' : `${15 + (i * 2)}%`,
                  }}
                >
                  <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#2de2fa] inline mr-2 sm:mr-3" />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stat - floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-0 sm:absolute sm:bottom-16 sm:left-[15%] transform rotate-3"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#2de2fa]">10x</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">Performance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud - Opposite Diagonal */}
      <section className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute bottom-[10%] left-[5%] w-[500px] sm:w-[700px] lg:w-[1000px] h-[500px] sm:h-[700px] lg:h-[1000px] bg-[#0079bf]/20 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px] rotate-45" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 sm:-top-16 lg:-top-24 right-[5%]"
            >
              <Cloud className="w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 text-[#0079bf]" strokeWidth={1} />
            </motion.div>

            <motion.img
              src="/images/3.png"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 0.4, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute top-0 left-[-10%] w-[400px] sm:w-[500px] lg:w-[700px] h-[400px] sm:h-[500px] lg:h-[700px] object-contain pointer-events-none hidden lg:block"
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="ml-auto mr-4 sm:mr-12 lg:mr-24 mt-28 sm:mt-36 lg:mt-48 max-w-4xl text-right transform rotate-1"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="block text-white mb-2 sm:mb-4 mr-4 sm:mr-8 lg:mr-12">Cloud</span>
                <span className="block text-[#0079bf]">Architecture</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl ml-4 sm:ml-16 lg:ml-32 mt-8 sm:mt-12 lg:mt-16 leading-relaxed"
            >
              Infinite scale. Zero downtime. Multi-cloud mastery that adapts in milliseconds.
            </motion.p>

            <div className="relative mt-20 sm:mt-32 lg:mt-40 min-h-[300px] sm:min-h-[400px]">
              {['Multi-Cloud', 'Serverless', 'Containers', 'Auto-Scale', 'Edge Computing'].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="mb-4 sm:mb-0 sm:absolute text-gray-300 transform"
                  style={{
                    top: `${i * 60}px`,
                    left: i % 2 === 0 ? `${15 + i * 3}%` : 'auto',
                    right: i % 2 === 0 ? 'auto' : `${10 + i * 2}%`,
                    rotate: `${Math.random() * 4 - 2}deg`
                  }}
                >
                  <Orbit className="w-5 sm:w-6 h-5 sm:h-6 text-[#0079bf] inline mr-2 sm:mr-3" />
                  <span className="text-base sm:text-lg lg:text-xl">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-0 sm:absolute sm:bottom-24 sm:right-[20%]"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#0079bf]">99.9%</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Engineering - Chaotic Scatter */}
      <section className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute top-[30%] left-[40%] w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-purple-500/15 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[140px]" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-[-5%] sm:top-[-10%] left-[10%] sm:left-[20%]"
            >
              <Database className="w-28 sm:w-40 lg:w-56 h-28 sm:h-40 lg:h-56 text-purple-400" strokeWidth={1} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="mt-32 sm:mt-48 lg:mt-64 ml-4 sm:ml-8 lg:ml-16 transform -rotate-2"
            >
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none">
                <span className="block bg-gradient-to-r from-purple-400 via-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent">
                  Data
                </span>
                <span className="block text-white ml-8 sm:ml-16 lg:ml-32 mt-2 sm:mt-4">
                  Universe
                </span>
              </h2>
            </motion.div>

            <motion.img
              src="/images/15.png"
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 0.35, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-[10%] right-[-5%] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] object-contain pointer-events-none hidden md:block"
              style={{ rotate: rotate1 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl ml-auto mr-4 sm:mr-16 lg:mr-32 mt-8 sm:mt-12 lg:mt-20 leading-relaxed"
            >
              Petabyte pipelines. Real-time streams. Data lakes that never overflow.
            </motion.p>

            <div className="relative mt-16 sm:mt-24 lg:mt-32 min-h-[350px] sm:min-h-[500px]">
              {[
                { text: 'Big Data', x: 10, y: 0, delay: 0.3 },
                { text: 'Real-Time', x: 55, y: 40, delay: 0.4 },
                { text: 'Data Lakes', x: 25, y: 100, delay: 0.5 },
                { text: 'ETL Pipeline', x: 65, y: 160, delay: 0.6 },
                { text: 'Analytics', x: 15, y: 220, delay: 0.7 },
                { text: 'Warehousing', x: 50, y: 280, delay: 0.8 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="mb-4 sm:mb-0 sm:absolute text-gray-300"
                  style={{ left: `${item.x}%`, top: `${item.y}px` }}
                >
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 inline mr-2 sm:mr-3" />
                  <span className="text-base sm:text-lg lg:text-xl">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-0 sm:absolute sm:bottom-0 sm:left-[30%] transform rotate-3"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-purple-400">1PB+</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">Processed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security - Angular Asymmetric */}
      <section className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute top-[20%] right-[20%] w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px] bg-red-500/15 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[140px] -rotate-12" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="absolute -top-12 sm:-top-16 lg:-top-20 right-[5%] sm:right-[10%]"
            >
              <Shield className="w-28 sm:w-36 lg:w-52 h-28 sm:h-36 lg:h-52 text-red-500" strokeWidth={1} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="ml-auto mr-4 sm:mr-8 lg:mr-16 mt-28 sm:mt-32 lg:mt-40 max-w-4xl text-right transform rotate-2"
            >
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none">
                <span className="block text-white mb-2 sm:mb-4 mr-8 sm:mr-16 lg:mr-24">Cyber</span>
                <span className="block bg-gradient-to-r from-red-500 to-[#2de2fa] bg-clip-text text-transparent">
                  Fortress
                </span>
              </h2>
            </motion.div>

            <motion.img
              src="/images/16.png"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-[5%] w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] object-contain pointer-events-none hidden md:block scale-x-[-1]"
              style={{ x: x1 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl ml-4 sm:ml-12 lg:ml-24 mt-8 sm:mt-12 lg:mt-20 leading-relaxed"
            >
              Zero-trust. AI-powered threats. Military-grade encryption. Impenetrable.
            </motion.p>

            <div className="relative mt-20 sm:mt-32 lg:mt-40 min-h-[300px] sm:min-h-[450px]">
              {[
                { text: 'Zero Trust', x: 60, y: 0 },
                { text: 'AI Detection', x: 15, y: 80 },
                { text: 'Encryption', x: 55, y: 140 },
                { text: 'Compliance', x: 25, y: 220 },
                { text: 'Response', x: 65, y: 300 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: Math.random() * 20 - 10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="mb-4 sm:mb-0 sm:absolute text-gray-300"
                  style={{ left: `${item.x}%`, top: `${item.y}px` }}
                >
                  <Hexagon className="w-5 sm:w-6 h-5 sm:h-6 text-red-500 inline mr-2 sm:mr-3" />
                  <span className="text-base sm:text-lg lg:text-xl">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-0 sm:absolute sm:bottom-32 sm:right-[25%]"
            >
              <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-red-500">0</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">Breaches</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Explosive Finale */}
      <section className="relative min-h-screen py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] lg:w-[1500px] h-[800px] sm:h-[1200px] lg:h-[1500px] bg-[#2de2fa]/25 rounded-full blur-[120px] sm:blur-[160px] lg:blur-[200px]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.5, 0.25]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-[#2de2fa] mx-auto mb-8 sm:mb-12 lg:mb-16" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[11rem] font-bold leading-none mb-6 sm:mb-8 lg:mb-12">
              <span className="block text-white mb-3 sm:mb-4 lg:mb-6">Ready to</span>
              <span className="block bg-gradient-to-r from-[#2de2fa] via-purple-400 to-[#0079bf] bg-clip-text text-transparent">
                Disrupt?
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 sm:mb-16 lg:mb-20 leading-relaxed max-w-4xl mx-auto px-4"
            >
              Stop following. Start leading. Transform everything.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group px-12 sm:px-16 lg:px-20 py-5 sm:py-6 lg:py-8 bg-gradient-to-r from-[#2de2fa] via-purple-500 to-[#0079bf] rounded-full text-xl sm:text-2xl lg:text-3xl font-bold hover:shadow-[0_0_100px_rgba(45,226,250,0.9)] transition-all duration-300 hover:scale-110 inline-flex items-center gap-4 sm:gap-5 lg:gap-6"
            >
              Let's Go
              <ArrowRight className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 group-hover:translate-x-4 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}