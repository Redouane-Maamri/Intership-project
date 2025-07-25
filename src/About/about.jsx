import React, { useEffect } from "react";
import './About.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  FaTools, FaMedal, FaHandshake,
  FaLightbulb, FaShieldAlt, FaLeaf
} from "react-icons/fa";

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
        <h1 className="animate-on-scroll">{t('about.title')}</h1>

        <div className="about-container">
          <div className="about-text animate-on-scroll">
            <p>{t('about.our-company-text').replace("notre entreprise", "Macharek")}</p>
          </div>

          <div className="about-image-container animate-on-scroll">
            <img src="/HomeImage/Homeimg1.webp" alt="Solar energy" className="about-image" loading="lazy" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>{t('about.our-values')}</h3>
                <div className="values-icons">
                  <div><FaTools className="icon" /> <span>{t("nav-expertise")}</span></div>
                  <div><FaMedal className="icon" /> <span>{t("nav-excellence")}</span></div>
                  <div><FaHandshake className="icon" /> <span>{t("nav-engagement")}</span></div>
                  <div><FaLightbulb className="icon" /> <span>{t("nav-innovation")}</span></div>
                  <div><FaShieldAlt className="icon" /> <span>{t("nav-fiabilite")}</span></div>
                  <div><FaLeaf className="icon" /> <span>{t("nav-durabilite")}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="full-about" />
      </section>
    </>
  );
}
