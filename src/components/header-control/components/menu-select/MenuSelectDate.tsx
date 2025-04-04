import { useState } from "react"
import { useDateFilter } from "../../../../hooks/useDateFilter"
import Menu from "./Menu"
import { MenuItem } from "./MenuItem"
import { MenuItemDate } from "./MenuItemDate"
import { addDays, addMonths, addWeeks, addYears } from "date-fns"
import { IFilterDates } from "../../../../types/global"

export function MenuSelectDate({isShow, setIsShow}: {isShow: boolean, setIsShow: (prev: boolean) => void}) {

  
  const { currentDates, setCurrentDates } = useDateFilter()

  const [dates, setDates] = useState<IFilterDates[]>([
    {id: 0, title: "3 дня", dates: [addDays(new Date, -3), new Date()]},
    {id: 1, title: "Неделя", dates: [addWeeks(new Date, -1), new Date()]},
    {id: 2, title: "Месяц", dates: [addMonths(new Date, -1), new Date()]},
    {id: 3, title: "Год", dates: [addYears(new Date, -1), new Date()]},
  ])

  function handleClick(date: IFilterDates) {
    setCurrentDates(date)
    setIsShow(false)
  }
  return (
    <Menu propIsShow={isShow} propSetIsShow={setIsShow} typeMenu="date">
      {
        dates.map((date) => (
          <MenuItem 
          key={date.id}
          current={currentDates.id === date.id}
          onClick={() => handleClick(date)} 
          value={date.title} />
        ))
      }
      <MenuItemDate setIsShow={setIsShow} />
    </Menu>
  )
}
