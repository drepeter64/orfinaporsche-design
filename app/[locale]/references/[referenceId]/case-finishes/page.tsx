import { CaseFinishesPage } from "@/_pages/reference-detail"
import { getAllReferenceIds } from "@/_pages/reference"
import { getCaseFinishesData } from "@/_pages/reference-detail/api/get-detail-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const ids = getAllReferenceIds()
  return ids.map((referenceId) => ({ referenceId }))
}

interface PageProps {
  params: {
    referenceId: string
    locale: string
  }
}

export default function CaseFinishes({ params }: PageProps) {
  const data = getCaseFinishesData(params.referenceId)

  if (!data) {
    notFound()
  }

  return <CaseFinishesPage data={data} />
}
