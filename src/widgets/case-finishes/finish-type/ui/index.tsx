"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"

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

  return (
    <div
      className={`flex flex-col gap-6 ${className || ""}`}
      {...props}
    >
      {/* Title and Color Indicator */}
      <div className="flex items-start gap-4">
        {colorClass && (
          <div
            className={`w-8 h-8 mt-1 flex-shrink-0 rounded-full flex items-center justify-center ${colorClass}`}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-medium text-black mb-2">{title}</h3>
          {productionYears && (
            <p className="text-base lg:text-lg text-stone-600">
              <strong>{tCommon("production-year")}:</strong> {productionYears}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <div
          className="text-base lg:text-lg text-stone-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Note */}
      {note && (
        <div className="bg-stone-50 border-l-4 border-stone-400 p-4 rounded">
          <h4 className="text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide">
            {note.title}
          </h4>
          <p className="text-sm text-stone-700 leading-relaxed">{note.content}</p>
        </div>
      )}

      {/* Images */}
      {images && images.length > 0 && (
        <div className="flex flex-col gap-4">
          {images.length === 1 ? (
            <div
              className="relative group cursor-pointer"
              onClick={() => onImageClick && onImageClick(images[0])}
            >
              <ImageWithLoader
                src={images[0].src}
                alt={images[0].alt || title}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                skeletonClassName="w-full h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
                  {tCommon("click-zoom")}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => onImageClick && onImageClick(image)}
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt || `${title} - Image ${index + 1}`}
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    skeletonClassName="w-full h-64 sm:h-80"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
                      {tCommon("click-zoom")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
