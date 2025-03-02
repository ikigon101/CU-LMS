import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/Users/jyotsnachauhan/Desktop/LMS/frontend/src/styles/login.css';
import { FaUser , FaLock } from "react-icons/fa";
import cu_logo from '/Users/jyotsnachauhan/Desktop/LMS/frontend/src/imgs/cu_logo.png';
//import background from '/Users/jyotsnachauhan/Desktop/LMS/frontend/src/imgs/background.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic here
    navigate('/dashboard');
  };

  return (
  <div className="loginPage">
    <div className="login-container">
      <form action = "">
      <img src={cu_logo} alt="logo" className="logo"/>
      <div className="input-box">
        <input
          type="text"
          placeholder="Username"
          required
          
        />
  

      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Password"
          required 
        />
        

      </div>
    
       
        <button onClick={handleLogin} className="btn">Login</button>
        <a href="#" className='forgotpassword'>Forgot password?</a>
      </form>
    </div>
   </div>
  );
};

export default Login;

