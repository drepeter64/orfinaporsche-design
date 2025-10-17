import { ImageInfo } from "@/_pages/reference/ui"

export interface ReferenceImage {
  src: string
  original: string
  alt: string
  title: string
  caption?: string
  isPlaceholder?: boolean
}

export interface Measurement {
  value: string
  label: string
}

export interface FinishSection {
  id: number
  title: string
  foundOn: string
  note?: string
  images?: ImageInfo[]
  isPlaceholder?: boolean
}

export interface CasebackSection {
  id: number
  title: string
  description?: string
  foundOn?: string
  markings?: string[]
  images?: ReferenceImage[]
  isSlider?: boolean
}

export interface RehautSection {
  id: number
  title: string
  description?: string
  foundOn?: string
  images: ReferenceImage[]
}

export interface DialSection {
  id: number
  title: string
  description?: string
  foundOn?: string
  note?: string
  images: ReferenceImage[]
  isSlider?: boolean
}

export interface CaseFinishesData {
  referenceId: string
  referenceTitle: string
  pageTitle: string
  overview?: string
  measurements?: Measurement[]
  variations?: VariationData[]
  variation_type?: "numbered" | "solid" | "elegant" | "elegant-dark"
  descriptions?: string[]
  info?: string
  sections?: FinishSection[]
  mergedSection?: MergedSection
}
interface MergedSection {
  title: string
  image: ImageInfo
  variations: VariationData[]
}
export interface FinishItem {
  title: string
  description: string
  color: string
  year: string
  images?: ImageInfo[]
}

interface VariationData {
  title: string
  description: string
  full_description?: string
  finishes_title?: string
  measurements?: Measurement[]
  finishes?: FinishItem[]
}

export interface CasebackData {
  referenceId: string
  referenceTitle: string
  pageTitle: string
  overview?: string
  sections: CasebackSection[]
}

export interface RehautData {
  referenceId: string
  referenceTitle: string
  pageTitle: string
  overview?: string
  sections: RehautSection[]
}

export interface DialData {
  referenceId: string
  referenceTitle: string
  pageTitle: string
  overview?: string
  description?: string
  sections: DialSection[]
}
