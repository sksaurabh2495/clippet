// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === name && storedUser.password === password) {
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="form-title">Login</h2>
      <input className="form-input" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className="form-input" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className="form-button" type="submit">Login</button>
    </form>
  );
}

export default Login;
