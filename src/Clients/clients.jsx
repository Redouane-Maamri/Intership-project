import React, { useEffect, useState, useRef } from "react";
import "./clients.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Client() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  
  // Get testimonials from translations
  const testimonials = t("clients.testimonials", { returnObjects: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];
  const images = ["/Avis/man2.png", "/Avis/person.jpeg"];

  return (
    <>
    <Helmet>
        <title>Macharek | {t("nav_about")}</title>
  <meta name="description" content="Découvrez les témoignages et projets réussis de nos clients satisfaits dans le domaine des énergies renouvelables." />
  <meta name="keywords" content="clients, témoignages, projets, références, énergie solaire, photovoltaïque" />
</Helmet>

      <div className="client-container" ref={sectionRef}>
        <h2 className="client-title">{t("clients.title")}</h2>
      <div className="avis-card">
          <img src={images[currentIndex]} alt={currentTestimonial.name} className="client-image" />
          <p className="avis-description">"{currentTestimonial.description}"</p>
          <h3 className="avis-nom">— {currentTestimonial.name}</h3>
      </div>
    </div>
    </>
  );
}
