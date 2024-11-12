import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='container'>
      <img src={logo}  alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Blog</li>
        <li><Link to="/login" className='btn'>Login</Link></li>
            <li><Link to="/register" className='btn'>Register</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
