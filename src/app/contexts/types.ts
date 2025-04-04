import { eFilterHeadings } from "../../types/enums"
import { IFilterDates, IItems } from "../../types/global"

export interface DataContextType {
  data: any[]
  setData: (data: any[]) => void
}
export interface HeaderContextType {
  items: IItems[]
  updateFilter: (id: number, filter: eFilterHeadings) => void
}

export interface TypeFilterContextType {
  currentType: {id: number; title: string}
  setCurrentType: (type: {id: number; title: string}) => void
}
export interface DateFilterContextType {
  currentDates: IFilterDates
  setCurrentDates: (date: IFilterDates) => void
}
