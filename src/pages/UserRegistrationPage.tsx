import { useState } from 'react';
import {Link} from "react-router-dom";

import './UserRegistrationPage.css';
import axios from 'axios';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [signup, setSignup] = useState(false);

  const registerUser = (e: any) => {
    e.preventDefault();
    axios
          .post(`http://localhost:3001/api/user/register`, {
            email,
            password,
            firstname: fname,
            lastname: lname,
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
          })
          .then((res) => {
            setSignup(true);
          })
          .catch((err) => console.log(err));

  };

  return (
    <div className="login-wrapper">
      <h1>New User Registration</h1>
      <form onSubmit={registerUser}>
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
        <label>
          <p>First Name</p>
          <input 
            type="text" 
            value={fname} 
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Last Name</p>
          <input 
            type="text" 
            value={lname} 
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit">Sign Up</button>
        </div>

        { signup ? 
          <div>
            <br></br>
            <div>User Registered Successfully.</div>
            <Link to={`/`}>Go to Login Page</Link>
          </div>
          : null
        }
        
      </form>
    </div>
  );
}

export default LoginPage;