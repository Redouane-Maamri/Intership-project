import React from "react";
import "./products.css";
import Home from "../Home/home";
import { useNavigate } from "react-router-dom";

export default function ProduitCatalogue() {
  const navigate = useNavigate();

  const produitcatalogue = [
    {
      produit: "./produitcatalogue/produitcat1.webp",
      name: "Accessoires d'installation",
      description: "Structures, câbles, connecteurs, protections, boîtiers pour installations.",
      sousProduits: [
        "Structures",
        "Câbles",
        "Connecteurs",
        "Disjoncteur de protections DC",
        "Parafoudre",
        "Boîtier de jonction"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat2.jpeg",
      name: "Panneaux solaire photovoltaïques",
      description: "Panneaux bifaciaux et monocristallins pour la production d'énergie solaire.",
      sousProduits: [
        "Bifacial",
        "Monocristallin"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat3.jpeg",
      name: "Matériels électrique",
      description: "Variateurs, onduleurs, pompes et équipements pour installations solaires.",
      sousProduits: [
        "Variateurs de pompage Solaire",
        "Onduleurs solaires ongrid",
        "Onduleurs offgrid hybride",
        "Inverter solaire",
        "Pompes immergées / submersibles"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat4.webp",
      name: "Rosage et irrigation",
      description: "Tuyaux, goutteurs, pompes, pulvérisateurs pour arrosage agricole.",
      sousProduits: [
        "Tuyaux (PVC / polyéthylène)",
        "Goutteurs (goutte à goutte)",
        "Pompes",
        "Pulvérisateur (main / chariot)"
      ]
    }
  ];

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
                  {product.sousProduits.map((produit, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        navigate(
                          `/produits/${produit
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/\//g, "")
                            .replace(/[()]/g, "")}`
                        )
                      }
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
