import { Metadata } from "next"
import { HomePage } from "@/_pages/home"

export const metadata: Metadata = {
  title: "Home | Orfina Porsche Design",
  description:
    "Explore the definitive archive of Orfina Porsche Design Chronograph One watches. Discover References 7750, 7176, and 7177 - the iconic black chronographs designed by Ferdinand Alexander Porsche.",
  keywords: [
    "Orfina Porsche Design",
    "Chronograph One",
    "Reference 7750",
    "Reference 7176",
    "Reference 7177",
    "Porsche Design Watch",
    "Black PVD Chronograph",
  ],
  openGraph: {
    title: "Orfina Porsche Design | Chronograph One Archive",
    description:
      "The definitive archive of Orfina Porsche Design Chronograph One watches - References, Components, and History.",
    images: [
      {
        url: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/main-page-photos/preview-3840x-hero-shot.jpg",
        width: 1200,
        height: 630,
        alt: "Orfina Porsche Design Chronograph One",
      },
    ],
  },
}

export default function Home() {
  return <HomePage />
}
