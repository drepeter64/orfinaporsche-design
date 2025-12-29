"use client"

import { useEffect, useMemo, useState } from "react"
import { useTranslations } from "next-intl"

import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import ImageWithLoader from "@/components/ImageWithLoader"
import { cn } from "@/shared/lib/utils"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { ImageInfo, RehautData, ReferenceExploreCard, ReferenceData } from "@/shared/types"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

interface RehautPageProps {
  data: RehautData
  referenceData?: ReferenceData | null
}

export function RehautPage({ data, referenceData }: RehautPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  const { ref: exploreRef, isVisible: exploreVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const { referenceId } = data
  const subtitle = data.pageTitle || "Rehaut Variations"
  const placeholderImage = "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
  const totalVariations = data.variations?.length ?? 0
  // Use the introduction image (first image from reference page) as primary, then second generation image, or fallback to default
  const backImageSrc =
    referenceData?.introduction?.image?.src ||
    referenceData?.generations?.[1]?.image ||
    "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/preview-780x-7750-series-v4-black-round-top-case-pd-dial-1mile-rehaut.jpg"

  const exploreCards: ReferenceExploreCard[] = useMemo(() => {
    if (data.exploreCards?.length) {
      return data.exploreCards
        .filter((card) => card.route !== "rehaut")
        .map((card) => ({
          ...card,
          referenceId,
        }))
    }

    const firstImage = data.variations?.[0]?.images?.[0]?.src || placeholderImage
    const secondImage = data.variations?.[1]?.images?.[0]?.src || firstImage
    return [
      {
        title: tCommon("case-finishes"),
        imageSrc: firstImage,
        imageAlt: tCommon("case-finishes"),
        route: "case",
        referenceId,
      },
      {
        title: tCommon("caseback"),
        imageSrc: firstImage,
        imageAlt: tCommon("caseback"),
        route: "caseback",
        referenceId,
      },
      {
        title: tCommon("dial-variations"),
        imageSrc: secondImage,
        imageAlt: tCommon("dial-variations"),
        route: "dial",
        referenceId,
      },
    ]
  }, [data.variations, data.exploreCards, placeholderImage, referenceId, tCommon])

  const backExploreCard: ReferenceExploreCard = {
    title: `${tCommon("back_to_refs")} ${data.referenceTitle}`,
    imageSrc: backImageSrc,
    imageAlt: data.referenceTitle,
    route: "main",
    referenceId,
  }

  // Insert "Back to Reference" as the rightmost (last) item
  const exploreCardsWithBack = exploreCards.some((card) => card.route === "main")
    ? exploreCards
    : [...exploreCards, backExploreCard] // Back to Reference at the end

  useEffect(() => {
    setFullScreenImage(null)
  }, [referenceId])

  const handleImageClick = (image: ImageInfo) => {
    setFullScreenImage({
      ...image,
      src: image.src || placeholderImage,
      original: image.original || image.src || placeholderImage,
    })
  }

  return (
    <div className="min-h-screen bg-white text-black">
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
            {subtitle}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 pb-24">
        <div className="space-y-6">
          {data.overview && (
            <p className="text-base sm:text-lg leading-relaxed text-stone-700 whitespace-pre-line text-center max-w-5xl mx-auto">
              {data.overview}
            </p>
          )}
          {data.note && (
            <div className="border border-stone-200 bg-stone-50 p-5">
              <p className="text-base font-normal text-stone-400 uppercase tracking-wide mb-2">
                {tCommon("note")}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-stone-700 whitespace-pre-line">
                {data.note}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Variations */}
      <section className="px-4 sm:px-8 lg:px-24 pb-6">
        <div className="mx-auto space-y-16 sm:space-y-20">
          {data.variations?.map((variation, index) => {
            const isEven = index % 2 === 0
            const gridColumns = variation.images?.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            const isLast = index === totalVariations - 1

            return (
              <div
                key={`${variation.title}-${index}`}
                className="space-y-10 sm:space-y-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-start">
                  <div className={cn("flex flex-col gap-4", !isEven && "lg:order-2")}>
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl font-light text-stone-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl sm:text-3xl tracking-wide">{variation.title}</h2>
                    </div>

                    {variation.note && (
                      <div className="border border-stone-200 bg-stone-50 p-5">
                        <p
                          className="text-base text-stone-700 [&>strong]:font-semibold [&>b]:font-semibold"
                          dangerouslySetInnerHTML={{ __html: variation.note }}
                        />
                      </div>
                    )}

                    {variation.bulletSection?.title ||
                    variation.bulletSection?.text?.length ||
                    variation.bulletSection?.list?.length ? (
                      <div className="bg-white p-5 space-y-4">
                        {variation.bulletSection?.title && (
                          <h3 className="text-lg font-medium text-stone-900">
                            {variation.bulletSection.title}
                          </h3>
                        )}

                        {variation.bulletSection?.text?.map((paragraph, textIndex) => (
                          <p
                            key={textIndex}
                            className="text-base leading-relaxed text-stone-700"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}

                        {variation.bulletSection?.list?.length ? (
                          <ul className="space-y-2 text-stone-700">
                            {variation.bulletSection.list.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex gap-3"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 flex-shrink-0" />
                                <div className="space-y-1 text-sm sm:text-base leading-relaxed">
                                  <div>
                                    <strong>{item.title}</strong> {item.text}
                                  </div>
                                  {item.list?.length ? (
                                    <ul className="space-y-1 pl-4 text-stone-600">
                                      {item.list.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <strong>{subItem.title}</strong> {subItem.text}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  {variation.images?.length > 0 && (
                    <div
                      className={cn(
                        "grid grid-cols-1 gap-6 sm:grid-cols-2",
                        gridColumns,
                        !isEven && "lg:order-1",
                        variation.images.length === 1 &&
                          "sm:grid-cols-1 lg:grid-cols-1 justify-items-center",
                      )}
                    >
                      {variation.images.map((image, imgIndex) => {
                        const imageHeightClass =
                          image.imgClassName || "h-[260px] sm:h-[320px] lg:h-[360px]"

                        return (
                          <button
                            type="button"
                            key={`${image.src}-${imgIndex}`}
                            onClick={() => handleImageClick(image)}
                            className={cn(
                              "group relative overflow-hidden border border-stone-200 bg-white transition-transform duration-300 hover:-translate-y-1",
                              image.wrapClassName,
                            )}
                          >
                            <ImageWithLoader
                              src={image.src || placeholderImage}
                              alt={image.alt || image.title || ""}
                              className={cn(
                                "w-full object-cover transition-transform duration-500 group-hover:scale-102",
                                imageHeightClass,
                              )}
                              skeletonClassName={cn("w-full rounded-md", imageHeightClass)}
                            />
                            {(image.title || image.caption) && (
                              <div className="px-3 pb-3 pt-2 text-center text-sm text-stone-600 tracking-wide">
                                {image.title || image.caption}
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {!isLast && (
                  <div
                    className="h-px w-full bg-stone-200"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Explore Other Details */}
      <section
        ref={exploreRef}
        className={`w-full bg-white px-4 sm:px-6 lg:px-20 py-16 lg:py-[100px] ${getScrollAnimationClasses(exploreVisible, "duration-1000")}`}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
          <h2 className="text-2xl md:text-3xl lg:text-[44px] text-black text-center leading-[1.1] tracking-wide">
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

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
