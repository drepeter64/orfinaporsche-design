import React from "react"

interface SectionHeadingProps {
  title: string
  variant?: "numbered" | "solid" | "elegant" | "elegant-dark"
  number?: number
  className?: string
  textClassName?: string
  subtitle?: string
}

const SectionHeading = ({
  title,
  variant = "numbered",
  number,
  className = "",
  textClassName = "",
  subtitle,
}: SectionHeadingProps) => {
  if (variant === "solid") {
    return (
      <div className={`flex items-center mb-8 sm:mb-12 ${className}`}>
        <div className="text-stone-900">
          <h2
            className={`font-light tracking-wide ${textClassName || "text-2xl sm:text-3xl lg:text-4xl"}`}
          >
            {title}
          </h2>
        </div>
      </div>
    )
  }

  if (variant === "elegant") {
    return (
      <div className={`mb-8 sm:mb-12 ${className}`}>
        <div className="relative">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-4 uppercase tracking-wide">
            {title}
          </h2>
          {/*<div className="flex items-center space-x-3">
            <div className="w-16 h-0.5 bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
          </div> */}
        </div>
      </div>
    )
  }

  if (variant === "elegant-dark") {
    return (
      <div className={`mb-8 sm:mb-12 ${className}`}>
        <div className="inline-block">
          <div className="text-stone-900">
            <h2 className="text-2xl sm:text-3xl tracking-wide">{title}</h2>
          </div>
          {/* <div className="flex items-center space-x-3 mt-3">
            <div className="w-16 h-0.5 bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
          </div> */}
        </div>
      </div>
    )
  }

  // numbered variant (default)
  return (
    <div className={`flex items-center space-x-4 mb-8 sm:mb-12 ${className}`}>
      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black tracking-wide">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}

export default SectionHeading
