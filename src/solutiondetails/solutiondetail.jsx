import React from "react";
import "./solutiondetails.css";
import Home from "../Home/home";

const images = [
  "/solution/sol1.jpeg",
  "/solution/sol2.jpeg",
  "/solution/sol3.jpeg",
  "/solution/sol4.jpeg",
];

const solutiondetails = [
  {
    type: "A/ Installation photovoltaïque domestique",
    items: [
      "Panneaux solaires",
      "Onduleur",
      "Support de fixation",
      "Câbles et connecteurs",
      "Système de montage",
      "Boîtier de jonction",
      "Disjoncteur",
      "Compteur d'électricité",
      "Batteries",
    ],
  },
  {
    type: "B/ Installation photovoltaïque agricole",
    items: [
      "Panneaux solaires",
      "Pompe solaire",
      "Onduleur",
      "Câbles et connecteurs",
      "Système de fixation",
      "Boîtier de jonction",
      "Disjoncteur",
      "Batteries (facultatif)",
    ],
  },
  {
    type: "C/ Installation photovoltaïque industrielle ou commerciale",
    items: [
      "Panneaux solaires",
      "Onduleurs",
      "Support de fixation",
      "Câbles et connecteurs",
      "Système de montage",
      "Boîtier de jonction",
      "Disjoncteur",
      "Compteur d'électricité",
      "Monitoring",
    ],
  },
  {
    type: "D/ Installation d'arrosage goutte à goutte solaire",
    items: [
      "Panneaux solaires",
      "Pompe solaire",
      "Système d'arrosage goutte à goutte",
      "Tuyaux et raccords",
      "Goutteurs",
      "Filtre",
      "Contrôleur de débit",
      "Câbles et connecteurs",
      "Boîtier de jonction",
    ],
  },
];

export default function SolutionDetail() {
  return (
    <>
      <Home />
      <div className="solution-detail-page">
        <h1 className="solution-detail-title">Nos Solutions en Détail</h1>
        {solutiondetails.map((solution, index) => (
          <div
            className={`solution-block ${index % 2 !== 0 ? "reverse" : ""} ${
              index % 2 === 0 ? "colored" : "white"
            }`}
            key={index}
          >
            <img src={images[index]} alt={solution.type} />
            <div className="solution-content">
              <h2>{solution.type}</h2>
              <ul>
                {solution.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
