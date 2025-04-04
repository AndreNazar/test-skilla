import { useContext } from "react"
import { DateFilterContext } from "../app/contexts"

export const useDateFilter = () => {
  const context = useContext(DateFilterContext)
  if (!context) throw new Error("Нет провайдера")
  return context
}
