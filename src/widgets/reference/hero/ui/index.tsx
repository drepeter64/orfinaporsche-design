import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  showReferencePrefix = true,
  backgroundColor,
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px",
  })

  const tCommon = useTranslations("Common")
  const { heroTitle, variantsSubtitle } = data

  return (
    <section
      className={`relative py-[60px] md:py-[60px] overflow-hidden px-4 sm:px-6 lg:px-20 w-full h-fit ${backgroundColor || ""}`}
    >
      <div className="max-w-[1280px] mx-auto">
        <div
          ref={ref}
          className={getScrollAnimationClasses(isVisible, "duration-1000")}
        >
          <div className="flex flex-col items-start gap-4 h-fit">
            <div className="w-full">
              <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl text-black tracking-[-0.01em] leading-[1]">
                {showReferencePrefix && `${tCommon("reference")} `}
                {heroTitle}
              </h1>
              <div className="w-full h-px bg-black/20 mt-8"></div>
            </div>

            {variantsSubtitle && (
              <div className="py-4 max-w-[600px] w-full">
                <p
                  className="text-lg md:text-lg lg:text-xl text-black/60 leading-[1.4] text-left"
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
  showReferencePrefix?: boolean
  backgroundColor?: string
}
