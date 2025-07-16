import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DetailPartenaire from "./DetailPartenaires/partenaire"
import AboutMach from "./AboutMach/aboutmach"
import ProduitCatalogue from "./ProductsDetails/products"
import ProductTypePage from "./Pages/ProductTypePage";
import ProductDetail from "./ProductDetail/ProductDetail"
import Actualites from "./Actualites/Actualites"
import SolutionDetail from "./solutiondetails/solutiondetail";

function LandingPage() {
  return (
    <>
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
    </>
  );
}

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Partners" element={<DetailPartenaire/>} />
          <Route path="/AboutMacharek" element={<AboutMach/>} />
          <Route path='/productsCatalogue' element={<ProduitCatalogue/>}/>
          <Route path="/produits/:type" element={<ProductTypePage />} />
          <Route path="/produits/details/:reference" element={<ProductDetail />} />
          <Route path='/Actualites' element={<Actualites/>} />
          <Route path='/solutions/details/all' element={<SolutionDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
