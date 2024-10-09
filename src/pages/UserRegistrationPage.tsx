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
    // <div className="login-wrapper">
    //   <h1>New User Registration</h1>
    //   <form onSubmit={registerUser}>
    //     <label>
    //       <p>Email</p>
    //       <input 
    //         type="email" 
    //         value={email} 
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input 
    //         type="password" 
    //         value={password} 
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       <p>First Name</p>
    //       <input 
    //         type="text" 
    //         value={fname} 
    //         onChange={(e) => setFName(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       <p>Last Name</p>
    //       <input 
    //         type="text" 
    //         value={lname} 
    //         onChange={(e) => setLName(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <div>
    //       <button type="submit">Sign Up</button>
    //     </div>

    //     { signup ? 
    //       <div>
    //         <br></br>
    //         <div>User Registered Successfully.</div>
    //         <Link to={`/`}>Go to Login Page</Link>
    //       </div>
    //       : null
    //     }
        
    //   </form>
    // </div>

    <div className="login-signup-container">
    <form className="login-signup-form" onSubmit={registerUser}>
      <h2>New User Registration</h2>
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

      <div className="form-group">
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          required
        />
      </div>


      <div className='div-bottom-padding'>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </div>

      { signup ? 
          <div className='blue-text-padding'>User Registered Successfully.</div>  
          : null
        }
        <Link to={`/`}>Go to Login Page</Link>
    </form>
  </div>
  );
}

export default LoginPage;