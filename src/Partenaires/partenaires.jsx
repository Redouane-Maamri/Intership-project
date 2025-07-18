import React, { useState, useEffect } from "react";
import "./partenaires.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Partenaire() {
  const { t } = useTranslation();

  const partenaires = [
    "./Partenaires/part1.webp",
    "./Partenaires/part2.webp",
    "./Partenaires/part3.jpeg",
    "./Partenaires/part4.jpeg",
    "./Partenaires/part5.webp",
    "./Partenaires/part6.jpeg",
    "./Partenaires/part8.webp",
    "./Partenaires/part9.png",
    "./Partenaires/part10.png",
    "./Partenaires/part11.jpeg",
    "./Partenaires/part12.jpeg",
    "./Partenaires/part13.jpeg",
    "./Partenaires/part14.jpeg",
    "./Partenaires/part15.webp",
    "./Partenaires/part16.jpeg",
    "./Partenaires/part17.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const step = 7;
  const [fade, setFade] = useState(false);

  const getVisibleImages = () => {
    return Array.from({ length: step }, (_, i) =>
      partenaires[(index + i) % partenaires.length]
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % partenaires.length);
        setFade(false);
      }, 500); // duration of fade-out
    }, 3000);

    return () => clearInterval(interval);
  }, [partenaires.length]);

  return (
    <div id="partners" className="partenaires">
      <section className="partenaire-container">
        <h2>{t('nav_Titlepartenaires')} :</h2>

        <div className={`images-row ${fade ? "fade" : ""}`}>
          {getVisibleImages().map((src, i) => (
            <img loading="lazy" key={i} src={src} alt={`Partenaire ${i}`} />
          ))}
        </div>

        <div className="button-next">
          <Link to="/Partners" className="tooltip" 
          onClick={() => window.scrollTo(0, 0)}
          >
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
