import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  "/HomeImage/Homeimg.jpeg",
  "/HomeImage/Home2img.jpeg",
  "/HomeImage/Home3img.webp"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount     
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src="/logo.jpeg" alt="logo" width="200px" />
        <div className="nav-links">
          <a href="#Home">Home</a>
          <a href="#About">A Propos</a>
          <a href="#Services">Services</a>
          <a href="#Partenaires">Partenaires</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>

      <img 
        className="hero-image"
        src={images[currentIndex]} 
        alt="Chain Project Hero" 
      />
    </div>
  );
}
