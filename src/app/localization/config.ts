export const localeConfig: ILocaleConfig = {
  locales: ["uk", "en"],
  defaultLocale: "uk",
  localeDetection: false,
  localePrefix: "as-needed" as "as-needed" | "always" | "never",
}

interface ILocaleConfig {
  locales: string[]
  defaultLocale: string
  localeDetection: boolean
  localePrefix: "as-needed" | "always" | "never"
}
