import React from "react";
import "./aboutmach.css";
import Home from "../Home/home";
import { FaTools, FaMedal, FaHandshake, FaTruckLoading, FaWarehouse, FaShippingFast } from "react-icons/fa";

export default function AboutMach() {
  return (
    <>
      <div className="macharek-about">
        <Home />
        <h2>A propos de Macharek</h2>

        <div className="img-macharek">
          <p>
            NOTRE ENTREPRISE
            Nous proposons une large gamme de produits de haute qualité pour répondre à tous vos besoins
            énergétiques. Que vous soyez un particulier cherchant à réduire votre empreinte carbone ou
            une entreprise souhaitant optimiser son efficacité
            énergétique, nous avons les solutions adaptées pour vous. Notre équipe d'experts est toujours prête à vous conseiller et à vous guider dans le choix des équipements qui correspondent le mieux à vos projets. Faites confiance à CHAIN PROJECT pour un avenir plus lumineux et durable..
          </p>
          <img src="/partenaires/part1.webp" alt="" />
        </div>

        {/* Nos Valeurs */}
        <div className="all-about">
        <div className="valeurs-about">
          <h2>Nos Valeurs</h2>
          <div className="values-container">
            <h3><FaTools className="icon" /> Expertise</h3>
            <h3><FaMedal className="icon" /> Excellence</h3>
            <h3><FaHandshake className="icon" /> Engagement</h3>
          </div>
        </div>

        {/* Suivi */}
        <div className="suibi-about">
          <h2>Suivi</h2>
          <div className="suivi-container">
            <h3><FaTruckLoading className="icon" /> Réception</h3>
            <h3><FaWarehouse className="icon" /> Stockage</h3>
            <h3><FaShippingFast className="icon" /> Distribution</h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
