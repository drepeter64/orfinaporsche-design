import { CaseFinishesPage } from "@/_pages/reference-detail"
import { getCaseFinishesData } from "@/_pages/reference-detail/api/get-detail-data"
import { notFound } from "next/navigation"

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
