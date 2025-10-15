import { ClientRoutes } from "@/shared/routes"

export type typeComponent = keyof typeof ClientRoutes.components

export interface IComponents {
  [key: string]: IComponent[]
}
export interface IComponent {
  route: keyof typeComponent
  title: string
}
