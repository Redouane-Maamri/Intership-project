import React from "react";
import "./products.css";

export default function Produits() {
  const produits = [
    { img: '/pic1.jpeg', nom: 'Panneau Solaire Photovoltaïque', reference: 'PSPV-300', description: 'Panneau solaire monocristallin 300W' },
    { img: '/pic2.jpeg', nom: 'Onduleur Solaire', reference: 'ONDL-5K', description: 'Onduleur 5kW pour système solaire' },
    { img: '/pic3.jpeg', nom: 'Batterie Lithium', reference: 'BAT-LI-10K', description: 'Batterie lithium 10kWh' },
    { img: '/pic4.jpeg', nom: 'Câble Électrique Cuivre 4mm²', reference: 'CABL-4MM', description: 'Câble électrique en cuivre isolé, idéal pour installations solaires et électriques' },
    { img: '/pic3.jpeg', nom: 'Batterie Lithium', reference: 'BAT-LI-10K', description: 'Batterie lithium 10kWh' },
    { img: '/pic4.jpeg', nom: 'Câble Électrique Cuivre 4mm²', reference: 'CABL-4MM', description: 'Câble électrique en cuivre isolé, idéal pour installations solaires et électriques' }
  
  ];

  return (
    <div className="Produits-container">
      <h2><span>V</span>oici Nos Produits :</h2>
      <div className="img-container">
        <ul>
          {produits.map((produit, index) => (
            <li key={index} className="produit-card">
              <img src={produit.img} alt={produit.nom} className="produit-image" />
              <h3>{produit.nom}</h3>
              <p><strong>Référence :</strong> {produit.reference}</p>
              <p>{produit.description}</p>
            </li>
          ))}
        </ul>

        <button>Découvrir tous les produits</button>
      </div>

      <hr  />
    </div>
  );
}
