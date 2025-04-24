import React, { useEffect } from 'react';
import Navbar from '../Components/NavBar/NavBar';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import About from '../Components/About/About';

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Home;
