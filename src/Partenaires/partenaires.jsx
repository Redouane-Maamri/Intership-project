import React, { useState } from "react";
import "./partenaires.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Partenaire() {
  const { t } = useTranslation();

  const partenaires = [
    "./Partenaires/part1.webp",
    "./Partenaires/part2.webp",
    "./Partenaires/part3.webp",
    "./Partenaires/part4.jpeg",
    "./Partenaires/part5.webp",
    "./Partenaires/part6.jpeg",
    "./Partenaires/part7.webp",
  ];

  const [index, setIndex] = useState(0);
  const step = 5;

  const gonext = () => {
    setIndex((prev) => (prev + step) % partenaires.length);
  };

  const goprevious = () => {
    setIndex((prev) => (prev - step + partenaires.length) % partenaires.length);
  };

  const getVisibleImages = () => {
    return Array.from({ length: step }, (_, i) =>
      partenaires[(index + i) % partenaires.length]
    );
  };

  return (
    <div id="partners" className="partenaires">
      <section className="partenaire-container">
        <h2>{t('nav_Titlepartenaires')} :</h2>

        <div className="images-row">
          {getVisibleImages().map((src, i) => (
            <img loading="lazy" key={i} src={src} alt={`Partenaire ${index + i + 1}`} />
          ))}
        </div>

        <div className="button-part">
          <button onClick={goprevious}>‹</button>
          <button onClick={gonext}>›</button>
        </div>

        <div className="button-next">
  <Link to="/Partners" className="tooltip">
    <button>
      <FaArrowRight />
    </button>
    <span className="tooltip-text">Pour plus d’info, cliquez ici</span>
  </Link>
</div>

      </section>

      <hr className="full-part" />
    </div>
  );
}
