import styles from "./Header.module.css"
import SearchInput from "./SearchInput"

export default function Header (){
    return(
        <>
        <main className={styles.header}>
            <div className={styles.title}>사이트이름</div>
            <SearchInput/>
            <div className={styles.icon}>대충 뭔가 들어감</div>
        </main>
        </>
    )
}