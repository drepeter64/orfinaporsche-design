"use client"

import { useEffect, useState } from "react"
import { ReferenceData } from "@/shared/types/reference.interface"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"
import { VariantsSection } from "@/widgets/reference/variants"
import { BreadcrumbSection } from "@/widgets/reference/breadcrumbs"
import { HeroSection } from "@/widgets/reference/hero"
import { IntroductionSection } from "@/widgets/reference/introduction"
import { ExploreDetailsSection } from "@/widgets/reference/exprole-details/ui"
import { TechnicalSpecificationSection } from "@/widgets/reference/technical-specification"

interface ReferencePageProps {
  data: ReferenceData
}

export function ReferencePage({ data }: ReferencePageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)

  const tCommon = useTranslations("Common")

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

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <BreadcrumbSection data={data} />

      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <HeroSection data={data} />

        {/* Introduction Section */}
        {data.introduction && (
          <IntroductionSection
            data={data}
            setFullScreenImage={setFullScreenImage}
          />
        )}

        {/* Variants/Generations Section */}
        {data.generations && data.generations.length > 0 && (
          <VariantsSection
            data={data}
            setFullScreenImage={setFullScreenImage}
          />
        )}

        {/* Explore Details */}
        <ExploreDetailsSection data={data} />

        {/* Technical Specifications */}
        <TechnicalSpecificationSection data={data} />
      </div>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={ClientRoutes.home}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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
            {tCommon("back_to_home")}
          </Link>
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
              src={fullScreenImage.original}
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
            <div className="mt-8 text-white text-sm opacity-75 text-center">{tCommon("esc")}</div>
          </div>
        </div>
      )}
    </div>
  )
}
export interface ImageInfo {
  src: string
  original: string
  alt: string
  title: string
  subtitle: string
}
