// src/Signup.js
import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert('User registered successfully');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign Up</h2>
      <input className="form-input" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input className="form-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input className="form-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input className="form-input" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <select className="form-select" name="profession" value={formData.profession} onChange={handleChange} required>
        <option value="">Select Profession</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
      </select>
      <button className="form-button" type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
