"use client"

import React from "react"
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
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-2 tracking-wider uppercase">
            Orfina Porsche
          </h1>
          <p className="text-sm sm:text-base font-light text-gray-600 tracking-wider uppercase">
            Design
          </p>
        </div>
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-sm text-gray-500 tracking-wider uppercase">Loading...</p>
      </div>
    </div>
  )
}

export default GlobalLoader
