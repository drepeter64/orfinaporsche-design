"use client"

import { useState } from "react"
import { DialTypeData, ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { useTranslations } from "next-intl"
import { BackNavigationSection } from "@/widgets/reference-detail/back-navigation"
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
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)
  const tCommon = useTranslations("Common")

  const { referenceId, referenceTitle, dialTitle, variations } = data

  return (
    <div className="min-h-[calc(100vh-97px)] bg-stone-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-[60px] md:py-[60px] overflow-hidden px-4 sm:px-6 lg:px-20 w-full h-fit bg-stone-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-start gap-4 h-fit">
            <div className="w-full">
              <h1 className="font-normal text-4xl md:text-8xl lg:text-12xl text-black tracking-wide leading-[1]">
                {tCommon("reference")} {referenceTitle}
              </h1>
              <div className="w-full h-px bg-black/20 mt-8"></div>
            </div>

            {dialTitle && (
              <div className="py-4 max-w-[600px] w-full">
                <p className="text-lg md:text-lg lg:text-xl text-black/60 leading-[1.4] text-left">
                  {dialTitle}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className=" bg-white px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-[1280px] mx-auto">
          {data.overview && (
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <SectionOverview text={data.overview} />
            </div>
          )}

          {/* Poster Photo */}
          {data.poster && data.poster.length > 0 && (
            <div className="mb-16 sm:mb-20 lg:mb-24">
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
                      <ImageWithLoader
                        src={image.src}
                        alt={image.alt}
                        className={`relative object-cover transition-all duration-300 ${image.imgClassName ?? "w-full h-96 sm:h-[450px] lg:h-[500px] "}`}
                        skeletonClassName="w-full h-96 sm:h-[450px] lg:h-[500px]"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
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
                <div key={index}>
                  {/* Divider between sections */}
                  {index > 0 && (
                    <div className="w-full h-px bg-stone-200 mb-16 sm:mb-20 lg:mb-24"></div>
                  )}
                  {variation.image_type === "row" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                            <ul className="space-y-1 ml-12">
                              {variation.bulletSection.list.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
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
                  )}

                  {/* Image on Right - uses flex-row layout */}
                  {variation.image_type === "right" && (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                      <div className="space-y-6 flex-shrink-0 lg:w-[35%]">
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
                            <ul className="space-y-1 ml-12">
                              {variation.bulletSection.list.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
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

                      {/* Group Image on Right */}
                      {variation.images.length > 0 && (
                        <div className="flex-1 flex justify-center">
                          {variation.images.map((image, index) => (
                            <div
                              key={index}
                              className={`flex flex-col items-center ${image.imgClassName ? "w-auto" : "w-full"}`}
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
                                <ImageWithLoader
                                  src={image.src}
                                  alt={image.alt}
                                  className={`relative object-contain transition-all duration-300 ${image.imgClassName ?? "w-full h-80"}`}
                                  skeletonClassName={image.imgClassName ?? "w-full h-80"}
                                />
                                {/* Click indicator */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                                  <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                    {tCommon("click-zoom")}
                                  </div>
                                </div>
                              </div>
                              <span
                                dangerouslySetInnerHTML={{ __html: image.subtitle || "" }}
                                className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium"
                              ></span>
                            </div>
                          ))}
                        </div>
                      )}
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
                        <ul className="space-y-1 ml-12">
                          {variation.bulletSection.list.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
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
                          <ul className="space-y-1 ml-12">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
                                <span className="text-sm sm:text-lg leading-relaxed">
                                  {item.title && <strong>{item.title}</strong>}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
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
                          <ul className="space-y-1 ml-12">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
                                <span className="text-sm sm:text-lg leading-relaxed">
                                  {item.title && <strong>{item.title}</strong>}
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div
                          className={`grid grid-cols-1 md:grid-cols-${variation.images.length} gap-8 mt-6`}
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
                                <ImageWithLoader
                                  src={image.src}
                                  alt={image.alt}
                                  className={`relative object-cover transition-all duration-300 ${image.imgClassName ?? "w-full h-64 sm:h-80 lg:h-96"}`}
                                  skeletonClassName="w-full h-64 sm:h-80 lg:h-96"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
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
                          <ul className="space-y-1 ml-12">
                            {variation.bulletSection.list.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
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
                              <ul className="space-y-1 ml-12">
                                {variation.bulletSection.list.map((item, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-3"
                                  >
                                    <span className="h-[1.625em] flex items-center flex-shrink-0">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-stone-900" />
                                  </span>
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
