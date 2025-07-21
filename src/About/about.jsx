import React, { useEffect, useRef } from "react";
import './About.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Macharek | A propos</title>
        <meta name="description" content="Découvrez notre entreprise spécialisée dans l'énergie solaire et les installations photovoltaïques." />
        <meta name="keywords" content="à propos, énergie renouvelable, entreprise solaire, photovoltaïque, innovation" />
      </Helmet>

      <section id="about" className="about-section">
        <h1>{t('nav_h2')}</h1>
        
        <div className="about-container">
          <div className="about-text" ref={textRef}>
            <p>
              <span>F</span>{t('nav_aboutUs')}
            </p>
          </div>
          
          <div className="about-image-container" ref={imageRef}>
            <img 
              src="/HomeImage/Homeimg1.webp" 
              alt="Solar energy installation" 
              className="about-image"
              loading="lazy"
            />
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
