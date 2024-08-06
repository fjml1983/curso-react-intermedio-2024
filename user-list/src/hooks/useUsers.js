import React from 'react';

const useUsers = (url) => {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())); 

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => setError(error));
    }, [url]);

    return {filteredUsers, loading, error, setSearchTerm};
};

export default useUsers;

