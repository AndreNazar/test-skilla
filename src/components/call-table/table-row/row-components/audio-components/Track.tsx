import styles from '../../TableRow.module.scss'

function Track (){

    return <div className={styles.audio__track}>
        <span className={styles.audio__track__line}></span>
        <span className={styles.audio__track__interaction}></span>
    </div>
}

export default Track