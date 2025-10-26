import { ImageInfo } from "@/shared/types/componenst.interface"

export interface ComponentsTypeData {
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  type: "bracelets" | "straps" | "hands" | "crowns" | "movements" | "boxes" | "wheels"
  pageTitle: string
  pageSubTitle?: string
  overview?: string
  quota?: QuotaData
  bracelets?: BraceletsData[]
  straps?: StrapsData[]
  hands?: HandsData[]
  crowns?: CrownsData[]
  movements?: MovementsData[]
  wheels?: WheelsData[]
  wheelsLanguages?: WheelsLanguagesData[]
  wheelsLangData?: WheelsLanguage
}

interface QuotaData {
  text: string
  author: string
}
interface BraceletsData {
  title: string
  info?: string
}

interface StrapsData {
  title: string
  info?: string
  list?: Bullet[]
  poster?: ImageInfo[]
  colors?: StrapsColors[]
}

interface StrapsColors {
  title: string
  image_type: string
  list?: Bullet[]
  images: ImageInfo[]
}
interface HandsData {
  title: string
  info?: string
  list?: Bullet[]
  images: ImageInfo[]
}

interface CrownsData {
  title: string
  info?: string
  list?: Bullet[]
  image_type: string
  images: ImageInfo[]
}

interface MovementsData {
  title: string
  info?: string
  list?: Bullet[]
  image_type: string
  images: ImageInfo[]
}

interface WheelsData {
  title: string
  info?: string
  found?: string
  list?: Bullet[]
  images: ImageInfo[]
}

interface WheelsLanguage {
  title: string
  subtitle?: string
  text?: string
  info?: string
}

interface WheelsLanguagesData {
  title: string
  subtitle?: string
  info?: string
  found?: string
  list?: WheelsLanguagesList[]
  specialNotes: WheelsSpecialNotesItems[]
}

interface WheelsLanguagesList {
  heading: WheelsLanguagesListHeading
  items?: WheelsLanguagesListItems[]
}

interface WheelsLanguagesListHeading {
  title: string
  tip?: string
}

interface WheelsLanguagesListItems {
  title: string
}

interface WheelsSpecialNotesItems {
  title: string
  text?: string
  images?: ImageInfo[]
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
