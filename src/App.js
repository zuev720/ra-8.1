import React, {useState} from 'react';
import './App.css';
import {UsersList} from './components/List/UsersList';
import {Details} from './components/Details/Details';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);

    const UserInfo = () => (selectedUser === null) ? null : <Details selectedUser={selectedUser}/>;

    const HandleUserClick = (e) => {
        if (selectedUser && selectedUser.id === e.target.id) return;
        [...document.querySelectorAll('.UserItem')]
            .map((elem) => (elem.classList.contains('UserItemActive'))
                ? elem.classList.remove('UserItemActive')
                : elem);
        e.target.classList.add('UserItemActive');
        const user = {
            id: e.target.id,
            name: e.target.textContent,
        }
        setSelectedUser(user);
    }

    return (
        <div className="App">
            <UsersList handleUserClick={HandleUserClick}/>
            <UserInfo />
        </div>
    );
}

export default App;
