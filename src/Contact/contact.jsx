import React from "react";
import "./contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
    <Helmet>
    <title>Macharek | Contactez-nous</title>
  <meta name="description" content="Contactez notre équipe pour toute demande d’information ou devis personnalisé en solutions solaires et renouvelables." />
  <meta name="keywords" content="contact, devis, énergie solaire, support client, demande d’information" />
</Helmet>

    
    <div className="contact-wrapper">
      <section className="contact-container">
      <h2 className="contact-title">
  <span>À propos</span> | <span>Nos partenaires</span> | <span>Nos Clients</span> | <span>Contactez-nous</span>
</h2>


        <div className="data-container">
          <p className="info">
            <FaMapMarkerAlt className="icon" />
            5ème étage, N15, Boulevard Ahmed Mekouar, Ain Sebaa, Casablanca 20250
          </p>

          <p className="info">
            <FaPhoneAlt className="icon" />
            Portable: +212 661 233 016 <br/>Fixe: +212 05 22 24 85 62
          </p>

          <p className="info">
            <FaGlobe className="icon" />
            www.macharek.com
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a
    href="https://wa.me/212661233016"
    target="_blank"
    rel="noreferrer"
    aria-label="Contacter via WhatsApp"
  >
    <FaWhatsapp />
  </a>
          </div>
        </div>
      </section>
      
    </div>
    </>
  );
}
