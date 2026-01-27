"use client"

import React from "react"
import Image from "next/image"
import { useLoading } from "@/contexts/LoadingContext"
import LoadingSpinner from "./LoadingSpinner"

const GlobalLoader: React.FC = () => {
  const { isInitialLoad, isLoading } = useLoading()

  if (!isInitialLoad && !isLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <Image
            src="/lovable-uploads/opd-watch.png"
            alt="Orfina Watch"
            width={100}
            height={100}
            className="mx-auto opacity-70"
            priority
          />
        </div>
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-2 tracking-wider uppercase">
            Orfina Porsche
          </h1>
          <p className="text-sm sm:text-base font-light text-gray-600 tracking-wider uppercase">
            Design
          </p>
        </div>
        <LoadingSpinner size="lg" />
      </div>
    </div>
  )
}

export default GlobalLoader
