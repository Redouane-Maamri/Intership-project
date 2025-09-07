import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productData";
import Home from "../Home/home";
import "./ProductDetail.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Always run hooks before any conditional return
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Clean up the type parameter safely
  const cleanType = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

  // Find the category that matches the type
  const category = cleanType
    ? productsData.find(
        (cat) => cat.type.toLowerCase() === cleanType.toLowerCase()
      )
    : null;

  // Filtering logic
  useEffect(() => {
    if (category) {
      let tempProducts = category.items;

      if (selectedBrand !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.marque === selectedBrand
        );
      }

      if (searchText) {
        tempProducts = tempProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      setFilteredProducts(tempProducts);
    }
  }, [category, selectedBrand, searchText]);

  // Get translated product type
  const getTranslatedType = (originalType) => {
    if (originalType === "Structures") return t("products.types.structures");
    if (originalType === "Câbles") return t("products.types.cables");
    if (originalType === "Connecteurs") return t("products.types.connectors");
    if (originalType === "Disjoncteur de protections DC")
      return t("products.types.circuitBreakers");
    if (originalType === "Parafoudre") return t("products.types.surgeProtectors");
    if (originalType === "Boîtiers de jonction sur-mesure")
      return t("products.types.junctionBoxes");

    if (originalType === "Bifacial")
      return t("products.categories.panels.bifacial");
    if (originalType === "Monocristallin")
      return t("products.categories.panels.monocrystalline");

    if (originalType === "Variateurs de pompage Solaire INVT")
      return t("products.categories.electrical.variators");
    if (originalType === "Onduleurs solaires OnGrid")
      return t("products.categories.electrical.ongrid");
    if (originalType === "Onduleur Solaire Offgrid Hybride")
      return t("products.categories.electrical.offgrid");
    if (originalType === "Inverter solaire")
      return t("products.categories.electrical.inverter");
    if (originalType === "Pompe Immergée")
      return t("products.categories.electrical.immersed");
    if (originalType === "Pompes submersibles")
      return t("products.categories.electrical.submersible");

    if (originalType === "Tuyaux en PVC")
      return t("products.categories.irrigation.pvc");
    if (originalType === "Tuyaux en polyéthylène")
      return t("products.categories.irrigation.polyethylene");
    if (originalType === "Goutteurs goutte à goutte")
      return t("products.categories.irrigation.drippers");
    if (originalType === "Pulvérisateur à main")
      return t("products.categories.irrigation.handSprayer");
    if (originalType === "Pulvérisateur Spécial")
      return t("products.categories.irrigation.specialSprayer");
    if (originalType === "TRANSPALETTE MANUEL")
      return t("products.categories.irrigation.palletTruck");

    return originalType;
  };

  // ---- Safe conditional rendering ----
  if (!type || !category) {
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

  // ---- Main Page ----
  return (
    <>
      <Helmet>
        <title>Macharek | {getTranslatedType(category.type)}</title>
        <meta name="description" content={category.description} />
        <meta
          name="keywords"
          content={`${category.type}, produits solaires, macharek, énergie solaire`}
        />
      </Helmet>

      <div className="product-detail-page">
        <Home />

        <div className="product-content-wrapper">
          <div className="sidebar">
            <button className="back-button" onClick={() => navigate(-1)}>
              ← {t("products.back")}
            </button>

            {/* Filter by brand */}
            <div className="filter-section">
              <h3>{t("products.filterByBrand")}</h3>
              <select
                onChange={(e) => setSelectedBrand(e.target.value)}
                value={selectedBrand}
              >
                <option value="all">{t("products.allBrands")}</option>
                {[...new Set(category.items.map((item) => item.marque))].map(
                  (brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Search */}
            <div className="filter-section">
              <h3>{t("products.search")}</h3>
              <input
                type="text"
                placeholder={t("products.searchPlaceholder")}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>

          <div className="main-content">
            <h1 className="category-title">
              {getTranslatedType(category.type)}
            </h1>
            <p className="category-description">{category.description}</p>

            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div className="product-card" key={index}>
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p>
                        <strong>{t("products.reference")}:</strong>{" "}
                        {product.reference}
                      </p>
                      <p>
                        <strong>{t("products.description")}:</strong>{" "}
                        {product.description}
                      </p>
                      <p className="product-brand">
                        <strong>{t("products.brand")}:</strong>{" "}
                        {product.marque}
                      </p>
                      <p>
                        <strong>{t("products.weight")}:</strong>{" "}
                        {product.poids}
                      </p>

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
                ))
              ) : (
                <p>{t("products.noProductsFound")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
