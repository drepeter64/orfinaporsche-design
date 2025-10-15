import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceImage } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ImageInfo } from "@/_pages/reference/ui"

export const FinishImageSection: React.FC<FinishImageSectionProps> = ({
  image,
  sectionTitle,
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="flex justify-center">
      <div
        className="relative group cursor-pointer max-w-xs"
        onClick={() =>
          setFullScreenImage({
            src: image.src,
            original: image.original,
            alt: image.alt,
            title: image.title,
            subtitle: sectionTitle,
          })
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
        <ImageWithLoader
          src={image.src}
          alt={image.alt}
          className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          skeletonClassName="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
            {tCommon("click-zoom")}
          </div>
        </div>
      </div>
    </div>
  )
}

interface FinishImageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: ReferenceImage
  sectionTitle: string
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
