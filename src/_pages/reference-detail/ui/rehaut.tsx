"use client"

import { useState } from "react"
import { ImageInfo, RehautData } from "@/shared/types"
import { useTranslations } from "next-intl"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { ClientRoutes } from "@/shared/routes"

interface RehautPageProps {
  data: RehautData
}

export function RehautPage({ data }: RehautPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")
  const { referenceId, referenceTitle } = data
  const breadcrumb = [
    {
      text: `${tCommon("reference")} ${referenceId}`,
      link: ClientRoutes.reference(referenceId as string),
    },
    {
      text: tCommon("rehaut"),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs links={breadcrumb} />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Reference {referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              Rehaut Variations
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Rehaut variations for Reference {referenceTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <BackNavigationSection
        route={ClientRoutes.reference(referenceId)}
        title={`${tCommon("back_to_refs")}&nbsp;${referenceTitle}`}
      />

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
