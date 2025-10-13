"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar, Settings, Layers } from "lucide-react"
import ImageWithLoader from "@/components/ImageWithLoader"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import ReferenceVariantCard from "@/components/ReferenceVariantCard"
import { ReferenceData } from "@/shared/types/reference.interface"

interface ReferencePageProps {
  data: ReferenceData
}

export function ReferencePage({ data }: ReferencePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<{
    src: string
    alt: string
    title: string
    subtitle: string
  } | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullScreenImage(null)
      }
    }

    if (fullScreenImage) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [fullScreenImage])

  const variants = data.variants || data.generations || []

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">References</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Reference {data.referenceNumber}</span>
          </nav>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center mb-8">
                <h1 className="font-light text-6xl md:text-8xl text-gray-900 mb-6 tracking-tight">
                  Reference <span className="font-normal text-gray-700">{data.heroTitle}</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        {data.introduction && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Conditionally render grid or centered layout */}
              {data.introduction.image ? (
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Text Content */}
                  <div className="space-y-6">
                    {data.introduction.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg text-gray-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {data.introduction.differences && (
                      <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 ml-4">
                        {data.introduction.differences.map((diff, index) => (
                          <li key={index}>{diff}</li>
                        ))}
                      </ol>
                    )}
                  </div>

                  {/* Group Photo */}
                  <div className="relative">
                    <div
                      className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg"
                      onClick={() =>
                        setFullScreenImage({
                          src: data.introduction.image!.src,
                          alt: data.introduction.image!.alt,
                          title: data.introduction.image!.title,
                          subtitle: data.introduction.image!.subtitle,
                        })
                      }
                    >
                      <ImageWithLoader
                        src={data.introduction.image.src}
                        alt={data.introduction.image.alt}
                        className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px] rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                        {data.introduction.image.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {data.introduction.image.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Centered text without image (for 7176 style) */
                <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed text-center mb-10">
                  {data.introduction.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Variants/Generations Section */}
        {variants.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                  {data.variantsTitle}
                </h2>
                {data.variantsSubtitle && (
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.variantsSubtitle}</p>
                )}
              </div>

              <div className="space-y-24 sm:space-y-32 lg:space-y-40">
                {variants.map((variant, index) => (
                  <ReferenceVariantCard
                    key={variant.id}
                    index={index + 1}
                    title={variant.title}
                    imageSrc={variant.image}
                    imageAlt={variant.title}
                    subtitle={variant.subtitle}
                    imageCaption={variant.imageCaption}
                    specifications={[
                      {
                        label: "Production Years",
                        value: variant.years,
                        icon: Calendar,
                      },
                      ...(variant.case
                        ? [{ label: "Case", value: variant.case, icon: Settings }]
                        : []),
                      { label: "Finishes", value: variant.finishes, icon: Layers },
                      { label: "Caseback", value: variant.caseback, icon: Settings },
                      { label: "Rehaut", value: variant.rehaut, icon: Settings },
                      { label: "Dial", value: variant.dial, icon: Clock },
                    ]}
                    onImageClick={setFullScreenImage}
                  />
                ))}
              </div>

              {/* Note Section */}
              {data.variantsNote && (
                <div className="mt-16 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <h3 className="text-lg font-semibold text-black mb-4">
                      {data.variantsNote.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {data.variantsNote.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Explore Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Explore Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.exploreCards.map((card, index) => (
                <ExploreDetailsCard
                  key={index}
                  title={card.title}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  linkTo={card.linkTo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gray-900">
                <h3 className="text-2xl font-light text-white">{data.technicalSpecs.title}</h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {data.technicalSpecs.specifications.left.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-3 border-b border-gray-200"
                      >
                        <span className="font-medium text-gray-700">{spec.label}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {data.technicalSpecs.specifications.right.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-3 border-b border-gray-200"
                      >
                        <span className="font-medium text-gray-700">{spec.label}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to References
          </a>
        </div>
      </div>

      {/* Full Screen Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
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

            {/* Image */}
            <img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-light mb-1">{fullScreenImage.title}</h3>
              <p className="text-gray-300 text-sm">{fullScreenImage.subtitle}</p>
            </div>

            {/* Instructions */}
            <div className="mt-8 text-white text-sm opacity-75 text-center">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
