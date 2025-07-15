import React from "react";
import "./solutions.css";

export default function Solution() {
  const categories = [
    {
      title: "A/ Installation photovoltaïque domestique",
      img: "/solution/sol1.jpeg",
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
      title: "B/ Installation photovoltaïque agricole",
      img: "/solution/sol2.jpeg",
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
      title: "C/ Installation photovoltaïque industrielle ou commerciale",
      img: "/solution/sol3.jpeg",
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
      title: "D/ Installation d'arrosage goutte à goutte solaire",
      img: "/solution/sol4.jpeg",
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

  return (
    <section id="solutions" className="solution-section">
      <h2 className="solution-title">
        <span>S</span>olutions
      </h2>

      <div className="solutions-grid">
        {categories.map((category, index) => (
          <div className="solution-card" key={index}>
            <img src={category.img} alt={category.title} className="solution-img" loading="lazy" />
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr />
    </section>
  );
}
