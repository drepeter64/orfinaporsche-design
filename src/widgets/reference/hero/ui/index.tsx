import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tCommon = useTranslations("Common")
  const { heroTitle } = data

  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h1 className="font-light text-6xl md:text-8xl text-gray-900 mb-6 tracking-tight">
              {tCommon("reference")}&nbsp;
              <span className="font-normal text-gray-700">{heroTitle}</span>
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface HeroSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
