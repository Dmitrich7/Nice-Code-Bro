import React, {useState} from 'react';
import styles from './DropDown.module.scss'

const DropDown = () => {
    const [active,setActive] = useState(false);
    const handleClick = ()=>{
        setActive(prevState=>!prevState)
    }
    return (
        <div onClick={handleClick} className={`${styles.dropDown} ${active? styles.active:''}`}>
                <span className={styles.dots}>
                    ...
                </span>
            {active?<div className={styles.menu}>
                <div className={styles.btnGroup}>
                    <span className={styles.btn}>Изменить</span>
                    <span className={styles.btn}>Удалить</span>
                </div>
            </div>:null}
        </div>
    );
};

export default DropDown;
