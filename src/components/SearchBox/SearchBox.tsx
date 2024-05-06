import React, {useRef, useState} from 'react';
import styles from './SearchBox.module.scss'
import Magnifyingglass from '../../../public/magnifyingglass.svg'

const SearchBox = () => {
    const ref = useRef(null);
    const [active,setActive] = useState(false);
    const handleActivation = () =>{
        setActive(true)
        ref.current.focus();
    }
    const handleDeactivation = () =>{
        setActive(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <button onClick={handleActivation} className={active?styles.searchBtnActive:styles.searchBtn}>
                    <Magnifyingglass className={styles.icon}/>
                </button>
                <input ref={ref} type={"search"} className={active?styles.searchBoxActive:styles.searchBoxInactive}>

                </input>
                {active? <button onClick={handleDeactivation} className={styles.closeBtn}><div className={styles.plus}>+</div></button>:null}
            </div>
        </div>
    );
};

export default SearchBox;
