import React from "react";
import "./solutiondetails.css";
import Home from "../Home/home";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
  
    const solutionsKeys = ["sol1", "sol2", "sol3", "sol4"];
  
    return (
      <>
        <Home />
        <div className="solution-detail-page">
          <h1 className="solution-detail-title">{t("solutionsPageTitle")}</h1>
  
          {solutionsKeys.map((key, index) => (
            <div
              className={`solution-block ${index % 2 !== 0 ? "reverse" : ""} ${
                index % 2 === 0 ? "colored" : "white"
              }`}
              key={key}
            >
              <img src={images[index]} alt={t(`solutions.${key}.title`)} />
              <div className="solution-content">
                <h2>{t(`solutions.${key}.title`)}</h2>
                <ul>
                  {t(`solutions.${key}.items`, { returnObjects: true }).map((item, idx) => (
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
  