import React from 'react';
import {UserItem} from '../UserItem/UserItem';
import {useJsonFetch} from '../../Hooks/useJsonFetch';

export function UsersList(props) {
    const url = process.env.REACT_APP_USERS_URL + '/users.json';
    const [loading, data, error] = useJsonFetch(url, {method: 'GET'});
    const userItems = (!data)
        ? null
        : data.map((user) => {
        return <UserItem key={user.id} handleUserClick={props.handleUserClick}{...user}/>
    });

    return (
        <ul className={'UsersList'}>
            {loading && <p>...Loading</p>}
            {data && userItems}
            {error && <p className={'Error'}>{error}</p>}
        </ul>
    )
}
