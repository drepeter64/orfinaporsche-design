import { DialPage, getDialData } from "@/_pages/reference-detail"
import { getAllReferenceIds } from "@/_pages/reference"
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

export default function Dial({ params }: PageProps) {
  const validIds = getAllReferenceIds()

  if (!validIds.includes(params.referenceId)) {
    notFound()
  }

  const data = getDialData(params.referenceId)

  if (!data) {
    notFound()
  }

  return <DialPage data={data} />
}
