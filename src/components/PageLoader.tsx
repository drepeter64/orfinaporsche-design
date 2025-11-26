import React from "react"
import { Skeleton } from "./ui/skeleton"

interface PageLoaderProps {
  showHero?: boolean
  showGrid?: boolean
  className?: string
}

const PageLoader: React.FC<PageLoaderProps> = ({
  showHero = true,
  showGrid = true,
  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Navigation skeleton */}
      <div className="w-full h-16 bg-background border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-20 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-6 w-20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero section skeleton */}
      {showHero && (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <div className="w-full mb-8 sm:mb-12 lg:mb-16">
            <Skeleton className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]" />
          </div>
          <div className="text-center px-4 sm:px-6 lg:px-20">
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 w-80 sm:w-96 md:w-[500px] lg:w-[600px] mx-auto mb-6 sm:mb-8" />
            <Skeleton className="h-6 sm:h-8 w-full max-w-3xl mx-auto mb-8 sm:mb-12" />
          </div>
        </section>
      )}

      {/* Grid section skeleton */}
      {showGrid && (
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-64 sm:w-80 md:w-96 mx-auto mb-4 sm:mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <Skeleton className="h-64 sm:h-72 lg:h-80 w-full" />
                  <div className="p-6 sm:p-8">
                    <Skeleton className="h-6 w-32 mb-3 sm:mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4 sm:mb-6" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default PageLoader
