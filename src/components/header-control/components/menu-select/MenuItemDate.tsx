import styles from './Menu.module.scss'
import { CalendarSvg } from '../../../../ui';
import type { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import { format } from 'date-fns';
import { useDateFilter } from '../../../../hooks/useDateFilter';

export function MenuItemDate({setIsShow}: {setIsShow: (prev: boolean) => void}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const { setCurrentDates } = useDateFilter()

  function getDate() {
    if (range?.from && range?.to) {
      return `${format(range.from, 'dd.MM.yy')} - ${format(range.to, 'dd.MM.yy')}`;
    }
    return '__.__.__ - __.__.__';
  }

  useEffect(() => {
    if(range && range.from && range.to) {
      setIsShow(false)
      setCurrentDates({id: 4, title: getDate(), dates: [range.from, range.to]})
    }
  }, [showCalendar])

    
  return (
    <div className={styles.item_date}>
      <p className={styles.item_date__title}>Указать даты</p>
      <p className={styles.item_date__value}>{getDate()}</p>
      <span onClick={() => setShowCalendar(!showCalendar)} className={styles.item_date__icon}>
        <CalendarSvg />
      </span>
      
      <Menu propIsShow={showCalendar} propSetIsShow={() => setShowCalendar(!showCalendar)} typeMenu='calendar'>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          onDayBlur={() => setShowCalendar(false)}
          numberOfMonths={2}
        />
      </Menu>
    </div>
  )
}
