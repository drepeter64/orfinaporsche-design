import "@/app/styles/main.scss"

import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { unstable_setRequestLocale } from "next-intl/server"
import { localeConfig } from "@/app/localization"
import { ClientProviders, ServerProviders } from "@/app/providers"

const archivoNarrow = localFont({
  src: [
    {
      path: "../public/fonts/ArchivoNarrow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ArchivoNarrow-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/ArchivoNarrow-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ArchivoNarrow-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/ArchivoNarrow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ArchivoNarrow-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/ArchivoNarrow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ArchivoNarrow-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-archivo-narrow",
  display: "block",
  preload: true,
})

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
      className={archivoNarrow.variable}
    >
      <body className={archivoNarrow.className}>
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
