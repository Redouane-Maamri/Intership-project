import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductDetail.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  
  FaWhatsapp,
} from "react-icons/fa";

export default function ProductDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Check if type is defined before using replace
  if (!type) {
    return (
      <div className="product-detail-page">
        <Home />
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          {t("products.notFound")}
        </h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← {t("products.back")}
        </button>
      </div>
    );
  }

  // Clean up the type parameter to match the format in productData
  const cleanType = type.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  // Find the category that matches the type parameter
  const category = productsData.find(
    (cat) => cat.type.toLowerCase() === cleanType.toLowerCase()
  );

  // Scroll to top on component mount
 

  // Get translated product type
  const getTranslatedType = (originalType) => {
    // Mapping for accessories
    if (originalType === "Structures") return t("products.types.structures");
    if (originalType === "Câbles") return t("products.types.cables");
    if (originalType === "Connecteurs") return t("products.types.connectors");
    if (originalType === "Disjoncteur de protections DC") return t("products.types.circuitBreakers");
    if (originalType === "Parafoudre") return t("products.types.surgeProtectors");
    if (originalType === "Boîtiers de jonction sur-mesure") return t("products.types.junctionBoxes");
    
    // Mapping for panels
    if (originalType === "Bifacial") return t("products.categories.panels.bifacial");
    if (originalType === "Monocristallin") return t("products.categories.panels.monocrystalline");
    
    // Mapping for electrical
    if (originalType === "Variateurs de pompage Solaire INVT") return t("products.categories.electrical.variators");
    if (originalType === "Onduleurs solaires OnGrid") return t("products.categories.electrical.ongrid");
    if (originalType === "Onduleur Solaire Offgrid Hybride") return t("products.categories.electrical.offgrid");
    if (originalType === "Inverter solaire") return t("products.categories.electrical.inverter");
    if (originalType === "Pompe Immergée") return t("products.categories.electrical.immersed");
    if (originalType === "Pompes submersibles") return t("products.categories.electrical.submersible");
    
    // Mapping for irrigation
    if (originalType === "Tuyaux en PVC") return t("products.categories.irrigation.pvc");
    if (originalType === "Tuyaux en polyéthylène") return t("products.categories.irrigation.polyethylene");
    if (originalType === "Goutteurs goutte à goutte") return t("products.categories.irrigation.drippers");
    if (originalType === "Pulvérisateur à main") return t("products.categories.irrigation.handSprayer");
    if (originalType === "Pulvérisateur Spécial") return t("products.categories.irrigation.specialSprayer");
    if (originalType === "TRANSPALETTE MANUEL") return t("products.categories.irrigation.palletTruck");
    
    return originalType; // Return original if no translation found
  };

  if (!category) {
    return (
      <div className="product-detail-page">
        <Home />
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
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
        <title>Macharek | {getTranslatedType(category.type)}</title>
        <meta name="description" content={category.description} />
        <meta name="keywords" content={`${category.type}, produits solaires, macharek, énergie solaire`} />
      </Helmet>

      <div className="product-detail-page">
        <Home />

        <div className="contact">
          <span>+212 6 61 233 016</span><br></br><br></br>
          <a  style={{textAlign:'center',marginLeft:'42%',fontSize:'1.5rem',color:'#00FF00'}}
            href="https://wa.me/212661233016"
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter via WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        <button className="back-button" onClick={() => navigate(-1)}>
          ← {t("products.back")}
        </button>

        <h1 className="category-title">{getTranslatedType(category.type)}</h1>
        <p className="category-description">{category.description}</p>

        <div className="products-grid">
          {category.items.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>

              <div className="product-info">
                <h2>{product.name}</h2>
                <p><strong>{t("products.reference")}:</strong> {product.reference}</p>
                <p><strong>{t("products.description")}:</strong> {product.description}</p>
                <p className="product-brand"><strong>{t("products.brand")}:</strong> {product.marque}</p>
                <p><strong>{t("products.weight")}:</strong> {product.poids}</p>
                
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
          ))}
        </div>
      </div>
    </>
  );
}
