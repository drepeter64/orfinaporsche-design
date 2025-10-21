import { notFound } from "next/navigation"
import { DialTypePage } from "@/_pages/reference-detail/ui/dial-type"
import path from "node:path"
import { getJsonByPath } from "@/features/getJsonByPath"

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
