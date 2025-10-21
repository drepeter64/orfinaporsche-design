import { notFound } from "next/navigation"
import { DialTypePage } from "@/_pages/reference-detail/ui/dial-type"
import path from "node:path"
import { getJsonByPath } from "@/features/getJsonByPath"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
  { params }: PageProps,
  parentMeta: ResolvingMetadata,
): Promise<Metadata> {
  const jsonFilePath = path.join(
    process.cwd(),
    "/src/shared/data/references/dial/type/",
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

interface PageProps {
  params: {
    type: string
    locale: string
    referenceId: string
  }
}

export default function DialType({ params }: PageProps) {
  const jsonFilePath = path.join(
    process.cwd(),
    "/src/shared/data/references/dial/type/",
    `${params.type}.json`,
  )
  const data = getJsonByPath(jsonFilePath)

  if (!data) {
    notFound()
  }

  return <DialTypePage data={data} />
}
