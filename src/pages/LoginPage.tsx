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
            window.localStorage.setItem('user', email);
            navigate("/home");
          })
          .catch((err) => console.log(err));

  };

  return (
    <div className="login-signup-container">
      <form className="login-signup-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='div-bottom-padding'>
          <button type="submit" className="login-button">
            Log In
          </button>
        </div>
        
        <Link to={`/register`}>New User Signup</Link>
      </form>
    </div>
  );
}

export default LoginPage;