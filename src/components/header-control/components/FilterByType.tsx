import { ArrowFilter } from '../../../ui'
import styles from '../HeaderControl.module.scss'
import { useTypeFilter } from '../../../hooks'

interface PropFilterByType {
    setIsShow: (prev: boolean) => void
    isShow: boolean
}

function FilterByType ({setIsShow, isShow}: PropFilterByType) {

    const {currentType} = useTypeFilter()

    return <div onClick={() => setIsShow(!isShow)} className={`${styles.filter_by_type} .menu_button`}>
        <p>{currentType.title}</p>
        <ArrowFilter color={isShow ? "#002CFB" : "#ADBFDF"} filter={isShow ? 'Ascending' : 'Descending'} />
    </div>
}

export default FilterByType