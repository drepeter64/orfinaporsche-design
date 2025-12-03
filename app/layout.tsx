import "@/app/styles/main.scss"

import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"
import { localeConfig } from "@/app/localization"
import { ClientProviders, ServerProviders } from "@/app/providers"
import { primaryFont } from "@/app/fonts"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Orfina Porsche Design",
  description:
    "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History",
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png" }],
    apple: "/favicon.png?v=2",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
}

export function generateStaticParams() {
  return localeConfig.locales.map((locale: string) => ({ locale }))
}

export default function Layout({ children, params: { locale } }: Readonly<ILayoutProps>) {
  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={primaryFont.variable}
    >
      <body className={primaryFont.className}>
        <ServerProviders locale={locale}>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
        <div className="hidden min-h-80 h-[8.5rem] h-[22rem] sm:h-[30rem] lg:h-[36rem] h-52"></div>
      </body>
    </html>
  )
}

export interface ILayoutProps extends PropsWithChildren {
  params: {
    locale: string
  }
}
