import React from 'react';
import styles from './Userhat.module.scss'
import DropDown from "../DropDown/DropDown";

const Userhat = () => {

    return (
        <div className={styles.header}>
            <div className={styles.pfp}></div>
            <div className={styles.infoGroup}>
                <div className={styles.username}>Рожков Денис Петрович</div>
                <div className={styles.userInfo}>30 лет, муж</div>
            </div>
            <span className={styles.dropDown}>
                <DropDown />
            </span>
        </div>
    );
};

export default Userhat;
