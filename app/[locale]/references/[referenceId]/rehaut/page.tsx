import { RehautPage } from "@/_pages/reference-detail"
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

export default function Rehaut({ params }: PageProps) {
  const validIds = getAllReferenceIds()

  if (!validIds.includes(params.referenceId)) {
    notFound()
  }

  return (
    <RehautPage
      referenceId={params.referenceId}
      referenceTitle={params.referenceId}
    />
  )
}
