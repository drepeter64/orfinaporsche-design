import { getReferenceData, ReferencePage } from "@/_pages/reference"
import { notFound } from "next/navigation"

interface ReferencePageProps {
  params: {
    referenceId: string
    locale: string
  }
}

export default function Reference({ params }: ReferencePageProps) {
  const data = getReferenceData(params.referenceId)

  if (!data) {
    notFound()
  }

  return <ReferencePage data={data} />
}
