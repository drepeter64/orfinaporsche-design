import React from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

export const ServerProviders: React.FC<IProvidersProps> = ({ children, locale }) => {
  unstable_setRequestLocale(locale)
  const messages = useMessages()
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  )
}

export interface IProvidersProps extends React.PropsWithChildren {
  locale: string
}
