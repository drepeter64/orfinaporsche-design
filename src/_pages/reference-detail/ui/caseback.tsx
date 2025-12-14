"use client"

import { useEffect, useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import { useTranslations } from "next-intl"
import { CasebackData, ImageInfo, ReferenceData } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"

interface CasebackPageProps {
  data: CasebackData
  referenceData?: ReferenceData | null
}

export function CasebackPage({ data, referenceData }: CasebackPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const { referenceTitle, referenceId, overview, variations } = data
  // Use the introduction image (first image from reference page) as primary, then second generation image, or fallback to default
  const backImageSrc =
    referenceData?.introduction?.image?.src ||
    referenceData?.generations?.[1]?.image ||
    "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/preview-780x-7750-series-v4-black-round-top-case-pd-dial-1mile-rehaut.jpg"
  const pageTitle = data.pageTitle || tCommon("caseback")

  const fallbackImage = variations?.[0]?.images?.[0]?.src || "/placeholder.svg"
  const exploreCards =
    data.exploreCards && data.exploreCards.length > 0
      ? data.exploreCards
      : [
          {
            title: "Case & Finishes",
            route: "case",
            imageSrc: fallbackImage,
            imageAlt: "Case & Finishes",
          },
          {
            title: "Rehaut Variations",
            route: "rehaut",
            imageSrc: fallbackImage,
            imageAlt: "Rehaut Variations",
          },
          {
            title: "Dial Variations",
            route: "dial",
            imageSrc: fallbackImage,
            imageAlt: "Dial Variations",
          },
        ]

  const backExploreCard = {
    title: `${tCommon("back_to_refs")} ${referenceTitle}`,
    route: "main",
    imageSrc: backImageSrc,
    imageAlt: referenceTitle,
  }

  // Insert "Back to Reference" as the rightmost (last) item
  const exploreCardsWithBack = exploreCards.some((card) => card.route === "main")
    ? exploreCards
    : [...exploreCards, backExploreCard] // Back to Reference at the end

  const handleImageClick = (image: ImageInfo) => {
    setFullScreenImage({
      src: image.src || "/placeholder.svg",
      original: image.original || image.src || "/placeholder.svg",
      alt: image.alt,
      title: image.title,
      subtitle: image.subtitle,
      caption: image.caption,
    })
  }

  const renderBulletList = (listItems?: (typeof variations)[number]["bulletSection"]["list"]) => {
    if (!listItems) return null

    return listItems.map((item, itemIndex) => (
      <li
        key={itemIndex}
        className="space-y-2"
      >
        <div className="flex gap-3 items-start">
          <span className="mt-3 block h-1 w-1 flex-shrink-0 rounded-full bg-stone-900" />
          <div className="space-y-2">
            <p
              className="text-base leading-relaxed text-stone-800"
              dangerouslySetInnerHTML={{
                __html: `<strong>${item.title}</strong> ${item.text || ""}`,
              }}
            />
            {item.list && item.list.length > 0 && (
              <ul className="space-y-2 pl-6">
                {item.list.map((subitem, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-2 block h-1 w-1 rounded-full bg-stone-400" />
                    <p
                      className="text-sm leading-relaxed text-stone-700"
                      dangerouslySetInnerHTML={{
                        __html: `<strong>${subitem.title}</strong> ${subitem.text || ""}`,
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </li>
    ))
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-stone-900">
      <section
        className={`w-full bg-stone-100 px-4 sm:px-6 lg:px-20 py-12 lg:py-[60px] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="mx-auto flex flex-col gap-6 lg:gap-7">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl font-light text-black leading-none w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              {tCommon("reference")} {referenceTitle}
            </h1>
            <div className="w-full h-px bg-stone-300" />
            <p className="mt-4 text-xl sm:text-2xl lg:text-[32px] text-black/60 leading-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              {pageTitle}
            </p>
          </div>
        </div>
      </section>

      {overview && (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-10">
          <p className="text-base lg:text-xl text-stone-600 leading-normal">{overview}</p>
        </section>
      )}

      {variations?.map((variation, index) => {
        return (
          <section
            key={index}
            className="w-full bg-white px-4 sm:px-6 lg:px-20 py-8 lg:py-12"
          >
            <div className="flex items-baseline gap-3 mb-12">
              <span className="text-2xl sm:text-3xl uppercase text-stone-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-stone-900">{variation.title}</h3>
            </div>
            <div className="mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-12 items-start pb-24 border-b border-stone-200">
              <div className="flex flex-col gap-6 lg:max-w-[720px] w-full">
                <div className="space-y-5">
                  {variation.note && (
                    <div className="border border-stone-200 bg-stone-50 p-5">
                      <div
                        className="text-base text-stone-700 [&>strong]:block [&>strong]:text-stone-300 [&>strong]:uppercase [&>strong]:tracking-[0.2em] [&>strong]:mb-2 [&>strong]:font-normal"
                        dangerouslySetInnerHTML={{ __html: variation.note }}
                      />
                    </div>
                  )}

                  <div className="bg-white p-5 space-y-4">
                    <p className="text-lg uppercase tracking-[0.2em] text-stone-400">
                      {variation.bulletSection.title?.trim() || "Details"}
                    </p>

                    {variation.bulletSection.text && variation.bulletSection.text.length > 0 && (
                      <div className="space-y-2">
                        {variation.bulletSection.text.map((itemText, textIndex) => (
                          <p
                            key={textIndex}
                            className="text-base text-stone-700"
                            dangerouslySetInnerHTML={{ __html: itemText }}
                          />
                        ))}
                      </div>
                    )}

                    <ul className="space-y-4">{renderBulletList(variation.bulletSection.list)}</ul>
                  </div>

                  {variation.blueNote && (
                    <div className="border-l-stone-300 border-l-4 bg-stone-50 px-5 py-5 text-base text-stone-700">
                      <span className="text-stone-400 text-base block mb-1 tracking-[0.1em]">
                        {tCommon("note") || "Note:"}
                      </span>
                      {variation.blueNote}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 lg:max-w-[460px] w-full lg:flex-shrink-0 mt-8 lg:mt-0">
                {variation.images && variation.images.length ? (
                  variation.images.map((img, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => handleImageClick(img)}
                      className="group w-full max-w-[460px] text-left"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden border border-stone-200 bg-white">
                        <ImageWithLoader
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt || variation.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 480px"
                        />
                      </div>
                      {(img.caption || img.subtitle || img.title) && (
                        <p className="mt-3 text-sm text-stone-600 text-center">
                          {img.caption || img.subtitle || img.title}
                        </p>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="w-full max-w-[460px] border border-dashed border-stone-300 bg-stone-50 text-stone-500 text-center py-10 px-6 text-sm">
                    {tCommon("image-coming-soon") || "Image coming soon"}
                  </div>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {exploreCards && exploreCards.length > 0 && (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-16 lg:py-[90px]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
            <h2 className="text-2xl md:text-3xl lg:text-[42px] text-black leading-[1.1] text-center">
              {tCommon("explore-details")}
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {exploreCardsWithBack.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[280px]"
                >
                  <ExploreDetailsCard
                    title={card.title}
                    referenceId={referenceId}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                    route={card.route}
                  />
                </div>
              ))}
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
