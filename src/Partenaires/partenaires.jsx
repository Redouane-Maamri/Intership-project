import React, { useState } from "react";
import "./partenaires.css";

export default function Partenaire() {
  const partenaires = [
    "/Partenaires/part1.jpeg",
    "/Partenaires/part2.jpeg",
    "/Partenaires/part3.jpeg",
    "/Partenaires/part4.jpeg",
    "/Partenaires/part5.jpeg",
    "/Partenaires/part6.png",
    "/Partenaires/part7.jpeg",
    "/Partenaires/part8.jpeg",
    "/Partenaires/part9.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const step = 6;

  const gonext = () => {
    setIndex((prev) => (prev + step) % partenaires.length);
  };

  const goprevious = () => {
    setIndex((prev) => (prev - step + partenaires.length) % partenaires.length);
  };

  const getVisibleImages = () => {
    let visible = [];
    for (let i = 0; i < step; i++) {
      visible.push(partenaires[(index + i) % partenaires.length]);
    }
    return visible;
  };

  return (
    <div className="partenaires">
      <section className="partenaire-container">
        <h2>Partenaires :</h2>

        <div className="images-row">
          {getVisibleImages().map((src, i) => (
            <img key={i} src={src} alt={`Partenaire ${index + i + 1}`} />
          ))}
        </div>

        <div className="button-part">
          <button onClick={goprevious} aria-label="Précédent partenaire">‹</button>
          <button onClick={gonext} aria-label="Suivant partenaire">›</button>
        </div>
      </section>

      <hr />
    </div>
  );
}
