import { Metadata } from "next"
import { StoryPage } from "@/_pages/story"

export const metadata: Metadata = {
  title: "The Story",
  description:
    "Discover the history of the Orfina Porsche Design Chronograph One - from Ferdinand Alexander Porsche's vision in 1972 to its iconic status worn by legends like Tom Cruise in Top Gun, Mario Andretti, and Gianni Agnelli.",
  keywords: [
    "Orfina Porsche Design History",
    "Ferdinand Alexander Porsche",
    "Butzi Porsche",
    "Chronograph One History",
    "Top Gun Watch",
    "Mario Andretti Watch",
    "Gianni Agnelli Watch",
    "Porsche 911 Watch",
    "Valjoux 7750",
    "Lemania 5100",
  ],
  openGraph: {
    title: "The Story | Orfina Porsche Design",
    description:
      "The history of the iconic Orfina Porsche Design Chronograph One - from Ferdinand Alexander Porsche's vision to Top Gun fame.",
    images: [
      {
        url: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/the-story/ferdinand-alexander-porsche.jpg",
        width: 1200,
        height: 630,
        alt: "Ferdinand Alexander Porsche",
      },
    ],
  },
}

export default function Story() {
  return <StoryPage />
}
