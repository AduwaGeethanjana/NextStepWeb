import React from 'react'
import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import QuizPage from './Pages/QuizPage'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./Pages/firebase";

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
      </Routes>
      <ToastContainer />
    </Router>
    
  )
}

export default App

