import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // You can change to other icons if you prefer

const images = [
  "/HomeImage/Homeimg1.webp",
  "/HomeImage/Home2.webp",
  "/HomeImage/Home3img.webp"
];

export default function Home() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


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
  

  return (
    <div id='home' className="home-container">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-left">
          <Link to="/" ><img   src="/logo2.png" alt="logo" className="logo" width="100" /></Link>
        </div>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)} title={t('nav_home')} aria-label="Home"  >
  <FaHome size={20} />
</Link>
          <a href="/AboutMacharek">{t('nav_about')}</a>

          <Link to="/Actualites" className="nav-link" onClick={() => setMenuOpen(false)}>{t('nav_act')}</Link>
          <a
  href="#solutions"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('solutions');
    setMenuOpen(false);
  }}
>Solutions</a>

<a
  href="#produits"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('produits');
    setMenuOpen(false);
  }}
>
  {t('nav_services')}
</a>



<a
  href="#partners"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('partners');
    setMenuOpen(false);
  }}
>
  {t('nav_partners')}
</a>

          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link>

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

      
    </div>
  );
}
