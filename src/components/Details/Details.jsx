import React, {useEffect, useState} from 'react';

export function Details(props) {

    const defaultUser = {
        name: '',
        avatar: '',
        details: {
            city: '',
            company: '',
            position: '',
        }
    }

    const [user, setUser] = useState(defaultUser);

    useEffect(() => {
        fetch(process.env.REACT_APP_USERS_URL + `/${props.selectedUser.id}.json`)
            .then((data) => data.json())
            .then((user) => setUser(user));
    }, [props.selectedUser.id]);

    return (
        <div className={`Details`}>
            <img className={'userImage'} src={user.avatar} alt={user.name}/>
            <h4 className={'userName'}>{user.name}</h4>
            <p className={'userCity'}>{`City:  ${user.details.city}`}</p>
            <p className={'userCompany'}>{`Company:  ${user.details.company}`}</p>
            <p className={'userPosition'}>{`Position:  ${user.details.position}`}</p>
        </div>
    )
}
