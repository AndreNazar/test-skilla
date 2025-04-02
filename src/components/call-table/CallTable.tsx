import { TableRow } from './table-row'
import styles from './CallTable.module.scss'
import { TableHeader } from './table-row/TableHeader'

export function CallTable(){
    return (
        <div className={styles.call_table}>
            <TableHeader />
            <ul className={styles.call_table__list}>
                {Array(10).fill(0).map((_, i) => i + 1).map(index =>
                    <TableRow key={index} />
                )}
            </ul>
    </div>
    )
}