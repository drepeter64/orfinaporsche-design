"use client"

import { useEffect, useMemo, useState } from "react"
import { useTranslations } from "next-intl"

import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import ImageWithLoader from "@/components/ImageWithLoader"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"
import { ClientRoutes } from "@/shared/routes"
import { DialData, ImageInfo, ReferenceExploreCard } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"

interface DialPageProps {
  data: DialData
}

export function DialPage({ data }: DialPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")
  const placeholderImage = "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"

  const { ref: exploreRef, isVisible: exploreVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const { referenceId, referenceTitle } = data

  const exploreCards: ReferenceExploreCard[] = useMemo(() => {
    if (data.exploreCards?.length) {
      return data.exploreCards
        .filter((card) => card.route !== "dial")
        .map((card) => ({
          ...card,
          referenceId,
        }))
    }

    const firstImage = data.variations?.[0]?.images?.[0]?.src || placeholderImage
    const secondImage = data.variations?.[1]?.images?.[0]?.src || firstImage
    const rehautTitle = `${tCommon("rehaut")} Variations`
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
        title: rehautTitle,
        imageSrc: secondImage,
        imageAlt: tCommon("rehaut"),
        route: "rehaut",
        referenceId,
      },
    ]
  }, [data.exploreCards, data.variations, placeholderImage, referenceId, tCommon])

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
      <section className="w-full bg-stone-100 px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px]">
        <div className="flex flex-col gap-6 lg:gap-7 items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl font-light text-black leading-none w-full">
              {tCommon("reference")} {referenceTitle}
            </h1>
            <div className="w-full h-px bg-stone-300 mt-4" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-[32px] text-black/60 leading-10">
            {tCommon("dial-variations")}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 pb-20">
        <div className="space-y-6">
          {data.overview && (
            <p className="text-base sm:text-lg leading-relaxed text-stone-700 whitespace-pre-line">
              {data.overview}
            </p>
          )}
          {data.note && (
            <div className="border-l-stone-200 border-l-4 bg-stone-50 px-6 py-5 text-sm sm:text-base leading-relaxed text-stone-500 whitespace-pre-line">
              {data.note}
            </div>
          )}
        </div>
      </section>

      {/* Dial Variations */}
      <section className="px-4 sm:px-8 lg:px-24 pb-12">
        <div className="mx-auto space-y-16 sm:space-y-20">
          {data.variations?.map((variation, index) => {
            const isLast = index === (data.variations?.length || 0) - 1
            const displayNumber = String(index + 1).padStart(2, "0")
            const image = variation.images?.[0]

            return (
              <div
                key={`${variation.title}-${index}`}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl font-light text-stone-400">{displayNumber}</span>
                      <h2 className="text-2xl sm:text-3xl tracking-tight">{variation.title}</h2>
                    </div>

                    {variation.note && (
                      <div
                        className="bg-stone-50 border-l-4 border-stone-200 px-5 py-4 text-base sm:text-lg leading-relaxed text-stone-700"
                        dangerouslySetInnerHTML={{ __html: variation.note }}
                      />
                    )}

                    {variation.bulletSection?.text?.map((paragraph, textIndex) => (
                      <p
                        key={textIndex}
                        className="text-base sm:text-lg leading-relaxed text-stone-700"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}

                    {variation.bulletSection?.list?.length ? (
                      <ul className="space-y-3 text-stone-700">
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

                    {variation.blueNote && (
                      <div className="border-l-4 border-blue-500 bg-blue-50 px-4 py-3 text-sm sm:text-base text-blue-800 leading-relaxed">
                        <strong>{tCommon("note")}</strong> {variation.blueNote}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center lg:justify-end">
                    {image ? (
                      <button
                        type="button"
                        onClick={() => handleImageClick(image)}
                        className="group relative w-full max-w-[420px] overflow-hidden border border-stone-200 bg-white transition-transform duration-300 hover:-translate-y-1"
                      >
                        <ImageWithLoader
                          src={image.src || placeholderImage}
                          alt={image.alt || image.title || ""}
                          className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-102"
                          skeletonClassName="w-full h-[360px] sm:h-[420px] lg:h-[480px]"
                        />
                        {(image.title || image.caption) && (
                          <div className="px-3 pb-3 pt-2 text-center text-sm text-stone-600">
                            {image.title || image.caption}
                          </div>
                        )}
                      </button>
                    ) : (
                      <div className="w-full max-w-[420px] h-[320px] sm:h-[360px] lg:h-[420px] bg-stone-100 border border-dashed border-stone-300 flex items-center justify-center text-stone-400 text-sm">
                        {variation.title}
                      </div>
                    )}
                  </div>
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

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
