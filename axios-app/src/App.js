import './App.css';
import UserList from './components/UserList';
import api from './services/api';
import React from 'react';

function App() {

  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    api.get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError('Error fetching data: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='error-message'>{error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>User list with axios app</h1>
        <UserList users={users} />
      </header>
    </div>
  );  

}

export default App;
