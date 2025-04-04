import { TableRow } from "./table-row"
import styles from "./CallTable.module.scss"
import { TableHeader } from "./table-row/TableHeader"
import { useEffect, useRef, useState } from "react"
import CallsAPI from "../../api/CallsAPI"
import { useData, useHeader, useTypeFilter } from "../../hooks"
import { IData } from "../../types/global"
import { Loading } from "../../ui"
import { useDateFilter } from "../../hooks/useDateFilter"
import { format } from "date-fns"

export function CallTable() {
  const abortControllerRef = useRef<AbortController>(null)
  const { data, setData } = useData()
  const { currentType } = useTypeFilter()
  const { currentDates } = useDateFilter()
  const { items } = useHeader()
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    try {
      setIsLoading(true)
      abortControllerRef.current = new AbortController()
      const res = await CallsAPI.getByFilter({
        is_out: currentType.id !== 0 ? currentType.id-1 : null,
        start: currentDates.dates ? format(currentDates.dates[0], "yyyy-MM-dd") : undefined,
        end: currentDates.dates ? format(currentDates.dates[1], "yyyy-MM-dd") : undefined,
        sort_by: getSortTag(),
      }, abortControllerRef.current?.signal) as {results: IData[]}
      if(res){
        setData(res.results)
        setIsLoading(false)
      }
    } catch (err: unknown) {
      if (err instanceof Error) if (err.name !== "AbortError") console.error(err)
    }
  }

  function getSortTag(): string | undefined {
    const title_id = items.find((item) => item.filter !== "None")?.id
    if(title_id === 2) return "date"
    if(title_id === 7) return "duration"
    return undefined
  }

  useEffect(() => {
    fetchData()
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [currentType, currentDates, items])


  return (
    <div className={styles.call_table}>
      <TableHeader />
      <ul className={styles.call_table__list}>
        {!isLoading
        ? data.map((call) => (
            <TableRow key={call.id} call={call} />
          ))
        : <Loading />
        }
      </ul>
    </div>
  )
}
