import React from 'react';
import styles from './Userhat.module.scss'
import DropDown from "../DropDown/DropDown";

const Userhat = () => {
    return (
        <div className={styles.header}>
            <DropDown/>
        </div>
    );
};

export default Userhat;
