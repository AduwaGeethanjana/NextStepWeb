import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import loginBg from '../../assets/Loginbg.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('Successfully logged in!');
      navigate('/', { state: { userName: user.displayName || email } });
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '100vh',
        background: `url(${loginBg}) no-repeat center center`,
        backgroundSize: 'cover',
        padding: '0 5%',
      }}
    >
      <NavBar />
      <div
        style={{
          backgroundColor: '#FF9D3D',
          padding: '3rem',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'left',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
          marginRight: '20%',
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>LOGIN</h2>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
          The Future depends on what you do today
        </h3>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ fontSize: '1rem', color: '#333' }}>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              outline: 'none',
            }}
          />

          <label style={{ fontSize: '1rem', color: '#333' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              outline: 'none',
            }}
          />

          <a
            href="#"
            style={{
              fontSize: '0.9rem',
              color: '#333',
              textDecoration: 'underline',
              marginTop: '0.5rem',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.preventDefault();
              navigate('/resetpassword');
            }}
          >
            Forgot Password?
          </a>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              type="submit"
              style={{
                padding: '12px',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              style={{
                padding: '12px',
                backgroundColor: '#fff',
                color: '#333',
                border: '1px solid #333',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                flex: 1,
              }}
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
