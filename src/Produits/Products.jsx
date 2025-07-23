import React, { useEffect, useRef } from "react";
import "./products.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export default function Produits() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  // Images for products
  const productImages = [
    "/Structures/structure1.jpeg",
    "/cable/cable2.webp",
    "/conneteurs/connecteur1.jpeg",
    "/disjoncteur/dis1.jpeg",
    "/parafoudre/par1.webp",
    "/bifacial/bifacial1.jpeg"
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
      <title>Macharek | Products</title>
      <meta name="description" content="Découvrez notre large gamme de produits photovoltaïques, accessoires et matériels électriques pour vos installations solaires." />
      <meta name="keywords" content="produits, panneaux solaires, accessoires, onduleurs, batteries, câbles, photovoltaïque" />
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
                  <Link to="/productsCatalogue" ><span className="view-details">View Details</span></Link>
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
