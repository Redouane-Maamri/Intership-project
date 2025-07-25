import React, { useState, useEffect } from "react";
import './home2.css';
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Home2() {
  const images = [
    "/HomeImage/Homeimg1.webp",
    "/HomeImage/Home3img.jpeg",
  ];

  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Structured data for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('hero_title'),
    "description": t('hero_subtitle'),
    "publisher": {
      "@type": "Organization",
      "name": "Macharek",
      "logo": {
        "@type": "ImageObject",
        "url": "https://macharek.com/logo/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Installation de panneaux solaires",
      "description": "Solutions innovantes en énergie solaire et renouvelable pour particuliers et entreprises.",
      "provider": {
        "@type": "Organization",
        "name": "Macharek"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Macharek | Accueil"
        description="Solutions innovantes en énergie solaire et renouvelable pour particuliers et entreprises."
        keywords="énergie solaire, énergie renouvelable, panneaux solaires, photovoltaïque, solutions écologiques"
        url="/"
        language={i18n.language}
      />

      <script type="application/ld+json">
        {JSON.stringify(homePageSchema)}
      </script>

      <section className="hero-section">
        <div className="contact-width">
          <span><FaPhone size={16} /> +212 661 50 79 75</span>
          <span><FaEnvelope size={16} /> contact@macharek.com</span>
        </div>

        <div className="image-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={t('hero_alt_text')}
            className={`hero-image ${index === currentIndex ? 'visible' : ''}`}
            loading="lazy"
          />
        ))}
        </div>

        <div className="hero-text">
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </div>
      </section>
    </>
  );
}
