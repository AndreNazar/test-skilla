import { useEffect, useState } from "react"
import { ButtonAudio } from "../../../../ui"
import { Delete } from "../../../../ui/Delete"
import { Download } from "../../../../ui/Download"
import styles from "../TableRow.module.scss"
import Track from "./audio-components/Track"
import { formatTimeRecord } from "../../../../utils"

function AudioItem({time}: {time: number}) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(time * 1000)

  async function playAudioHandler() {
    // if(!isPlaying) {
    //   if(currentAudio === null){
    //     await CallsAPI.getAudio(record, partnership_id).then(res => {
    //     -------- API чета не работает :(((
    //   }
    // }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => { 

  }, [isPlaying])

  return (
    <div className={styles.audio}>
      <p className={styles.audio__time}>{formatTimeRecord(duration/1000)}</p>
      <ButtonAudio mode={isPlaying ? "pause" : "play"} onClick={playAudioHandler} />
      <Track setIsPlaying={setIsPlaying} duration={duration} setDuration={setDuration} isPlaying={isPlaying} time={time} /> 
      <Download />
      <Delete />
    </div>
  )
}

export default AudioItem
