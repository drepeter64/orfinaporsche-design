"use client"

import { useState, DetailedHTMLProps, HTMLAttributes } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ImageInfo } from "@/shared/types"

interface FinishNote {
  title: string
  content: string
}

export const FinishType: React.FC<FinishTypeProps> = ({
  title,
  productionYears,
  description,
  colorClass = "bg-black",
  images,
  note,
  onImageClick,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = (images?.length ?? 0) > 1
  const displayedImage = images?.[hasMultipleImages ? currentIndex : 0]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? (images?.length ?? 1) - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === (images?.length ?? 1) - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-between items-start w-full">
        {/* Left Content */}
        <div className="flex gap-4 lg:gap-6 mt-4 items-start w-full lg:w-auto lg:max-w-[520px]">
          {/* Color Dot */}
          <div
            className={`mt-2 w-3 h-3 rounded-full flex-shrink-0 ${colorClass} ${colorClass === "bg-white" || colorClass === "bg-gray-400" ? "border border-neutral-400" : ""}`}
          ></div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 lg:gap-6 flex-1">
            {/* Title & Production Years */}
            <div className="flex flex-col gap-3 items-start">
              <h4 className="text-xl lg:text-2xl text-black tracking-[-0.01em] leading-tight">
                {title}
              </h4>
              {productionYears && (
                <p className="text-sm lg:text-base text-neutral-500 tracking-[-0.01em]">
                  Production Years: <span className="font-medium">{productionYears}</span>
                </p>
              )}
            </div>

            {/* Description */}
            {description && (
              <div
                className="text-sm lg:text-base text-neutral-700 tracking-[-0.01em] leading-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* Note */}
            {note && (
              <div className="border-l-4 border-stone-300 bg-stone-50 px-5 py-5 flex flex-col gap-2">
                <p className="text-base text-stone-400 tracking-[0.02em] leading-6">{note.title}</p>
                <div
                  className="text-sm lg:text-base text-stone-900 tracking-[-0.01em] leading-5"
                  dangerouslySetInnerHTML={{ __html: note.content }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Images - Static or Carousel */}
        {displayedImage && (
          <div className="flex flex-col gap-4 items-center w-full lg:w-auto px-12">
            {hasMultipleImages ? (
              <>
                <div className="relative w-full max-w-[520px]">
                  {/* Main Image */}
                  <div
                    className="relative mx-auto max-w-[260px] lg:max-w-[320px] h-[300px] lg:h-[400px] w-auto overflow-hidden cursor-pointer group flex items-center justify-center"
                    onClick={() => onImageClick?.(displayedImage)}
                  >
                    <ImageWithLoader
                      src={displayedImage.src}
                      alt={displayedImage.alt || title}
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-4 h-4 text-stone-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-4 h-4 text-stone-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {displayedImage.title && (
                  <p className="text-base text-black tracking-[-0.01em] leading-none text-center">
                    {displayedImage.title}
                  </p>
                )}

                <div className="flex gap-2 mt-2">
                  {images?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentIndex
                          ? "bg-neutral-800"
                          : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="relative mx-auto max-w-[260px] lg:max-w-[320px] w-auto h-auto overflow-hidden cursor-pointer group">
                  <ImageWithLoader
                    src={displayedImage.src}
                    alt={displayedImage.alt || title}
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
                {displayedImage.title && (
                  <p className="text-base text-black tracking-[-0.01em] leading-none text-center">
                    {displayedImage.title}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

interface FinishTypeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  productionYears?: string
  description?: string
  colorClass?: string
  images?: ImageInfo[]
  note?: FinishNote
  onImageClick?: (image: ImageInfo) => void
}
