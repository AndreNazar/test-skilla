import { CallTable } from '../../components/call-table'
import { HeaderControl } from '../../components/header-control/HeaderControl'
import styles from './CallsPage.module.scss'

export function CallsPage() {
  return (
    <div className={styles.calls_page}>
      <HeaderControl />
      <CallTable />
    </div>
  )
}