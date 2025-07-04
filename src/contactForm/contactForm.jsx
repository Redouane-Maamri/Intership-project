import React from "react";
import "./contactForm.css";
import Contact from "../Contact/contact";


export default function ContactForm() {

    const images=[
        "/Partenaires/part1.webp",
        "/Partenaires/part2.webp",
        "/Partenaires/part3.webp",
        "/Partenaires/part4.jpeg",
        "/Partenaires/part5.webp",


    ]
  return (
    
    <>
    
      <div className="contactForm">
        <h1><span>C</span>ontactez-nous</h1>

        <p>
          Pour toute question ou demande, notre équipe est à votre écoute et
          répondra dans les meilleurs délais.
        </p>

        <div className="form-message-container">
        <div className="formule">
  <div className="form-group">
    <label>Nom complet </label>
    <input type="text" name="Full Name" placeholder="Votre nom complet" />
  </div>

  <div className="form-group">
    <label>Email </label>
    <input type="email" name="email" placeholder="exemple@domaine.com" />
  </div>

  <div className="form-group">
    <label>Téléphone </label>
    <input type="tel" name="phone" placeholder="+212 6 00 00 00 00" />
  </div>

  <div className="form-group">
    <label>Message </label>
    <textarea cols="40" name="message" rows="5" placeholder="Votre message ici"></textarea>
  </div>

            <button>Envoyer</button>
          </div>

          <div className="contact-message">
            <p>
              Vous êtes au bon endroit pour vos solutions solaires fiables,
              durables et performantes. Rejoignez-nous pour un avenir
              énergétique responsable.
            </p>

            {images.map((image,index)=>(
                <>
                    <img loading="lazy" src={image} alt="" />
                </>
            ))}

          </div>
        </div>
      </div>


      
    </>
  );
}
