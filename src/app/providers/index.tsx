import { DataProvider } from "./DataProvider";
import { DateFilterProvider } from "./DateFilterProvider";
import { HeaderProvider } from "./HeaderProvider";
import { TypeFilterProvider } from "./TypeFilterProvider";


export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <HeaderProvider>
        <TypeFilterProvider>
          <DateFilterProvider>
            {children}
          </DateFilterProvider>
        </TypeFilterProvider>
      </HeaderProvider>
    </DataProvider>
  )
}