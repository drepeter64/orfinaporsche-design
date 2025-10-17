import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo } from "@/_pages/reference/ui"

export const RightImageSection: React.FC<RightImageSectionProps> = ({
  image,
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative group cursor-pointer"
        onClick={() => setFullScreenImage(image)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
        <img
          src={image.src}
          alt={image.alt}
          className="relative w-full max-w-lg h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
        />
        {/* Click indicator */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
            {tCommon("click-zoom")}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-base sm:text-lg text-black font-semibold mb-1">{image.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{image.caption}</p>
      </div>
    </div>
  )
}

interface RightImageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: ImageInfo
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
