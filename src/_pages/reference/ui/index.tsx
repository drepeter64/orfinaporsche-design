"use client"

import { useState } from "react"
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
import { ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"

interface ReferencePageProps {
  data: ReferenceData
}

export function ReferencePage({ data }: ReferencePageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  return (
    <div className="min-h-screen bg-background">
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
      <div className="py-8 bg-background border-t border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
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

      {/* Full Screen Image Modal */}
      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
