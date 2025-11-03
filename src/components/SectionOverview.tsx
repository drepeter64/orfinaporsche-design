import React from "react"

interface SectionOverviewProps {
  text: string
  className?: string
  customClassName?: string
}

const SectionOverview = ({ text, className = "" }: SectionOverviewProps) => {
  // numbered variant (default)
  return (
    <p
      dangerouslySetInnerHTML={{ __html: text }}
      className={`mx-auto text-lg sm:text-xl text-gray-800 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 font-bold ${className}`}
    ></p>
  )
}

export default SectionOverview
