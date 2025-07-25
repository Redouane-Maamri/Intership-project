import React, { useState, useRef, useEffect } from "react";
import "./products.css";
import Home from "../Home/home";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import installationAccessories from "../data/productData";

export default function ProduitCatalogue() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  const [filtertext, setfiltertext] = useState("");

  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Extract unique product categories from productData
  const productCategories = Array.from(new Set(installationAccessories.map(item => item.type)));

  // Group product categories into main categories
  const mainCategories = [
    {
      id: "accessories",
      produit: "./produitcatalogue/produitcat3.jpeg",
      name: t("products.categories.accessories.name"),
      description: t("products.categories.accessories.description"),
      sousProduits: productCategories.filter(type => 
        ["Structures", "Câbles", "Connecteurs", "Disjoncteur de protections DC", "Parafoudre", "Boîtiers de jonction sur-mesure"].includes(type)
      )
    },
    {
      id: "panels",
      produit: "./produitcatalogue/produitcat2.jpeg",
      name: t("products.categories.panels.name"),
      description: t("products.categories.panels.description"),
      sousProduits: productCategories.filter(type => 
        ["Bifacial", "Monocristallin"].includes(type)
      )
    },
    {
      id: "electrical",
      produit: "./produitcatalogue/produit.jpeg",
      name: t("products.categories.electrical.name"),
      description: t("products.categories.electrical.description"),
      sousProduits: productCategories.filter(type => 
        ["Variateurs de pompage Solaire INVT", "Onduleurs solaires OnGrid", "Onduleur Solaire Offgrid Hybride", "Inverter solaire", "Pompe Immergée", "Pompes submersibles"].includes(type)
      )
    },
    {
      id: "irrigation",
      produit: "./produitcatalogue/produitcat4.jpeg",
      name: t("products.categories.irrigation.name"),
      description: t("products.categories.irrigation.description"),
      sousProduits: productCategories.filter(type => 
        ["Tuyaux en PVC", "Tuyaux en polyéthylène", "Goutteurs goutte à goutte", "Pulvérisateur à main", "Pulvérisateur Spécial", "TRANSPALETTE MANUEL"].includes(type)
      )
    }
  ];

  // Create a mapping between original product types and their translations
  const getTranslatedProductType = (originalType) => {
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
    if (originalType === "Goutteurs (goutte à goutte)") return t("products.categories.irrigation.drippers");
    if (originalType === "Pulvérisateur à main") return t("products.categories.irrigation.handSprayer");
    if (originalType === "Pulvérisateur Spécial") return t("products.categories.irrigation.specialSprayer");
    if (originalType === "TRANSPALETTE MANUEL") return t("products.categories.irrigation.palletTruck");
    
    return originalType; // Return original if no translation found
  };

  // Store original type to translated type mapping for navigation
  const typeMapping = {};
  productCategories.forEach(type => {
    typeMapping[getTranslatedProductType(type).toLowerCase()] = type;
  });

  const filteredCatalogue = mainCategories.filter((category) => {
    const textfilter = filtertext.toLowerCase();
    const nameMatch = category.name.toLowerCase().includes(textfilter);
    const sousproduits = category.sousProduits.some((sub) =>
      getTranslatedProductType(sub).toLowerCase().includes(textfilter)
    );
    return nameMatch || sousproduits;
  });

  // Get placeholder text based on current language
  const getPlaceholderText = () => {
    switch(i18n.language) {
      case 'en':
        return "Search for products";
      case 'ar':
        return "البحث عن المنتجات";
      default:
        return "Rechercher vos produits";
    }
  };

  // Handle product click with language support
  const handleProductClick = (produit) => {
    const translatedName = getTranslatedProductType(produit);
    
    // First check if we have an original mapping for this translated name
    const originalType = typeMapping[translatedName.toLowerCase()] || produit;
    
    // Navigate using the original type (which matches productData.jsx)
    navigate(
      `/produits/${originalType
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "")
        .replace(/[()]/g, "")}`
    );
  };

  return (
    <>
      <Helmet>
        <title>Macharek | {t("nav_services")}</title>
        <meta name="description" content={t("products.meta.description")} />
        <meta name="keywords" content={t("products.meta.keywords")} />
      </Helmet>

      <div>
        <Home />
        <div className="produits-catalogue" ref={sectionRef}>
          <h2 className="products-title">{t("nav.productTitle")}</h2>

          <input 
            type="text" 
            value={filtertext}
            onChange={(e) => setfiltertext(e.target.value)}
            placeholder={getPlaceholderText()}
            className="search-input"
          />

          <div className="produit-img">
            {filteredCatalogue.map((category, index) => (
              <div className="card" key={index} style={{"--index": index + 1}}>
                <div className="card-image-container">
                  <img 
                    src={category.produit} 
                    srcSet={`${category.produit} 400w, ${category.produit.replace('.webp', '-medium.webp')} 800w`} 
                    sizes="(max-width: 600px) 400px, 800px"
                    loading="lazy" 
                    alt={category.name} 
                  />
                  <div className="card-overlay">
                    <p>{category.description}</p>
                  </div>
                </div>
                <h3>{category.name}</h3>

                {category.sousProduits.length > 0 && (
                  <div className="sous-produit">
                    {category.sousProduits.map((produit, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleProductClick(produit)}
                      >
                        {getTranslatedProductType(produit)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
