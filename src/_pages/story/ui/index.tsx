"use client"

import { useEffect, useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { story_page } from "@/shared/data"
import { useTranslations } from "next-intl"

export function StoryPage() {
  const [fullScreenImage, setFullScreenImage] = useState<IFullScreenImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const tCommon = useTranslations("Common")
  const { title, sub_title, description, gallery_title, gallery_sub_title, gallery_images } =
    story_page

  const openFullScreen = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
    setFullScreenImage(gallery_images[imageIndex])
  }

  const navigateImage = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % gallery_images.length
        : (currentImageIndex - 1 + gallery_images.length) % gallery_images.length

    setCurrentImageIndex(newIndex)
    setFullScreenImage(gallery_images[newIndex])
  }

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === "Escape") {
        setFullScreenImage(null)
      }
      if (event.key === "ArrowRight") {
        navigateImage("next")
      }
      if (event.key === "ArrowLeft") {
        navigateImage("prev")
      }
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-sans text-4xl md:text-5xl font-light text-black mb-8 uppercase tracking-wider">
              {title}
            </h1>
            <p className="font-sans text-xl text-gray-700 leading-relaxed">{sub_title}</p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="mb-16 font-sans text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-black mb-8 uppercase tracking-wider">
              {gallery_title}
            </h2>
            <p className="font-sans text-xl text-gray-700 leading-relaxed">{gallery_sub_title}</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery_images.map((image, index) => (
              <div
                key={index}
                className="group"
              >
                <div
                  className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  onClick={() => openFullScreen(index)}
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    skeletonClassName="w-full h-64 rounded-lg"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        {tCommon("click-zoom")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-4 px-2">
                  <h3 className="font-sans text-lg font-medium text-black mb-2">{image.title}</h3>
                  <p className="font-sans text-sm text-gray-700 leading-relaxed">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal with Slider */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-16 py-8">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-8 right-8 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg
                className="w-8 h-8"
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

            {/* Next Button */}
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg
                className="w-8 h-8"
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

            {/* Image Container */}
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
                <ImageWithLoader
                  src={fullScreenImage.original || fullScreenImage.src}
                  alt={fullScreenImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  skeletonClassName="w-96 h-96 rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center max-w-2xl">
                <h3 className="text-2xl font-semibold text-white mb-2">{fullScreenImage.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{fullScreenImage.caption}</p>
                <div className="mt-4 text-sm text-gray-400">
                  {currentImageIndex + 1} of {gallery_images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
interface IFullScreenImage {
  src: string
  original: string
  alt: string
  title: string
  caption: string
}
