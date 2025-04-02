import { eAssessment, eCallType, eFilterHeadings } from "./enums"

export type CallTypes = keyof typeof eCallType
export type TFilterHeadings = keyof typeof eFilterHeadings
export type TAssessment = keyof typeof eAssessment

export interface IItems {
  id: number
  title: string
  filter: TFilterHeadings
}
