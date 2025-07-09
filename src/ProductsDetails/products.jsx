import React from "react";
import "./products.css";
import Home from "../Home/home";
import { useNavigate } from "react-router-dom";


export default function ProduitCatalogue() {
  
  const produitcatalogue = [
    {
      produit: "./produitcatalogue/produitcat2.jpeg",
      name: "Accessoires d'installation",
      description: "Câbles, connecteurs, supports pour installations solaires.",
      sousProduits: [
        "Onduleurs",
        "Câbles solaires",
        "Variateur solaire",
        "Protection"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat3.jpeg",
      name: "Matériel électrique",
      description: "Équipements indispensables pour toute installation électrique.",
      sousProduits: [
        "Tableau électrique",
        "Compteur d'énergie",
        "Disjoncteur",
        "Câbles électriques"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat1.webp",
      name: "Panneaux Photovoltaïques",
      description: "Convertissent la lumière du soleil en électricité propre.",
      sousProduits: []
    }
  ];

  const navigate = useNavigate();


  return (
    <div>
      <Home />
      <div className="produits-catalogue">
        <h2>Catalogue de produits</h2>

        <div className="produit-img">
          {produitcatalogue.map((product, index) => (
            <div className="card" key={index}>
              <div className="card-image-container">
                <img loading="lazy" src={product.produit} alt={product.name} />
                <div className="card-overlay">
                  <p>{product.description}</p>
                </div>
              </div>
              <h3>{product.name}</h3>

              {product.sousProduits.length > 0 && (
  <div className="sous-produit">
    {product.sousProduits.map((produit, index) => (
      <button
        key={index}
        onClick={() => navigate(`/produits/${produit.toLowerCase().replace(/\s+/g, "-")}`)}
      >
        {produit}
      </button>
    ))}
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
