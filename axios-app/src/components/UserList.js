
const UserList = ({users}) => {
    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;