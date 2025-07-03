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

  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false); // ferme menu après changement langue
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fermer menu si fenêtre redimensionnée > 768 (desktop)
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768 && menuOpen){
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div className="home-container">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-left">
          <img src="/logo2.png" alt="logo" className="logo" width="100" />
        </div>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#Home" onClick={() => setMenuOpen(false)}>{t('nav_home')}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t('nav_about')}</a>
          <a href="#Services" onClick={() => setMenuOpen(false)}>{t('nav_services')}</a>
          <a href="#Partenaires" onClick={() => setMenuOpen(false)}>{t('nav_partners')}</a>
          <a href="#Contact" onClick={() => setMenuOpen(false)}>{t('nav_contact')}</a>

          <div className="language-switcher">
            <button
              onClick={() => changeLanguage('fr')}
              className={i18n.language === 'fr' ? 'active' : ''}
              aria-label="Passer au français"
              type="button"
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'active' : ''}
              aria-label="Switch to English"
              type="button"
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer menu' : 'Ouvrir menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>}

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
