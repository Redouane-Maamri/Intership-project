import React from "react";
import './About.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-content">
        <h1>{t('nav_h2')}</h1>
        <p>
          <span>F</span>{t('nav_aboutUs')}
        </p>

        <th></th>
      </div>
    </section>
  );
}
