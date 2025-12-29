"use client"

import { useEffect, useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedText from "@/components/AnimatedText"
import AnimatedSection from "@/components/AnimatedSection"
import { story_page } from "@/shared/data"
import { useTranslations } from "next-intl"
import { HeroSection } from "@/widgets/reference/hero"

export function StoryPage() {
  const [fullScreenImage, setFullScreenImage] = useState<IFullScreenImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const tCommon = useTranslations("Common")
  const { heroTitle, sections, gallery_title, gallery_sub_title, gallery_images } = story_page

  // Create data object for HeroSection
  const data = {
    heroTitle,
  }

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
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <HeroSection
        data={data}
        showReferencePrefix={false}
        backgroundColor="bg-stone-100"
      />

      {/* Story Content */}
      <AnimatedSection
        as="section"
        className="py-16 md:py-24 bg-white"
        animation="fade-in"
        delay={0}
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {sections?.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="mb-20 last:mb-0"
            >
              {/* Section Title */}
              <AnimatedText delay={0.1 + sectionIndex * 0.1}>
                <h2
                  className="font-sans text-2xl md:text-3xl lg:text-4xl text-black mb-10 text-center leading-tight tracking-wide"
                  dangerouslySetInnerHTML={{ __html: section.title }}
                />
              </AnimatedText>

              {/* Section Paragraphs */}
              <div className="space-y-7">
                {section.paragraphs.map((paragraph, paraIndex) => (
                  <AnimatedText
                    key={paraIndex}
                    delay={0.15 + sectionIndex * 0.1 + paraIndex * 0.05}
                  >
                    <p
                      className="font-sans text-stone-700 leading-[1.85] text-lg md:text-xl indent-8"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  </AnimatedText>
                ))}
              </div>

              {/* Divider between sections */}
              {sectionIndex < sections.length - 1 && (
                <div className="h-px bg-stone-200 w-full mt-20" />
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection
        as="section"
        className="py-20 bg-stone-50"
        animation="fade-in"
        delay={0}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="font-sans text-3xl md:text-4xl font-light text-black mb-4 uppercase tracking-wider">
                {gallery_title}
              </h2>
            </AnimatedText>
            <div className="border-t border-gray-200 w-full mt-8 mb-8" />
            <AnimatedText delay={0.2}>
              <p className="font-sans text-xl text-gray-700 leading-relaxed">{gallery_sub_title}</p>
            </AnimatedText>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery_images.map((image, index) => (
              <AnimatedImage
                key={index}
                delay={0.1 + (index % 4) * 0.1}
              >
                <div className="group">
                  <div
                    className="relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    onClick={() => openFullScreen(index)}
                  >
                    <ImageWithLoader
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 border border-stone-200"
                      skeletonClassName="w-full h-64"
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
                  <div className="mt-2 px-2">
                    <p className="font-sans text-sm text-stone-600 tracking-wide">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </AnimatedImage>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Full Screen Modal with Slider */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-16 py-8">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-8 right-8 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
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
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
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
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
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
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  skeletonClassName="w-96 h-96"
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center max-w-2xl">
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
