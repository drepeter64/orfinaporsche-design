"use client"

import React, { useEffect, useRef, useState } from "react"
import AnimatedText from "@/components/AnimatedText"

// Define the watch variants with their model paths and colors
const watchVariants = [
  {
    id: "black-pvd",
    name: "Black PVD",
    model: "/models/Black PVD.glb",
    color: "#1a1a1a",
    description: "Stealth black PVD coating",
  },
  {
    id: "cadet-grey-pvd",
    name: "Cadet Grey PVD",
    model: "/models/Cadet Grey PVD.glb",
    color: "#5a5a5a",
    description: "Military-inspired grey finish",
  },
  {
    id: "non-pvd-silver",
    name: "Silver Sablé",
    model: "/models/Non-PVD Silver_Sablé.glb",
    color: "#c0c0c0",
    description: "Classic brushed silver",
  },
  {
    id: "nts-pvd",
    name: "NTS PVD",
    model: "/models/NTS PVD.glb",
    color: "#4a4a4a",
    description: "Natural titanium",
  },
  {
    id: "olive-green-pvd",
    name: "Olive Green PVD",
    model: "/models/Olive Green PVD.glb",
    color: "#4a5d23",
    description: "Olive green finish",
  },
]

// Model-viewer custom element props
interface ModelViewerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string
  alt?: string
  "auto-rotate"?: boolean
  "camera-controls"?: boolean
  "shadow-intensity"?: string
  "shadow-softness"?: string
  exposure?: string
  "environment-image"?: string
  "rotation-per-second"?: string
  "interaction-prompt"?: string
  "camera-orbit"?: string
  "min-camera-orbit"?: string
  "max-camera-orbit"?: string
  "field-of-view"?: string
  ar?: boolean
  loading?: "auto" | "lazy" | "eager"
  reveal?: "auto" | "manual"
  poster?: string
}

// Extend JSX for model-viewer custom element
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps
    }
  }
}

export const Watch3DShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState(watchVariants[0])
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const modelViewerRef = useRef<HTMLElement>(null)

  // Load model-viewer script
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)
    if (modelViewerRef.current) {
      const mv = modelViewerRef.current as unknown as { autoRotate: boolean }
      mv.autoRotate = !isAutoRotating
    }
  }

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] bg-stone-100 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Main content area - desktop: side by side, mobile: stacked */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 pt-12 lg:pt-0">
          {/* Left side - Watch info (visible on all screens) */}
          <div className="lg:w-1/4 text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
            <AnimatedText delay={0.1}>
              <p className="text-stone-500 text-xs sm:text-sm tracking-widest uppercase mb-2">
                Case Finish
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black tracking-wide mb-2 lg:mb-3 transition-all duration-300">
                {selectedVariant.name}
              </h3>
              <p className="text-stone-600 text-sm lg:text-base mb-4 lg:mb-6 transition-all duration-300">
                {selectedVariant.description}
              </p>
            </AnimatedText>
          </div>

          {/* Center - 3D Model Viewer */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
            <div
              className="relative w-full aspect-square max-w-[350px] sm:max-w-[450px] lg:max-w-[550px] transition-opacity duration-500"
              style={{ opacity: isLoaded ? 1 : 0 }}
            >
              {isLoaded && (
                <model-viewer
                  ref={modelViewerRef}
                  src={selectedVariant.model}
                  alt={`${selectedVariant.name} Watch`}
                  auto-rotate={isAutoRotating}
                  camera-controls
                  shadow-intensity="0.5"
                  shadow-softness="1"
                  exposure="1"
                  rotation-per-second="30deg"
                  interaction-prompt="none"
                  camera-orbit="0deg 75deg 105%"
                  min-camera-orbit="auto auto 50%"
                  max-camera-orbit="auto auto 200%"
                  field-of-view="30deg"
                  loading="eager"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                />
              )}

              {/* Loading state */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Shadow/reflection effect */}
            <div className="w-full max-w-[400px] h-6 bg-gradient-to-t from-stone-300/50 to-transparent rounded-full blur-xl -mt-2" />

            {/* Drag to explore hint */}
            <p className="text-stone-400 text-xs sm:text-sm tracking-wider mt-2 mb-4">
              Drag to explore
            </p>
          </div>

          {/* Right side - Play/Pause button */}
          <div className="lg:w-1/4 flex justify-center lg:justify-end order-3 absolute right-4 bottom-32 lg:relative lg:right-0 lg:bottom-0">
            <button
              onClick={toggleAutoRotate}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group"
              aria-label={isAutoRotating ? "Pause rotation" : "Play rotation"}
            >
              {isAutoRotating ? (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700 group-hover:text-black transition-colors"
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
                  className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700 group-hover:text-black transition-colors ml-0.5"
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
        <div className="pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {watchVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className="group flex flex-col items-center gap-1.5 sm:gap-2 transition-transform duration-300 hover:scale-105"
                aria-label={`Select ${variant.name}`}
              >
                {/* Color circle with ring indicator */}
                <div
                  className={`
                    w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full transition-all duration-300
                    ${
                      selectedVariant.id === variant.id
                        ? "ring-2 ring-offset-3 sm:ring-offset-4 ring-offset-stone-100 ring-stone-800"
                        : "ring-1 ring-stone-300 hover:ring-stone-500"
                    }
                  `}
                  style={{ backgroundColor: variant.color }}
                >
                  {/* Metallic shine effect */}
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                </div>

                {/* Label - hidden on very small screens, shown on sm+ */}
                <span
                  className={`
                    text-[10px] sm:text-xs lg:text-sm tracking-wider transition-colors duration-300 whitespace-nowrap
                    ${
                      selectedVariant.id === variant.id
                        ? "text-black font-medium"
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
