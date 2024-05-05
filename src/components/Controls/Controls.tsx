import React from 'react';
import styles from './Controls.module.scss'

const Controls = () => {
    return (
        <div className={styles.container}>
            <span className={styles.totalUsers}>213</span>
            <span className={styles.select}>Выбрать</span>
        </div>
    );
};

export default Controls;
