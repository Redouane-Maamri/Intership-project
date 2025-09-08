import React, { useEffect, useRef } from "react";
import "./satisfait.css";
import { useTranslation } from 'react-i18next';

export default function Satisfait() {
  const { t, i18n } = useTranslation();
  const satisfaitRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
            // Optionally, unobserve after animation if it only needs to run once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (satisfaitRef.current) {
      observer.observe(satisfaitRef.current);
    }

    return () => {
      if (satisfaitRef.current) {
        observer.unobserve(satisfaitRef.current);
      }
    };
  }, []);

  return (
    
    <div className="home-satisfait" ref={satisfaitRef}>
      <img  src="/satisfait.jpeg" alt="good" className="fullpage-image" />
      <div className="overlay-text">
        <p>{t('nav_titlesatisfait')}</p>
        <h2>{t('nav_descriptionsatisfait')}</h2>

      </div>

    </div>
    
    

    
  );
}
