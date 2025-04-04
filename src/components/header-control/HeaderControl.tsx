import { useState } from 'react'
import FilterByDate from './components/FilterByDate'
import FilterByType from './components/FilterByType'
import { MenuSelectDate } from './components/menu-select/MenuSelectDate'
import { MenuSelectType } from './components/menu-select/MenuSelectType'
import styles from './HeaderControl.module.scss'
export function HeaderControl() {

    const [isShowMenuType, setIsShowMenuType] = useState(false)
    const [isShowMenuDate, setIsShowMenuDate] = useState(false)
    function resetMenu(){
        setIsShowMenuType(false)
        setIsShowMenuDate(false)
    }
    
    
    return <div className={styles.header_control}>
        <FilterByType isShow={isShowMenuType} setIsShow={setIsShowMenuType} />
        <FilterByDate isShow={isShowMenuDate} setIsShow={setIsShowMenuDate} />
        <MenuSelectType isShow={isShowMenuType} setIsShow={setIsShowMenuType} />
        <MenuSelectDate isShow={isShowMenuDate} setIsShow={setIsShowMenuDate} />
    </div>
}
