"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import dynamic from "next/dynamic"
import AnimatedText from "@/components/AnimatedText"

// Dynamically import Model Viewer wrapper to avoid SSR issues
const Watch3DViewer = dynamic(() => import("@/components/Watch3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80">
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        {/* Spinning circle */}
        <div className="absolute w-[220px] h-[220px] border-[3px] border-transparent border-t-stone-300 rounded-full animate-spin" />
        {/* Watch lineart image */}
        <img
          src="/lovable-uploads/opd-watch.png"
          alt="Loading watch"
          className="w-[180px] h-[180px] opacity-70"
        />
      </div>
    </div>
  ),
})

// All model paths for preloading
const ALL_MODEL_PATHS = [
  "/updated-models/Black PVD (opt).glb",
  "/updated-models/grey.glb",
  "/updated-models/silver.glb",
  "/updated-models/nts.glb",
  "/updated-models/green.glb",
]

// Define camera view positions for 360° rotation
// Labels match what's visible at each slider position (with 90deg offset applied in viewer)
const cameraViews = [
  { id: "left", name: "LEFT", orbit: "90deg 75deg", angle: 0 },
  { id: "back", name: "BACK", orbit: "180deg 75deg", angle: 90 },
  { id: "right", name: "RIGHT", orbit: "270deg 75deg", angle: 180 },
  { id: "front", name: "FRONT", orbit: "0deg 75deg", angle: 270 },
]

// Define the watch variants with their model paths and colors
const watchVariants = [
  {
    id: "black-pvd",
    name: "Black PVD",
    model: "/updated-models/Black PVD (opt).glb",
    color: "#1a1a1a",
    description: "Stealth black PVD coating",
  },
  {
    id: "cadet-grey-pvd",
    name: "Cadet Grey PVD",
    model: "/updated-models/grey.glb",
    color: "#5a5a5a",
    description: "Military-inspired grey finish",
  },
  {
    id: "non-pvd-silver",
    name: "Silver Sablé",
    model: "/updated-models/silver.glb",
    color: "#c0c0c0",
    description: "Classic brushed silver",
  },
  {
    id: "nts-pvd",
    name: "NTS PVD",
    model: "/updated-models/nts.glb",
    color: "#4a4a4a",
    description: "Natural titanium",
  },
  {
    id: "olive-green-pvd",
    name: "Olive Green PVD",
    model: "/updated-models/green.glb",
    color: "#554C38",
    description: "Olive green finish",
  },
]

