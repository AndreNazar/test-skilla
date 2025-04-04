import { createContext } from "react"
import { DataContextType, HeaderContextType, TypeFilterContextType, DateFilterContextType } from "./types"

export const DataContext = createContext<DataContextType | null>(null)
export const HeaderContext = createContext<HeaderContextType | null>(null)  
export const TypeFilterContext = createContext<TypeFilterContextType | null>(null)
export const DateFilterContext = createContext<DateFilterContextType | null>(null)