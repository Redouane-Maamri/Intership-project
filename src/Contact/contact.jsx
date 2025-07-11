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

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <section className="contact-container">
        <h2>À propos | Nos partenaires | Nos Clients | Contactez-nous</h2>

        <div className="data-container">
          <p className="info">
            <FaMapMarkerAlt className="icon" />
            5ème étage, N15, Boulevard Ahmed Mekouar, Ain Sebaa, Casablanca 20250
          </p>

          <p className="info">
            <FaPhoneAlt className="icon" />
            Portable: +212 661 233 016 | Fixe: +212 05 22 24 85 62
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
    
  );
}
