"use client"

import React, { useRef, useEffect, useState, ReactNode } from "react"
import { cn } from "@/shared/lib/utils"

interface AnimatedImageProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
}

/**
 * AnimatedImage - Wraps images with a slide-up animation triggered on scroll
 * Use this to wrap any image element for scroll-triggered slide-up animations
 */
const AnimatedImage: React.FC<AnimatedImageProps> = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check initial visibility
    const rect = element.getBoundingClientRect()
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isInitiallyVisible) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-slide-up", className)}
      style={{
        animationDelay: isVisible ? `${delay}s` : "0s",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedImage
