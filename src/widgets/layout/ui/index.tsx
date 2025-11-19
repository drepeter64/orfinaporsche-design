import React from "react"
import { Header } from "@/widgets/header"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
