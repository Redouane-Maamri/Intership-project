import React from "react";
import "./products.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Produits() {
  const { t } = useTranslation();

  const produits = [
    { img: '/pic1.jpeg', nom: 'Panneau Solaire Photovoltaïque', reference: 'PSPV-300', description: 'Panneau solaire monocristallin 300W' },
    { img: '/pic2.jpeg', nom: 'Onduleur Solaire', reference: 'ONDL-5K', description: 'Onduleur 5kW pour système solaire' },
    { img: '/pic3.jpeg', nom: 'Batterie Lithium', reference: 'BAT-LI-10K', description: 'Batterie lithium 10kWh' },
    { img: '/Onduleur/onduleur1.jpeg', nom: 'Onduleur 3000W', reference: 'ONDL-3K', description: 'Onduleur 3000W pour système solaire' },
    { img: '/CablesSolaire/cable3.png', nom: 'Câble souple', reference: 'CABL-SPL', description: 'Pour installation flexible' },
    { img: '/Protection/protection2.jpeg', nom: 'Parafoudre', reference: 'PARA-01', description: 'Protection contre les surtensions dues à la foudre' }
  ];

  return (
    <section id="produits" className="Produits-container">
      <h2><span>{t("nav_spanproductttile")}</span>{t("nav_titlepage")}</h2>

      <div className="img-container">
        <ul>
          {produits.map((produit, index) => (
            <li key={index} className="produit-card">
              <img  src={produit.img} alt={produit.nom} className="produit-image" />
              <h3>{produit.nom}</h3>
              <p><strong>Référence :</strong> {produit.reference}</p>
              <p>{produit.description}</p>
            </li>
          ))}
        </ul>

        <Link to="/productsCatalogue">
          <button>{t("nav-btn-products")}</button>
        </Link>
      </div>

      <hr className="full-products" />
    </section>
  );
}
