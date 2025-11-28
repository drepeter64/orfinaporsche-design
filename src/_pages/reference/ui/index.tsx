"use client"

import { useState } from "react"
import { ReferenceData } from "@/shared/types/reference.interface"
import { VariantsSection } from "@/widgets/reference/variants"
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

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="flex flex-col items-center w-full">
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

        {/* Technical Specifications */}
        <TechnicalSpecificationSection data={data} />

        {/* Explore Details */}
        <ExploreDetailsSection data={data} />
      </div>

      {/* Full Screen Image Modal */}
      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
