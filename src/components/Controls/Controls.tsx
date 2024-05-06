import React, {FC, useState} from 'react';
import styles from './Controls.module.scss'

interface IControls{
    showCheckboxes: ()=>void
}

const Controls: FC<IControls> = (props) => {
    const [selectAll,setSelectall] = useState(false);
    const {
        showCheckboxes
    } = props;
    const handleClick = ()=>{
        showCheckboxes();
        setSelectall(prevState => !prevState)
    }
    return (
        <div className={styles.container}>
            <span className={styles.totalUsers}>{selectAll?0:213}</span>
            {selectAll?
                <div>
                    <span className={styles.select}>Действия</span>
                    <span onClick={handleClick} className={styles.select}>Отменить</span>
                </div>
                :
                <span onClick={handleClick} className={styles.select}>Выбрать</span>
            }
        </div>
    );
};

export default Controls;
