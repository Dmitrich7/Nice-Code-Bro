import React, {useState} from 'react';
import Userhat from "../Userhat/Userhat";
import styles from "./UserPage.module.scss";
import {
    Notes,
    Consulting,
    Videos,
    Meetings
} from '../UserPages'

enum UserPages {
    NOTES = 'notes',
    CONSULTING = 'consulting',
    VIDEOS = 'videos',
    MEETINGS = 'meetings'
}

const UserPage = () => {

    const pagesConfig: Record<string, React.ReactNode>  = {
        [UserPages.NOTES]: <Notes/>,
        [UserPages.CONSULTING]: <Consulting/>,
        [UserPages.VIDEOS]: <Videos/>,
        [UserPages.MEETINGS]: <Meetings/>,
    }

    const [currentPage, setCurrentPage] = useState<string>(UserPages.NOTES);

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>)=>{
        setCurrentPage(e.currentTarget.id)
    }
    return (
        <>
            <Userhat/>
            <div className={styles.pages}>
                <span id={UserPages.NOTES}
                      onClick={(e)=>handleClick(e)}
                      className={`${styles.span} ${currentPage==UserPages.NOTES?styles.spanActive:''}`}
                >
                    Заметки</span>
                <hr/>
                <span id={UserPages.CONSULTING}
                      onClick={(e)=>handleClick(e)}
                      className={`${styles.span} ${currentPage==UserPages.CONSULTING?styles.spanActive:''}`}
                >
                    Консультации</span>
                <hr/>
                <span id={UserPages.MEETINGS}
                      onClick={(e)=>handleClick(e)}
                      className={`${styles.span} ${currentPage==UserPages.MEETINGS?styles.spanActive:''}`}
                >
                    Видео</span>
                <hr/>
                <span id={UserPages.VIDEOS}
                      onClick={(e)=>handleClick(e)}
                      className={`${styles.span} ${currentPage==UserPages.VIDEOS?styles.spanActive:''}`}
                >
                    Мероприятия</span>
                <span className={styles.newNote}>Новая заметка</span>
                <div className={styles.plus}>+</div>
            </div>
            <div className={styles.content}>
                {pagesConfig[currentPage]}
            </div>
        </>
    );
};

export default UserPage;
