import { ImageInfo } from "@/shared/types/componenst.interface"

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
  images?: ImageInfo[]
  isSlider?: boolean
}

export interface DialSection {
  id: number
  title: string
  description?: string
  foundOn?: string
  note?: string
  images: ImageInfo[]
  isSlider?: boolean
}

export interface CaseFinishesData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
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
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  referenceId: string
  referenceTitle: string
  overview?: string
  variations: CaseBackVariations[]
  pageTitle?: string
  sections?: CasebackSection[]
}

interface CaseBackVariations {
  title: string
  blueNote?: string
  note?: string
  bulletSection: Bullet
  images: ImageInfo[]
}

interface Bullet {
  title: string
  text?: []
  list?: BulletListItem[]
}
interface BulletListItem {
  title: string
  text?: string
  list?: BulletListItem[]
}

export interface DialData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  referenceId: string
  referenceTitle: string
  listing?: DialDataListing[]
  overview?: string
  note?: string
  variations: CaseBackVariations[]
  pageTitle?: string
  sections?: DialSection[]
}
export interface DialDataListing {
  route: string
  title: string
  images: ImageInfo[]
}

export interface DialTypeData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  referenceId: string
  referenceTitle: string
  dialTitle: string
  variations?: DialVariations[]
  poster?: ImageInfo[]
  overview?: string
  pageTitle?: string
  sections?: DialSection[]
}

interface DialVariations {
  title: string
  blueNote?: string
  note?: string
  bulletSection?: Bullet
  images: ImageInfo[]
  image_type: "row" | "carousel" | "right" | "finish" | "three-row" | "two-row" | "none"
}

export interface RehautData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  referenceId: string
  referenceTitle: string
  listing?: DialDataListing[]
  overview?: string
  note?: string
  variations: CaseBackVariations[]
  pageTitle?: string
  sections?: DialSection[]
}
