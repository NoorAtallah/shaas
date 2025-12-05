'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import * as THREE from 'three'

export default function FinalSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!canvasContainerRef.current) return

    const SEPARATION = 150
    const AMOUNTX = 40
    const AMOUNTY = 60

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 2000, 10000)

    const camera = new THREE.PerspectiveCamera(
      60,
      (canvasContainerRef.current?.clientWidth || window.innerWidth) / 600,
      1,
      10000
    )
    camera.position.set(0, 200, 800)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    
    // Get container dimensions
    const containerWidth = canvasContainerRef.current.clientWidth || window.innerWidth
    const containerHeight = 600 // Match our container height
    
    renderer.setSize(containerWidth, containerHeight)
    renderer.setClearColor(0x000000, 0)

    canvasContainerRef.current.appendChild(renderer.domElement)

    // Create particles
    const positions: number[] = []
    const colors: number[] = []

    const geometry = new THREE.BufferGeometry()

    // Brand colors in RGB
    const color1 = { r: 45, g: 226, b: 250 } // #2de2fa
    const color2 = { r: 0, g: 121, b: 191 } // #0079bf

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
        const y = 0
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2

        positions.push(x, y, z)

        // Alternate between brand colors
        const useColor1 = (ix + iy) % 2 === 0
        if (useColor1) {
          colors.push(color1.r / 255, color1.g / 255, color1.b / 255)
        } else {
          colors.push(color2.r / 255, color2.g / 255, color2.b / 255)
        }
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 15,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let count = 0
    let animationId: number = 0 // Initialize with 0

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const positionAttribute = geometry.attributes.position
      const positions = positionAttribute.array as Float32Array

      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3

          positions[index + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50

          i++
        }
      }

      positionAttribute.needsUpdate = true
      renderer.render(scene, camera)
      count += 0.03 // Slower animation (was 0.1)
    }

    const handleResize = () => {
      const containerWidth = canvasContainerRef.current?.clientWidth || window.innerWidth
      const containerHeight = 600
      
      camera.aspect = containerWidth / containerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerWidth, containerHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    sceneRef.current = {
      scene,
      camera,
      renderer,
      animationId,
    }

    return () => {
      window.removeEventListener('resize', handleResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Points) {
            object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })

        sceneRef.current.renderer.dispose()

        if (canvasContainerRef.current && sceneRef.current.renderer.domElement) {
          canvasContainerRef.current.removeChild(
            sceneRef.current.renderer.domElement
          )
        }
      }
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden py-40"
    >
      {/* Animated Dotted Surface Background - positioned at bottom */}
      <div 
        ref={canvasContainerRef}
        className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none opacity-60"
      />

      {/* Gradient overlay for better text readability at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-12 px-8 py-4 bg-gradient-to-r from-[#2de2fa]/10 via-[#0079bf]/10 to-[#2de2fa]/10 backdrop-blur-xl rounded-full"
          >
            <span className="text-sm text-[#2de2fa] font-mono tracking-widest">LET'S BUILD THE FUTURE</span>
          </motion.div>

          <h2 className="text-6xl lg:text-8xl font-bold leading-tight mb-12">
            <span className="text-white">Ready to Transform</span>
            <br/>
            <span className="text-white">Your Business with</span>
            <br/>
            <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
              AI?
            </span>
          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-16">
            Join the innovators who are already leveraging intelligent systems to stay ahead. 
            Your AI transformation starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-14 py-5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-bold text-xl hover:shadow-[0_0_60px_rgba(45,226,250,0.6)] transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="px-14 py-5 rounded-full border-2 border-[#2de2fa]/30 text-white font-bold text-xl hover:bg-[#2de2fa]/10 backdrop-blur-sm transition-all duration-300"
            >
              Schedule a Demo
            </motion.button>
          </div>

          {/* Stats or Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Expert Support' },
              { number: '∞', label: 'Innovation' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2de2fa] to-[#0079bf] bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg">
              Or reach out directly
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[#2de2fa]">
              <a href="mailto:hello@aistudio.com" className="hover:text-white transition-colors text-lg">
                hello@aistudio.com
              </a>
              <span className="text-gray-600">•</span>
              <a href="tel:+1234567890" className="hover:text-white transition-colors text-lg">
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}