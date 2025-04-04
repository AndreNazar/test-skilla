import { ArrowSvg } from "../../../ui"
import styles from "./TableRow.module.scss"
import AssessmentItem from "./row-components/AssessmentItem"
import { eAssessment } from "../../../types/enums"
import AudioItem from "./row-components/AudioItem"
import { CallTypes, IData } from "../../../types/global"
import { format } from "date-fns"
import { useMemo } from "react"
import { formatTimeRecord } from "../../../utils"

export function TableRow({ call }: { call: IData }) {
  const assessment = useMemo(() => {
    const rand = +call.id.toString().slice(-1)
    if (rand <= 3) return eAssessment.Excellent
    else if (rand <= 6) return eAssessment.Good
    else if (rand <= 9) return eAssessment.Bad
    return eAssessment.Bad
  }, [call])
  const getCallType = useMemo((): CallTypes => {
    if (call.status === "Не дозвонился") return "Unanswered"
    if (call.in_out === 1) return call.status === "Дозвонился" ? "Outgoing" : "Missed"
    return "Incoming"
  }, [call])

  const phone = useMemo(() => (call.in_out === 1 ? call.from_number : call.to_number), [call])


  return (
    <li className={styles.table_row}>
      <div className={styles.table_row__item}>
        <ArrowSvg type={getCallType} />
      </div>
      <div className={styles.table_row__item}>
        <p className={styles.table_row__text}>{format(new Date(call.date), "HH:mm")}</p>
      </div>
      <div className={styles.table_row__item}>
        <img src={call.person_avatar} className={styles.table_row__image} alt="" />
      </div>
      <div className={styles.table_row__item}>
        <p className={styles.table_row__text}>{call.contact_name || phone}</p>
        <p className={styles.table_row__text_extra}>{call.contact_company}</p>
      </div>
      <div className={styles.table_row__item}>
        <p className={`${styles.table_row__text} ${styles.table_row__text_extra}`}>{call.source}</p>
      </div>
      <div className={styles.table_row__item}>
        <AssessmentItem type={assessment} />
      </div>
      <div className={styles.table_row__item}>{call.record ? <AudioItem time={call.time} /> : call.time ? <p className={styles.table_row__text}>{formatTimeRecord(call.time)}</p> : ""}</div>
    </li>
  )
}
