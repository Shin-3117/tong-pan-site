import styles from "./page.module.css"

export default function Home() {
  return (
    <>
    <main className={styles.imgContainer}>
      <div className={styles.imgColum}>사진들1</div>
      <div className={styles.imgColum}>사진들2</div>
    </main>
    </>
  )
}
