import { useState } from "react"
import { IData } from "../../types/global";
import { DataContext } from "../contexts";

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IData[]>([])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}