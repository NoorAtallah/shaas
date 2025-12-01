'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

export default function SmoothWaveSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (!canvasRef.current) return

    let animationId: number
    const canvas = canvasRef.current

    // ULTRA-OPTIMIZED Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // Disabled for max FPS
      powerPreference: 'high-performance',
      stencil: false, // Save GPU memory
      depth: true,
      preserveDrawingBuffer: false, // Better performance
      failIfMajorPerformanceCaveat: false
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    camera.position.z = 5

    // OPTIMIZED wave geometry - 32x32 sweet spot for performance + quality
    const geometry = new THREE.PlaneGeometry(15, 15, 32, 32)
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#0079bf') },
        uColor2: { value: new THREE.Color('#2de2fa') },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Simplified wave calculation for performance
          float wave1 = sin(pos.x * 1.5 + uTime) * 0.25;
          float wave2 = sin(pos.y * 1.5 + uTime * 0.7) * 0.25;
          float wave3 = sin(pos.x * 2.5 + pos.y * 2.5 + uTime * 0.6) * 0.15;
          
          pos.z = wave1 + wave2 + wave3;
          vElevation = pos.z;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vElevation;
        
        void main() {
          // Simplified fragment shader for max performance
          vec3 color = mix(uColor1, uColor2, vElevation * 2.0 + 0.5);
          gl_FragColor = vec4(color, 0.85);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false, // Performance optimization
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI * 0.35
    mesh.matrixAutoUpdate = true
    scene.add(mesh)

    // OPTIMIZED particles - 400 for best performance
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 400
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 18
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: '#2de2fa',
      size: 0.04,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false, // Performance boost
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    particles.matrixAutoUpdate = true
    scene.add(particles)

    // BUTTER SMOOTH mouse interaction with lerp
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // OPTIMIZED animation loop with delta time
    const clock = new THREE.Clock()
    let lastTime = 0

    const animate = () => {
      const currentTime = clock.getElapsedTime()
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      // ULTRA smooth mouse interpolation with delta time
      const lerpFactor = Math.min(deltaTime * 3, 0.1) // Cap for stability
      mouseX += (targetMouseX - mouseX) * lerpFactor
      mouseY += (targetMouseY - mouseY) * lerpFactor

      // Update shader time (slower for smoother feel)
      material.uniforms.uTime.value = currentTime * 0.5

      // Smooth mesh movement
      mesh.rotation.y = currentTime * 0.08
      mesh.position.x = mouseX * 0.3
      mesh.position.y = mouseY * 0.2

      // Gentle particle animation
      particles.rotation.y = currentTime * 0.03
      particles.rotation.x = currentTime * 0.02

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // DEBOUNCED resize handler for performance
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const width = window.innerWidth
        const height = window.innerHeight
        
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      }, 150) // Debounce resize
    }
    window.addEventListener('resize', handleResize, { passive: true })

    // PERFECT cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      clearTimeout(resizeTimeout)
      
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      scene.clear()
    }
  }, [])

  const features = [
    {
      number: '01',
      title: 'Neural Processing',
      description: 'Advanced AI algorithms that learn and adapt to your unique business needs in real-time',
    },
    {
      number: '02',
      title: 'Quantum Speed',
      description: 'Process millions of data points instantly with our optimized computational architecture',
    },
    {
      number: '03',
      title: 'Predictive Intelligence',
      description: 'Forecast trends and outcomes with machine learning models trained on vast datasets',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Three.js Canvas */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0079bf] to-[#2de2fa] flex items-center justify-center shadow-2xl shadow-[#2de2fa]/50 mb-6"
            >
              <div className="w-8 h-8 rounded-lg border-2 border-white/40" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2">Experience the</span>
              <span className="block bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                Power of AI
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Harness cutting-edge artificial intelligence to transform your business. 
              Our platform combines speed, accuracy, and intelligence to deliver results that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0079bf] to-[#2de2fa] text-white font-semibold shadow-2xl shadow-[#0079bf]/50 hover:shadow-[#2de2fa]/60 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-[#0079bf]/50 text-white font-semibold hover:border-[#2de2fa] hover:bg-[#2de2fa]/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-xl border border-[#0079bf]/20 hover:border-[#2de2fa]/50 transition-all duration-500 overflow-hidden">
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0079bf]/5 to-[#2de2fa]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-6">
                    {/* Number */}
                    <div className="text-5xl font-black bg-gradient-to-br from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                      {feature.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2de2fa] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom line animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0079bf]/20 to-[#2de2fa]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}