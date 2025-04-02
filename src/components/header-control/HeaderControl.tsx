import styles from './HeaderControl.module.scss'

export function HeaderControl() {
    
    return <div className={styles.header_control}>
        <FilterByType />
        <FilterByTime />
    </div>
}
