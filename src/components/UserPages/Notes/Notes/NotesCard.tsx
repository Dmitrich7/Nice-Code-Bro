import React, {FC} from 'react';
import DropDown from "../../../DropDown/DropDown";
import styles from './NotesCard.module.scss'

interface INoteCardProps {
    noteDate: string;
    noteText: string;
    somePng?: string;
}

const NotesCard: FC<INoteCardProps> = (props) => {

    const {
        noteDate,
        noteText,
        somePng
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.noteContainer}>
                <p><span className={styles.noteDate}>{noteDate} </span> {noteText}</p>
                {somePng?<div className={styles.someImgBack}><img className={styles.someImg} src={somePng}/></div>:null}
            </div>
            <div className={styles.dropDownContainer}>
                <DropDown/>
            </div>
        </div>
    );
};

export default NotesCard;
