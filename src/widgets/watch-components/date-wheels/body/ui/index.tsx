import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import { useTranslations } from "next-intl"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { Circle } from "lucide-react"

export const WheelsBodySection: React.FC<WheelsBodySectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="flex flex-col gap-16">
      {data.wheels &&
        data.wheels.map((item, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={0}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 items-start">
              <div className={`space-y-6 w-full lg:flex-1${index % 2 !== 0 ? " lg:order-2" : ""}`}>
                {/* Section Header */}
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-light text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl sm:text-3xl tracking-wide text-black">{item.title}</h2>
                </div>

                {(item.found || item.info) && (
                  <AnimatedText delay={0.1}>
                    <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                      {item.found && (
                        <p
                          className="text-base sm:text-lg text-stone-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.found }}
                        ></p>
                      )}

                      {item.info && (
                        <span
                          dangerouslySetInnerHTML={{ __html: item.info }}
                          className="block text-base sm:text-lg text-stone-600 mt-4 leading-relaxed"
                        ></span>
                      )}
                    </div>
                  </AnimatedText>
                )}

                {item.list &&
                  item.list.map((list_item, listIndex) => (
                    <AnimatedText
                      key={listIndex}
                      delay={0.15 + listIndex * 0.05}
                    >
                      <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                        {list_item.title && (
                          <h3 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                            {list_item.title}
                          </h3>
                        )}
                        {list_item.text && (
                          <p
                            className="text-base sm:text-lg text-stone-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: list_item.text }}
                          ></p>
                        )}
                        {list_item.list && (
                          <ul className="space-y-3 text-stone-600">
                            {list_item.list.map((sub_list_item, subIndex) => (
                              <li
                                className="flex items-start gap-2"
                                key={subIndex}
                              >
                                <Circle className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 fill-stone-400 text-stone-400" />
                                <span className="text-sm sm:text-base leading-relaxed">
                                  {sub_list_item.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </AnimatedText>
                  ))}
              </div>
              <AnimatedText
                delay={0.2}
                className="w-full lg:flex-1"
              >
                <div
                  className={`flex flex-col items-center justify-center${index % 2 !== 0 ? " lg:order-1" : ""}`}
                >
                  {item.images && item.images.length ? (
                    item.images.length > 1 ? (
                      <div className="space-y-6">
                        {item.images.map((imgItem, imgIndex) => (
                          <FinishImageSection
                            key={imgIndex}
                            image={imgItem}
                            setFullScreenImage={setFullScreenImage}
                          />
                        ))}
                      </div>
                    ) : (
                      <FinishImageSection
                        image={item.images[0]}
                        setFullScreenImage={setFullScreenImage}
                        sectionTitle={item.title}
                      />
                    )
                  ) : (
                    <PlaceholderImageSection title={item.title} />
                  )}
                </div>
              </AnimatedText>
            </div>

            {/* Divider */}
            {index < (data.wheels?.length || 0) - 1 && (
              <div className="w-full h-px bg-stone-200 mt-4" />
            )}
          </AnimatedSection>
        ))}

      {data.wheelsLanguages && (
        <AnimatedSection
          animation="fade-in"
          delay={0}
          className="flex flex-col gap-12"
        >
          {data.wheelsLangData && data.wheelsLangData.title && (
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-light text-stone-400">
                {String((data.wheels?.length || 0) + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl sm:text-3xl tracking-wide text-black">
                {data.wheelsLangData.title}
              </h2>
            </div>
          )}

          {data.wheelsLangData && data.wheelsLangData.info && (
            <AnimatedText delay={0.1}>
              <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                <span
                  dangerouslySetInnerHTML={{ __html: data.wheelsLangData.info }}
                  className="block text-base sm:text-lg text-stone-600 leading-relaxed"
                ></span>
              </div>
            </AnimatedText>
          )}

          {data.wheelsLanguages.map((item, langIndex) => (
            <AnimatedSection
              key={langIndex}
              animation="fade-in"
              delay={0}
              className="flex flex-col gap-8"
            >
              <div className="space-y-8">
                <AnimatedText delay={0.15}>
                  <h3 className="text-xl sm:text-2xl tracking-wide text-black">{item.title}</h3>
                </AnimatedText>

                {item.subtitle && (
                  <AnimatedText delay={0.2}>
                    <p
                      className="text-base sm:text-lg text-stone-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.subtitle }}
                    ></p>
                  </AnimatedText>
                )}

                {item.info && (
                  <AnimatedText delay={0.25}>
                    <p
                      className="text-base sm:text-lg text-stone-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.info }}
                    ></p>
                  </AnimatedText>
                )}
                {item.list && (
                  <AnimatedText delay={0.3}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {item.list.map((list_item, listIndex) => (
                        <div
                          key={listIndex}
                          className="bg-white px-5 py-4 border border-stone-200"
                        >
                          <h4 className="text-base font-medium text-stone-700 mb-3 uppercase tracking-wider">
                            {list_item.heading.title}
                          </h4>

                          {list_item.heading.tip && (
                            <p className="text-sm text-stone-500 mb-3">{list_item.heading.tip}</p>
                          )}

                          {list_item.items && (
                            <div className="space-y-1">
                              {list_item.items.map((day, dayIndex) => (
                                <div
                                  key={dayIndex}
                                  className="text-sm text-stone-600 font-mono"
                                >
                                  {day.title}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </AnimatedText>
                )}
              </div>

              {item.specialNotes && (
                <div className="flex flex-col gap-8 mt-8">
                  <AnimatedText delay={0.35}>
                    <h3 className="text-xl sm:text-2xl text-black tracking-wide">
                      {tCommon("special-notes")}
                    </h3>
                  </AnimatedText>
                  {item.specialNotes.map((noteItem, noteIndex) => (
                    <div
                      key={noteIndex}
                      className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 items-start"
                    >
                      <div
                        className={`space-y-6 w-full lg:flex-1${noteIndex % 2 !== 0 ? " lg:order-2" : ""}`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-3xl font-light text-stone-400">
                            {String((data.wheels?.length || 2) + noteIndex + 2).padStart(2, "0")}
                          </span>
                          <h4 className="text-xl sm:text-2xl tracking-wide text-black">
                            {noteItem.title}
                          </h4>
                        </div>
                        {noteItem.text && (
                          <AnimatedText delay={0.4 + noteIndex * 0.05}>
                            <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                              <span
                                dangerouslySetInnerHTML={{ __html: noteItem.text }}
                                className="block text-base sm:text-lg text-stone-600 leading-relaxed"
                              ></span>
                            </div>
                          </AnimatedText>
                        )}
                      </div>
                      <AnimatedText
                        delay={0.45 + noteIndex * 0.05}
                        className="w-full lg:flex-1"
                      >
                        <div
                          className={`flex flex-col items-center justify-center${noteIndex % 2 !== 0 ? " lg:order-1" : ""}`}
                        >
                          {noteItem.images && noteItem.images.length ? (
                            noteItem.images.length > 1 ? (
                              <div className="space-y-6">
                                {noteItem.images.map((imgItem, imgIndex) => (
                                  <FinishImageSection
                                    key={imgIndex}
                                    image={imgItem}
                                    setFullScreenImage={setFullScreenImage}
                                  />
                                ))}
                              </div>
                            ) : (
                              <FinishImageSection
                                image={noteItem.images[0]}
                                setFullScreenImage={setFullScreenImage}
                                sectionTitle={noteItem.title}
                              />
                            )
                          ) : (
                            <PlaceholderImageSection title={noteItem.title} />
                          )}
                        </div>
                      </AnimatedText>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          ))}
        </AnimatedSection>
      )}
    </div>
  )
}

interface WheelsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
