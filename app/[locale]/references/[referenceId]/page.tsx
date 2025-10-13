import { getReferenceData, getAllReferenceIds, ReferencePage } from "@/_pages/reference"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const ids = getAllReferenceIds()
  return ids.map((referenceId) => ({
    referenceId,
  }))
}

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
