import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductData.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function ProductTypePage() {
  const { reference } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [filtertext, setfiltertext] = useState("");

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = productsData
    .flatMap((category) => category.items)
    .find((item) => item.reference === reference);

  if (!product) {
    return (
      <div className="product-detail">
        <Home />
        <h2 style={{ color: "red", textAlign: 'center', marginTop: '100px' }}>
          {t("products.notFound")}
        </h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← {t("products.back")}
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Macharek | {product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.reference}, produits solaires, macharek`} />
      </Helmet>

      <div className="product-detail">
        <Home />
        <button className="back-button" onClick={() => navigate(-1)}>
          ← {t("products.back")}
        </button>

        <div className="product-detail-container">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-container">
            <h1>{product.name}</h1>
            <p className="product-reference"><strong>{t("products.reference")}:</strong> {product.reference}</p>
            <p className="product-description"><strong>{t("products.description")}:</strong> {product.description}</p>
            <p className="product-brand"><strong>{t("products.brand")}:</strong> {product.marque}</p>
            <p className="product-weight"><strong>{t("products.weight")}:</strong> {product.poids}</p>
            
            {product.avantages && (
              <div className="product-advantages">
                <h3>{t("products.advantages")}:</h3>
                <ul>
                  {product.avantages.map((advantage, i) => (
                    <li key={i}>{advantage}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
