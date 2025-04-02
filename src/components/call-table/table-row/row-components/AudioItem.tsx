import { useState } from "react"
import { ButtonAudio } from "../../../../ui"
import { Delete } from "../../../../ui/Delete"
import { Download } from "../../../../ui/Download"
import styles from "../TableRow.module.scss"
import Track from "./audio-components/Track"

function AudioItem() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={styles.audio}>
      <p className={styles.audio__time}>12:08</p>
      <ButtonAudio mode={isPlaying ? "pause" : "play"} onClick={() => setIsPlaying(!isPlaying)} />
      <Track />
      <Download />
      <Delete />
    </div>
  )
}

export default AudioItem
