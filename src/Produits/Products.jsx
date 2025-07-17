import React from "react";
import "./products.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Produits() {
  const { t } = useTranslation();

  const produits = [
    {
      img: "/Structures/structure1.jpeg",
      nom: "Structure en Acier Galvanisé",
      reference: "STR-GALV",
      description: "Structure robuste en acier galvanisé pour installation durable."
    },
    {
      img: "/cable/cable2.webp",
      nom: "Câble solaire 6 mm²",
      reference: "CABL-SOL-6",
      description: "Câble solaire isolé 6 mm², adapté pour installations moyennes."
    },
    {
      img: "/conneteurs/connecteur1.jpeg",
      nom: "Connecteur MC4 Solaire",
      reference: "CONN-MC4",
      description: "Connecteur rapide pour panneaux photovoltaïques, IP67, résistant aux UV."
    },
    {
      img: "/disjoncteur/dis1.jpeg",
      nom: "Disjoncteur DC 2 pôles",
      reference: "PROT-DC-2P",
      description: "Protection DC 2 pôles jusqu'à 1000 V."
    },
    {
      img: "/parafoudre/par1.webp",
      nom: "Parafoudre DC 800 V",
      reference: "PARA-DC-800",
      description: "Protection contre surtensions DC jusqu'à 800 V."
    },
    
    {
      img: "/bifacial/bifacial1.jpeg",
      nom: "Panneau Trina Solar DUO-MAX 570Wc-600Wc",
      reference: "PS-TRINA-570-600",
      description: "Panneau monocristallin haute performance."
    }
  ];
  

  return (
    <>
    {/* // for seo  */}
    <Helmet>
    <title>Macharek | Products</title>
  <meta name="description" content="Découvrez notre large gamme de produits photovoltaïques, accessoires et matériels électriques pour vos installations solaires." />
  <meta name="keywords" content="produits, panneaux solaires, accessoires, onduleurs, batteries, câbles, photovoltaïque" />
</Helmet>

    
    <section id="produits" className="Produits-container">
      <h2><span></span>{t("nav_titlepage")}</h2>

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

    </section>
    </>
  );
}
