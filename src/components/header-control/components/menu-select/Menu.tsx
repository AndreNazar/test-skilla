import { useEffect, useRef, useState } from "react"
import styles from "./Menu.module.scss"

interface PropsMenu {
    children?: React.ReactNode
    typeMenu: string
    propIsShow: boolean
    propSetIsShow: (prev: boolean) => void
}

function Menu({children, typeMenu, propIsShow, propSetIsShow}: PropsMenu) {

  const [isShow, setIsShow] = useState(false)
  const [isClose, setIsClose] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(propIsShow){
      setIsShow(true)
      
      setTimeout(() => {
        setIsClose(false)
      }, 10);
    } else {
      setIsClose(true)
      setTimeout(() => {
        setIsShow(false)
      }, 100);
    }
  }, [propIsShow])

  

  useEffect(() => {
    if (!propIsShow) return;

    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        propSetIsShow(false);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [propIsShow])

  return isShow && <div ref={menuRef} className={`
    ${styles.menu} 
    ${styles[`menu-${typeMenu}`]} 
    ${isClose ? styles[`menu--close`] : styles[`menu--open`]}
    `}>
        {children}
    </div>
}

export default Menu
