import React, { useState } from "react";
import "./products.css";
import Home from "../Home/home";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function ProduitCatalogue() {
  const navigate = useNavigate();
  const {t} =useTranslation()

  const [filtertext,setfiltertext]=useState("")

  const produitcatalogue = [
    {
      produit: "./produitcatalogue/produitcat1.webp",
      name: "Accessoires d'installation",
      description: "Structures, câbles, connecteurs, protections, boîtiers pour installations.",
      sousProduits: [
        "Structures",
        "Câbles",
        "Connecteurs",
        "Disjoncteur de protections DC",
        "Parafoudre",
        "Boîtier de jonction"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat2.jpeg",
      name: "Panneaux solaire photovoltaïques",
      description: "Panneaux bifaciaux et monocristallins pour la production d'énergie solaire.",
      sousProduits: [
        "Bifacial",
        "Monocristallin"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat3.jpeg",
      name: "Matériels électrique",
      description: "Variateurs, onduleurs, pompes et équipements pour installations solaires.",
      sousProduits: [
        "Variateurs de pompage Solaire INVT",
        "Onduleurs solaires OnGrid",
        "Onduleur Solaire Offgrid Hybride",
        "Inverter solaire",
        "Pompe Immergée",
        "Pompes submersibles"
      ]
    },
    {
      produit: "./produitcatalogue/produitcat4.webp",
      name: "Rosage et irrigation",
      description: "Tuyaux, goutteurs, pompes, pulvérisateurs pour arrosage agricole.",
      sousProduits: [
        "Tuyaux (PVC / polyéthylène)",
        "Goutteurs (goutte à goutte)",
        "Pompes",
        "Pulvérisateur (main / chariot)"
      ]
    }
  ];
  const filteredCatalogue = produitcatalogue.filter((product) => {
  const textfilter=filtertext.toLowerCase();

  const nameMatch=product.name.toLowerCase().includes(textfilter);

  const sousproduits=product.sousProduits.some((sub)=>
    sub.toLowerCase().includes(textfilter)
  )

  return nameMatch || sousproduits ; 


})



  return (
    <>
    <Helmet>
    <title>Macharek | Products</title>
  <meta name="description" content="Découvrez notre large gamme de produits photovoltaïques, accessoires et matériels électriques pour vos installations solaires." />
  <meta name="keywords" content="produits, panneaux solaires, accessoires, onduleurs, batteries, câbles, photovoltaïque" />
</Helmet>

    
    <div>
      <Home />
      <div className="produits-catalogue">
        <h2>{t("nav.productTitle")}</h2>

       

        <input type="text" value={filtertext}
        onChange={(e)=>setfiltertext(e.target.value)}
        placeholder="Rechercher vos produits"
        className="search-input"
         />

        <div className="produit-img">
          {filteredCatalogue.map((product, index) => (
            <div className="card" key={index}>
              <div className="card-image-container">
                <img loading="lazy" src={product.produit} alt={product.name} />
                <div className="card-overlay">
                  <p>{product.description}</p>
                </div>
              </div>
              <h3>{product.name}</h3>

              {product.sousProduits.length > 0 && (
                <div className="sous-produit">
                  {product.sousProduits.map((produit, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        navigate(
                          `/produits/${produit
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/\//g, "")
                            .replace(/[()]/g, "")}`
                        )
                      }
                    >
                      {produit}
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
