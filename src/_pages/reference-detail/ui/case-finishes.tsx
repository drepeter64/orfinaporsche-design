"use client"

import { useState } from "react"
import { CaseFinishesData } from "@/shared/types/reference-detail.interface"
import { useTranslations } from "next-intl"
import { ImageInfo, ReferenceData } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { CaseCard } from "@/widgets/case-finishes/case-card"
import { CaseSection } from "@/widgets/case-finishes/case-section"
import { FinishType } from "@/widgets/case-finishes/finish-type"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import ImageWithLoader from "@/components/ImageWithLoader"
import { getScrollAnimationClasses, useScrollAnimation } from "@/shared/hooks"

interface CaseFinishesPageProps {
  data: CaseFinishesData
  referenceData?: ReferenceData | null
}

export function CaseFinishesPage({ data, referenceData }: CaseFinishesPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: exploreRef, isVisible: exploreVisible } = useScrollAnimation<HTMLDivElement>()

  // Use the introduction image (first image from reference page) as primary, then second generation image, or fallback to default
  const backImageSrc =
    referenceData?.introduction?.image?.src ||
    referenceData?.generations?.[1]?.image ||
    "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/preview-780x-7750-series-v4-black-round-top-case-pd-dial-1mile-rehaut.jpg"

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

  const backExploreCard = {
    title: `${tCommon("back_to_refs")} ${data.referenceTitle}`,
    route: "main",
    imageSrc: backImageSrc,
    imageAlt: data.referenceTitle,
  }

  // Insert "Back to Reference" as the rightmost (last) item
  const exploreCardsWithBack = exploreCards.some((card) => card.route === "main")
    ? exploreCards
    : [...exploreCards, backExploreCard] // Back to Reference at the end

  return (
    <div className="min-h-screen bg-background bg-white">
      {/* Hero Section */}
      <section
        className={
          "w-full bg-stone-100 px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px] transform transition-all duration-1000"
        }
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
      {((data.variations && data.variations.length > 0) ||
        (data.sections && data.sections.length > 0) ||
        data.mergedSection ||
        (data.info && !data.mergedSection)) && (
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

              {/* Case Cards - for variations */}
              {data.variations && data.variations.length > 0 && (
                <div className="w-full flex flex-wrap justify-center gap-4">
                  {data.variations.map((variation, index) => {
                    // Combine subtitle into a single line: "a.k.a Mk. 3 - Revised by Orfina Swiss S.A"
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
                        className="flex-1"
                      />
                    )
                  })}
                </div>
              )}

              {/* Case Cards - for sections */}
              {!data.variations && data.sections && data.sections.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4">
                  {data.sections.map((section, index) => (
                    <CaseCard
                      key={section.id || index}
                      title={section.title}
                      subtitle={section.foundOn ? `Found on: ${section.foundOn}` : undefined}
                      className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                    />
                  ))}
                </div>
              )}
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

      {/* Sections (fallback when variations is not available) */}
      {!data.variations && data.sections && data.sections.length > 0 && (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
            {data.sections.map((section, index) => {
              // Format description with paragraphs if it exists
              const formattedDescription = section.description
                ? section.description
                    .split(/\n\n/)
                    .filter(Boolean)
                    .map((p) => `<p>${p.trim()}</p>`)
                    .join("")
                : undefined

              // Convert note to FinishType note format if it exists
              const finishNote = section.note
                ? {
                    title: "NOTE",
                    content: section.note,
                  }
                : undefined

              return (
                <div
                  key={section.id || index}
                  className="flex flex-col gap-6"
                >
                  {/* Found On Header */}
                  {section.foundOn && (
                    <div className="flex flex-col gap-2">
                      <p className="text-lg lg:text-xl text-stone-500">
                        Found on: {section.foundOn}
                      </p>
                    </div>
                  )}

                  {/* FinishType Component - mirrors 7750 design */}
                  <FinishType
                    title={section.title}
                    productionYears={section.year}
                    description={formattedDescription}
                    colorClass={section.color || "bg-black"}
                    images={section.images}
                    note={finishNote}
                    onImageClick={(image: ImageInfo) =>
                      setFullScreenImage({
                        src: image.src,
                        original: image.original || image.src,
                        alt: image.alt || "",
                        title: image.title,
                      })
                    }
                  />

                  {index < data.sections.length - 1 && (
                    <div className="w-full h-px bg-stone-200 mt-6" />
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Merged Section (for 7177 style layout) */}
      {data.mergedSection && (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              {/* Merged Section Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-black text-center leading-tight">
                {data.mergedSection.title}
              </h2>

              {/* Merged Section Image */}
              {data.mergedSection.image && (
                <div className="w-full flex justify-center">
                  <div
                    className="relative w-full max-w-[1200px] h-auto cursor-pointer group"
                    onClick={() =>
                      setFullScreenImage({
                        src: data.mergedSection!.image.src,
                        original:
                          data.mergedSection!.image.original || data.mergedSection!.image.src,
                        alt: data.mergedSection!.image.alt || data.mergedSection!.title,
                        title: data.mergedSection!.image.title,
                      })
                    }
                  >
                    <ImageWithLoader
                      src={data.mergedSection.image.src}
                      alt={data.mergedSection.image.alt || data.mergedSection.title}
                      className={`object-contain object-center transition-transform duration-500 group-hover:scale-102 ${data.mergedSection.image.imgClassName || ""}`}
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                </div>
              )}

              {/* Merged Section Caption */}
              {data.mergedSection.image?.caption && (
                <p className="text-base lg:text-lg text-stone-600 text-center">
                  {data.mergedSection.image.caption}
                </p>
              )}

              {/* Merged Section Variations List */}
              {data.mergedSection.variations && data.mergedSection.variations.length > 0 && (
                <div className="w-full flex flex-col gap-4 mt-8">
                  {data.mergedSection.variations.map((variation, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center border-b border-stone-200 pb-4 last:border-b-0"
                    >
                      <h3 className="text-lg lg:text-xl text-black font-medium min-w-[200px]">
                        {variation.title}
                      </h3>
                      <p className="text-base lg:text-lg text-stone-600 flex-1">
                        {variation.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Finishes Gallery (for 7177 style) */}
      {data.finishes && data.finishes.length > 0 && (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black text-center leading-tight">
              Finish Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.finishes.map((finish, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-2-1 cursor-pointer group overflow-hidden"
                  onClick={() =>
                    setFullScreenImage({
                      src: finish.src,
                      original: finish.original || finish.src,
                      alt: finish.alt || finish.title || `Finish ${index + 1}`,
                      title: finish.title,
                    })
                  }
                >
                  <ImageWithLoader
                    src={finish.src}
                    alt={finish.alt || finish.title || `Finish ${index + 1}`}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {finish.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-stone-900/70 text-white p-3 text-sm lg:text-base">
                      {finish.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Details Section */}
      <section
        ref={exploreRef}
        className={`w-full bg-white px-4 sm:px-6 lg:px-20 py-16 lg:py-[100px] ${getScrollAnimationClasses(exploreVisible, "duration-1000")}`}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
          <h2 className="text-2xl md:text-3xl lg:text-[44px] text-black text-center leading-[1.1]">
            {tCommon("explore-details")}
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-start">
            {exploreCardsWithBack.map((card, index) => (
              <div
                key={index}
                className={`w-full max-w-[280px] transform transition-all duration-700 ease-out ${
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
