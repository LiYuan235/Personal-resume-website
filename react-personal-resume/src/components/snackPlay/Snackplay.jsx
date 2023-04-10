import { Link } from 'react-router-dom'
import styles from './Snackplay.module.css'
export function Snackplay() {
  return (
    <>
      <canvas
        id="myCanvas"
        width="320"
        height="320"
        style="background-color: black"
      ></canvas>
      <p id="myScore"></p>
      <p id="myScore2"></p>
      <button type="button" id="Start" onclick="location.reload()">
        開始新遊戲
      </button>
    </>
  )
}
