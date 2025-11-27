import React from "react"
import ImageWithLoader from "./ImageWithLoader"
import { useTranslations } from "next-intl"
import { ReferenceSpecificationRow } from "@/shared/types/reference.interface"
import { ImageInfo } from "@/shared/types"

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
}: ReferenceVariantCardProps) => {
  const tCommon = useTranslations("Common")

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
    <div className="bg-white py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-20 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] items-center">
          {/* Image Section */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div
              className="bg-[#f9f6f4] shadow-md p-4 cursor-pointer group"
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
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <p className="text-lg font-bold text-neutral-500 mt-4 text-center">
                {imageCaption || title}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Title and Subtitle */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-3xl lg:text-4xl text-black leading-[1] tracking-[-0.01em]">
                {title}
              </h2>
              {subtitle && (
                <p className="text-2xl md:text-2xl text-black/40 leading-[1.2] tracking-[-0.01em]">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Specifications Table */}
            <div className="flex flex-col w-full">
              {specifications.map((spec, idx) => (
                <div key={idx}>
                  {/* Top border for first item */}
                  {idx === 0 && <div className="h-px bg-neutral-200 w-full"></div>}

                  <div className="flex items-center gap-[37px] py-3 text-base md:text-lg tracking-[-0.01em]">
                    <span className="text-black w-[160px] md:w-[200px] flex-shrink-0">
                      {specLabelMap[spec.label] || tCommon(`generation-${spec.label}`)}
                    </span>
                    <span className="text-black/50">{spec.value}</span>
                  </div>

                  {/* Bottom border */}
                  <div className="h-px bg-neutral-200 w-full"></div>
                </div>
              ))}
            </div>

            {/* Note Section */}
            {note && (
              <div className="border-neutral-200 border-l-4 px-6 py-2 flex flex-col gap-2">
                <p className="text-md md:text-base leading-[1.4] tracking-[0.1em]">
                  <span className="text-neutral-400">{tCommon("note")} </span>
                </p>
                <p className="text-base md:text-lg leading-[1.2] tracking-[-0.01em]">
                  <span className="text-neutral-900">{note}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferenceVariantCard
