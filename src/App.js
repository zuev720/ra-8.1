import React, {useState} from 'react';
import './App.css';
import {UsersList} from './components/List/UsersList';
import {Details} from './components/Details/Details';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);

    const UserInfo = () => (selectedUser === null) ? null : <Details selectedUser={selectedUser}/>;

    const HandleUserClick = (e) => {
        if (selectedUser && selectedUser.id === e.target.id) return;
        const user = {
            id: e.target.id,
            name: e.target.textContent,
        }
        setSelectedUser(user);
    }
    return (
        <div className="App">
            <UsersList activeUser={selectedUser} handleUserClick={HandleUserClick}/>
            <UserInfo />
        </div>
    );
}

export default App;
