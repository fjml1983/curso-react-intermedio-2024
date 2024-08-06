import React from 'react';
import '../styles/styles.css';
import User from './User';

const UserList = () => {
    const users = React.useMemo(() => [
        {id: 1, name: 'Robin'},
        {id: 2, name: 'Dennis'},
        {id: 3, name: 'Morgan'},
        {id: 4, name: 'Jules'},
        ],[]);


    return (
    <div className="user-list">
      <h1>Users</h1>
      <ul>
        {users.map(user => {
          return <User key={user.id} user={user}/>
        })}
      </ul>
    </div>
  )
};

export default UserList;