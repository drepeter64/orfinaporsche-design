"use client"

import React, { useRef, useEffect, useState, ReactNode, ElementType } from "react"
import { cn } from "@/shared/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  as?: ElementType
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-up-sm"
  delay?: number
  threshold?: number
  rootMargin?: string
}

/**
 * AnimatedSection - A flexible wrapper for scroll-triggered animations
 * Supports both fade-in and slide-up animation types
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  as: Component = "div",
  className = "",
  animation = "slide-up-sm",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}) => {
  const ref = useRef<HTMLElement>(null)
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

  const animationClass = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-up-sm": "animate-slide-up-sm",
  }[animation]

  return (
    <Component
      ref={ref}
      className={cn("opacity-0", isVisible && animationClass, className)}
      style={{
        animationDelay: isVisible ? `${delay}s` : "0s",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </Component>
  )
}

export default AnimatedSection
