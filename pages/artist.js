import styles from "./artist.module.scss"
import Image from "next/image"
import inputPng from '/public/insert-picture-icon.png'

export default function Artist(){
    return(
        <>
        <h1 className={styles.h1}>통판 등록</h1>
    <div className={styles.boose}>
        <div className={styles.booseHead}>
            <div>부스 이름</div>
            <input></input>
        </div>
        <div className={styles.booseBody}>
            <div>부스 사진</div>
            <Image src={inputPng} className={styles.booseImg}/>
        </div>
    </div>

    <div className={styles.goods}>
        <div className={styles.goodsImg}> 
            <div className={styles.inputTitle}>상품 사진</div>
            <Image src={inputPng} className={styles.img}/>
        </div>
        
        <div className={styles.table}>
            <div className={styles.tableHead}>
                <div className={styles.inputTitle}>상품 이름</div>
                <div className={styles.inputTitle}>제고</div>
            </div>
            
            <div className={styles.tableBody}>
                <div className={styles.inputContext}>
                    <input className={styles.input}></input></div>
                <div className={styles.inputContext}>
                    <input className={styles.input} type="number"></input></div>
                <button>+</button>
            </div>
        </div>
    </div>
    <button className={styles.goodsSubmit}>등록하기</button>
   
    
        </>
    )
}
