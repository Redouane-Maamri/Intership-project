import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductDetail.css";
import { Helmet } from "react-helmet-async";

export default function ProductDetail() {
  const { reference } = useParams();
  const navigate = useNavigate();

  const product = productsData
    .flatMap((category) => category.items)
    .find((item) => item.reference === reference);

//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (index) => {
//     setOpenSection(openSection === index ? null : index);
//   };

  if (!product) {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        Produit introuvable
      </h2>
    );
  }

//   const sections = [
//     { title: "Ingrédients", content: "100% huile de coco pure, non raffinée." },
//     { title: "Regarder la vidéo", content: "Vidéo démonstrative ici (embed ou lien)." },
//     { title: "Avantages & Utilisation", content: "Hydrate, nourrit, et adoucit. Utiliser matin et soir." },
//     { title: "Pourquoi ce produit ?", content: "Pressé à froid, bio, vegan, sans cruauté." },
//   ];

  return (
    <>
    <Helmet>
    <title>Macharek | Products</title>
  <meta name="description" content="Découvrez notre large gamme de produits photovoltaïques, accessoires et matériels électriques pour vos installations solaires." />
  <meta name="keywords" content="produits, panneaux solaires, accessoires, onduleurs, batteries, câbles, photovoltaïque" />
</Helmet>

    
 
    <div className="product-detail-page">
      <Home />
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Référence :</strong> {product.reference}</p>
          <p><strong>Description :</strong> {product.description}</p>
          <p><strong>Marque :</strong> {product.marque}</p>
          <p><strong>Date d'ajout :</strong> {product.dateAjout}</p>
          <p><strong>Poids :</strong> {product.poids}</p>
          <p><strong>Avantage : </strong>{product.avantages}</p>
          </div>
      </div>
    </div>
    </>
  );
}
