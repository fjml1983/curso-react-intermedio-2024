import Header from "./Header";
import UserList from "./UserList";

const AppContent = () => {

    //Dummy data
    const users= [{id:1, name: 'John Doe', email:  'john@example.com', avatar: 'https://via.placeholder.com/140'},
        {id:2, name: 'Jane Doe', email: 'jane@example.com', avatar: 'https://via.placeholder.com/150'},
        {id:3, name: 'Jim Doe', email: 'jim@example.com', avatar: 'https://via.placeholder.com/160'}];


    return (
    <div>
        <h1>App Content</h1>
        <Header/>
        <UserList users={users}/>
    </div>
  );
};

export default AppContent;