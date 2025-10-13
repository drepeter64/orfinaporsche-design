import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"
import { localeConfig } from "@/app/localization"
import { Layout } from "@/widgets/layout"
import { openSansFont } from "@/app/fonts"

export const metadata: Metadata = {
  title: "Orfina Porsche Design",
  description:
    "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History",
}

export function generateStaticParams() {
  return localeConfig.locales.map((locale: string) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<ILocaleLayoutProps>) {
  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body className={openSansFont.className}>
        <Layout locale={locale}>{children}</Layout>
      </body>
    </html>
  )
}

export interface ILocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: string
  }
}
