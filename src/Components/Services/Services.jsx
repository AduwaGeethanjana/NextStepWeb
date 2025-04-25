import React from 'react';
import './Services.css';
import Icon1 from '../../assets/services_icon1.png';
import Icon2 from '../../assets/services_icon2.png';
import Icon3 from '../../assets/services_icon3.png';
import Icon4 from '../../assets/services_icon4.png';
import Icon5 from '../../assets/services_icon5.png';
import Icon6 from '../../assets/services_icon6.png';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-title">Welcome to NextStep !</h2>
            <p className="services-subtitle">
                Your One-Stop Destination to Discover Your Potential, Uncover the Best Career Paths, and Access All the Resources You Need Along the Way!
            </p>
            <div className="services-cards">
                <Link to="/quiz" className="service-card">
                    <img src={Icon1} alt="Career Test" />
                    <h3>Career Test</h3>
                </Link>
                <Link to="/quiz" className="service-card">
                    <img src={Icon2} alt="Skill Test" />
                    <h3>Skill Test</h3>
                </Link>
                <Link to="/knowledgenetwork"  className="service-card">
                    <img src={Icon3} alt="Knowledge Network" />
                    <h3>Knowledge Network</h3>
                </Link>
                <Link to="/courses" className="service-card">
                    <img src={Icon4} alt="Online Courses" />
                    <h3>Online Courses</h3>
                </Link>
                <Link to="/jobs" className="service-card">
                    <img src={Icon5} alt="Explore Jobs" />
                    <h3>Explore Jobs</h3>
                </Link>
                <Link to="/projects" className="service-card">
                    <img src={Icon6} alt="Hands-On Projects" />
                    <h3>Hands-On Projects</h3>
                </Link>
            </div>
        </section>
    );
};

export default Services;

