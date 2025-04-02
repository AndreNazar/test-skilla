import { ArrowSvg } from '../../../ui'
import styles from './TableRow.module.scss'
import testphoto from "../../../assets/testphoto.jpg"
import AssessmentItem from './row-components/AssessmentItem'
import { eAssessment } from '../../../types/enums'
import AudioItem from './row-components/AudioItem'

export function TableRow() {

  return <li className={styles.table_row}>
        <div className={styles.table_row__item}>
          <ArrowSvg type='Incoming' />
        </div>
        <div className={styles.table_row__item}>
          <p className={styles.table_row__text}>19:00</p> 
        </div>
        <div className={styles.table_row__item}>
          <img src={testphoto} className={styles.table_row__image} alt='' /> 
        </div>
        <div className={styles.table_row__item}>
          <p className={styles.table_row__text}>+7 (999) 674-34-23</p> 
          <p className={styles.table_row__text_extra}>ООО "Фестивальный эффект"</p> 
        </div>
        <div className={styles.table_row__item}>
          <p className={`${styles.table_row__text} ${styles.table_row__text_extra}`}>Rabota.ru</p> 
        </div>
        <div className={styles.table_row__item}>
          <AssessmentItem type={eAssessment.Excellent} />
        </div>
        <div className={styles.table_row__item}>
          {true
          ? <AudioItem />
          : <p className={styles.table_row__text}>19:00</p> }
        </div>
    </li>
}