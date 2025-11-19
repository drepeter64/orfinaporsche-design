import React, { PropsWithChildren } from "react"
import { MainLayout } from "@/widgets/layout"

export const dynamic = "force-dynamic"

export default function LocaleLayout({ children }: Readonly<ILocaleLayoutProps>) {
  return <MainLayout>{children}</MainLayout>
}

export interface ILocaleLayoutProps extends PropsWithChildren {}
