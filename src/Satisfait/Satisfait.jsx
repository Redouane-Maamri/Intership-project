import React from "react";
import "./satisfait.css";
import { useTranslation } from 'react-i18next';

export default function Satisfait() {
  const { t, i18n } = useTranslation();

  return (
    
    <div className="home-satisfait">
      <img src="/satisfait.jpeg" alt="good" className="fullpage-image" />
      <div className="overlay-text">
        <p>{t('nav_titlesatisfait')}</p>
        <h2>{t('nav_descriptionsatisfait')}</h2>

      </div>

      <hr />
    </div>
    
    

    
  );
}
