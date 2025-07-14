import React, { useEffect, useState } from "react";
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
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
    const interval=setInterval(() => {
      setCurrentIndex((prev)=>(prev+1) % avis.length )
    }, 4000);
    return () => clearInterval(interval); // Cleanup when unmounted
  }, [avis.length]);

  

  const currentAvis = avis[currentIndex];

  return (
    <div className="client-container">
      <h2>Ce Qu'on disent nos clients : </h2>
      <div className="avis-card">
        <img src={currentAvis.image} alt={currentAvis.nom} />
        <p className="avis-description">“{currentAvis.description}”</p>
        <h3 className="avis-nom">— {currentAvis.nom}</h3>
      </div>
      
    </div>
  );
}
