"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const ScrollToTop = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use 'instant' for immediate scroll, 'smooth' for smooth scroll
    })
  }, [pathname])

  return null // This component doesn't render anything
}

export default ScrollToTop
