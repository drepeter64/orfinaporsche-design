import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { localeConfig } from "./config"
import { routing } from "./routing"
const { locales } = localeConfig

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  if (!locales.includes(<string>requested)) notFound()

  const locale = locales.includes(<string>requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (await import(`./translates/${requested}.json`)).default,
  }
})
