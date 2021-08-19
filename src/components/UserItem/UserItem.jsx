import React from 'react';

export function UserItem(props) {

    return (
        <li
            className={'UserItem'}
            id={props.id}
            onClick={props.handleUserClick}>
            {props.name}
        </li>
    )
}
