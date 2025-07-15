import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import "./contactForm.css";
import Home from "../Home/home"
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const form = useRef();
  const { t } = useTranslation();

  const images = [
    "/Partenaires/part1.webp",
    "/Partenaires/part2.webp",
    "/Partenaires/part3.jpeg",
    "/Partenaires/part4.jpeg",
    "/Partenaires/part5.webp",
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_et3scli", // remplace par ton service ID EmailJS
      "template_jwt8zom", // remplace par ton template ID EmailJS
      form.current,
      "LTz_n0i5ooKjneSvE" // remplace par ton user ID EmailJS
    )
      .then((result) => {
        alert("Message envoyé avec succès !");
        form.current.reset();
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      });
  };

  return (
    <>
    <Home />
    <div className="contactForm">
        
      

      <p>
      {t('contact_text')}
      </p>

      <div className="form-message-container">
        <form ref={form} onSubmit={sendEmail} className="formule">
          <div className="form-group">
            <label>{t('label-nom')}</label>
            <input type="text" name="nom" placeholder="Votre nom complet" required />
          </div>

          <div className="form-group">
            <label>{t('label-email')}</label>
            <input type="email" name="email" placeholder="exemple@domaine.com" required />
          </div>

          <div className="form-group">
            <label>{t('label-tel')}</label>
            <input type="tel" name="phone" placeholder="+212 6 00 00 00 00" />
          </div>

          <div className="form-group">
            <label>{t('label-message')}</label>
            <textarea
              cols="40"
              name="message"
              rows="5"
              placeholder="Votre message ici"
              required
            ></textarea>
          </div>

          <button type="submit">{t('form-btn')}</button>
        </form>

        <div className="contact-message">
          <p>
          {t('form-text')}
          </p>

          {images.map((image, index) => (
            <img key={index} loading="lazy" src={image} alt={`Partenaire ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
