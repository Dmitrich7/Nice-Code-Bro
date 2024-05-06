import React, {FC, useState} from 'react';
import UserCard from "../UserCard/UserCard";

interface IUserListProps{
    checkbox: boolean;
}

const UserList: FC<IUserListProps> = (props) => {
    const {
       checkbox
    }=props;

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
