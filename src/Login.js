import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Footer.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginStatus, setLoginStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Retrieve the user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData) {
      if (
        formData.username === storedUserData.username &&
        formData.password === storedUserData.password
      ) {
        setLoginStatus('Login Successful');
      } else {
        setLoginStatus('Login Failed');
      }
    } else {
      setLoginStatus('User not found');
    }
  };

  return (
    <div id='di'>
    <div className="login-container"> 
    <center>
      <h2 id='lg'>Login to Join Us</h2>
      <br></br>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
      
      <ul>
        <li>
        </li>
        <li>
        <Link to="/signup" className="loginlink">Sign up</Link>
        </li>
      </ul>
      <br /><br /><br /><br /><br /><br /><br />
      <br />
      </center>
    </div>
    <br /><br />
      <br /><br /><br />
    </div>
  );
};

export default Login;