import { createContext, useCallback, useMemo, useState } from "react"
import { IItems } from "../../types/global"
import { eFilterHeadings } from "../../types/enums"

interface HeaderProviderProps {
  children: React.ReactNode
}

interface HeaderContextType {
  items: IItems[]
  updateFilter: (id: number, filter: eFilterHeadings) => void
}

export const HeaderContext = createContext<HeaderContextType | null>(null)

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const initialItems: IItems[] = [
    { id: 1, title: "Тип", filter: eFilterHeadings.None },
    { id: 2, title: "Время", filter: eFilterHeadings.None },
    { id: 3, title: "Сотрудник", filter: eFilterHeadings.None },
    { id: 4, title: "Звонок", filter: eFilterHeadings.None },
    { id: 5, title: "Источник", filter: eFilterHeadings.None },
    { id: 6, title: "Оценка", filter: eFilterHeadings.None },
    { id: 7, title: "Длительность", filter: eFilterHeadings.None },
  ]

  const [items, setItems] = useState<IItems[]>(initialItems)

  const updateFilter = useCallback((id: number, filter: eFilterHeadings) => {
    setItems((prev) => prev.map((item) => (item.id === id 
        ? { ...item, filter } 
        : {...item, filter: eFilterHeadings.None})))
  }, [])

  const contextValue = useMemo(
    () => ({
      items,
      updateFilter,
    }),
    [items, updateFilter]
  )

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
}