import React, {useEffect, useState} from 'react';
import {UserItem} from '../UserItem/UserItem';

export function UsersList(props) {
    const [users, setUsers] = useState([]);

    const userItems = users.map((user) => {
        return <UserItem key={user.id} handleUserClick={props.handleUserClick}{...user}/>
    });

    useEffect(() => {
        fetch(process.env.REACT_APP_USERS_URL + '/users.json')
            .then((data) => data.json())
            .then((usersArray) => setUsers(usersArray));
    }, []);

    return (
        <ul className={'UsersList'}>
            {userItems}
        </ul>
    )
}
