import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { auth, provider, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import googleIcon from '../assets/google.png';
import registerBg from '../assets/registerbg.png';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    educationLevel: '',
    university: '',
    degreeProgramme: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const uniqueId = uuidv4();
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uniqueId,
        uid: user.uid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        age: form.age,
        educationLevel: form.educationLevel,
        university: form.university,
        degreeProgramme: form.degreeProgramme,
      });

      toast.success('Successfully registered!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const uniqueId = uuidv4();

      await setDoc(doc(db, 'users', user.uid), {
        uniqueId,
        uid: user.uid,
        firstName: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1] || '',
        email: user.email,
        age: '',
        educationLevel: '',
        university: '',
        degreeProgramme: '',
      });

      toast.success('Successfully registered with Google!');
      navigate('/profile');
    } catch (error) {
      console.error('Google sign-in failed:', error);
      toast.error('Google sign-in failed.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${registerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        padding: '0 5%',
      }}
    >
      <NavBar />
      <div
        style={{
          marginTop: '8%',
          backgroundColor: '#FF9D3D',
          padding: '3rem',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'left',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
          marginRight: '20%',
          marginBottom: '5%',
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>Create Account</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
          <select
            name="educationLevel"
            onChange={handleChange}
            value={form.educationLevel}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          >
            <option value="" disabled>Select Education Level</option>
            <option value="Undergraduate - 1st year">Undergraduate - 1st year</option>
            <option value="Undergraduate - 2nd year">Undergraduate - 2nd year</option>
            <option value="Undergraduate - 3rd year">Undergraduate - 3rd year</option>
            <option value="Undergraduate - 4th year">Undergraduate - 4th year</option>
            <option value="Graduate">Graduate</option>
          </select>
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
          <input
            type="text"
            name="degreeProgramme"
            placeholder="Degree Programme"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
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
              marginTop: '1rem',
            }}
          >
            Create Account
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem' }}>
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            style={{ color: '#333', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Login
          </a>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
          <span style={{ padding: '0 1rem', fontSize: '0.9rem', color: '#333' }}>or</span>
        </div>
        <button
          onClick={handleGoogleSignIn}
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            width: '100%',
            maxWidth: '250px',
            margin: '0 auto',
            display: 'block',
            cursor: 'pointer',
          }}
        >
          <img src={googleIcon} alt="Google Sign In" style={{ width: '100%', borderRadius: '6px' }} />
        </button>
      </div>
    </div>
  );
};

export default Register;
