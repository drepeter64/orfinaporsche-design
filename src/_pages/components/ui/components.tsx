"use client"

import { useState } from "react"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import { FullScreenModal } from "@/widgets/full-screen-modal"
import { BraceletsBodySection } from "@/widgets/watch-components/bracelets/body"
import { StrapsBodySection } from "@/widgets/watch-components/straps/body"
import { HandsBodySection } from "@/widgets/watch-components/hands/body"
import { CrownsBodySection } from "@/widgets/watch-components/crowns/body"
import { MovemensBodySection } from "@/widgets/watch-components/movements/body"

interface ComponentsPage {
  data: ComponentsTypeData
}

export function ComponentsPage({ data }: ComponentsPage) {
  const [fullScreenImage, setFullScreenImage] = useState<ImageInfo | null>(null)

  return (
    <div className="min-h-[calc(100vh-97px)] bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              {data.pageTitle}
            </h1>
            {data.pageSubTitle && (
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                {data.pageSubTitle}
              </p>
            )}
          </div>

          {/* Overview */}
          {data.overview && (
            <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
              <p
                dangerouslySetInnerHTML={{ __html: data.overview }}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed"
              ></p>
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {data.type === "bracelets" && (
              <BraceletsBodySection
                setFullScreenImage={setFullScreenImage}
                data={data}
              />
            )}

            {data.type === "straps" && (
              <StrapsBodySection
                setFullScreenImage={setFullScreenImage}
                data={data}
              />
            )}

            {data.type === "hands" && (
              <HandsBodySection
                setFullScreenImage={setFullScreenImage}
                data={data}
              />
            )}

            {data.type === "crowns" && (
              <CrownsBodySection
                setFullScreenImage={setFullScreenImage}
                data={data}
              />
            )}

            {data.type === "movements" && (
              <MovemensBodySection
                setFullScreenImage={setFullScreenImage}
                data={data}
              />
            )}
          </div>
        </div>
      </section>

      <FullScreenModal
        setFullScreenImage={setFullScreenImage}
        fullScreenImage={fullScreenImage}
      />
    </div>
  )
}
