import { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
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
            window.alert("Login Success");
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;