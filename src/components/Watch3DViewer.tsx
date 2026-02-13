"use client"

import { useRef, useEffect, useState } from "react"

// Declare model-viewer as a valid JSX element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          poster?: string
          "auto-rotate"?: boolean | string
          "camera-controls"?: boolean | string
          "disable-zoom"?: boolean | string
          "camera-orbit"?: string
          "auto-rotate-delay"?: string | number
          "rotation-per-second"?: string
          "interaction-prompt"?: string
          "environment-image"?: string
          exposure?: string | number
          "shadow-intensity"?: string | number
          "shadow-softness"?: string | number
          loading?: string
          reveal?: string
          "min-camera-orbit"?: string
          "max-camera-orbit"?: string
          style?: React.CSSProperties
        },
        HTMLElement
      >
    }
  }
}

interface Watch3DViewerProps {
  modelPath: string
  autoRotate: boolean
  isMobile: boolean
  rotationAngle?: number
  onLoad?: () => void
}

export function Watch3DViewer({
  modelPath,
  autoRotate,
  isMobile,
  rotationAngle = 0,
  onLoad,
}: Watch3DViewerProps) {
  const modelViewerRef = useRef<HTMLElement>(null)
  const currentRotationRef = useRef(0)
  const [isLoading, setIsLoading] = useState(true)

  // Handle auto-rotate changes and preserve rotation
  useEffect(() => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer) return

    if (autoRotate) {
      modelViewer.setAttribute("auto-rotate", "")
    } else {
      modelViewer.removeAttribute("auto-rotate")
      // Get current camera orbit to preserve rotation when pausing
      const cameraOrbit = modelViewer.getAttribute("camera-orbit")
      if (cameraOrbit) {
        const match = cameraOrbit.match(/^([\d.]+)deg/)
        if (match) {
          currentRotationRef.current = parseFloat(match[1])
        }
      }
    }
  }, [autoRotate])

  // Handle rotation angle changes (for mobile slider)
  // Offset by 90 degrees to align with model orientation (front dial is at 90deg orbit)
  useEffect(() => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer || autoRotate) return

    if (isMobile) {
      const orbitAngle = rotationAngle + 90
      modelViewer.setAttribute("camera-orbit", `${orbitAngle}deg 90deg auto`)
    }
  }, [rotationAngle, autoRotate, isMobile])

  // Handle model load event
  useEffect(() => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer) return

    const handleLoad = () => {
      setIsLoading(false)
      onLoad?.()
    }

    modelViewer.addEventListener("load", handleLoad)
    return () => modelViewer.removeEventListener("load", handleLoad)
  }, [onLoad])

  // Reset loading state when model changes
  useEffect(() => {
    setIsLoading(true)
  }, [modelPath])

  return (
    <>
      {/* Loading overlay with watch lineart and spinning circle */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Spinning circle */}
            <div
              style={{
                position: "absolute",
                width: "220px",
                height: "220px",
                border: "3px solid transparent",
                borderTopColor: "#d6d3d1",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            {/* Watch lineart image */}
            <img
              src="/lovable-uploads/opd-watch.png"
              alt="Loading watch"
              width={180}
              height={180}
              style={{ opacity: 0.7 }}
            />
          </div>
        </div>
      )}
      <style
        jsx
        global
      >{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        model-viewer::part(default-progress-bar) {
          display: none;
        }
      `}</style>
      <model-viewer
        ref={modelViewerRef as React.RefObject<HTMLElement>}
        src={modelPath}
        alt="Orfina Porsche Design Watch"
        camera-controls
        disable-zoom
        interaction-prompt="none"
        auto-rotate={autoRotate ? "" : undefined}
        auto-rotate-delay="0"
        rotation-per-second="30deg"
        camera-orbit="90deg 90deg auto"
        min-camera-orbit={isMobile ? "auto 90deg auto" : "auto auto auto"}
        max-camera-orbit={isMobile ? "auto 90deg auto" : "auto auto auto"}
        environment-image="legacy"
        exposure={
          modelPath.includes("SilverSablé")
            ? "0.6"
            : modelPath.includes("Cadet Grey")
              ? "0.9"
              : modelPath.includes("NTS PVD")
                ? "1.1"
                : isMobile && modelPath.includes("Black PVD")
                  ? "1.0"
                  : "1.3"
        }
        tone-mapping="commerce"
        loading="eager"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
    </>
  )
}

export default Watch3DViewer
