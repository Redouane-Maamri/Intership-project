import React, { useEffect, useRef } from "react";
import "./solutions.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Solution() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const categories = [
    { title: ` ${t("nav-title-sol1")}`, img: "/solution/sol1.jpeg" },
    { title: ` ${t("nav-title-sol2")}`, img: "/solution/sol2.jpeg" },
    { title: ` ${t("nav-title-sol3")}`, img: "/solution/sol3.jpeg" },
    { title: ` ${t("nav-title-sol4")}`, img: "/solution/sol4.jpeg" },
  ];

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
      { threshold: 0.1 }
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
    <>
    <Helmet>
      <title>Solutions — Installations Solaires Adaptées à Vos Besoins</title>
      <meta name="description" content="Découvrez nos solutions sur-mesure en photovoltaïque pour les particuliers, entreprises, agriculture, et plus." />
      <meta name="keywords" content="solutions, photovoltaïque, installations solaires, agriculture, entreprise, résidentiel" />
    </Helmet>

    <section id="solutions" className="solution-section" ref={sectionRef}>
      <h2 className="solution-title animated-title">
      {t("solution-title")}
      </h2>

      <div className="solutions-grid">
        {categories.map((category, index) => (
          <div 
            className="solution-card animate-card" 
            key={index}
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <div className="solution-img-container">
              <img 
                src={category.img} 
                alt={category.title} 
                className="solution-img" 
                loading="lazy" 
              />
              <div className="solution-overlay">
                <div className="solution-overlay-content">
                  <span>{t("nav-btn-sol")}</span>
                </div>
              </div>
            </div>
            <div className="solution-content">
              <h3>{category.title}</h3>
              <div className="button-container">
                <Link 
                  to="/solutions/details/all"
                  className="solution-link"
                  onClick={() => {
                    // Force immediate scroll to top when clicking the link
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="solution-button">
                    <span className="button-text">{t("nav-btn-sol")}</span>
                    <span className="button-icon">+</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="solution-divider" />
    </section>
    </>
  );
}
