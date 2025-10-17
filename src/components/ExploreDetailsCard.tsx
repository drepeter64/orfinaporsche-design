"use client"

import ImageWithLoader from "./ImageWithLoader"
import { Link } from "@/app/localization"
import { getReferenceRoute } from "@/shared/routes/client"
import { ReferenceExploreCard } from "@/shared/types"

const ExploreDetailsCard = ({
  title,
  imageSrc,
  imageAlt,
  route,
  referenceId,
}: ReferenceExploreCard) => {
  return (
    <Link
      href={getReferenceRoute(route, referenceId)}
      className="group h-full cursor-pointer"
    >
      <div className="bg-white border-2 border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gray-200/60 group-hover:border-gray-400 rounded-xl transform group-hover:-translate-y-2 h-full flex flex-col">
        <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
          <ImageWithLoader
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            skeletonClassName="w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-8 flex-grow flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-700 text-center">
            {title}
          </h3>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto transition-all duration-300 group-hover:w-24 group-hover:bg-gray-600"></div>
        </div>
      </div>
    </Link>
  )
}

export default ExploreDetailsCard
