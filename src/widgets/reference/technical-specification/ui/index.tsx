import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"
import AnimatedText from "@/components/AnimatedText"
import AnimatedSection from "@/components/AnimatedSection"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

export const TechnicalSpecificationSection: React.FC<TechnicalSpecificationsProps> = ({ data }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const tCommon = useTranslations("Common")

  // Split specifications into two columns
  const specs = data.technicalSpecs.specifications
  const midpoint = Math.ceil(specs.length / 2)
  const leftColumnSpecs = specs.slice(0, midpoint)
  const rightColumnSpecs = specs.slice(midpoint)

  const SpecRow = ({
    label,
    value,
    isLast,
  }: {
    label: string
    value: string
    isLast?: boolean
  }) => (
    <div className="w-full">
      <div className="h-px bg-stone-300 w-full"></div>
      <div className="flex items-center gap-[37px] py-4 text-base md:text-lg w-full">
        <span className="text-black w-[140px] flex-shrink-0">{label}</span>
        <span
          className="text-black/50"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
      {isLast && <div className="h-px bg-stone-300 w-full"></div>}
    </div>
  )

  return (
    <section
      ref={ref}
      className={`w-full py-[60px] md:py-[80px] lg:py-[100px] px-8 sm:px-6 lg:px-20 ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
    >
      <div className="flex flex-col gap-12 items-center">
        <AnimatedText delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black text-center">
            {tCommon("tech-specification")}
          </h2>
        </AnimatedText>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <AnimatedSection
            animation="fade-in"
            delay={0.1}
          >
            <div className="flex flex-col">
              {leftColumnSpecs.map((spec, index) => (
                <SpecRow
                  key={index}
                  label={spec.label}
                  value={spec.value}
                  isLast={index === leftColumnSpecs.length - 1}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection
            animation="fade-in"
            delay={0.2}
          >
            <div className="flex flex-col">
              {rightColumnSpecs.map((spec, index) => (
                <SpecRow
                  key={index}
                  label={spec.label}
                  value={spec.value}
                  isLast={index === rightColumnSpecs.length - 1}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

interface TechnicalSpecificationsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
