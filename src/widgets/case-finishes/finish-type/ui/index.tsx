"use client"

import { useState, DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FinishTypeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  productionYears?: string
  description?: string
  colorClass?: string
  images?: ImageInfo[]
  note?: {
    title: string
    content: string
  }
  onImageClick?: (image: ImageInfo) => void
}

export const FinishType: React.FC<FinishTypeProps> = ({
  title,
  productionYears,
  description,
  colorClass = "bg-black",
  images,
  note,
  onImageClick,
  className,
  ...props
}) => {
  const tCommon = useTranslations("Common")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    if (!images || images.length === 0) return
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (!images || images.length === 0) return
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const hasImages = images && images.length > 0

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 ${className || ""}`}
      {...props}
    >
      {/* Left side - Text content */}
      <div className="flex gap-6 lg:gap-10 items-start flex-1 lg:max-w-[520px]">
        {/* Color Indicator */}
        {colorClass && (
          <div
            className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center ${colorClass}`}
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
        )}

        {/* Text Content */}
        <div className="flex flex-col gap-12 flex-1">
          {/* Title and Production Years */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl lg:text-[32px] font-normal text-black leading-none">{title}</h3>
            {productionYears && (
              <p className="text-lg lg:text-2xl text-neutral-400 leading-none">
                {tCommon("production-year")} {productionYears}
              </p>
            )}
          </div>

          {/* Description */}
          {description && (
            <div
              className="text-base text-black"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {/* Note */}
          {note && (
            <div className="bg-stone-50 border-l-4 border-stone-300 px-7 py-5">
              <h4 className="text-base font-normal text-stone-400 mb-2.5 uppercase tracking-wide">
                {note.title}
              </h4>
              <p className="text-base text-stone-700">{note.content}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Images */}
      {hasImages && (
        <div className="flex flex-col items-center gap-6 flex-1 lg:max-w-[520px]">
          {images.length === 1 ? (
            // Single image
            <div className="flex flex-col items-center w-full">
              <div
                className={`relative cursor-pointer h-80 lg:h-[400px] w-full flex items-center justify-center ${images[0].wrapClassName ?? ""}`}
                onClick={() =>
                  onImageClick &&
                  onImageClick({
                    src:
                      images[0].src ||
                      "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
                    original:
                      images[0].original ||
                      images[0].src ||
                      "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
                    alt: images[0].alt || title,
                    title: images[0].title,
                    subtitle: images[0].subtitle,
                  })
                }
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative group h-full">
                    <ImageWithLoader
                      src={
                        images[0].src ||
                        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
                      }
                      alt={images[0].alt || title}
                      className={`object-contain transition-all duration-300 group-hover:scale-101 h-full w-auto ${images[0].imgClassName ?? ""}`}
                      skeletonClassName="w-full h-80 lg:h-[400px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
                        {tCommon("click-zoom")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {images[0].subtitle && (
                <span
                  dangerouslySetInnerHTML={{ __html: images[0].subtitle }}
                  className="block text-base text-neutral-500 text-center mt-6"
                ></span>
              )}
            </div>
          ) : (
            // Multiple images - carousel/slider gallery
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full flex items-center gap-4 lg:gap-10">
                {/* Left arrow */}
                <button
                  onClick={goToPrevious}
                  className="flex-shrink-0 text-stone-500 hover:text-stone-700 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft
                    size={28}
                    strokeWidth={1.5}
                  />
                </button>

                {/* Image container */}
                <div
                  className={`relative cursor-pointer h-80 lg:h-[400px] flex-1 flex items-center justify-center ${images[currentImageIndex].wrapClassName ?? ""}`}
                  onClick={() =>
                    onImageClick &&
                    onImageClick({
                      src:
                        images[currentImageIndex].src ||
                        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
                      original:
                        images[currentImageIndex].original ||
                        images[currentImageIndex].src ||
                        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
                      alt:
                        images[currentImageIndex].alt ||
                        `${title} - Image ${currentImageIndex + 1}`,
                      title: images[currentImageIndex].title,
                      subtitle: images[currentImageIndex].subtitle,
                    })
                  }
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative group h-full">
                      <ImageWithLoader
                        src={
                          images[currentImageIndex].src ||
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
                        }
                        alt={
                          images[currentImageIndex].alt ||
                          `${title} - Image ${currentImageIndex + 1}`
                        }
                        className={`object-contain transition-all duration-300 group-hover:scale-101 h-full w-auto ${images[currentImageIndex].imgClassName ?? ""}`}
                        skeletonClassName="w-full h-80 lg:h-[400px]"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
                          {tCommon("click-zoom")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right arrow */}
                <button
                  onClick={goToNext}
                  className="flex-shrink-0 text-stone-500 hover:text-stone-700 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight
                    size={28}
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Image caption/title */}
              {images[currentImageIndex].title && (
                <span className="block text-base text-neutral-500 text-center mt-6">
                  {images[currentImageIndex].title}
                </span>
              )}

              {/* Pagination dots */}
              <div className="flex space-x-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-stone-700"
                        : "bg-stone-300 hover:bg-stone-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
