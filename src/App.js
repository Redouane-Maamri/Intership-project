import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./ScrollToTop";

import Home from "./Home/home";
import About from "./About/about";
import Produit from "./Produits/Products";
import Satisfait from "./Satisfait/Satisfait";
import Client from "./Clients/clients";
import Contact from "./Contact/contact";
import Partenaire from "./Partenaires/partenaires";
import Solution from "./Solutions/solutions";
import Map from "./Map/Map";
import ContactForm from "./contactForm/contactForm";
import Home2 from "./home2/home2";
import DetailPartenaire from "./DetailPartenaires/partenaire";
import AboutMach from "./AboutMach/aboutmach";
import ProduitCatalogue from "./ProductsDetails/products";
import ProductTypePage from "./Pages/ProductTypePage";
import ProductDetail from "./ProductDetail/ProductDetail";
import SolutionDetail from "./solutiondetails/solutiondetail";

function LandingPage() {
  return (
    <div className="page-container">
      <Home />
      <Home2 />
      <About />
      <Produit />
      <Solution />
      <Partenaire />
      <Client />
      <Satisfait />
      <Contact />
      <Map />
    </div>
  );
}

function App() {
  return (
    <div className="app-wrapper">
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/Partners" element={<DetailPartenaire />} />
        <Route path="/AboutMacharek" element={<AboutMach />} />
        <Route path="/productsCatalogue" element={<ProduitCatalogue />} />
          <Route path="/produits/:type" element={<ProductDetail />} />
          <Route path="/produit-detail/:reference" element={<ProductTypePage />} />
        <Route path="/solutions/details/all" element={<SolutionDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
