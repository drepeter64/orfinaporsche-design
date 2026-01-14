"use client"

import { useState } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { StrapsBodySection } from "@/widgets/watch-components/straps/body"
import { HandsBodySection } from "@/widgets/watch-components/hands/body"
import { CrownsBodySection } from "@/widgets/watch-components/crowns/body"
import { MovemensBodySection } from "@/widgets/watch-components/movements/body"
import { WheelsBodySection } from "@/widgets/watch-components/date-wheels/body"
import { HeroSection } from "@/widgets/reference/hero"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"

interface ComponentsPage {
  data: ComponentsTypeData
}

export function ComponentsPage({ data }: ComponentsPage) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)

  // Create data object for HeroSection
  const heroData = {
    heroTitle: data.pageTitle,
    variantsSubtitle: data.pageSubTitle,
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <HeroSection
        data={heroData}
        showReferencePrefix={false}
        backgroundColor="bg-stone-100"
      />

      {/* Note Banner */}
      {data.note && (
        <AnimatedSection
          as="section"
          className="bg-stone-100 px-8 sm:px-6 lg:px-20 pb-8"
          animation="fade-in"
          delay={0}
        >
          <div className="max-w-[1800px] mx-auto">
            <AnimatedText delay={0.1}>
              <div className="bg-stone-50 border border-stone-300 px-6 py-4">
                <p className="text-stone-700 text-sm sm:text-base font-medium text-center tracking-wide">
                  {data.note}
                </p>
              </div>
            </AnimatedText>
          </div>
        </AnimatedSection>
      )}

      {/* Overview Section */}
      {data.overview && data.type !== "bracelets" && data.type !== "boxes" && (
        <AnimatedSection
          as="section"
          className="py-16 md:py-20 bg-white px-8 sm:px-6 lg:px-20"
          animation="fade-in"
          delay={0}
        >
          <div className="max-w-[1800px] mx-auto">
            <AnimatedText delay={0.1}>
              <p className="font-sans text-stone-600 leading-[1.85] text-base md:text-[1.0625rem] lg:text-lg tracking-wide text-center max-w-3xl mx-auto">
                {data.overview}
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>
      )}

      {/* Main Content */}
      {data.type !== "bracelets" && data.type !== "boxes" && (
        <section className="bg-white w-full px-8 sm:px-6 lg:px-20">
          <div className="max-w-[1800px] mx-auto py-12 lg:py-[60px]">
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {data.type === "straps" && (
                <StrapsBodySection
                  setFullScreenImage={setFullScreenImage}
                  data={data}
                />
              )}

              {data.type === "hands" && (
                <HandsBodySection
                  setFullScreenImage={setFullScreenImage}
                  data={data}
                />
              )}

              {data.type === "crowns" && (
                <CrownsBodySection
                  setFullScreenImage={setFullScreenImage}
                  data={data}
                />
              )}

              {data.type === "movements" && (
                <MovemensBodySection
                  setFullScreenImage={setFullScreenImage}
                  data={data}
                />
              )}

              {data.type === "wheels" && (
                <WheelsBodySection
                  setFullScreenImage={setFullScreenImage}
                  data={data}
                />
              )}
            </div>
          </div>
        </section>
      )}

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
