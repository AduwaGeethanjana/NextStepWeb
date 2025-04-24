import React, { useState } from 'react';
import './ResetPassword.css';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import NavBar from '../Components/NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="reset-password-page">
      <NavBar />
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleResetPassword}>
          <label>Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email Address" 
            required 
          />
          <div className="buttons">
            <button type="submit" className="reset-button">Send Reset Link</button>
            <button 
              type="button" 
              className="cancel-button" 
              onClick={() => window.location.href = '/login'}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
