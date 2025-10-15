import React from "react"

export interface ReferenceVariant {
  title: string
  specifications?: ReferenceSpecificationRow[]
  image: string
  original: string
  subtitle?: string
  description?: string
  note?: string
  imageCaption?: string
}

export interface ReferenceSpecificationRow {
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
}

export interface ReferenceExploreCard {
  title: string
  imageSrc: string
  imageAlt: string
  route: string
  referenceId: string
}

export interface TechnicalSpecification {
  label: string
  value: string
}

export interface ReferenceTechnicalSpecs {
  title: string
  specifications: TechnicalSpecification[]
}

export interface ReferenceIntroduction {
  paragraphs: string[]
  differences?: string[]
  image?: {
    src: string
    original: string
    alt: string
    title: string
    subtitle: string
  }
}

export interface ReferenceData {
  id: string
  title: string
  referenceNumber: string
  heroTitle: string
  introduction?: ReferenceIntroduction
  generations?: ReferenceVariant[]
  variantsTitle?: string
  variantsSubtitle?: string
  exploreCards: ReferenceExploreCard[]
  technicalSpecs: ReferenceTechnicalSpecs
}
