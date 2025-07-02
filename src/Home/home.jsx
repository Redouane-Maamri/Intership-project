import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const images = [
  "/HomeImage/Homeimg.jpeg",
  "/HomeImage/Home2img.jpeg",
  "/HomeImage/Home3img.webp"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo2.png" alt="logo" className="logo" width="100px" />
          <div className="nav-links">
            <a href="#Home">{t('nav_home')}</a>
            <a href="#About">{t('nav_about')}</a>
            <a href="#Services">{t('nav_services')}</a>
            <a href="#Partenaires">{t('nav_partners')}</a>
            <a href="#Contact">{t('nav_contact')}</a>
          </div>
        </div>

        <div className="language-switcher">
          <button
            onClick={() => changeLanguage('fr')}
            className={i18n.language === 'fr' ? 'active' : ''}
            aria-label="Passer au français"
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'active' : ''}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </nav>

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
  );
}
