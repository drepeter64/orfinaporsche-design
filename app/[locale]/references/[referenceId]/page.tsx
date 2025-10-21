import { ReferencePage } from "@/_pages/reference"
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import path from "node:path"
import { getJsonByPath } from "@/features/getJsonByPath"

export async function generateMetadata(
  { params }: ReferencePageProps,
  parentMeta: ResolvingMetadata,
): Promise<Metadata> {
  const jsonFilePath = path.join(
    process.cwd(),
    "/src/shared/data/references/",
    `${params.referenceId}.json`,
  )
  const data = await getJsonByPath(jsonFilePath)
  const parentData = await parentMeta

  if (!data) {
    notFound()
  }

  return {
    title: data?.meta_title || parentData.title,
    description: data?.meta_description || parentData.description,
    keywords: data?.meta_keywords || parentData.description,
  }
}

interface ReferencePageProps {
  params: {
    referenceId: string
    locale: string
  }
}

export default function Reference({ params }: ReferencePageProps) {
  const jsonFilePath = path.join(
    process.cwd(),
    "/src/shared/data/references/",
    `${params.referenceId}.json`,
  )
  const data = getJsonByPath(jsonFilePath)

  if (!data) {
    notFound()
  }

  return <ReferencePage data={data} />
}
