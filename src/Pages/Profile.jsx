import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';
import NavBar from '../Components/NavBar/NavBar';

const Profile = () => {
  const location = useLocation(); // Get the user data passed via navigation
  const { userName } = location.state || { userName: 'User' }; // Default to 'User' if no name is passed

  return (
    <div className="profile-page">
        <NavBar/>
      <div className="welcome-box">
        <h1>Welcome</h1>
        <h2>{userName}</h2>
      </div>
    </div>
  );
};

export default Profile;
