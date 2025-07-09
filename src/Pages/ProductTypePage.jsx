import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductData.css";


export default function ProductTypePage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const formattedType = type.replace(/-/g, " ").toLowerCase();

  const product = productsData.find(
    (p) => p.type.toLowerCase() === formattedType
  );

  if (!product) {
    return <h2 style={{ color: "red" }}>Produit non trouvé</h2>;
  }

  return (
    <div className="product-detail">
      <Home />
      <button className="back-button" onClick={() => navigate(-1)}>← Retour</button>
      <h2>{product.type}</h2>
      <ul>
        {product.items.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(`/produits/details/${item.reference}`)}
            style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
          >
            {item.image && (
              <div className="product-image-container">
                <img src={item.image} alt={item.name} width={200} />
              </div>
            )}
            <strong>{item.name}</strong>
            <h4>Réf: {item.reference}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
