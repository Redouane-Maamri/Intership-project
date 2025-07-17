import React from "react";
import './home2.css';
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";


export default function Home2(){
    const images = [
        "/HomeImage/Homeimg1.webp",
        "/HomeImage/Home3img.jpeg",
        // "/HomeImage/Home2.jpeg",
      ];


    const { t, i18n } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);


    return(
      <div className="hero-section">
        <div className="contact-width">
          <span>+212 6 61 233 016</span> <br></br>
          <span>contact@macharek.ma</span> 
        </div>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={t('hero_alt_text')}
          className={`hero-image ${index === currentIndex ? 'visible' : 'hidden'}`}
          loading="lazy"
        />
      ))}
      <div className="hero-text">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
      </div>
    </div>
    )
}