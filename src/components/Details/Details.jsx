import React from 'react';
import {useJsonFetch} from '../../Hooks/useJsonFetch';

export function Details(props) {
    const url = process.env.REACT_APP_USERS_URL + `/${props.selectedUser.id}.json`;

    const [loading, data, error] = useJsonFetch(url, {method: 'GET'});

    const UserInfo = () =>
        <>
            <img className={'userImage'} src={data.avatar} alt={data.name}/>
            <h4 className={'userName'}>{data.name}</h4>
            <p className={'userCity'}>{`City:  ${data.details.city}`}</p>
            <p className={'userCompany'}>{`Company:  ${data.details.company}`}</p>
            <p className={'userPosition'}>{`Position:  ${data.details.position}`}</p>
        </>

    return (
        <div className={`Details`}>
            {loading && <p>...Loading</p>}
            {data && <UserInfo/>}
            {error && <p className={'Error'}>{error}</p>}
        </div>
    )
}
