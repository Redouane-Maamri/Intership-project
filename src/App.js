import logo from './logo.svg';
import './App.css';
import Home from "./Home/home"
import About from "./About/about"
import Produit from "./Produits/Products"
import Satisfait from "./Satisfait/Satisfait"
import Client from "./Clients/clients"
import Contact from "./Contact/contact"

function App() {
  return (
    <div className="App">

      <Home />
      <About />
      <Produit />
      <Satisfait />
      <Client />
      <Contact />
    </div>
  );
}

export default App;
