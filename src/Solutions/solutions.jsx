import React from "react";
import "./solutions.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Solution() {
  const {t}=useTranslation();
  const categories = [
    {
      title: `A/ ${t("nav-title-sol1")}`,
      img: "/solution/sol1.jpeg",
    },
    {
      title: `B/ ${t("nav-title-sol2")}`,
      img: "/solution/sol2.jpeg",
    },
    {
      title: `C/ ${t("nav-title-sol3")}`,
      img: "/solution/sol3.jpeg",
    },
    {
      title: `D/ ${t("nav-title-sol4")}`,
      img: "/solution/sol4.jpeg",
    },
  ];
  

  return (
    <section id="solutions" className="solution-section">
      <h2 className="solution-title">
        <span>S</span>olutions
      </h2>

      <div className="solutions-grid">
      {categories.map((category, index) => (
  <div className="solution-card" key={index}>
    <img src={category.img} alt={category.title} className="solution-img" loading="lazy" />
    <h3>{category.title}</h3>
    <div className="button-container">
      <Link to='/solutions/details/all'>
        <button>{t("nav-btn-sol")}</button>
      </Link>
    </div>
  </div>
))}
      </div>

      <hr />
    </section>
  );
}
