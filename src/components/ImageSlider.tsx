import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ImageWithLoader from "./ImageWithLoader"
import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"

interface ImageSliderProps {
  images: Array<ImageInfo>
  setFullScreenImage: (imageData: ImageInfo | null) => void
  className?: string
}

const ImageSlider = ({ images, setFullScreenImage, className = "" }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tCommon = useTranslations("Common")

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const currentImage = images[currentIndex]

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative flex items-center">
        {/* Navigation arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700 p-2 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Image container with group hover */}
        <div
          className="relative group cursor-pointer"
          onClick={() =>
            setFullScreenImage({
              src: currentImage.src,
              original: currentImage.original,
              alt: currentImage.alt,
              title: currentImage.title,
              subtitle: currentImage.subtitle || "",
            })
          }
        >
          <ImageWithLoader
            src={currentImage.src}
            alt={currentImage.alt}
            className={`relative transition-all duration-300 ${currentImage.imgClassName ?? "w-full max-w-sm h-96 object-cover"}`}
            skeletonClassName="relative w-full max-w-sm h-96"
          />

          {/* Click indicator - only shows on image hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              {tCommon("click-zoom")}
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700 p-2 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Image caption */}
      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-bold tracking-wide">
        {currentImage.title}
      </span>

      {/* Image counter - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      )}

      {/* Dots indicator - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-stone-700" : "bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageSlider
