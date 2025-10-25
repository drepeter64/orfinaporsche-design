import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import SectionHeading from "@/components/SectionHeading"
import ImageWithLoader from "@/components/ImageWithLoader"
import { useTranslations } from "next-intl"
import ImageSlider from "@/components/ImageSlider"

export const StrapsBodySection: React.FC<StrapsBodySectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <>
      {data.straps &&
        data.straps.map((item, index) => (
          <div
            key={index}
            className="space-y-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title={item.title}
                  variant="numbered"
                  number={index + 1}
                />
                {item.info && <p className="text-sm sm:text-base leading-relaxed">{item.info}</p>}

                {item.list &&
                  item.list.map((list_item, index) => (
                    <div
                      className="bg-gray-50 p-6 rounded-lg border-l-4 border-black"
                      key={index}
                    >
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

              {item.poster && item.poster.length > 0 && (
                <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 space-y-12">
                  <div className={`grid grid-cols-1 sm:grid-cols-${item.poster.length} gap-6`}>
                    {item.poster.map((image, index) => (
                      <div
                        key={index}
                        className="flex justify-center relative"
                      >
                        <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                          <div
                            className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
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
                              className="w-full h-full object-cover rounded-lg"
                              skeletonClassName="w-full aspect-video rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                {tCommon("click-zoom")}
                              </div>
                            </div>
                          </div>
                          <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                            {image.subtitle}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Color Variants */}
            {item.colors && item.colors.length > 0 && (
              <div className="space-y-4">
                <SectionHeading
                  title={tCommon("color-variants")}
                  variant="elegant"
                />

                <div className="space-y-16">
                  {item.colors.map((color, index) => (
                    <div key={index}>
                      {color.image_type === "carousel-row" && color.images.length > 0 && (
                        <>
                          <div className="space-y-8">
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                              <div className="space-y-8">
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                                  <p className="font-semibold text-gray-900 mb-2">{color.title}</p>
                                </div>
                                <div>
                                  {color.list &&
                                    color.list.map((list_item, index) => (
                                      <div
                                        className="bg-gray-50 p-6 rounded-lg border-l-4 border-black"
                                        key={index}
                                      >
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
                              </div>
                              <div className="flex flex-col items-center">
                                <ImageSlider
                                  images={color.images}
                                  setFullScreenImage={setFullScreenImage}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </>
  )
}

interface StrapsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
