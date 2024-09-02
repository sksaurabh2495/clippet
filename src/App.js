// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import CompanyInfo from './CompanyInfo';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/company-info" className="nav-link">Company Info</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
