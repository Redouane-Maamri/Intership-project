import React from "react";
import "./aboutmach.css";
import Home from "../Home/home";
import {
  FaTools, FaMedal, FaHandshake,
  FaLightbulb, FaShieldAlt, FaLeaf,
  FaTruckLoading, FaWarehouse, FaShippingFast,FaArrowRight
} from "react-icons/fa";

export default function AboutMach() {
  return (
    <div className="macharek-about">
      <Home />
      <h2>A propos de Macharek</h2>

      <div className="img-macharek">
        <p>
          <strong>NOTRE ENTREPRISE</strong> <br />
          Nous proposons une large gamme de produits de haute qualité pour répondre à tous vos besoins
          énergétiques. Que vous soyez un particulier cherchant à réduire votre empreinte carbone ou
          une entreprise souhaitant optimiser son efficacité
          énergétique, nous avons les solutions adaptées pour vous. Notre équipe d'experts est toujours prête à vous conseiller et à vous guider dans le choix des équipements qui correspondent le mieux à vos projets.
        </p>
        <img src="/HomeImage/Homeimg1.webp" alt="Illustration entreprise" />
      </div>

      {/* Nos Valeurs */}
      <div className="valeurs-about">
        <h2>Nos Valeurs</h2>
        <div className="values-container">
          <h3><FaTools className="icon" /> Expertise</h3>
          <h3><FaMedal className="icon" /> Excellence</h3>
          <h3><FaHandshake className="icon" /> Engagement</h3>
          <h3><FaLightbulb className="icon" /> Innovation</h3>
          <h3><FaShieldAlt className="icon" /> Fiabilité</h3>
          <h3><FaLeaf className="icon" /> Durabilité</h3>
        </div>
      </div>

      {/* Suivi */}
      <div className="suibi-about">
        <h2>Suivi</h2>
        <div className="suivi-container">
            <img loading="lazy" src="./picabout1.jpeg" alt="" />
          <h3><FaTruckLoading className="icon" /> Réception</h3>
          <FaArrowRight className="arrow-icon" />
                     
            <img loading="lazy" src="./picabout2.jpeg" alt="" />
            <h3><FaWarehouse className="icon" /> Stockage</h3>
              <FaArrowRight className="arrow-icon" />

              <img loading="lazy" src="./picabout3.webp" alt="" />
          <h3><FaShippingFast className="icon" /> Distribution</h3>
        </div>

        <img src="" alt="" />
      </div>
    </div>
  );
}
