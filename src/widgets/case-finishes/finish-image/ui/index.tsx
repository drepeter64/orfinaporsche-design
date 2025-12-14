import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"

export const FinishImageSection: React.FC<FinishImageSectionProps> = ({
  image,
  images,
  sectionTitle = "",
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  // Support both single image and array
  const imageList = images ?? (image ? [image] : [])

  const renderImage = (img: ImageInfo) => (
    <div
      key={img.src}
      className={`relative group cursor-pointer ${img.wrapClassName ?? "max-w-lg"}`}
      onClick={() =>
        setFullScreenImage({
          src: img.src || "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
          original:
            img.original ||
            "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
          alt: img.alt,
          title: img.title,
          subtitle: sectionTitle || img.subtitle,
        })
      }
    >
      <ImageWithLoader
        src={img.src || "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"}
        alt={img.alt}
        className={`relative object-cover transition-all duration-300 group-hover:scale-101 ${img.imgClassName ?? "w-full h-64 sm:h-80 lg:h-96"}`}
        skeletonClassName="relative w-full h-64 sm:h-80 lg:h-96"
      />

      {/* Click indicator */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
          {tCommon("click-zoom")}
        </div>
      </div>
    </div>
  )

  if (imageList.length === 0) return null

  if (imageList.length === 1) {
    const img = imageList[0]
    return (
      <div className="flex flex-col items-center justify-start">
        {renderImage(img)}
        {img.subtitle && (
          <span
            dangerouslySetInnerHTML={{ __html: img.subtitle }}
            className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium"
          ></span>
        )}
      </div>
    )
  }

  // Multiple images - gallery grid
  return (
    <div className="flex flex-col items-center justify-start gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {imageList.map((img) => renderImage(img))}
      </div>
    </div>
  )
}

interface FinishImageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image?: ImageInfo
  images?: ImageInfo[]
  sectionTitle?: string
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
