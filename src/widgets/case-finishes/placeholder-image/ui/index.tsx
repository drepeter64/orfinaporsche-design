import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"
import ImageWithLoader from "@/components/ImageWithLoader"

export const PlaceholderImageSection: React.FC<PlaceholderImageSectionProps> = ({ title }) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="flex justify-center">
      <div className="max-w-xs w-full">
        <div className="relative group">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            {/*{
            <div className="text-center text-gray-500 p-6">
              <div className="text-sm font-medium mb-2">{tCommon("photo-coming-soon")}</div>
              <div className="text-xs">{title || ""}</div>
            </div>
            }*/}
            <ImageWithLoader
              src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
              alt={`${tCommon("no-photo")} ${title}`}
              className="relative w-full h-full object-cover shadow-lg opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface PlaceholderImageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
}
