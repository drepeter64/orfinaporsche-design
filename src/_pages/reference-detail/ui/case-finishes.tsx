"use client"

import { useState } from "react"
import SectionHeading from "@/components/SectionHeading"
import { CaseFinishesData } from "@/shared/types/reference-detail.interface"
import { useTranslations } from "next-intl"
import { MeasurementsSection } from "@/widgets/case-finishes/measurements"
import { FinishItemSection } from "@/widgets/case-finishes/finish-item"
import ImageSlider from "@/components/ImageSlider"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import { RightImageSection } from "@/widgets/case-finishes/right-image"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { ClientRoutes } from "@/shared/routes"

interface CaseFinishesPageProps {
  data: CaseFinishesData
}

export function CaseFinishesPage({ data }: CaseFinishesPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")
  const breadcrumb = [
    {
      text: `${tCommon("reference")} ${data.referenceId}`,
      link: ClientRoutes.reference(data.referenceId as string),
    },
    {
      text: tCommon("case-finishes"),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs links={breadcrumb} />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              {tCommon("reference")}&nbsp;{data.referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              {tCommon("case-finishes")}
            </p>
          </div>

          {/* Main Info */}
          {data.info && (
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 mb-8">
                {data.info}
              </p>
            </div>
          )}

          {/* Measurements */}
          {data.measurements && (
            <div className="mb-8 sm:mb-12">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Measurements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
                  {data.measurements.map((measurement, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div className="font-bold text-black">{measurement.value}</div>
                      <div className="text-gray-600">{measurement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Description */}
          {data.descriptions && (
            <div className="mb-12 sm:mb-16">
              <div className="prose prose-gray max-w-none">
                {data.descriptions.map((desc, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 mb-8">
              {data.overview}
            </p>
            {data.variations && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {data.variations.map((variantion, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black"
                  >
                    <h3 className="text-[22px] font-semibold text-black mb-2">
                      {variantion.title}
                    </h3>
                    <p className="text-[16px] text-gray-600">{variantion.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Case Variations */}
          {data.variations && (
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {data.variations.map((variantion, index) => (
                <div
                  key={index}
                  className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${index * 100 + 300}`}
                >
                  <SectionHeading
                    title={variantion.description}
                    variant={data.variation_type}
                    number={index + 1}
                  />

                  {/* Main Description */}
                  {variantion.full_description && (
                    <div className="mb-12 sm:mb-16">
                      <div className="prose prose-gray max-w-none">
                        <p
                          dangerouslySetInnerHTML={{ __html: variantion.full_description }}
                          className="text-base sm:text-lg text-gray-700 leading-relaxed"
                        ></p>
                      </div>
                    </div>
                  )}

                  {variantion.finishes_title && (
                    <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24 bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
                        {variantion.finishes_title}
                      </p>
                    </div>
                  )}

                  {/* Finishes */}
                  {variantion.finishes && (
                    <div className="space-y-12">
                      {variantion.finishes.map((finish, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center"
                        >
                          <FinishItemSection data={finish} />
                          {finish.images && finish.images.length ? (
                            finish.images.length > 1 ? (
                              <div className="flex justify-center">
                                <ImageSlider
                                  images={finish.images}
                                  setFullScreenImage={setFullScreenImage}
                                />
                              </div>
                            ) : (
                              <FinishImageSection
                                image={finish.images[0]}
                                setFullScreenImage={setFullScreenImage}
                                sectionTitle={finish.title}
                              />
                            )
                          ) : (
                            <PlaceholderImageSection title={finish.title} />
                          )}
                        </div>
                      ))}

                      {/* Measurements */}
                      {variantion.measurements && <MeasurementsSection data={variantion} />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Sections */}
          {data.sections && (
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {data.sections.map((section) => (
                <div key={section.id}>
                  <div className="mb-8">
                    <SectionHeading
                      title={section.title}
                      variant="numbered"
                      number={section.id}
                    />
                  </div>

                  <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                      <div className="space-y-6 text-center lg:text-left">
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                            <strong>{tCommon("found-on")}</strong> {section.foundOn}
                          </p>
                          {section.note && (
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              <strong>{tCommon("note")}</strong> {section.note}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        {section.images && section.images.length ? (
                          section.images.length > 1 ? (
                            <div className="flex justify-center">
                              <ImageSlider
                                images={section.images}
                                setFullScreenImage={setFullScreenImage}
                              />
                            </div>
                          ) : (
                            <>
                              <FinishImageSection
                                image={section.images[0]}
                                setFullScreenImage={setFullScreenImage}
                                sectionTitle={section.title}
                              />

                              {section.images[0].caption && (
                                <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                                  {section.images[0].caption}
                                </span>
                              )}
                            </>
                          )
                        ) : (
                          <PlaceholderImageSection title={section.title} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* compact variations */}
          {data.mergedSection && (
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading
                title={data.mergedSection.title}
                variant="elegant"
                number={1}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Callouts on the left */}
                <div className="space-y-6">
                  {data.mergedSection.variations.map((variantion, index) => (
                    <div
                      key={index}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-black">
                          {variantion.title}
                        </h3>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {variantion.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photo on the right */}
                <RightImageSection
                  setFullScreenImage={setFullScreenImage}
                  image={data.mergedSection.image}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back Navigation */}
      <BackNavigationSection
        route={ClientRoutes.reference(data.referenceId)}
        title={`${tCommon("back_to_refs")}&nbsp;${data.referenceTitle}`}
      />

      {/* Full Screen Image Modal */}
      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
