"use client"

import { useState, useEffect } from "react"
import { CaseFinishesData } from "@/shared/types/reference-detail.interface"
import { useTranslations } from "next-intl"
import { ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { ClientRoutes } from "@/shared/routes"
import { CaseCard } from "@/widgets/case-finishes/case-card"
import { CaseSection } from "@/widgets/case-finishes/case-section"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

interface CaseFinishesPageProps {
  data: CaseFinishesData
}

export function CaseFinishesPage({ data }: CaseFinishesPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const { ref: exploreRef, isVisible: exploreVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Get explore cards from data if available, otherwise use defaults
  const exploreCards = data.exploreCards || [
    {
      title: "Caseback",
      route: "caseback",
      imageSrc: `https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/${data.referenceId}/${data.referenceId}-caseback/preview-780x-${data.referenceId}-series-v4-black-flat-top-case-orfina-dial-1km-rehaut.jpg`,
      imageAlt: "Caseback",
    },
    {
      title: "Rehaut Variations",
      route: "rehaut",
      imageSrc: `https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/${data.referenceId}/${data.referenceId}-rehaut/preview-780x-${data.referenceId}-series-v4-black-flat-top-case-orfina-dial-1km-rehaut.jpg`,
      imageAlt: "Rehaut Variations",
    },
    {
      title: "Dial Variations",
      route: "dial",
      imageSrc: `https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/${data.referenceId}/${data.referenceId}-dial/preview-780x-${data.referenceId}-series-v4-black-flat-top-case-orfina-dial-1km-rehaut.jpg`,
      imageAlt: "Dial Variations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className={`w-full bg-stone-100 px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px] transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 lg:gap-7 items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl font-light text-black leading-none w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              {tCommon("reference")} {data.referenceTitle}
            </h1>
            <div className="w-full h-px bg-stone-300 mt-4" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-[32px] text-black/60 leading-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            {data.pageTitle || tCommon("case-finishes")}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      {data.variations && data.variations.length > 0 && (
        <section
          ref={overviewRef}
          className={`w-full bg-white px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px] ${getScrollAnimationClasses(overviewVisible, "duration-1000")}`}
        >
          <div className="flex flex-col gap-6 lg:gap-7 items-center">
            <div className="flex flex-col gap-6 lg:gap-7 items-start w-full">
              {/* Overview Text */}
              {data.overview && (
                <p className="text-base lg:text-xl text-stone-600 leading-normal text-center w-full">
                  {data.overview}
                </p>
              )}

              {/* Case Cards */}
              <div className="w-full flex flex-col sm:flex-row gap-4 lg:gap-7 items-stretch">
                {data.variations.map((variation, index) => {
                  // Combine subtitle into a single line: "a.k.a Mk. 3, or Revised by Orfina Swiss S.A"
                  const combinedSubtitleRaw = variation.title
                    ? `a.k.a ${variation.title}${variation.subtitle ? ", or " + variation.subtitle.replace(/^a\\.k\\.a\\s*/i, "") : ""}`
                    : variation.subtitle

                  // Ensure any lingering "a.k.a" after "or" is removed (e.g., "a.k.a Mk. 3, or a.k.a Revised...")
                  let combinedSubtitle = combinedSubtitleRaw?.replace(
                    /,\\s*or\\s+a\\.k\\.a\\s+/i,
                    ", or ",
                  )
                  // Also strip any additional "a.k.a" occurrences after the first one
                  combinedSubtitle = combinedSubtitle?.replace(/(?!^)\\s*a\\.k\\.a\\s+/gi, " ")

                  return (
                    <CaseCard
                      key={index}
                      title={variation.description}
                      subtitle={combinedSubtitle}
                    />
                  )
                })}
              </div>
            </div>

            {/* Info Text */}
            {data.info && (
              <p className="text-base lg:text-lg text-stone-500 leading-6 text-center max-w-4xl">
                {data.info}
              </p>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-stone-200 mt-6" />
          </div>
        </section>
      )}

      {/* Case Sections */}
      {data.variations &&
        data.variations.map((variation, index) => {
          // Build hero images from the finish images
          const heroImages: ImageInfo[] = []
          if (variation.finishes) {
            variation.finishes.forEach((finish) => {
              if (finish.images && finish.images.length > 0) {
                heroImages.push({
                  ...finish.images[0],
                  title: finish.title,
                })
              }
            })
          }

          // Format description with paragraphs (split only on double newlines)
          const formattedDescription = variation.full_description
            ? variation.full_description
                .split(/\n\n/)
                .filter(Boolean)
                .map((p) => `<p>${p.trim()}</p>`)
                .join("")
            : ""

          return (
            <CaseSection
              key={index}
              title={variation.description}
              subtitle={variation.title ? `a.k.a. ${variation.title}` : undefined}
              description={formattedDescription}
              heroImages={heroImages.length > 0 ? heroImages.slice(0, 2) : undefined}
              measurements={variation.measurements}
              finishesTitle={variation.finishes_title}
              finishes={variation.finishes?.map((finish) => ({
                ...finish,
                // Keep all finish images so the gallery renders every asset
                images: finish.images,
              }))}
              onImageClick={(image) =>
                setFullScreenImage({
                  src: image.src,
                  original: image.original || image.src,
                  alt: image.alt || "",
                  title: image.title,
                })
              }
            />
          )
        })}

      {/* Explore Other Details Section */}
      <section
        ref={exploreRef}
        className={`w-full bg-white px-4 sm:px-6 lg:px-20 py-16 lg:py-[100px] ${getScrollAnimationClasses(exploreVisible, "duration-1000")}`}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
          <h2 className="text-2xl md:text-3xl lg:text-[44px] text-black text-center leading-[1.1]">
            {tCommon("explore-details")}
          </h2>

          <div className="w-full flex flex-wrap gap-6 items-start justify-center">
            {exploreCards.map((card, index) => (
              <div
                key={index}
                className={`w-full sm:w-[280px] transform transition-all duration-700 ease-out ${
                  exploreVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: exploreVisible ? `${index * 100}ms` : "0ms" }}
              >
                <ExploreDetailsCard
                  title={card.title}
                  referenceId={data.referenceId}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  route={card.route}
                />
              </div>
            ))}
          </div>

          {/* Back to Reference Link */}
          <a
            href={ClientRoutes.reference(data.referenceId)}
            className="text-lg lg:text-xl text-black/60 hover:text-black transition-colors"
          >
            {tCommon("back_to_refs")} {data.referenceTitle}
          </a>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
