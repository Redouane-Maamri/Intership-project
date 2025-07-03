import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

import Home from "./Home/home"
import About from "./About/about"
import Produit from "./Produits/Products"
import Satisfait from "./Satisfait/Satisfait"
import Client from "./Clients/clients"
import Contact from "./Contact/contact"
import Partenaire from "./Partenaires/partenaires"
import Solution from "./Solutions/solutions"

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      

      <Home />
      <About />
      <Produit />
      <Satisfait />
      <Solution />
      <Partenaire />
      <Client />
      <Contact />
      
    </div>
  );
}

export default App;
