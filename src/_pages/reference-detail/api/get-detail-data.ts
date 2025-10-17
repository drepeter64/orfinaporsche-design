import {
  CaseFinishesData,
  CasebackData,
  RehautData,
  DialData,
} from "@/shared/types/reference-detail.interface"

// Import case finishes data
import ref7176CaseFinishes from "@/shared/data/references/case-finishes/7176.json"
import ref7750CaseFinishes from "@/shared/data/references/case-finishes/7750.json"
import ref7177CaseFinishes from "@/shared/data/references/case-finishes/7177.json"

import ref7176CaseBack from "@/shared/data/references/caseback/7176.json"
import ref7750CaseBack from "@/shared/data/references/caseback/7750.json"
import ref7177CaseBack from "@/shared/data/references/caseback/7177.json"

import ref7176Rehaut from "@/shared/data/references/rehaut/7176.json"
import ref7750Rehaut from "@/shared/data/references/rehaut/7750.json"
import ref7177Rehaut from "@/shared/data/references/rehaut/7177.json"

import ref7176Dial from "@/shared/data/references/dial/7176.json"
import ref7750Dial from "@/shared/data/references/dial/7750.json"
import ref7177Dial from "@/shared/data/references/dial/7177.json"

const caseFinishesMap: Record<string, CaseFinishesData> = {
  "7176": ref7176CaseFinishes as CaseFinishesData,
  "7750": ref7750CaseFinishes as CaseFinishesData,
  "7177": ref7177CaseFinishes as CaseFinishesData,
}

const casebackMap: Record<string, CasebackData> = {
  "7176": ref7176CaseBack as CasebackData,
  "7750": ref7750CaseBack as CasebackData,
  "7177": ref7177CaseBack as CasebackData,
}

const rehautMap: Record<string, RehautData> = {
  "7176": ref7176Rehaut as RehautData,
  "7750": ref7750Rehaut as RehautData,
  "7177": ref7177Rehaut as RehautData,
}

const dialMap: Record<string, DialData> = {
  "7176": ref7176Dial as DialData,
  "7750": ref7750Dial as DialData,
  "7177": ref7177Dial as DialData,
}

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
