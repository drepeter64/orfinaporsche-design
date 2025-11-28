"use client"

import { useState, useEffect } from "react"
import { DialTypeData, ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { useTranslations } from "next-intl"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { ClientRoutes } from "@/shared/routes"
import SectionHeading from "@/components/SectionHeading"
import ImageWithLoader from "@/components/ImageWithLoader"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import ImageSlider from "@/components/ImageSlider"
import SectionOverview from "@/components/SectionOverview"

interface DialTypePageProps {
  data: DialTypeData
}

export function DialTypePage({ data }: DialTypePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const { referenceId, referenceTitle, dialTitle, variations } = data

  const breadcrumb = [
    {
      text: `${tCommon("reference")} ${referenceId}`,
      link: ClientRoutes.reference(referenceId),
    },
    {
      text: tCommon("dial"),
      link: ClientRoutes.reference_dial(referenceId),
    },
    {
      text: dialTitle,
    },
  ]

  return (
    <div className="min-h-[calc(100vh-97px)] bg-background flex flex-col">
      {/* Breadcrumb */}
      <Breadcrumbs links={breadcrumb} />

      {/* Hero Section */}
      <section
        className={`py-12 sm:py-16 lg:py-20 flex-1 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              {tCommon("reference")}&nbsp;{referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">{dialTitle}</p>
          </div>

          {/* Overview */}
          {data.overview && (
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
              <SectionOverview text={data.overview} />
            </div>
          )}

          {/* Poster Photo */}
          {data.poster && data.poster.length > 0 && (
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 mb-16 sm:mb-20 lg:mb-24">
              <div className={`grid grid-cols-1 sm:grid-cols-${data.poster.length} gap-6`}>
                {data.poster.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: image.src,
                          original: image.original,
                          alt: image.alt,
                          title: image.title,
                          subtitle: image.subtitle,
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src={image.src}
                        alt={image.alt}
                        className={`relative object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${image.imgClassName ?? "w-full h-96 sm:h-[450px] lg:h-[500px] "}`}
                        skeletonClassName="w-full h-96 sm:h-[450px] lg:h-[500px] rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          {tCommon("click-zoom")}
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      {image.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* The Baseline Configuration */}
            {variations &&
              variations.map((variation, index) => (
                <div
                  key={index}
                  className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${index * 100 + 300}`}
                >
                  {(variation.image_type === "row" || variation.image_type === "right") && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                      <div className="space-y-6">
                        <div className="space-y-5">
                          <SectionHeading
                            title={variation.title}
                            variant="elegant-dark"
                          />

                          {variation.bulletSection && variation.bulletSection.title && (
                            <span className="text-sm sm:text-lg leading-relaxed">
                              {variation.bulletSection.title}
                            </span>
                          )}

                          {variation.bulletSection && variation.bulletSection.text && (
                            <ul className="space-y-1">
                              {variation.bulletSection.text.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-6 ml-5"
                                >
                                  <span className="text-sm sm:text-lg leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {variation.bulletSection && variation.bulletSection.list && (
                            <ul className="space-y-1">
                              {variation.bulletSection.list.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm sm:text-lg leading-relaxed">
                                    {item.title && <strong>{item.title}</strong>}
                                    {item.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Images Side by Side */}
                      {variation.image_type === "row" && variation.images.length > 0 && (
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

                      {/* Group Image on Right */}
                      {variation.image_type === "right" && variation.images.length > 0 && (
                        <div className="flex justify-center">
                          {variation.images.map((image, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center"
                            >
                              <div
                                className="relative group cursor-pointer"
                                onClick={() =>
                                  setFullScreenImage({
                                    src: image.src,
                                    original: image.original,
                                    alt: image.alt,
                                    title: image.title,
                                    subtitle: image.subtitle,
                                  })
                                }
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                                <ImageWithLoader
                                  src={image.src}
                                  alt={image.alt}
                                  className="relative w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                                  skeletonClassName="w-full h-80 rounded-lg"
                                />
                                {/* Click indicator */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                                  <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                    {tCommon("click-zoom")}
                                  </div>
                                </div>
                              </div>
                              <span
                                dangerouslySetInnerHTML={{ __html: image.subtitle }}
                                className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium"
                              ></span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Individual Finish Examples Grid */}
                    </div>
                  )}

                  {variation.image_type === "none" && (
                    <div className="space-y-6">
                      <SectionHeading
                        title={variation.title}
                        variant="elegant-dark"
                      />

                      {variation.bulletSection && variation.bulletSection.title && (
                        <span className="text-sm sm:text-lg leading-relaxed">
                          {variation.bulletSection.title}
                        </span>
                      )}

                      {variation.bulletSection && variation.bulletSection.text && (
                        <ul className="space-y-1">
                          {variation.bulletSection.text.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-6 ml-5"
                            >
                              <span className="text-sm sm:text-lg leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {variation.bulletSection && variation.bulletSection.list && (
                        <ul className="space-y-1">
                          {variation.bulletSection.list.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm sm:text-lg leading-relaxed">
                                {item.title && <strong>{item.title}</strong>}
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {variation.image_type === "three-row" && variation.images.length > 0 && (
                    <>
                      <div className="space-y-6">
                        <SectionHeading
                          title={variation.title}
                          variant="elegant-dark"
                        />
                        {variation.bulletSection && variation.bulletSection.text && (
                          <ul className="space-y-1">
                            {variation.bulletSection.text.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-6 ml-5"
                              >
                                <span className="text-sm sm:text-lg leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {variation.bulletSection && variation.bulletSection.list && (
                          <ul className="space-y-1">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-lg leading-relaxed">
                                  {item.title && <strong>{item.title}</strong>}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {variation.images.map((image, index) => (
                            <FinishImageSection
                              key={index}
                              image={image}
                              setFullScreenImage={setFullScreenImage}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {variation.image_type === "two-row" && variation.images.length > 0 && (
                    <>
                      <div className="space-y-6">
                        <SectionHeading
                          title={variation.title}
                          variant="elegant-dark"
                        />
                        {variation.bulletSection && variation.bulletSection.list && (
                          <ul className="space-y-1">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-lg leading-relaxed">
                                  {item.title && <strong>{item.title}</strong>}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div
                          className={`grid grid-cols-1 md:grid-cols-${variation.images.length} gap-8`}
                        >
                          {variation.images.map((image, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center"
                            >
                              <div
                                className="relative group cursor-pointer"
                                onClick={() =>
                                  setFullScreenImage({
                                    src: image.src,
                                    original: image.original,
                                    alt: image.alt,
                                    title: image.title,
                                    subtitle: image.subtitle,
                                  })
                                }
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                                <ImageWithLoader
                                  src={image.src}
                                  alt={image.alt}
                                  className={`relative object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${image.imgClassName ?? "w-full h-64 sm:h-80 lg:h-96"}`}
                                  skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                                  <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                    {tCommon("click-zoom")}
                                  </div>
                                </div>
                              </div>
                              <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                                {image.subtitle}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {variation.image_type === "carousel-row" && variation.images.length > 0 && (
                    <>
                      <div className="space-y-6">
                        <SectionHeading
                          title={variation.title}
                          variant="elegant-dark"
                        />
                        {variation.bulletSection && variation.bulletSection.list && (
                          <ul className="space-y-1">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-lg leading-relaxed">
                                  {item.title && <strong>{item.title}</strong>}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                          <div className="flex flex-col items-center">
                            <ImageSlider
                              images={variation.images}
                              setFullScreenImage={setFullScreenImage}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {variation.image_type === "finish" && variation.images.length > 0 && (
                    <>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                          <div className="space-y-5">
                            <SectionHeading
                              title={variation.title}
                              variant="elegant-dark"
                            />
                            {variation.bulletSection && variation.bulletSection.list && (
                              <ul className="space-y-1">
                                {variation.bulletSection.list.map((item, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm sm:text-lg leading-relaxed">
                                      {item.title && <strong>{item.title}</strong>}
                                      {item.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                        {variation.images.map((image, index) => (
                          <FinishImageSection
                            key={index}
                            image={image}
                            setFullScreenImage={setFullScreenImage}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <BackNavigationSection
        route={ClientRoutes.reference_dial(referenceId)}
        title={tCommon("back_to_dial_variations")}
      />

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