export const Watch3DShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState(watchVariants[0])
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedView, setSelectedView] = useState(cameraViews[0])
  const [rotationAngle, setRotationAngle] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const lastAngle = useRef(0)

  // Detect mobile screen size for responsive camera zoom
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640
      setIsMobile(mobile)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Disable auto-rotate on mobile
  useEffect(() => {
    if (isMobile) {
      setIsAutoRotating(false)
    }
  }, [isMobile])

  // Mark as loaded once component mounts (Three.js handles its own loading)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Preload other GLB models in background AFTER first model loads
  // This prevents competing for bandwidth with the initial model
  const [firstModelLoaded, setFirstModelLoaded] = useState(false)

  useEffect(() => {
    if (!firstModelLoaded) return

    // Delay preloading other models to not compete with initial render
    const timer = setTimeout(() => {
      ALL_MODEL_PATHS.forEach((path) => {
        if (path === selectedVariant.model) return // Skip already loaded model
        fetch(path)
          .then((response) => response.blob())
          .then(() => {
            console.log(`Preloaded: ${path}`)
          })
          .catch((err) => {
            console.warn(`Failed to preload ${path}:`, err)
          })
      })
    }, 2000) // Wait 2 seconds after first model loads

    return () => clearTimeout(timer)
  }, [firstModelLoaded, selectedVariant.model])

  // Toggle auto-rotation (desktop only)
  const toggleAutoRotate = () => {
    if (isMobile) return
    setIsAutoRotating((prev) => !prev)
  }

  // Update selected view indicator based on rotation angle
  const updateCameraOrbit = useCallback((angle: number) => {
    const closestView = cameraViews.reduce((prev, curr) => {
      const prevDiff = Math.abs(prev.angle - angle)
      const currDiff = Math.abs(curr.angle - angle)
      return currDiff < prevDiff ? curr : prev
    })
    setSelectedView(closestView)
  }, [])

  // Handle touch/mouse events for horizontal rotation slider
  const handleSliderStart = useCallback(
    (clientX: number) => {
      if (!isMobile) return
      setIsDragging(true)
      setIsAutoRotating(false)
      touchStartX.current = clientX
      lastAngle.current = rotationAngle
    },
    [isMobile, rotationAngle],
  )

  const handleSliderMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !isMobile) return
      const slider = sliderRef.current
      if (!slider) return

      const deltaX = clientX - touchStartX.current
      const sliderWidth = slider.offsetWidth
      // Map slider drag to 270 degrees (full width = 0deg to 270deg, TOP to LEFT)
      const angleDelta = (deltaX / sliderWidth) * 270
      const newAngle = Math.max(0, Math.min(270, lastAngle.current + angleDelta))

      setRotationAngle(newAngle)
      updateCameraOrbit(newAngle)
    },
    [isDragging, isMobile, updateCameraOrbit],
  )

  const handleSliderEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleSliderStart(e.touches[0].clientX)
    },
    [handleSliderStart],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleSliderMove(e.touches[0].clientX)
    },
    [handleSliderMove],
  )

  // Mouse event handlers (for testing on desktop)
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      handleSliderStart(e.clientX)
    },
    [handleSliderStart],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleSliderMove(e.clientX)
    },
    [handleSliderMove],
  )

  // Jump to specific view
  const jumpToView = useCallback(
    (view: (typeof cameraViews)[0]) => {
      setSelectedView(view)
      setRotationAngle(view.angle)
      setIsAutoRotating(false)
      updateCameraOrbit(view.angle)
    },
    [updateCameraOrbit],
  )

  return (
    <section className="relative py-8 sm:py-0 sm:min-h-[700px] lg:min-h-[800px] bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 flex flex-col h-full sm:min-h-[700px] lg:min-h-[800px]">
        {/* Main content area - desktop: side by side, mobile: stacked */}
        <div className="sm:flex-1 flex flex-col lg:flex-row items-center justify-start sm:justify-center lg:justify-between px-8 sm:px-10 lg:px-20 pt-6 sm:pt-12 lg:pt-16">
          {/* Left side - Watch info (visible on all screens) */}
          <div className="lg:w-1/4 text-center lg:text-left order-2 lg:order-1 mt-8 sm:mt-4 lg:mt-0">
            <AnimatedText delay={0.1}>
              <p className="text-stone-500 text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2">
                Case Finish
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black tracking-wide mb-1 sm:mb-2 lg:mb-3 transition-all duration-300">
                {selectedVariant.name}
              </h3>
            </AnimatedText>
          </div>

          {/* Center - 3D Model Viewer */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2 w-full">
            <div
              className="relative w-full aspect-[1/1.1] max-w-[70vw] sm:max-w-[450px] lg:max-w-[550px] transition-opacity duration-500"
              style={{ opacity: isLoaded ? 1 : 0 }}
            >
              {isLoaded && (
                <Watch3DViewer
                  modelPath={selectedVariant.model}
                  autoRotate={!isMobile && isAutoRotating}
                  isMobile={isMobile}
                  rotationAngle={rotationAngle}
                  onLoad={() => {
                    setIsModelLoading(false)
                    setFirstModelLoaded(true)
                  }}
                />
              )}

              {/* Loading state for script */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
                </div>
              )}

              {/* Loading state for model */}
              {isLoaded && isModelLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-12 h-12 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Shadow/reflection effect */}
            <div className="w-full max-w-[50vw] sm:max-w-[400px] h-5 sm:h-6 bg-gradient-to-t from-stone-300/50 to-transparent rounded-full blur-xl -mt-4 sm:-mt-8" />

            {/* Drag to explore hint - hidden on mobile when slider is shown */}
            <p className="text-stone-400 text-xs sm:text-sm tracking-wider mt-1 sm:mt-2 mb-2 sm:mb-4 hidden sm:block">
              Drag to explore
            </p>

            {/* Mobile 360° View Slider - inspired by Richard Mille */}
            {isMobile && (
              <div className="w-3/4 mx-auto mt-4">
                {/* Rotation slider track */}
                <div
                  ref={sliderRef}
                  className="relative w-full h-8 touch-pan-x select-none"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleSliderEnd}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleSliderEnd}
                  onMouseLeave={handleSliderEnd}
                >
                  {/* Slider track line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-stone-300 -translate-y-1/2" />

                  {/* View position markers - aligned with labels */}
                  {cameraViews.map((view, index) => (
                    <button
                      key={view.id}
                      onClick={() => jumpToView(view)}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                      style={{ left: `${(index / (cameraViews.length - 1)) * 100}%` }}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          selectedView.id === view.id ? "bg-stone-800 scale-125" : "bg-stone-300"
                        }`}
                      />
                    </button>
                  ))}

                  {/* Current position indicator - maps angle to slider position */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-stone-500 bg-stone-500 pointer-events-none"
                    style={{
                      left: `${(rotationAngle / 270) * 100}%`,
                    }}
                  />
                </div>

                {/* View labels - centered under each dot */}
                <div className="relative w-full mt-1 h-4">
                  {cameraViews.map((view, index) => (
                    <button
                      key={view.id}
                      onClick={() => jumpToView(view)}
                      className={`absolute -translate-x-1/2 text-[10px] tracking-wider transition-colors whitespace-nowrap ${
                        selectedView.id === view.id
                          ? "text-stone-800 font-medium"
                          : "text-stone-400"
                      }`}
                      style={{ left: `${(index / (cameraViews.length - 1)) * 100}%` }}
                    >
                      {view.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Play/Pause button (desktop only) */}
          <div className="lg:w-1/4 hidden lg:flex justify-end order-3">
            <button
              onClick={toggleAutoRotate}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group ring-1 ring-gray-100"
              aria-label={isAutoRotating ? "Pause rotation" : "Play rotation"}
            >
              {isAutoRotating ? (
                <svg
                  className="w-5 h-5 text-stone-700 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="6"
                    y="4"
                    width="4"
                    height="16"
                  />
                  <rect
                    x="14"
                    y="4"
                    width="4"
                    height="16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-stone-700 group-hover:text-black transition-colors ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Color selector - fixed at bottom */}
        <div className="pt-4 pb-6 sm:pt-0 sm:pb-12 lg:pb-16 px-3 sm:px-6">
          <div className="flex items-start justify-center gap-5 sm:gap-8 lg:gap-10">
            {watchVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className="group flex flex-col items-center gap-1.5 sm:gap-2 w-14 sm:w-16 lg:w-20"
                aria-label={`Select ${variant.name}`}
              >
                {/* Color circle with ring indicator */}
                <div
                  className={`
                    w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full transition-all duration-300
                    ${
                      selectedVariant.id === variant.id
                        ? "ring-2 ring-offset-3 sm:ring-offset-4 ring-offset-white ring-stone-600"
                        : "ring-1 ring-stone-300 hover:ring-stone-500"
                    }
                  `}
                  style={{ backgroundColor: variant.color }}
                />

                {/* Label - allows 2 lines if needed */}
                <span
                  className={`
                    text-[10px] sm:text-xs lg:text-sm tracking-wider transition-colors duration-300 text-center leading-tight
                    ${
                      selectedVariant.id === variant.id
                        ? "text-stone-600 font-medium"
                        : "text-stone-500 group-hover:text-stone-700"
                    }
                  `}
                >
                  {variant.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Watch3DShowcase
