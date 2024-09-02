// src/CompanyInfo.js
import React from 'react';
import './CompanyInfo.css'; // Import the CSS file

function CompanyInfo() {
  return (
    <div className="company-info">
      <h2 className="info-title">Company Info</h2>
      <p className="info-detail">Company: Geeksynergy Technologies Pvt Ltd</p>
      <p className="info-detail">Address: Sanjayanagar, Bengaluru-56</p>
      <p className="info-detail">Phone: XXXXXXXXX09</p>
      <p className="info-detail">Email: XXXXXX@gmail.com</p>
    </div>
  );
}

export default CompanyInfo;
