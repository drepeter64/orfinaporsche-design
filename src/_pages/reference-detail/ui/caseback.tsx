"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface CasebackPageProps {
  referenceId: string
  referenceTitle: string
}

export function CasebackPage({ referenceId, referenceTitle }: CasebackPageProps) {
  const [fullScreenImage, setFullScreenImage] = useState<{
    src: string
    alt: string
    title: string
    subtitle: string
  } | null>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullScreenImage(null)
      }
    }

    if (fullScreenImage) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [fullScreenImage])

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href={`/references/${referenceId}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference {referenceTitle}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Caseback</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Reference {referenceTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">Caseback</p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Caseback variations for Reference {referenceTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/references/${referenceId}`}
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Reference {referenceTitle}
          </Link>
        </div>
      </div>
    </div>
  )
}
