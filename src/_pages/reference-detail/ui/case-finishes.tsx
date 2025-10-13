"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ImageWithLoader from "@/components/ImageWithLoader"
import SectionHeading from "@/components/SectionHeading"
import { CaseFinishesData } from "@/shared/types/reference-detail.interface"

interface CaseFinishesPageProps {
  data: CaseFinishesData
}

export function CaseFinishesPage({ data }: CaseFinishesPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<{
    src: string
    alt: string
    title: string
    subtitle: string
  } | null>(null)

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

  const FinishImage = ({
    image,
    sectionTitle,
  }: {
    image: { src: string; alt: string; title: string }
    sectionTitle: string
  }) => (
    <div className="flex justify-center">
      <div
        className="relative group cursor-pointer max-w-xs"
        onClick={() =>
          setFullScreenImage({
            src: image.src,
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
            Click to zoom
          </div>
        </div>
      </div>
    </div>
  )

  const PlaceholderImage = ({ title }: { title: string }) => (
    <div className="flex justify-center">
      <div className="max-w-xs w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-500 p-6">
              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
              <div className="text-xs">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href={`/references/${data.referenceId}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference {data.referenceTitle}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">{data.pageTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Reference {data.referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              {data.pageTitle}
            </p>
          </div>

          {/* Measurements */}
          {data.measurements && (
            <div className="mb-8 sm:mb-12">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Measurements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
                  {data.measurements.map((measurement, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div className="font-bold text-black">{measurement.value}</div>
                      <div className="text-gray-600">{measurement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Description */}
          {data.descriptions && (
            <div className="mb-12 sm:mb-16">
              <div className="prose prose-gray max-w-none">
                {data.descriptions.map((desc, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Case Finishes */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {data.sections.map((section) => (
              <div key={section.id}>
                <div className="mb-8">
                  <SectionHeading
                    title={section.title}
                    variant="numbered"
                    number={section.id}
                  />
                </div>

                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                    <div className="space-y-6 text-center lg:text-left">
                      <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                          <strong>Found On:</strong> {section.foundOn}
                        </p>
                        {section.note && (
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            <strong>Note:</strong> {section.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      {section.image && !section.isPlaceholder ? (
                        <>
                          <FinishImage
                            image={section.image}
                            sectionTitle={section.title}
                          />
                          {section.image.caption && (
                            <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                              {section.image.caption}
                            </span>
                          )}
                        </>
                      ) : (
                        <PlaceholderImage title={section.title} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/references/${data.referenceId}`}
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
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
            Back to Reference {data.referenceTitle}
          </Link>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
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

            <img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-light mb-1">{fullScreenImage.title}</h3>
              <p className="text-gray-300 text-sm">{fullScreenImage.subtitle}</p>
            </div>

            <div className="mt-8 text-white text-sm opacity-75 text-center">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
