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
  title: {
    default: "Orfina Porsche Design | Chronograph One Archive",
    template: "%s | Orfina Porsche Design",
  },
  description:
    "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History of the iconic Chronograph One designed by Ferdinand Alexander Porsche.",
  keywords: [
    "Orfina Porsche Design",
    "Chronograph One",
    "Porsche Design Watch",
    "Reference 7750",
    "Reference 7176",
    "Reference 7177",
    "Valjoux 7750",
    "Lemania 5100",
    "Ferdinand Porsche",
    "Vintage Chronograph",
    "Black PVD Watch",
    "Top Gun Watch",
  ],
  authors: [{ name: "Orfina Porsche Design Archive" }],
  creator: "Orfina Porsche Design Archive",
  publisher: "Orfina Porsche Design Archive",
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png" }],
    apple: "/favicon.png?v=2",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orfina Porsche Design",
    title: "Orfina Porsche Design | Chronograph One Archive",
    description:
      "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History of the iconic Chronograph One.",
    images: [
      {
        url: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/main-page-photos/preview-3840x-hero-shot.jpg",
        width: 1200,
        height: 630,
        alt: "Orfina Porsche Design Chronograph One Collection",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@orfinaporsche",
    creator: "@orfinaporsche",
    title: "Orfina Porsche Design | Chronograph One Archive",
    description:
      "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History.",
    images: [
      {
        url: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/main-page-photos/preview-3840x-hero-shot.jpg",
        alt: "Orfina Porsche Design Chronograph One Collection",
      },
    ],
  },
  other: {
    "fb:app_id": "",
    "og:image:secure_url":
      "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/main-page-photos/preview-3840x-hero-shot.jpg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "telegram:channel": "",
    "linkedin:image":
      "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/main-page-photos/preview-3840x-hero-shot.jpg",
  },
  appleWebApp: {
    capable: true,
    title: "Orfina Porsche Design",
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
        {/* Preload default watch model with high priority for faster initial load */}
        <link
          rel="preload"
          href="/updated-models/black.glb"
          as="fetch"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* Prefetch other models in background */}
        <link
          rel="prefetch"
          href="/updated-models/grey.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="/updated-models/silver.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="/updated-models/nts.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="/updated-models/green.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
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
