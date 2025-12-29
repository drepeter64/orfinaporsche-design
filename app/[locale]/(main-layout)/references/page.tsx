import { ReferenceGuidePage } from "@/_pages/reference-guide"
import { Metadata } from "next"
import { reference_guide } from "@/shared/data"

export const metadata: Metadata = {
  title: reference_guide.meta_title,
  description: reference_guide.meta_description,
}

export default function ReferencesPage() {
  return <ReferenceGuidePage />
}
