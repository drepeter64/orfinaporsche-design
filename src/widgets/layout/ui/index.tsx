import React from "react"
import { ServerProviders, ClientProviders } from "@/app/providers"
import { Header } from "@/widgets/header"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <ClientProviders>
        <div className={css.wrapper}>
          <Header />
          <main>{children}</main>
        </div>
      </ClientProviders>
    </ServerProviders>
  )
}
