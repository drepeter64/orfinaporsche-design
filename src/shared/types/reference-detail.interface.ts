export interface ReferenceImage {
  src: string
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
  image?: ReferenceImage
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
  descriptions?: string[]
  sections: FinishSection[]
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
