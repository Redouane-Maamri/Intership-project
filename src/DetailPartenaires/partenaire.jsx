import React from "react";
import "./partenaire.css"
import Home from  "../Home/home";

export default function Detailpartenaire(){

    const partenairesimages=[
      "./Partenaires/part1.webp",
      "./Partenaires/part2.webp",
      "./Partenaires/part3.jpeg",
      "./Partenaires/part4.jpeg",
      "./Partenaires/part5.webp",
      "./Partenaires/part6.jpeg",
      "./Partenaires/part8.webp",
      "./Partenaires/part9.png",
      "./Partenaires/part10.png",
      "./Partenaires/part11.jpeg",
      "./Partenaires/part12.jpeg",
    ]

    return(
        <>

        <div>
        <Home />

        

        <div className="PartnersDetails">
  <div className="left-text">
    <h2>NOS<br />PARTENAIRES</h2>
  </div>
  <div className="partners-grid">
    {partenairesimages.map((imageSrc, index) => (
      <img key={index} loading="lazy" src={imageSrc} alt={`Partenaire ${index + 1}`} />
    ))}
  </div>

  <p>Nous collaborons avec des partenaires internationaux reconnus pour leur innovation et leur excellence.</p>
</div>

        </div>
        </>
    )
}