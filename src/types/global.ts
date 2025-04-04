import { eAssessment, eCallType, eFilterHeadings } from "./enums"

export type CallTypes = keyof typeof eCallType
export type TFilterHeadings = keyof typeof eFilterHeadings
export type TAssessment = keyof typeof eAssessment

export interface IItems {
  id: number
  title: string
  filter: TFilterHeadings
}

export interface IData {
  id: number,
  partner_data: {
      id: string,
      name: string,
      phone: string
  },
  partnership_id: number,
  date: string,
  time: number,
  status: string,
  record: string,
  in_out: number,
  line_number: string,
  from_number: string,
  from_extension: string,
  to_number: string,
  source: string,
  line_name: string,
  errors: string[],
  disconnect_reason: string,
  contact_name: string,
  contact_company: string,
  person_id: 2726,
  person_name: string,
  person_surname: string,
  person_avatar: string,
  candidate_id: number,
}

export interface IFilterDates {
  id: number
  title: string
  dates: [Date, Date]
}