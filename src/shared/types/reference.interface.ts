export interface ReferenceVariant {
  id: number
  title: string
  years: string
  case?: string
  finishes: string
  caseback: string
  rehaut: string
  dial: string
  image: string
  subtitle?: string
  description?: string
  imageCaption?: string
}

export interface ReferenceExploreCard {
  title: string
  imageSrc: string
  imageAlt: string
  linkTo: string
}

export interface TechnicalSpecification {
  label: string
  value: string
}

export interface ReferenceTechnicalSpecs {
  title: string
  specifications: {
    left: TechnicalSpecification[]
    right: TechnicalSpecification[]
  }
}

export interface ReferenceIntroduction {
  paragraphs: string[]
  differences?: string[]
  image?: {
    src: string
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
  introduction: ReferenceIntroduction
  variants?: ReferenceVariant[]
  generations?: ReferenceVariant[]
  variantsTitle?: string
  variantsSubtitle?: string
  variantsNote?: {
    title: string
    content: string
  }
  exploreCards: ReferenceExploreCard[]
  technicalSpecs: ReferenceTechnicalSpecs
}
