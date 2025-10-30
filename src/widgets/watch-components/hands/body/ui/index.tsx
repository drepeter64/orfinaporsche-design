import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import SectionHeading from "@/components/SectionHeading"
import { FinishImageSection } from "@/widgets/case-finishes/finish-image"
import { PlaceholderImageSection } from "@/widgets/case-finishes/placeholder-image"

export const HandsBodySection: React.FC<HandsBodySectionProps> = ({ data, setFullScreenImage }) => {
  return (
    <>
      {data.hands &&
        data.hands.map((item, index) => (
          <div key={index}>
            <div
              className={`grid grid-cols-1 gap-8 lg:gap-12 items-center ${item.images.length > 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}
            >
              <div className={`space-y-6${index % 2 !== 0 ? " lg:order-2" : ""}`}>
                <SectionHeading
                  title={item.title}
                  variant="numbered"
                  number={index + 1}
                />

                {item.info && (
                  <span
                    dangerouslySetInnerHTML={{ __html: item.info }}
                    className="block text-base sm:text-lg text-gray-600 mt-4 font-medium"
                  ></span>
                )}

                {item.list &&
                  item.list.map((list_item, index) => (
                    <div
                      className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black"
                      key={index}
                    >
                      <h3 className="text-lg font-semibold text-black mb-4">{list_item.title}</h3>
                      {list_item.list && (
                        <ul className="space-y-3 text-gray-700">
                          {list_item.list.map((sub_list_item, index) => (
                            <li
                              className="flex items-start space-x-3"
                              key={index}
                            >
                              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                              <span
                                className="text-sm sm:text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: sub_list_item.title }}
                              ></span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
              {item.images && item.images.length ? (
                item.images.length > 1 ? (
                  <div className="flex flex-row items-start justify-around">
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
  )
}

interface HandsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
