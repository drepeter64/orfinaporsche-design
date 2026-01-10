import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { Circle } from "lucide-react"

export const HandsBodySection: React.FC<HandsBodySectionProps> = ({ data, setFullScreenImage }) => {
  return (
    <div className="flex flex-col gap-16">
      {data.hands &&
        data.hands.map((item, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={0}
            className="flex flex-col gap-8"
          >
            <div
              className={`flex flex-col gap-8 lg:gap-16 ${item.images.length > 1 ? "items-start" : "lg:flex-row lg:justify-between lg:items-center items-start"}`}
            >
              <div
                className={`space-y-6 w-full ${item.images.length > 1 ? "" : "lg:flex-1"}${index % 2 !== 0 ? " lg:order-2" : ""}`}
              >
                {/* Section Header */}
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-light text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl sm:text-3xl tracking-wide text-black">{item.title}</h2>
                </div>

                {item.info && (
                  <AnimatedText delay={0.1}>
                    <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.info }}
                        className="block text-base sm:text-lg text-stone-600 leading-relaxed"
                      ></span>
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
                        <h3 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                          {list_item.title}
                        </h3>
                        {list_item.list && (
                          <ul className="space-y-3 text-stone-600">
                            {list_item.list.map((sub_list_item, subIndex) => (
                              <li
                                className="flex items-start gap-2"
                                key={subIndex}
                              >
                                <Circle className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 fill-stone-400 text-stone-400" />
                                <span
                                  className="text-sm sm:text-base leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: sub_list_item.title }}
                                ></span>
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
                className={`w-full ${item.images.length > 1 ? "" : "lg:flex-1"}`}
              >
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  {item.images && item.images.length ? (
                    item.images.length > 1 ? (
                      <div
                        className={`flex justify-center w-full ${item.images.length === 2 ? "gap-12" : "gap-6"}`}
                      >
                        <div
                          className={`grid grid-cols-1 ${item.images.length === 2 ? "sm:grid-cols-2 gap-12" : "sm:grid-cols-2 lg:grid-cols-4 gap-6"}`}
                        >
                          {item.images.map((imgItem, imgIndex) => (
                            <FinishImageSection
                              key={imgIndex}
                              image={imgItem}
                              setFullScreenImage={setFullScreenImage}
                            />
                          ))}
                        </div>
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
            {index < (data.hands?.length || 0) - 1 && (
              <div className="w-full h-px bg-stone-200 mt-4" />
            )}
          </AnimatedSection>
        ))}
    </div>
  )
}

interface HandsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
