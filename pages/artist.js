import styles from "./artist.module.scss"
import Image from "next/image"
import inputPng from '/public/insert-picture-icon.png'
import { useEffect, useState } from "react"

export default function Artist(){
    const [TableForm, setTableForm] = useState([{name: '', value: ''}]);

    const handleAddForm = () => {
        const values = [...TableForm, {name:'', value:''}];
        setTableForm(values);
    }

    const handleRemoveForm = (index) => {
        const values = [...TableForm].splice(index, 1);
        console.log(index);
        setTableForm(values);
    }

    const handleInputForm =(index, e) => {
        const values = [...TableForm];
        if(e.target.name === 'name'){
            values[index].name = e.target.value;
        }else{
            values[index].value = e.target.value;
        }
        setTableForm(values);
    }

    const handleSubmit = (e)=>{
        e.prevnetDefault();
        console.log(TableForm);
    }

    useEffect(()=>{
        console.log('테이블 값 변경됨 :', TableForm);
    },[TableForm]);
    
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
            
            <form className={styles.tableBody} onSubmit={handleSubmit}>
                {TableForm.map((field, index) => (
                    <div key={index} className={styles.inputContext}>
                        <input className={styles.input}
                            type="text"
                            placeholder="상품명"
                            name="name"
                            value={field.name}
                            onChange={(e)=> handleInputForm(index, e)}
                        />

                        <input className={styles.input}
                            type="text"
                            placeholder="제고 수"
                            name="value"
                            value={field.value}
                            onChange={(e)=> handleInputForm(index, e)}
                        />
                        <button 
                            type="button"
                            onClick={()=>handleRemoveForm(index)}>
                                제거
                        </button>
                    </div>
                ))}
                
                <button
                    type="button"
                    onClick={()=>handleAddForm()}>
                        +
                </button>
            </form>
        </div>
    </div>
    <button className={styles.goodsSubmit} type="submit">등록하기</button>
   
    
        </>
    )
}
