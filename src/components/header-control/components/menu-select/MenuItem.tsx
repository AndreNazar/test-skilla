import styles from './Menu.module.scss'

export function MenuItem({value, onClick, current}: {value: string, onClick: () => void, current?: boolean}) {
  return (
    <div onClick={onClick} className={`${styles.menu__item} ${current ? styles['menu__item--active'] : ''}`}>
      <p>{value}</p>
    </div>
  )
}
