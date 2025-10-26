import { Metadata, ResolvingMetadata } from "next"
import path from "node:path"
import { getJsonByPath } from "@/features/getJsonByPath"
import { notFound } from "next/navigation"
import { AboutPage } from "@/_pages/about"

export async function generateMetadata(
  { params }: PageProps,
  parentMeta: ResolvingMetadata,
): Promise<Metadata> {
  const jsonFilePath = path.join(process.cwd(), "/src/shared/data/", "about_page.json")
  const data = await getJsonByPath(jsonFilePath)
  const parentData = await parentMeta

  console.log(params)

  if (!data) {
    notFound()
  }

  return {
    title: data?.meta_title || parentData.title,
    description: data?.meta_description || parentData.description,
    keywords: data?.meta_keywords || parentData.description,
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function About() {
  return <AboutPage />
}
