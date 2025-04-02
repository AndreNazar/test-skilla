import { eFilterHeadings } from "../../../../types/enums"
import { IItems } from "../../../../types/global"
import ArrowFilter from "./ArrowFilter"
import styles from "../TableRow.module.scss"

const ItemHeader = ({id, title, filter, setItemsHandler }: IItems & { setItemsHandler: (id: number, filter: eFilterHeadings) => void}) => {
    const getFilter = () => {
      switch (filter) {
        case eFilterHeadings.Ascending:
          return eFilterHeadings.Descending
        case eFilterHeadings.Descending:
          return eFilterHeadings.Ascending
        case eFilterHeadings.None:
          return eFilterHeadings.Descending
        default: return eFilterHeadings.None
      }
    }
  return (
    <button onClick={() => setItemsHandler(id, getFilter())} className={styles.table_row__header_item}>
      <p>{title}</p>
      {filter !== eFilterHeadings.None && <ArrowFilter filter={filter} />}
    </button>
  )
}
export default ItemHeader