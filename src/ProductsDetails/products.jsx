import React from "react";
import "./products.css"
import Home from "../Home/home"


export default function ProduitCatalogue (){
    
    const produitcatalogue = [
        {
          produit: "./produitcatalogue/produitcat1.webp",
          name: "Panneaux Photovoltaïques",
          description: "Convertissent la lumière du soleil en électricité propre."
        },
        {
          produit: "./produitcatalogue/produitcat2.jpeg",
          name: "Accessoires d'installation",
          description: "Câbles, connecteurs, et supports pour panneaux solaires."
        },
        {
          produit: "./produitcatalogue/produitcat3.jpeg",
          name: "Matériel électrique",
          description: "Équipements électriques essentiels pour votre installation."
        }
      ];
      
    return(
        <div>
            <Home />
            <div className="produits-catalogue">

            <h2>Catalogue de produits</h2>

            <div className="produit-img">
  {produitcatalogue.map((product, index) => (
    <div className="card" key={index}>
      <div className="card-image-container">
        <img src={product.produit} alt={product.name} />
        <div className="card-overlay">
          <p>{product.description}</p>
        </div>
      </div>
      <h3>{product.name}</h3>
    </div>
  ))}
</div>
            </div>
        </div>
    )
}