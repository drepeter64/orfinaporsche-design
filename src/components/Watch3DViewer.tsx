"use client"

import { useRef, useEffect } from "react"

// Declare model-viewer as a valid JSX element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
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
      modelViewer.setAttribute("camera-orbit", `${orbitAngle}deg 75deg auto`)
    }
  }, [rotationAngle, autoRotate, isMobile])

  // Handle model load event
  useEffect(() => {
    const modelViewer = modelViewerRef.current
    if (!modelViewer) return

    const handleLoad = () => {
      onLoad?.()
    }

    modelViewer.addEventListener("load", handleLoad)
    return () => modelViewer.removeEventListener("load", handleLoad)
  }, [onLoad])

  return (
    <>
      <model-viewer
        ref={modelViewerRef as React.RefObject<HTMLElement>}
        src={modelPath}
        alt="Orfina Porsche Design Watch"
        camera-controls={!isMobile ? "" : undefined}
        disable-zoom
        interaction-prompt="none"
        auto-rotate={autoRotate ? "" : undefined}
        auto-rotate-delay="0"
        rotation-per-second="30deg"
        camera-orbit={
          !autoRotate && isMobile ? `${rotationAngle + 90}deg 75deg auto` : "90deg 75deg auto"
        }
        environment-image="legacy"
        exposure="0.7"
        tone-mapping="commerce"
        loading="eager"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          touchAction: isMobile ? "none" : undefined,
        }}
      />
    </>
  )
}

export default Watch3DViewer
