"use client"

import { useState, useEffect } from "react"
import { ImageInfo, RehautData } from "@/shared/types"
import { useTranslations } from "next-intl"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { ClientRoutes } from "@/shared/routes"
import SectionHeading from "@/components/SectionHeading"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import SectionOverview from "@/components/SectionOverview"

interface RehautPageProps {
  data: RehautData
}

export function RehautPage({ data }: RehautPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  useEffect(() => {
    setIsVisible(true)
  }, [])
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
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <Breadcrumbs links={breadcrumb} />

      {/* Hero Section */}
      <section
        className={`py-12 sm:py-16 lg:py-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              {tCommon("reference")}&nbsp;{referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              {tCommon("rehaut")}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            {data.overview && <SectionOverview text={data.overview} />}
            {data.note && (
              <div className="mt-8 bg-blue-50 p-6 sm:p-8 rounded-lg border-l-4 border-blue-500">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{data.note}</p>
              </div>
            )}
          </div>

          {/* Dial Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {data.variations &&
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
                        {variation.bulletSection.text &&
                          variation.bulletSection.text.map((item, index) => (
                            <p
                              key={index}
                              className="text-base sm:text-lg text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item }}
                            ></p>
                          ))}
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
                                    <strong>{item.title}</strong> {item.text}
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
                                        <strong>{subitem.title}</strong> {subitem.text}
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

                    {variation.images.length > 0 && (
                      <div className="space-y-8">
                        <div
                          className={`grid grid-cols-1 sm:grid-cols-${variation.images.length} gap-6`}
                        >
                          {/* Four-Logo Dial Image */}
                          {variation.images.map((image, index) => (
                            <FinishImageSection
                              key={index}
                              image={image}
                              setFullScreenImage={setFullScreenImage}
                            />
                          ))}
                        </div>
                      </div>
                    )}
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
