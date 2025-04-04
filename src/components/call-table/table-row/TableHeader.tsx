import { useHeader } from "../../../hooks"
import styles from "./TableRow.module.scss"
import ItemHeader from "./header-components/ItemHeader"

export function TableHeader() {
  const {items, updateFilter} = useHeader()

  return (
    <div className={styles.table_row + " " + styles.table_row__header}>
      {items.map(({ id, title, filter }) => (
        <ItemHeader key={id} id={id} title={title} filter={filter} setItemsHandler={updateFilter} />
      ))}
    </div>
  )
}
