import React from "react";
import "./solutions.css";

export default function Solution() {
  const solutions = [
    {
      img: "/solution/aquastrong.jpeg",
      title: "Aquastrong – Pompes et systèmes hydrauliques",
      description: "Aquastrong fournit des solutions de pompage durables et efficaces pour les applications agricoles, industrielles et domestiques. Leurs pompes immergées et systèmes hydrauliques sont reconnus pour leur fiabilité et leur faible consommation énergétique."
    },
    {
      img: "/solution/jasolar.jpeg",
      title: "JA Solar – Panneaux photovoltaïques",
      description: "JA Solar est un leader mondial dans la fabrication de panneaux solaires haute performance. Ils offrent des solutions pour les installations résidentielles, commerciales et industrielles, avec une technologie avancée en cellules monocristallines PERC et bifaciales."
    },
    {
      img: "/solution/invt.jpeg",
      title: "INVT – Onduleurs et solutions solaires",
      description: "INVT propose une large gamme d'onduleurs solaires intelligents pour systèmes photovoltaïques connectés au réseau ou hors réseau. Leurs produits garantissent une conversion efficace et une gestion intelligente de l’énergie solaire."
    },
    {
      img: "/solution/ebara.webp",
      title: "EBARA – Solutions de pompage industrielles",
      description: "EBARA est spécialisé dans les pompes industrielles en acier inoxydable et propose des solutions fiables pour le traitement de l’eau, le bâtiment, les systèmes HVAC et les applications industrielles exigeantes."
    }
  ];

  return (
    <section className="solution-section">
      
        <h2 className="solution-title"><span>S</span>olutions</h2>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <img src={solution.img} alt={solution.title} className="solution-img" />
              <div className="solution-content">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div><br></br>

        <hr />
    </section>
  );
}
