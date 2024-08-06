import React from 'react';
import useUsers from '../hooks/useUsers';
import SearchBar from './SearchBar';

const UserList = () => {
    const {filteredUsers, loading, error, setSearchTerm} = useUsers("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <SearchBar onSearch={setSearchTerm} />
            <ul>
                {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default UserList;