"use client"

import { useState } from "react"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
import { useTranslations } from "next-intl"
import SectionHeading from "@/components/SectionHeading"
import { CasebackData, ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import ImageSlider from "@/components/ImageSlider"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { ClientRoutes } from "@/shared/routes"
import SectionOverview from "@/components/SectionOverview"

interface CasebackPageProps {
  data: CasebackData
}

export function CasebackPage({ data }: CasebackPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")
  const { referenceTitle, referenceId } = data

  const breadcrumb = [
    {
      text: `${tCommon("reference")} ${referenceId}`,
      link: ClientRoutes.reference(referenceId as string),
    },
    {
      text: tCommon("caseback"),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <Breadcrumbs links={breadcrumb} />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              {tCommon("reference")}&nbsp;{referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              {tCommon("caseback")}
            </p>
          </div>

          {/* Overview */}
          {data.overview && (
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
              <SectionOverview text={data.overview} />
            </div>
          )}

          {data.variations &&
            data.variations.length == 1 &&
            data.variations.map((variation, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Text Content */}
                <div className="space-y-6">
                  {variation.title && (
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                      <p
                        dangerouslySetInnerHTML={{ __html: variation.title }}
                        className="text-lg text-gray-700 leading-relaxed"
                      ></p>
                    </div>
                  )}

                  {variation.bulletSection.list &&
                    variation.bulletSection.list.map((item, index) => (
                      <div
                        key={index}
                        className="space-y-4 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400"
                      >
                        <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                          {item.title}
                        </p>
                        {item.list &&
                          item.list.map((subitem, index) => (
                            <div key={index}>
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-black rounded-full mt-2 min-w-2 min-h-2"></div>
                                <div>
                                  <span
                                    className="text-sm font-semibold text-gray-900 mb-2"
                                    dangerouslySetInnerHTML={{ __html: subitem.title }}
                                  ></span>
                                  <span
                                    dangerouslySetInnerHTML={{ __html: subitem.text || "" }}
                                    className="text-sm text-gray-700"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}

                  {variation.note && (
                    <div className="mt-8 bg-blue-50 p-6 sm:p-8 rounded-lg border-l-4 border-blue-500">
                      <p
                        dangerouslySetInnerHTML={{ __html: variation.note }}
                        className="text-lg text-gray-700 leading-relaxed"
                      ></p>
                    </div>
                  )}
                </div>

                {/* Images Arranged Vertically */}
                <div className="space-y-12">
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center">
                      {variation.images && variation.images.length ? (
                        variation.images.length > 1 ? (
                          <div className="space-y-12">
                            {variation.images.map((item, index) => (
                              <FinishImageSection
                                key={index}
                                image={item}
                                setFullScreenImage={setFullScreenImage}
                              />
                            ))}
                          </div>
                        ) : (
                          <FinishImageSection
                            image={variation.images[0]}
                            setFullScreenImage={setFullScreenImage}
                            sectionTitle={variation.title}
                          />
                        )
                      ) : (
                        <PlaceholderImageSection title={variation.title} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Caseback Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {data.variations &&
              data.variations.length > 1 &&
              data.variations.map((variation, index) => (
                <div
                  key={index}
                  className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${index * 100 + 400}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className={`space-y-6${index % 2 !== 0 ? " lg:order-2" : ""}`}>
                      <SectionHeading
                        title={variation.title}
                        variant="numbered"
                        number={index + 1}
                      />

                      {variation.note && (
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                          <p
                            className="text-base sm:text-lg text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: variation.note || "" }}
                          ></p>
                        </div>
                      )}

                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-black">
                          {variation.bulletSection.title}
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                          {variation.bulletSection.list &&
                            variation.bulletSection.list.map((item, index) => (
                              <>
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm sm:text-base leading-relaxed">
                                    <strong
                                      dangerouslySetInnerHTML={{ __html: item.title }}
                                    ></strong>
                                    <span
                                      dangerouslySetInnerHTML={{ __html: item.text || "" }}
                                    ></span>
                                  </span>
                                </li>
                                {item.list &&
                                  item.list.map((subitem, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start space-x-3 ml-6"
                                    >
                                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                      <span className="text-sm sm:text-base leading-relaxed text-gray-600">
                                        <strong
                                          dangerouslySetInnerHTML={{ __html: subitem.title }}
                                        ></strong>
                                        <span
                                          dangerouslySetInnerHTML={{ __html: subitem.text || "" }}
                                        ></span>
                                      </span>
                                    </li>
                                  ))}
                              </>
                            ))}
                        </ul>

                        {variation.blueNote && (
                          <div className="mt-6 bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                              <strong>{tCommon("note")}</strong> {variation.blueNote}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      {variation.images && variation.images.length ? (
                        variation.images.length > 1 ? (
                          <div className="flex justify-center">
                            <ImageSlider
                              images={variation.images}
                              setFullScreenImage={setFullScreenImage}
                            />
                          </div>
                        ) : (
                          <FinishImageSection
                            image={variation.images[0]}
                            setFullScreenImage={setFullScreenImage}
                            sectionTitle={variation.title}
                          />
                        )
                      ) : (
                        <PlaceholderImageSection title={variation.title} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <BackNavigationSection
        route={ClientRoutes.reference(referenceId)}
        title={`${tCommon("back_to_refs")} ${referenceTitle}`}
      />

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
