import React, { useState } from "react";
import "./clients.css";

export default function Client() {
  const avis = [
    {
      description:
        "L'installation de notre système solaire a été rapide et propre. L'équipe a été très professionnelle du début à la fin.",
      image: "/Avis/man1.jpeg",
      nom: "Karim El Haddadi",
    },
    {
      description:
        "Excellente prestation ! Le suivi du projet a été impeccable. Je recommande vivement cette société.",
      image: "/Avis/women2.jpeg",
      nom: "Fatima Zahra Bennis",
    },
    {
      description:
        "Le service après-vente est réactif. C’est rassurant de travailler avec une entreprise sérieuse.",
      image: "/Avis/man3.avif",
      nom: "Youssef Amrani",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % avis.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + avis.length) % avis.length);
  };

  const currentAvis = avis[currentIndex];

  return (
    <div className="client-container">
      <h2>Ce Qu'on disent nos clients : </h2>
      <div className="avis-card">
        <img src={currentAvis.image} alt={currentAvis.nom} />
        <p className="avis-description">“{currentAvis.description}”</p>
        <h3 className="avis-nom">— {currentAvis.nom}</h3>
      </div>
      <div className="nav-buttons">
        <button onClick={goPrev} aria-label="Previous testimonial">‹</button>
        <button onClick={goNext} aria-label="Next testimonial">›</button>
      </div>
    </div>
  );
}
