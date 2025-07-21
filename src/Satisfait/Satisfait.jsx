import React, { useEffect, useRef } from "react";
import "./satisfait.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Satisfait() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="home-satisfait" ref={sectionRef}>
      <img src="/satisfait.jpeg" alt="good" className="fullpage-image" />
      <div className="overlay-text">
        <p className="animate-text">{t('nav_titlesatisfait')}</p>
        <h2 className="animate-title">{t('nav_descriptionsatisfait')}</h2>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <button className="cta-button">
            <span className="button-text">{t('nav_contact')}</span>
            <span className="button-icon">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
