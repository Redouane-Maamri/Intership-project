import React from "react";
import '../Home/Home.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";


export default function Home2(){
    const images = [
        "/HomeImage/Homeimg1.webp",
        "/HomeImage/Home2.webp",
        "/HomeImage/Home3img.webp"
      ];

    const { t, i18n } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);


    return(
        <>
        <div>
        <div className="hero-section">
        <img
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