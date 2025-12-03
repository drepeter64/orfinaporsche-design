import { Inter } from "next/font/google"

export const primaryFont = Inter({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin", "cyrillic"],
  variable: "--font-primary",
})
