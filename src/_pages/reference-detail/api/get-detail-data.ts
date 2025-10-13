import {
  CaseFinishesData,
  CasebackData,
  RehautData,
  DialData,
} from "@/shared/types/reference-detail.interface"

// Import case finishes data
import ref7176CaseFinishes from "@/shared/data/references/details/7176-case-finishes.json"
import ref7750CaseFinishes from "@/shared/data/references/details/7750-case-finishes.json"
import ref7177CaseFinishes from "@/shared/data/references/details/7177-case-finishes.json"

const caseFinishesMap: Record<string, CaseFinishesData> = {
  "7176": ref7176CaseFinishes as CaseFinishesData,
  "7750": ref7750CaseFinishes as CaseFinishesData,
  "7177": ref7177CaseFinishes as CaseFinishesData,
}

const casebackMap: Record<string, CasebackData> = {}
const rehautMap: Record<string, RehautData> = {}
const dialMap: Record<string, DialData> = {}

export function getCaseFinishesData(referenceId: string): CaseFinishesData | null {
  return caseFinishesMap[referenceId] || null
}

export function getCasebackData(referenceId: string): CasebackData | null {
  return casebackMap[referenceId] || null
}

export function getRehautData(referenceId: string): RehautData | null {
  return rehautMap[referenceId] || null
}

export function getDialData(referenceId: string): DialData | null {
  return dialMap[referenceId] || null
}
