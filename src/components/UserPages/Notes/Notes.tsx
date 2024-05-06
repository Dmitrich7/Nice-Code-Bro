import React from 'react';
import styles from "./Notes.module.scss";
import NotesCard from "./Notes/NotesCard";

export const Notes = () => {
    return (
        <div className={styles.container}>
            <NotesCard
                noteDate={"20.12.2019"}
                noteText={"Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях."}
            />
            <NotesCard
                noteDate={"20.12.2019"}
                somePng={require('/public/map.png')}
                noteText={"Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях."}
            />
        </div>
    );
};

