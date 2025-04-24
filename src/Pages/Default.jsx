import React from 'react';
import { Link } from 'react-router-dom';
import './Default.css'; // Add CSS for styling

const DefaultPage = () => {
  return (
    <div className="default-page">
      <h2>Access Restricted</h2>
      <p>You need to log in or register to access this feature.</p>
      <div className="buttons">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default DefaultPage;
