import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tCommon = useTranslations("Common")
  const { heroTitle, variantsSubtitle } = data

  return (
    <section className="relative py-[60px] md:py-[60px] overflow-hidden px-4 sm:px-6 lg:px-20 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4">
            <div className="w-full">
              <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl text-black tracking-[-0.01em] leading-[1]">
                {tCommon("reference")} {heroTitle}
              </h1>
              <div className="w-full h-px bg-black/20 mt-8"></div>
            </div>

            {variantsSubtitle && (
              <div className="py-4 max-w-[500px] mx-auto w-full">
                <p
                  className="text-lg md:text-lg lg:text-xl text-black/60 leading-[1.4] tracking-[-0.01em] text-left"
                  dangerouslySetInnerHTML={{ __html: variantsSubtitle.replace(/\n/g, "<br />") }}
                />
              </div>
            )}
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
