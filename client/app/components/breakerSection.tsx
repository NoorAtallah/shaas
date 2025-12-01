'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface InteractiveRobotSplineProps {
  scene: string
  className?: string
}

function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-black text-white ${className}`}>
          <div className="w-16 h-16 border-4 border-[#0079bf] border-t-[#2de2fa] rounded-full animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className} 
      />
    </Suspense>
  )
}

export default function SplineBreakerSection() { 
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
  
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0" 
      />
    
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-[#0079bf]/10 via-transparent to-[#2de2fa]/10 pointer-events-none" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div> 
  )
}