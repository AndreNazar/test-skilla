import { useState } from "react"
import { addDays } from "date-fns"
import { DateFilterContext } from "../contexts"
import { IFilterDates } from "../../types/global"

export function DateFilterProvider({ children }: { children: React.ReactNode }) {
  const [currentDates, setCurrentDates] = useState<IFilterDates>({id: 0, title: "3 дня", dates: [addDays(new Date, -3), new Date()]})

  return <DateFilterContext.Provider value={{ currentDates, setCurrentDates }}>{children}</DateFilterContext.Provider>
}
