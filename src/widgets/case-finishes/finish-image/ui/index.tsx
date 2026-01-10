import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedText from "@/components/AnimatedText"

export const FinishImageSection: React.FC<FinishImageSectionProps> = ({
  image,
  images,
  sectionTitle = "",
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  // Support both single image and array
  const imageList = images ?? (image ? [image] : [])

  const renderImage = (img: ImageInfo) => {
    // Parse imgClassName for explicit dimensions
    const widthMatch = img.imgClassName?.match(/w-\[(\d+)px\]/)
    const heightMatch = img.imgClassName?.match(/h-\[(\d+)px\]/)
    const hasObjectCover = img.imgClassName?.includes("object-cover")

    // If we have explicit width AND height (square crop case), use inline styles
    if (widthMatch && heightMatch) {
      const width = parseInt(widthMatch[1])
      const height = parseInt(heightMatch[1])
      return (
        <div
          key={img.src}
          className={`relative inline-block group cursor-pointer ${img.wrapClassName ?? ""}`}
          onClick={() =>
            setFullScreenImage({
              src:
                img.src ||
                "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
              original:
                img.original ||
                "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
              alt: img.alt,
              title: img.title,
              subtitle: sectionTitle || img.subtitle,
            })
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              img.src || "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
            }
            alt={img.alt}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              objectFit: hasObjectCover ? "cover" : "contain",
            }}
            className="block transition-all duration-300 group-hover:scale-101"
          />
          {/* Click indicator */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
              {tCommon("click-zoom")}
            </div>
          </div>
        </div>
      )
    }

    // Check for other sizing patterns
    const hasWidthClass = img.imgClassName?.includes("w-[")
    const hasHeightClass = img.imgClassName?.includes("h-[")

    // Extract width class for wrapper when width-based
    const widthClassMatch = img.imgClassName?.match(/w-\[\d+px\]/)
    const wrapperClass = hasWidthClass ? widthClassMatch?.[0] || "" : ""

    // For width-based: wrapper gets width, img fills it
    // For height-based: img gets the full imgClassName directly
    const imgClass =
      hasHeightClass && !hasWidthClass
        ? `block object-contain transition-all duration-300 group-hover:scale-101 ${img.imgClassName}`
        : "block w-full h-auto object-contain transition-all duration-300 group-hover:scale-101"

    return (
      <div
        key={img.src}
        className={`relative inline-block group cursor-pointer ${wrapperClass} ${img.wrapClassName ?? ""}`}
        onClick={() =>
          setFullScreenImage({
            src:
              img.src || "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
            original:
              img.original ||
              "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png",
            alt: img.alt,
            title: img.title,
            subtitle: sectionTitle || img.subtitle,
          })
        }
      >
        {/* Using regular img tag to preserve natural aspect ratio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src || "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"}
          alt={img.alt}
          className={imgClass}
        />

        {/* Click indicator */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-stone-900 rounded-full px-4 py-2 text-sm font-medium">
            {tCommon("click-zoom")}
          </div>
        </div>
      </div>
    )
  }

  if (imageList.length === 0) return null

  if (imageList.length === 1) {
    const img = imageList[0]
    return (
      <div className="flex flex-col items-center justify-start">
        <AnimatedImage delay={0.1}>{renderImage(img)}</AnimatedImage>
        {img.subtitle && (
          <AnimatedText delay={0.2}>
            <span
              dangerouslySetInnerHTML={{ __html: img.subtitle }}
              className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium"
            ></span>
          </AnimatedText>
        )}
      </div>
    )
  }

  // Multiple images - gallery grid
  return (
    <div className="w-full flex justify-center">
      <div className="inline-flex flex-wrap gap-4 lg:gap-6 justify-center">
        {imageList.map((img, index) => (
          <AnimatedImage
            key={img.src}
            delay={0.1 + index * 0.1}
            className="flex flex-col items-center"
          >
            {renderImage(img)}
            {img.subtitle && (
              <span
                dangerouslySetInnerHTML={{ __html: img.subtitle }}
                className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium"
              ></span>
            )}
          </AnimatedImage>
        ))}
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
