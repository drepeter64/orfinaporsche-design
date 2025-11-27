import React from "react"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.content}>{children}</main>
      <Footer />
    </div>
  )
}
