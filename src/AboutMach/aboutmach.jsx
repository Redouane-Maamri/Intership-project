import React from "react";
import "./aboutmach.css";
import Home from "../Home/home";
import { Helmet } from "react-helmet-async";

import {
  FaTools, FaMedal, FaHandshake,
  FaLightbulb, FaShieldAlt, FaLeaf,
  FaTruckLoading, FaWarehouse, FaShippingFast, FaArrowRight
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

export default function AboutMach() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Macharek | {t("about.title")}</title>
        <meta name="description" content={t("about.meta-description")} />
        <meta name="keywords" content={t("about.meta-keywords")} />
      </Helmet>

      <div className="macharek-about">
        <Home />

        <h2>{t("about.title")}</h2>

        <div className="img-macharek">
          <p>
            <strong>{t("about.our-company-title")}</strong><br />
            {t("about.our-company-text")}
          </p>
          <img src="/HomeImage/Homeimg1.webp" alt={t("about.image-alt")} />
        </div>

        {/* Nos Valeurs */}
        <div className="valeurs-about">
          <h2>{t("about.our-values")}</h2>
          <div className="values-container">
            <h3><FaTools className="icon" /> {t("nav-expertise")}</h3>
            <h3><FaMedal className="icon" /> {t("nav-excellence")}</h3>
            <h3><FaHandshake className="icon" /> {t("nav-engagement")}</h3>
            <h3><FaLightbulb className="icon" /> {t("nav-innovation")}</h3>
            <h3><FaShieldAlt className="icon" /> {t("nav-fiabilite")}</h3>
            <h3><FaLeaf className="icon" /> {t("nav-durabilite")}</h3>
          </div>
        </div>

        {/* Suivi */}
        <div className="suibi-about">
          <h2>{t("nav-suivi")}</h2>
          <div className="suivi-container">
            <img loading="lazy" src="./picabout1.jpeg" alt="Reception" />
            <h3><FaTruckLoading className="icon" /> {t("nav-reception")}</h3>
            <FaArrowRight className="arrow-icon" />

            <img loading="lazy" src="./picabout2.jpeg" alt="Stockage" />
            <h3><FaWarehouse className="icon" /> {t("nav-stockage")}</h3>
            <FaArrowRight className="arrow-icon" />

            <img loading="lazy" src="./picabout3.webp" alt="Distribution" />
            <h3><FaShippingFast className="icon" /> {t("nav-distribution")}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
