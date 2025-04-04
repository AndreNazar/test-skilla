import { useDateFilter } from '../../../hooks/useDateFilter'
import { ArrowChange } from '../../../ui'
import { CalendarSvg } from '../../../ui/CalendarSvg'
import styles from '../HeaderControl.module.scss'

interface PropFilterByDate {
  setIsShow: (prev: boolean) => void
  isShow: boolean
}

function FilterByDate({setIsShow, isShow}:PropFilterByDate) {

  
    const { currentDates } = useDateFilter()

  return (
    <div className={styles.filter_by_date}>
      <ArrowChange type="prev" />
      <div onClick={() => setIsShow(!isShow)} className={`${styles.filter_by_date__select} .menu_button`}>
        <CalendarSvg />
        <p className={styles.select_text}>{currentDates.title}</p>
      </div>
      <ArrowChange type="next" />
    </div>
  )
}

export default FilterByDate
