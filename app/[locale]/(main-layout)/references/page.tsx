import { ReferenceGuidePage } from "@/_pages/reference-guide"
import { Metadata } from "next"
import { reference_guide } from "@/shared/data"

export const metadata: Metadata = {
  title: reference_guide.meta_title,
  description: reference_guide.meta_description,
  keywords: [
    "Orfina Porsche Design",
    "Chronograph One",
    "Reference 7750",
    "Reference 7176",
    "Reference 7177",
    "Valjoux 7750",
    "Lemania 5100",
    "vintage chronograph",
    "Porsche Design watch",
    "watch reference guide",
    "collector guide",
  ],
  openGraph: {
    title: reference_guide.meta_title,
    description: reference_guide.meta_description,
    url: "https://orfinaporschedesign.com/references",
    siteName: "Orfina Porsche Design",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: reference_guide.meta_title,
    description: reference_guide.meta_description,
  },
  alternates: {
    canonical: "https://orfinaporschedesign.com/references",
  },
}

export default function ReferencesPage() {
  return <ReferenceGuidePage />
}
