import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import SectionHeading from "@/components/SectionHeading"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import { useTranslations } from "next-intl"

export const WheelsBodySection: React.FC<WheelsBodySectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <>
      {data.wheels &&
        data.wheels.map((item, index) => (
          <div
            className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${400 + index * 100}`}
            key={index}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`space-y-6${index % 2 !== 0 ? " lg:order-2" : ""}`}>
                <SectionHeading
                  title={item.title}
                  variant="numbered"
                  number={index + 1}
                />

                {(item.found || item.info) && (
                  <div
                    className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black"
                    key={index}
                  >
                    {item.found && (
                      <p
                        className="text-base sm:text-lg text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.found }}
                      ></p>
                    )}

                    {item.info && (
                      <span
                        dangerouslySetInnerHTML={{ __html: item.info }}
                        className="block text-base sm:text-lg text-gray-600 mt-4 font-medium"
                      ></span>
                    )}
                  </div>
                )}

                {item.list &&
                  item.list.map((list_item, index) => (
                    <div
                      className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black"
                      key={index}
                    >
                      {list_item.title && (
                        <h3 className="text-lg font-semibold text-black mb-4">{list_item.title}</h3>
                      )}
                      {list_item.text && (
                        <p
                          className="text-base sm:text-lg text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: list_item.text }}
                        ></p>
                      )}
                      {list_item.list && (
                        <ul className="space-y-3 text-gray-700">
                          {list_item.list.map((sub_list_item, index) => (
                            <li
                              className="flex items-start space-x-3"
                              key={index}
                            >
                              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base leading-relaxed">
                                {sub_list_item.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                {item.images && item.images.length ? (
                  item.images.length > 1 ? (
                    <div className="space-y-12">
                      {item.images.map((item, index) => (
                        <FinishImageSection
                          key={index}
                          image={item}
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
            </div>
          </div>
        ))}

      {data.wheelsLanguages && (
        <div
          className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 space-y-12 delay-${(data.wheels?.length || 1) * 100 + 400}`}
        >
          {data.wheelsLangData && data.wheelsLangData.title && (
            <SectionHeading
              title={data.wheelsLangData.title}
              variant="numbered"
              number={(data.wheels?.length || 0) + 1}
            />
          )}

          {data.wheelsLangData && data.wheelsLangData.info && (
            <span
              dangerouslySetInnerHTML={{ __html: data.wheelsLangData.info }}
              className="block text-base sm:text-lg text-gray-600 mt-4 font-medium"
            ></span>
          )}

          {data.wheelsLanguages.map((item, index) => (
            <div
              className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-${index * 100 + 800}`}
              key={index}
            >
              <div className="p-8 sm:p-12 rounded-lg space-y-12">
                <SectionHeading
                  title={item.title}
                  variant="solid"
                  textClassName="text-1xl sm:text-2xl"
                />

                {item.subtitle && (
                  <p
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: item.subtitle }}
                  ></p>
                )}

                {item.info && (
                  <p
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: item.info }}
                  ></p>
                )}
                {item.list && (
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-${item.list.length}`}
                  >
                    {item.list.map((list_item, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg border border-gray-300"
                      >
                        <h3 className="text-lg font-semibold text-black mb-3">
                          {list_item.heading.title}
                        </h3>

                        {list_item.heading.tip && (
                          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            {list_item.heading.tip}
                          </p>
                        )}

                        {list_item.items && (
                          <div className="space-y-1">
                            {list_item.items.map((day, dayIndex) => (
                              <div
                                key={dayIndex}
                                className="text-sm text-gray-700 font-mono"
                              >
                                {day.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {item.specialNotes && (
                <>
                  <div className="p-8 sm:p-12 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                      {tCommon("special-notes")}
                    </h2>
                  </div>
                  {item.specialNotes.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                      <div className={`space-y-6${index % 2 !== 0 ? " lg:order-2" : ""}`}>
                        <SectionHeading
                          title={item.title}
                          variant="numbered"
                          number={(data.wheels?.length || 2) + index + 2}
                        />
                        {item.text && (
                          <div
                            className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black"
                            key={index}
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: item.text }}
                              className="block text-base sm:text-lg text-gray-600 mt-4 font-medium"
                            ></span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        {item.images && item.images.length ? (
                          item.images.length > 1 ? (
                            <div className="space-y-12">
                              {item.images.map((item, index) => (
                                <FinishImageSection
                                  key={index}
                                  image={item}
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
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

interface WheelsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
