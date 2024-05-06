import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import styles from './App.module.scss'
import UserList from "./components/UserList/UserList";
import SearchBox from "./components/SearchBox/SearchBox";
import Controls from "./components/Controls/Controls";
import UserPage from "./components/UserPage/UserPage";

export const App = () => {
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const handleClick = ()=>{
        setShowCheckboxes(prevState => !prevState)
    }
    return (
        <div className={styles.app}>
            <Navbar/>
            <div className={styles.appWrapper}>
                <div className={styles.contentWrapper}>
                    <div className={styles.userWrapper}>
                        <SearchBox/>
                        <Controls
                            showCheckboxes={handleClick}
                        />
                        <UserList
                            checkbox={showCheckboxes}
                        />
                    </div>
                    <div className={styles.userPageWrapper}>
                        <UserPage/>
                    </div>
                </div>
            </div>
        </div>
    );
};
