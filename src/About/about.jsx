import React, { useEffect } from "react";
import './About.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Macharek | À propos</title>
        <meta name="description" content="Découvrez notre entreprise spécialisée dans l'énergie solaire et les installations photovoltaïques." />
        <meta name="keywords" content="à propos, énergie renouvelable, entreprise solaire, photovoltaïque, innovation" />
      </Helmet>

      <section id="about" className="about-section">
        <h1 className="animate-on-scroll">{t('nav_h2')}</h1>

        <div className="about-container">
          <div className="about-text animate-on-scroll">
            <p><span>F</span>{t('nav_aboutUs')}</p>
          </div>

          <div className="about-image-container animate-on-scroll">
            <img src="/HomeImage/Homeimg1.webp" alt="Solar energy" className="about-image" loading="lazy" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>{t('about.our-values')}</h3>
                <ul>
                  <li>{t('nav-expertise')}</li>
                  <li>{t('nav-excellence')}</li>
                  <li>{t('nav-innovation')}</li>
                  <li>{t('nav-fiabilite')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="full-about" />
      </section>
    </>
  );
}
