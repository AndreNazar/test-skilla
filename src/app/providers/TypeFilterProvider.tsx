import { useState } from "react"
import { TypeFilterContext } from "../contexts"

export function TypeFilterProvider({ children }: { children: React.ReactNode }) {
  const [currentType, setCurrentType] = useState<{id: number; title: string}>({ id: 0, title: "Все типы" })

  return <TypeFilterContext.Provider value={{ currentType, setCurrentType }}>{children}</TypeFilterContext.Provider>
}
