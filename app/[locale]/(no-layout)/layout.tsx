import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { LoginLayout } from "@/widgets/login-layout"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Login Page - ORFINA PORSCHE DESIGN",
  description: "Please put your password for check all pages",
  keywords: "ORFINA PORSCHE DESIGN, Login Page",
  icons: "/favicon.png",
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
}

export default function Layout({ children }: Readonly<ILoginLocaleLayoutProps>) {
  return <LoginLayout>{children}</LoginLayout>
}

export interface ILoginLocaleLayoutProps extends PropsWithChildren {}
