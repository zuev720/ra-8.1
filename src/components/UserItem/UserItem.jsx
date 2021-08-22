import React from 'react';

export function UserItem(props) {
    const className = (props.activeUser && Number(props.activeUser.id) === Number(props.id)) ? 'UserItemActive' : 'UserItem';
    return (
        <li
            className={className}
            id={props.id}
            onClick={props.handleUserClick}>
            {props.name}
        </li>
    )
}
