"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
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
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-60 items-start w-full">
        {/* Left Content */}
        <div className="flex gap-8 lg:gap-10 items-start w-full lg:w-auto lg:max-w-[518px] flex-shrink-0">
          {/* Color Dot */}
          <div
            className={`w-7 h-7 rounded-full flex-shrink-0 ${colorClass} ${colorClass === "bg-white" || colorClass === "bg-gray-400" ? "border border-neutral-400" : ""}`}
          ></div>

          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:gap-12 flex-1">
            {/* Title & Production Years */}
            <div className="flex flex-col gap-3 items-start">
              <h4 className="text-2xl lg:text-[32px] text-black tracking-[-0.01em] leading-none">
                {title}
              </h4>
              {productionYears && (
                <p className="text-lg lg:text-2xl text-neutral-400 tracking-[-0.01em]">
                  Production Years: {productionYears}
                </p>
              )}
            </div>

            {/* Description */}
            {description && (
              <div
                className="text-lg text-black tracking-[-0.01em] leading-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* Note */}
            {note && (
              <div className="border-l-4 border-stone-300 px-7 py-4 flex flex-col gap-2">
                <p className="text-xl text-stone-400 tracking-[0.02em] leading-6">{note.title}</p>
                <div
                  className="text-base text-stone-900 tracking-[-0.01em] leading-5"
                  dangerouslySetInnerHTML={{ __html: note.content }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Images */}
        {images && images.length > 0 && (
          <div className="flex-1 flex flex-col gap-6 items-center w-full lg:w-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex flex-col gap-6 items-center overflow-hidden cursor-pointer group w-full ${image.wrapClassName || ""}`}
                onClick={() => onImageClick?.(image)}
              >
                <div
                  className={`relative ${image.imgClassName || "h-[300px] lg:h-[400px]"} w-full max-w-[608px] overflow-hidden`}
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt || title}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 608px"
                  />
                </div>
                {image.title && (
                  <p className="text-base text-black tracking-[-0.01em] leading-none text-center">
                    {image.title}
                  </p>
                )}
              </div>
            ))}
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
