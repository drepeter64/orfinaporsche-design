import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import ImageSlider from "@/components/ImageSlider"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { Circle } from "lucide-react"

export const StrapsBodySection: React.FC<StrapsBodySectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  return (
    <div className="flex flex-col gap-16">
      {data.straps &&
        data.straps.map((item, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={0}
            className="flex flex-col gap-8"
          >
            <div
              className={`flex flex-col gap-8 lg:gap-16 items-start ${item.poster && item.poster.length ? "lg:flex-row lg:justify-between" : ""}`}
            >
              <div
                className={`space-y-6 w-full ${item.poster && item.poster.length ? "lg:flex-1" : ""}`}
              >
                {/* Section Header */}
                <div className="flex items-baseline gap-4">
                  {index !== 1 && index !== 2 && (
                    <span className="text-3xl font-light text-stone-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl tracking-wide text-black">{item.title}</h2>
                </div>
                {item.info && (
                  <AnimatedText delay={0.1}>
                    <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                      {item.info}
                    </p>
                  </AnimatedText>
                )}

                {item.list &&
                  item.list.map((list_item, listIndex) => (
                    <AnimatedText
                      key={listIndex}
                      delay={0.15 + listIndex * 0.05}
                    >
                      <div className="bg-stone-50 border border-stone-200 px-6 py-5">
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

              {item.poster && item.poster.length > 0 && (
                <AnimatedText
                  delay={0.2}
                  className="w-full lg:flex-1 h-full"
                >
                  <div className="space-y-6 h-full">
                    <div
                      className={`grid grid-cols-1 ${item.poster.length > 1 ? "sm:grid-cols-2" : ""} gap-4 h-full`}
                    >
                      {item.poster.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex justify-center relative h-full"
                        >
                          <div className="flex flex-col items-center justify-center max-w-lg w-full h-full group">
                            <div
                              className="w-full h-full bg-stone-100 flex items-center justify-center cursor-pointer overflow-hidden border border-stone-200 relative"
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
                                className="w-full h-full object-cover"
                                skeletonClassName="w-full h-full"
                              />
                              {/* Click to zoom indicator */}
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                  Click to zoom
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-center text-stone-600 mt-3 tracking-wide">
                              {image.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedText>
              )}
            </div>

            {/* Divider between main content and color variants */}
            {item.colors && item.colors.length > 0 && (
              <div className="w-full h-px bg-stone-200 my-8" />
            )}

            {/* Color Variants */}
            {item.colors && item.colors.length > 0 && (
              <div className="space-y-12">
                {item.colors.map((color, colorIndex) => (
                  <AnimatedSection
                    key={colorIndex}
                    animation="fade-in"
                    delay={0}
                    className="flex flex-col gap-6"
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-6">
                          <AnimatedText delay={0.1}>
                            <div className="flex items-baseline gap-4">
                              {index === 1 && (
                                <span className="text-xl sm:text-2xl font-light text-stone-400">
                                  {String(colorIndex + 2).padStart(2, "0")}
                                </span>
                              )}
                              <h3 className="text-xl sm:text-2xl tracking-wide text-black">
                                {color.title}
                              </h3>
                            </div>
                          </AnimatedText>
                          <div>
                            {color.list &&
                              color.list.map((list_item, listIndex) => (
                                <AnimatedText
                                  key={listIndex}
                                  delay={0.15 + listIndex * 0.05}
                                >
                                  <div className="bg-stone-50 border border-stone-200 px-6 py-5">
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
                        </div>
                        <AnimatedText delay={0.2}>
                          {color.images && color.images.length ? (
                            color.images.length > 1 ? (
                              color.image_type === "carousel" ? (
                                color.poster ? (
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col items-center">
                                      <FinishImageSection
                                        image={color.poster}
                                        setFullScreenImage={setFullScreenImage}
                                      />
                                    </div>
                                    <div className="flex flex-col items-center">
                                      <ImageSlider
                                        images={color.images}
                                        setFullScreenImage={setFullScreenImage}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center">
                                    <ImageSlider
                                      images={color.images}
                                      setFullScreenImage={setFullScreenImage}
                                    />
                                  </div>
                                )
                              ) : (
                                <div
                                  className={`grid grid-cols-1 gap-6 ${color.image_type && color.image_type === "three-row" ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}
                                >
                                  {color.images.map((imgItem, imgIndex) => (
                                    <FinishImageSection
                                      key={imgIndex}
                                      image={imgItem}
                                      setFullScreenImage={setFullScreenImage}
                                    />
                                  ))}
                                </div>
                              )
                            ) : (
                              <FinishImageSection
                                image={color.images[0]}
                                setFullScreenImage={setFullScreenImage}
                                sectionTitle={item.title}
                              />
                            )
                          ) : (
                            <PlaceholderImageSection title={item.title} />
                          )}
                        </AnimatedText>
                      </div>
                    </div>

                    {/* Divider between colors */}
                    {colorIndex < (item.colors?.length || 0) - 1 && (
                      <div className="w-full h-px bg-stone-200 my-8" />
                    )}
                  </AnimatedSection>
                ))}
              </div>
            )}

            {/* Divider between straps */}
            {index < (data.straps?.length || 0) - 1 && (
              <div className="w-full h-px bg-stone-200 my-8" />
            )}
          </AnimatedSection>
        ))}
    </div>
  )
}

interface StrapsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
