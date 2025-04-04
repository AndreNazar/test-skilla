import { useEffect, useState } from "react"
import { useTypeFilter } from "../../../../hooks"
import Menu from "./Menu"
import { MenuItem } from "./MenuItem"

interface PropsMenuSelectType {
  isShow: boolean
  setIsShow: (prev: boolean) => void
}

export function MenuSelectType({isShow, setIsShow}: PropsMenuSelectType) {
  const { currentType, setCurrentType } = useTypeFilter()

  const [types, setTypes] = useState([
    {id: 0, title: "Все типы"},
    {id: 1, title: "Входящие"},
    {id: 2, title: "Исходящие"}
  ])

  function handleClick(type: {id: number, title: string}) {
    setCurrentType(type)
    setIsShow(false)
  }

  return (
    <Menu propIsShow={isShow} propSetIsShow={setIsShow} typeMenu="type">
      {types.map((type) => (
        <MenuItem 
        key={type.id} 
        current={currentType.id === type.id} 
        onClick={() => handleClick(type)} 
        value={type.title} />
      ))}
    </Menu>
  )
}
