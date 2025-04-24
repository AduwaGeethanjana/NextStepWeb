import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { auth } from '../../Pages/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Firebase logout function
import { toast } from 'react-toastify';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set to true if user exists, false otherwise
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      signOut(auth)
        .then(() => {
          toast.success('Successfully logged out!');
        })
        .catch((error) => {
          toast.error('Failed to log out. Please try again.');
          console.error('Logout error:', error);
        });
    }
  };

  // Check specific routes for theme adjustments
  const isLoginScreen =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/resetpassword'; // Add these routes for consistent theme
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`container ${sticky ? 'dark-nav' : ''} ${isLoginScreen ? 'shadetwo-nav' : ''}`}
    >
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="nav-link">Services</span>
          {dropdownOpen && (
            <ul className={`dropdown-menu ${isHomePage ? 'dark-nav' : ''}`}>
              <li>
                <Link to="/career-test" className="dropdown-item">
                  Career Test
                </Link>
              </li>
              <li>
                <Link to="/skill-test" className="dropdown-item">
                  Skill Test
                </Link>
              </li>
              <li>
                <Link to="/knowledge-network" className="dropdown-item">
                  Knowledge Network
                </Link>
              </li>
              <li>
                <Link to="/online-courses" className="dropdown-item">
                  Online Courses
                </Link>
              </li>
              <li>
                <Link to="/explore-jobs" className="dropdown-item">
                  Explore Jobs
                </Link>
              </li>
              <li>
                <Link to="/hands-on-projects" className="dropdown-item">
                  Hands-on Projects
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile" className="btn">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          !isLoginScreen && (
            <>
              <li>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="btn">
                  Register
                </Link>
              </li>
            </>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
