import React, { useEffect, useRef } from "react";
import "./products.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export default function Produits() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  // Images for products - updated to match famous brands
  const productImages = [
    "/bifacial/bifacial3.jpeg",   // Canadian Solar
    "/Variateur/var1.webp",       // INVT
    "/Variateur/var2.webp",       // Fronius
    "/irrigation/irrg8.jpeg",     // Pulvérisateur
    "/bifacial/bifacial4.jpeg",   // LONGi Solar
    "/Variateur/var5.jpeg"        // AQUASTRONG
  ];

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
      { threshold: 0.1 }
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

  return (
    <>
    {/* // for seo  */}
    <Helmet>
      <title>Macharek | {t("nav_services")}</title>
      <meta name="description" content={t("products.meta.description")} />
      <meta name="keywords" content={t("products.meta.keywords")} />
    </Helmet>

    <section id="produits" className="Produits-container" ref={sectionRef}>
      <h2 className="animated-title"><span></span>{t("nav_titlepage")}</h2>

      <div className="img-container">
        <ul className="product-grid">
          {t("products.products", { returnObjects: true }).map((produit, index) => (
            <li key={index} className="produit-card animate-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-image-container">
                <img 
                  src={productImages[index]} 
                  alt={produit.name} 
                  className="produit-image" 
                  loading="lazy" 
                />
                <div className="image-overlay">
                  <span className="view-details">{t("products.view_details")}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{produit.name}</h3>
                <p className="reference"><strong>{t("products.reference")}</strong> {produit.reference}</p>
                <p className="description">{produit.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link 
          className="to-link" 
          to="/productsCatalogue"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className="animated-button">
            <span className="button-text">{t("nav-btn-products")}</span>
            <span className="button-icon">→</span>
          </button>
        </Link>
      </div>
    </section>
    </>
  );
}
