import { ClientRoutes } from "@/shared/routes"

export type typeComponent = keyof typeof ClientRoutes.components

export interface IComponents {
  [key: string]: IComponent[]
}
export interface IComponent {
  route: keyof typeComponent
  title: string
}

export interface ImageInfo {
  src: string
  original: string
  alt: string
  title?: string
  subtitle?: string
  caption?: string
  wrapClassName?: string
  imgClassName?: string
  isPlaceholder?: boolean
}
