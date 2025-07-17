import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductData.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


export default function ProductTypePage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [filtertext,setfiltertext]=useState("");

  

  const formattedType = type.replace(/-/g, " ").toLowerCase();

  const product = productsData.find(
    (p) => p.type.toLowerCase() === formattedType
  );

  if (!product) {
    return <h2 style={{ color: "red" , textAlign : 'center' , marginTop : '25%' , fontWeight : 'bold' , fontSize : '2rem' }}>Produit non trouvé</h2>;
  }

  const cataloguefilter=product.items.filter((item)=>{
    const searchtext=filtertext.toLowerCase();
    return item.name.toLowerCase().includes(searchtext);
    
  })

  return (
    <>
    <Helmet>
  <title>Produits — Catalogue d'Équipements Solaires et Accessoires</title>
  <meta name="description" content="Découvrez notre large gamme de produits photovoltaïques, accessoires et matériels électriques pour vos installations solaires." />
  <meta name="keywords" content="produits, panneaux solaires, accessoires, onduleurs, batteries, câbles, photovoltaïque" />
</Helmet>

    <div className="product-detail">
      <Home />
      <button className="back-button" onClick={() => navigate(-1)}>← Retour</button>
      <h2>{product.type}</h2>

      <div className="search-filter-container">
  <input
    type="text"
    value={filtertext}
    onChange={(e) => setfiltertext(e.target.value)}
    placeholder="Rechercher votre produit"
    className="search-input"
  />

  <select
    onChange={(e) => {
      const selectedRef = e.target.value;
      if (selectedRef) {
        navigate(`/produits/details/${selectedRef}`);
      }
    }}
    value=""
    className="search-select"
  >
    <option value="">Choisissez un produit</option>
    {cataloguefilter.map((item, index) => (
      <option key={index} value={item.reference}>
        {item.name}
      </option>
    ))}
  </select>
</div>


      <ul>
        {cataloguefilter.map((item, index) => (
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
    </>
  );
}
