import styles from "./page.module.css"
import Image from "next/image"
import inputPng from '/public/insert-picture-icon.png'
import earth from '/public/earth.png'
import icons from '/public/icons.png'
import megaphone2 from '/public/megaphone2.png'
import network from '/public/network.png'
import worldline from '/public/world-line.png'

export default function Home() {
  return (
    <>
    <main className={styles.imgContainer}>
      <div className={styles.imgColum}>
        <Image src={inputPng} className={styles.img}/>
        <Image src={icons} className={styles.img}/>
        <Image src={network} className={styles.img}/>
      </div>
      <div className={styles.imgColum}>
        <Image src={earth} className={styles.img}/>
        <Image src={megaphone2} className={styles.img}/>
        <Image src={worldline} className={styles.img}/>
      </div>
    </main>
    </>
  )
}
