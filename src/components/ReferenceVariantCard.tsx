import React from "react"
import ImageWithLoader from "./ImageWithLoader"
import { useTranslations } from "next-intl"
import { ReferenceSpecificationRow } from "@/shared/types/reference.interface"
import { ImageInfo } from "@/shared/types"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

interface ReferenceVariantCardProps {
  index: number
  title: string
  imageSrc: string
  imageAlt: string
  imageOriginal: string
  specifications: ReferenceSpecificationRow[]
  onImageClick: (imageData: ImageInfo) => void
  subtitle?: string
  note?: string
  imageCaption?: string
  animationDelay?: number
}

const ReferenceVariantCard = ({
  title,
  imageSrc,
  imageAlt,
  imageOriginal,
  specifications,
  onImageClick,
  subtitle = "",
  note,
  imageCaption,
  animationDelay = 0,
}: ReferenceVariantCardProps) => {
  const tCommon = useTranslations("Common")
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  // Map spec labels to display names
  const specLabelMap: Record<string, string> = {
    year: "Production Years",
    case: "Case",
    finishes: "Finishes",
    caseback: "Caseback",
    rehaut: "Rehaut",
    dial: "Dial",
  }

  return (
    <div
      ref={ref}
      className={`bg-white py-[60px] md:py-[80px] lg:py-[100px] px-8 sm:px-6 lg:px-20 ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
      style={{ transitionDelay: isVisible ? `${animationDelay}ms` : "0ms" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] items-center">
          {/* Image Section */}
          <div
            className={`w-2/3 mx-auto lg:mx-0 lg:w-[400px] flex-shrink-0 transform transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? `${animationDelay + 200}ms` : "0ms" }}
          >
            <div
              className="bg-stone-100 p-4 cursor-pointer group transition-shadow duration-300 shadow-sm hover:shadow-md border border-stone-200"
              onClick={() =>
                onImageClick({
                  src: imageSrc,
                  original: imageOriginal,
                  alt: imageAlt,
                  title: title,
                  subtitle: subtitle,
                })
              }
            >
              <div className="aspect-[400/600] relative overflow-hidden">
                <ImageWithLoader
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  skeletonClassName="w-full h-full"
                  sizes="(max-width: 1024px) 66vw, 400px"
                />
              </div>
              <p className="text-lg text-stone-500 mt-4 text-center tracking-wide">
                {imageCaption || title}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex-1 flex flex-col gap-12 transform transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? `${animationDelay + 400}ms` : "0ms" }}
          >
            {/* Title and Subtitle */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-3xl lg:text-4xl text-black leading-[1] tracking-wide">
                {title}
              </h2>
              {subtitle && (
                <p className="text-2xl md:text-2xl text-black/40 leading-[1.2]">{subtitle}</p>
              )}
            </div>

            {/* Specifications Table */}
            <div className="flex flex-col w-full">
              {specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className={`transform transition-all duration-500 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${animationDelay + 500 + idx * 75}ms` : "0ms",
                  }}
                >
                  {/* Top border for each row */}
                  <div className="h-px bg-stone-200 w-full"></div>

                  <div className="flex items-center gap-[37px] py-3 text-base md:text-lg">
                    <span className="text-black w-[160px] md:w-[200px] flex-shrink-0">
                      {specLabelMap[spec.label] || tCommon(`generation-${spec.label}`)}
                    </span>
                    <span className="text-black/50">{spec.value}</span>
                  </div>

                  {/* Bottom border only for last item */}
                  {idx === specifications.length - 1 && (
                    <div className="h-px bg-stone-200 w-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Note Section */}
            {note && (
              <div
                className={`bg-stone-50 border border-stone-200 p-5 flex flex-col gap-2 transform transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${animationDelay + 800}ms` : "0ms" }}
              >
                <p className="text-base font-normal text-stone-400 uppercase tracking-wide">
                  {tCommon("note")}
                </p>
                <p className="text-base text-stone-700 leading-relaxed">{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferenceVariantCard
