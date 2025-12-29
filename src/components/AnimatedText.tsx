"use client"

import React, { useRef, useEffect, useState, ReactNode, ElementType } from "react"
import { cn } from "@/shared/lib/utils"

interface AnimatedTextProps {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
}

/**
 * AnimatedText - Wraps text elements with a fade-in animation triggered on scroll
 * Use this to wrap any text element for scroll-triggered fade-in animations
 */
const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Component = "div",
  className = "",
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

  return (
    <Component
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-fade-in", className)}
      style={{
        animationDelay: isVisible ? `${delay}s` : "0s",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </Component>
  )
}

export default AnimatedText
