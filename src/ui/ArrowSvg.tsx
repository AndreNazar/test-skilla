import { useMemo } from "react"
import { CallTypes } from "../types/global"
import { eCallType } from "../types/enums"

export function ArrowSvg({type}: {type: CallTypes}) {
  const getColor = useMemo(() => {
    switch (type) {
      case eCallType.Incoming:
        return "#002CFB"
      case eCallType.Outgoing:
        return "#28a879"
      case eCallType.Missed:
        return "#EA1A4F"
      case eCallType.Unanswered:
        return "#EA1A4F"
      default:
        return "#000"
    }
  }, [type])

  const getRotate = useMemo(() => {
    switch (type) {
      case eCallType.Incoming:
        return "rotate(0deg)"
      case eCallType.Outgoing:
        return "rotate(180deg)"
      case eCallType.Missed:
        return "rotate(0deg)"
      case eCallType.Unanswered:
        return "rotate(180deg)"
      default:
        return "rotate(0deg)"
    }
  }, [type])

  return (
    <svg style={{transform: getRotate}} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z" fill={getColor} />
    </svg>
  )
}
