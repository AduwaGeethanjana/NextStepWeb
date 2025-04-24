import React, { useState } from 'react';
import './Register.css';
import NavBar from '../Components/NavBar/NavBar';
import { auth, provider, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import googleIcon from '../assets/google.png';

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
      // Generate a unique ID for the user
      const uniqueId = uuidv4();

      // Step 1: Create a user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      console.log('User created:', user.uid); // Debug log

      // Step 2: Save additional data to Firestore with unique ID
      await setDoc(doc(db, 'users', user.uid), {
        uniqueId: uniqueId,
        uid: user.uid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        age: form.age,
        educationLevel: form.educationLevel,
        university: form.university,
        degreeProgramme: form.degreeProgramme,
      });
      console.log('User data saved in Firestore'); // Debug log

      toast.success('Successfully registered!');
      navigate('/login'); // Redirect to the profile page
    } catch (error) {
      console.error('Registration failed:', error); // Debug log
      toast.error('Registration failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Generate a unique ID for the user
      const uniqueId = uuidv4();

      // Save additional data to Firestore for Google users
      await setDoc(doc(db, 'users', user.uid), {
        uniqueId: uniqueId,
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
      navigate('/profile'); // Redirect to the profile page
    } catch (error) {
      console.error('Google sign-in failed:', error);
      toast.error('Google sign-in failed.');
    }
  };

  return (
    <div className="register-page">
      <NavBar />
      <div className="register-container">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="name-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
          />
          <select
            name="educationLevel"
            onChange={handleChange}
            value={form.educationLevel}
            required
          >
            <option value="" disabled>
              Select Education Level
            </option>
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
          />
          <input
            type="text"
            name="degreeProgramme"
            placeholder="Degree Programme"
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-button">Create Account</button>
        </form>
        <p className="centered-text">
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
          >
            Login
          </a>
        </p>
        <div className="divider centered-text">
          <span>or</span>
        </div>
        <button className="google-signin-button" onClick={handleGoogleSignIn}>
          <img src={googleIcon} alt="Google Icon" className="google-button-image" />
        </button>
      </div>
    </div>
  );
};

export default Register;
