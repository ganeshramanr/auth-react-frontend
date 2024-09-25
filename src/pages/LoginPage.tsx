import { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";

import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Here you would typically send the email and password to your server
    console.log('Login attempt with:', email, password);

    axios
          .post(`http://localhost:3001/api/user/login`, {
            email,
            password,
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
          })
          .then((res) => {
            navigate("/home");
          })
          .catch((err) => console.log(err));

  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Email</p>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
        <br></br>
        <div>
          <Link to={`/register`}>New User Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;