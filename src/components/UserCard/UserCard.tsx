import React, {FC, useState} from 'react';
import styles from './UserCard.module.scss'
import UserPFP from "../../../public/user.svg"
import Telegram from "../../../public/telegram.svg"

interface IUserCardProps{
    username: string;
    isIcon?: boolean;
    isCheckbox?:boolean;
}

const UserCard: FC<IUserCardProps> = (props) => {

    const [checked,setChecked] = useState(false)
    const [active,setactive] = useState(false)
    const handleClick = () =>{
        setactive(prevState => !prevState)
    }
    const {
        username,
        isIcon,
        isCheckbox
    }=props;

    return (
        <div onClick={handleClick} className={`${styles.container} ${isIcon?styles.icon:''} ${active?styles.active:''}`}>
            {isCheckbox?<input onClick={()=>setChecked(prevState => !prevState)} type="checkbox" className={styles.checkbox}/>:null}
            <UserPFP width={40} height={40} className={styles.userPFP}/>
            <p className={styles.username}>{username}</p>
            {isIcon?<Telegram className={styles.telegram}/>:null}
        </div>
    );
};

export default UserCard;

