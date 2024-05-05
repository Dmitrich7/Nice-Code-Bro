import React, {useState} from 'react';
import UserCard from "../UserCard/UserCard";

const UserList = () => {
    const [checkbox,setCheckbox] = useState(true)

    return (
        <>
            <UserCard
                username={"Кравцова Александра"}
                isIcon={true}
                isCheckbox={checkbox}
            >
            </UserCard>
            <UserCard
                username={"Рожков Денис"}
                isCheckbox={checkbox}
            />
            <UserCard
                username={"Кравцова Александра"}
                isIcon={true}
                isCheckbox={checkbox}
            >
            </UserCard>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
            <UserCard username={"Кравцова Александра"} isCheckbox={checkbox}/>
        </>
    );
};

export default UserList;
