import React from 'react';
import {useAuth} from '../contexts/AuthContext';

const Login = () => {
  const {login} = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => login(email, password)}>Login</button>
      <a href="/register">Register</a>            
    </div>
  );
};  
export default Login;