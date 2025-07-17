import React from "react";
import './About.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
      <title>Macharek | A propos</title>
        <meta name="description" content="Découvrez notre entreprise spécialisée dans l’énergie solaire et les installations photovoltaïques." />
        <meta name="keywords" content="à propos, énergie renouvelable, entreprise solaire, photovoltaïque, innovation" />
      </Helmet>

      <section id="about" className="about-section">
        <div className="about-content">
          <h1>{t('nav_h2')}</h1>
          <p>
            <span>F</span>{t('nav_aboutUs')}
          </p>
          <hr className="full-about" />
        </div>
      </section>
    </>
  );
}
