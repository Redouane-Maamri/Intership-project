import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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

function LandingPage() {
  return (
    <>
      <Home />
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
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
