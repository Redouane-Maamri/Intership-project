import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import "./contactForm.css";
import Home from "../Home/home"

export default function ContactForm() {
  const form = useRef();

  const images = [
    "/Partenaires/part1.webp",
    "/Partenaires/part2.webp",
    "/Partenaires/part3.webp",
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
        
      <h1>
        <span>C</span>ontactez-nous
      </h1>

      <p>
        Pour toute question ou demande, notre équipe est à votre écoute et
        répondra dans les meilleurs délais.
      </p>

      <div className="form-message-container">
        <form ref={form} onSubmit={sendEmail} className="formule">
          <div className="form-group">
            <label>Nom complet </label>
            <input type="text" name="nom" placeholder="Votre nom complet" required />
          </div>

          <div className="form-group">
            <label>Email </label>
            <input type="email" name="email" placeholder="exemple@domaine.com" required />
          </div>

          <div className="form-group">
            <label>Téléphone </label>
            <input type="tel" name="phone" placeholder="+212 6 00 00 00 00" />
          </div>

          <div className="form-group">
            <label>Message </label>
            <textarea
              cols="40"
              name="message"
              rows="5"
              placeholder="Votre message ici"
              required
            ></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>

        <div className="contact-message">
          <p>
            Vous êtes au bon endroit pour vos solutions solaires fiables,
            durables et performantes. Rejoignez-nous pour un avenir
            énergétique responsable.
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
