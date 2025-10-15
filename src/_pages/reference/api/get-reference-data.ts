import { ReferenceData } from "@/shared/types/reference.interface"
import ref7750Data from "@/shared/data/references/7750.json"
import ref7176Data from "@/shared/data/references/7176.json"
import ref7177Data from "@/shared/data/references/7177.json"

const referencesMap: Record<string, ReferenceData> = {
  // @ts-expect-error json data not typed
  "7750": ref7750Data as ReferenceData,
  // @ts-expect-error json data not typed
  "7176": ref7176Data as ReferenceData,
  "7177": ref7177Data as ReferenceData,
}

export function getReferenceData(referenceId: string): ReferenceData | null {
  return referencesMap[referenceId] || null
}

export function getAllReferenceIds(): string[] {
  return Object.keys(referencesMap)
}
