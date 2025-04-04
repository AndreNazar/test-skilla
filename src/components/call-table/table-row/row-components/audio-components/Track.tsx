import { useEffect, useMemo } from 'react'
import styles from '../../TableRow.module.scss'

interface PropsTrack {
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
    duration: number
    time: number
    setDuration: any
}

function Track ({isPlaying, setIsPlaying, duration, setDuration, time}: PropsTrack) {

    const getPercent = useMemo(() => `${100 - ((duration * 100) / (time * 1000))}%`, [duration])

    useEffect(() => {
        if(isPlaying) {
            const interval = setInterval(() => {
                setDuration((prev:number) => prev - 100)
            }, 100)
            return () => clearInterval(interval)
        }
    }, [isPlaying])

    useEffect(() => {
        if(isPlaying && duration <= 0) {
            setIsPlaying(false)
            setDuration(time * 1000)
        }
    }, [duration])

    return <div className={styles.audio__track}>
        <span style={{width: getPercent}} className={styles.audio__track__line}></span>
        <span className={styles.audio__track__interaction}></span>
    </div>
}

export default Track