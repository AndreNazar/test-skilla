import { CallTable } from '../../components/call-table'
import styles from './CallsPage.module.scss'

export function CallsPage() {
  return (
    <div className={styles.calls_page}>
      <CallTable />
    </div>
  )
}