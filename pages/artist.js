import styles from "./artist.module.scss"

export default function Artist(){
    return(
        <>
        <h1>통판올리기</h1>
        
        <div>부스 사진</div>
        <div>부스 이름</div>
        <input></input>

        <div>상품 사진</div>

    <div className={styles.table}>
        <div className={styles.tableHead}>
            <div className={styles.inputTitle}>상품 이름</div>
            <div className={styles.inputTitle}>제고</div>
        </div>
        
        <div className={styles.tableBody}>
            <div className={styles.inputContext}>
                <input className={styles.input}></input></div>
            <div className={styles.inputContext}>
                <input className={styles.input}></input></div>
            <button>+</button>
        </div>
    </div>
    
        </>
    )
}
