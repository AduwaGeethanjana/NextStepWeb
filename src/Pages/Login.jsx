import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Components/NavBar/NavBar';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Extract user details
      toast.success('Successfully logged in!');
      navigate('/', { state: { userName: user.displayName || email } }); // Navigate to Profile Page
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2>LOGIN</h2>
        <h3 className="quote">The Future depends on what you do today</h3>
        <p>Welcome back! Please login to your account.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <a
            href="#"
            className="forgot-password"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              navigate('/resetpassword'); // Navigate to Reset Password Page
            }}
          >
            Forgot Password?
          </a>
          <div className="buttons">
            <button type="submit" className="login-button">Login</button>
            <button
              type="button"
              className="signup-button"
              onClick={() => navigate('/register')} // Navigate to Register Page
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
