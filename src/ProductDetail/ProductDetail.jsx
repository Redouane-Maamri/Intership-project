import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductDetail.css";

export default function ProductDetail() {
  const {reference} = useParams();

  const navigate= useNavigate()

  const product=productsData.flatMap((category) => category.items)
  .find((item)=>item.reference===reference)

  if(!product){
    return <h2 style={{ color: "red", textAlign: "center" }}>Produit introuvable</h2>;
  }

  return (
    <div className="product-detail-page">
      <Home />
      <button className="back-button" onClick={() => navigate(-1)}>← Retour</button>

      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Référence :</strong> {product.reference}</p>
          <p><strong>Description :</strong> {product.description}</p>
          <p><strong>prix :</strong> {product.prix}</p>

        </div>
      </div>
    </div>
  );
}
