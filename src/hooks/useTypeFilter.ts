import { useContext } from "react"
import { TypeFilterContext } from "../app/contexts"

export const useTypeFilter = () => {
  const context = useContext(TypeFilterContext)
  if (!context) throw new Error("Нет провайдера")
  return context
}
