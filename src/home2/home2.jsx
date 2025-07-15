import React from "react";
import '../Home/Home.css';
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
      }, 3000);
      return () => clearInterval(interval);
    }, []);


    return(
        <>
        <div>
        <div className="hero-section">
        <img fetchpriority="high"
          className="hero-image"
          src={images[currentIndex]}
          alt={t('hero_alt_text')}
        />
        <div className="hero-text">
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </div>
      </div>
        </div>
        </>
    )
}