import { useMemo } from "react"
import styles from "../TableRow.module.scss"
import { eAssessment } from "../../../../types/enums"

function AssessmentItem ({type}: {type: eAssessment}) {

    const assessmentInfo = useMemo((): {prefix: string | null, text: string} => {
        switch (type) {
            case eAssessment.Bad:
                return {prefix: "bad", text: 'Плохо'}
            case eAssessment.Good:
                return {prefix: "good", text: 'Хорошо'}
            case eAssessment.Excellent:
                return {prefix: "excellent", text: 'Отлично'}
            default: 
                return {prefix: null, text: 'Скрипт не использован'}
        }
    }, [type])

    return <div className={`${styles.assessment}`}>
        <div className={`
            ${styles.assessment_item}
            ${styles[`assessment_item--${assessmentInfo.prefix}`]}
            `}>
            {assessmentInfo.text}
        </div>
    </div>
}

export default AssessmentItem