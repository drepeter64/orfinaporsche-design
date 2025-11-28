"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"
import { PhotoCard } from "@/widgets/case-finishes/photo-card"
import { FinishType } from "@/widgets/case-finishes/finish-type"
import { ImageInfo } from "@/shared/types"
import { Measurement, FinishItem } from "@/shared/types/reference-detail.interface"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

interface CaseSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  heroImages?: ImageInfo[]
  measurements?: Measurement[]
  finishesTitle?: string
  finishes?: FinishItem[]
  onImageClick?: (image: ImageInfo) => void
}

export const CaseSection: React.FC<CaseSectionProps> = ({
  title,
  subtitle,
  description,
  heroImages,
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
      className={`bg-white w-full px-4 sm:px-6 lg:px-20 py-10 lg:py-16 ${getScrollAnimationClasses(isVisible, "duration-1000")} ${className}`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-16 items-start">
        {/* Hero Images */}
        {heroImages && heroImages.length > 0 && (
          <div className="w-full flex flex-wrap gap-6 lg:gap-8 items-center justify-center mb-6 lg:mb-10">
            {heroImages.map((image, index) => (
              <PhotoCard
                key={index}
                image={image}
                caption={image.title || image.alt}
                onClick={() => onImageClick?.(image)}
                className="w-full sm:w-[280px] lg:w-[301px]"
              />
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200" />

        {/* Title & Description Row */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
          {/* Left - Title */}
          <div className="flex flex-col gap-4 lg:gap-6 flex-1">
            <h3 className="text-3xl lg:text-[44px] text-black tracking-[-0.01em] leading-[1.1]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xl lg:text-2xl text-black/40 tracking-[-0.01em] leading-5">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right - Description & Measurements */}
          <div className="flex flex-col gap-12 lg:gap-[60px] lg:max-w-[516px]">
            {description && (
              <div
                className="text-lg text-neutral-700 tracking-[-0.01em] leading-6 [&_p]:mb-4 last:[&_p]:mb-0"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* Measurements */}
            {measurements && measurements.length > 0 && (
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-2xl lg:text-[32px] text-black tracking-[-0.01em] leading-none">
                  {tCommon("measurements")}
                </h4>
                <div className="w-full h-px bg-neutral-200" />
                <div className="flex flex-col gap-5">
                  {measurements.map((measurement, index) => (
                    <div
                      key={index}
                      className="flex gap-8 lg:gap-[37px] items-center text-base tracking-[-0.01em] leading-5"
                    >
                      <span className="text-black w-[140px] lg:w-[180px]">{measurement.label}</span>
                      <span className="text-black/50">{measurement.value}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px bg-neutral-200" />
              </div>
            )}
          </div>
        </div>

        {/* Finishes Title */}
        {finishesTitle && (
          <p className="text-lg lg:text-xl text-neutral-600 tracking-[-0.01em] leading-none w-full">
            {finishesTitle}
          </p>
        )}

        {/* Finishes */}
        {finishes && finishes.length > 0 && (
          <div className="w-full flex flex-col">
            {finishes.map((finish, index) => (
              <div
                key={index}
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
              </div>
            ))}

            {/* Final Divider */}
            <div className="w-full h-px bg-neutral-200" />
          </div>
        )}
      </div>
    </section>
  )
}
