"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"
import { FinishType } from "@/widgets/case-finishes/finish-type"
import { ImageInfo } from "@/shared/types"
import { Measurement, FinishItem } from "@/shared/types/reference-detail.interface"
import AnimatedText from "@/components/AnimatedText"
import AnimatedSection from "@/components/AnimatedSection"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

interface CaseSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  measurements?: Measurement[]
  finishesTitle?: string
  finishes?: FinishItem[]
  onImageClick?: (image: ImageInfo) => void
}

export const CaseSection: React.FC<CaseSectionProps> = ({
  title,
  subtitle,
  description,
  measurements,
  finishesTitle,
  finishes,
  onImageClick,
  className = "",
}) => {
  const tCommon = useTranslations("Common")
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  return (
    <section
      ref={ref}
      className={`bg-white w-full px-8 sm:px-6 lg:px-20 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 ${getScrollAnimationClasses(isVisible, "duration-1000")} ${className}`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-28 lg:gap-32 items-start">
        {/* Title, description, measurements */}
        <div className="w-full flex flex-col gap-6">
          <AnimatedText delay={0}>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl lg:text-[32px] text-black tracking-wide">{title}</h3>
              {subtitle && <p className="text-lg lg:text-xl text-stone-500">{subtitle}</p>}
            </div>
          </AnimatedText>

          <div className="w-full flex flex-col lg:flex-row gap-12 lg:items-start lg:justify-between">
            {description && (
              <AnimatedText delay={0.1}>
                <div
                  className="flex-1 text-sm lg:text-base text-stone-800 leading-6 [&_p]:mb-4 last:[&_p]:mb-0 max-w-[520px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </AnimatedText>
            )}

            {measurements && measurements.length > 0 && (
              <AnimatedSection
                animation="fade-in"
                delay={0.2}
              >
                <div className="w-full lg:w-auto lg:min-w-[420px] bg-stone-50 px-6 py-6 border border-stone-100">
                  <p className="text-lg lg:text-xl text-black mb-4 tracking-wide">
                    {tCommon("measurements")}
                  </p>
                  <div className="grid text-sm lg:text-base">
                    {measurements.map((measurement, index) => (
                      <div
                        key={index}
                        className={`flex justify-between gap-8 px-4 py-3 ${index !== measurements.length - 1 ? "border-b border-neutral-200" : ""}`}
                      >
                        <span className="text-neutral-500 whitespace-nowrap tracking-wide">
                          {measurement.label}
                        </span>
                        <span className="text-neutral-900 font-medium whitespace-nowrap tracking-wide">
                          {measurement.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>

        {/* Finishes Title (optional) */}
        {finishesTitle && (
          <AnimatedText delay={0.1}>
            <p className="text-base lg:text-lg text-neutral-600 -mb-96 leading-none w-full">
              {finishesTitle}
            </p>
          </AnimatedText>
        )}

        {/* Finishes */}
        {finishes && finishes.length > 0 && (
          <div className="-mt-14 w-full flex flex-col">
            {finishes.map((finish, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up-sm"
                delay={0.1 + index * 0.1}
                className="w-full"
              >
                {/* Divider before each finish */}
                <div className="w-full h-px bg-neutral-200 mb-12" />

                <FinishType
                  title={finish.title}
                  productionYears={finish.year}
                  description={finish.description}
                  colorClass={finish.color}
                  images={finish.images}
                  note={finish.note}
                  onImageClick={onImageClick}
                  className="mb-12"
                />
              </AnimatedSection>
            ))}

            {/* Final Divider */}
            <div className="w-full h-px bg-neutral-200" />
          </div>
        )}
      </div>
    </section>
  )
}
