import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"

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
        <img
          src={image.src}
          alt={image.alt}
          className={`relative transition-all duration-300 group-hover:scale-105 ${image.imgClassName ?? "w-full max-w-lg h-96 object-cover"}`}
        />
        {/* Click indicator */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
            {tCommon("click-zoom")}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-base sm:text-lg text-black font-semibold mb-1">{image.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed tracking-wide">{image.caption}</p>
      </div>
    </div>
  )
}

interface RightImageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: ImageInfo
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
