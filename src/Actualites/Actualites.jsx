import React from "react";
import "./Actualites.css";
import Home from "../Home/home"
import { useTranslation } from "react-i18next";

export default function Actualites(){
    const actualitesSolaires = [
        {
          image: "/Actualites/actualites1.png",
          titre: "Installation solaire de 500 kW pour une usine à Tanger",
          date: "2025-06-20",
          description:
            "Solex Energy a finalisé l'installation d'un système solaire de 500 kW pour une grande usine textile à Tanger. Ce projet permettra de réduire de 70% les coûts énergétiques annuels de l'entreprise.",
        },
        {
          image: "/Actualites/actualites2.jpeg",
          titre: "Lancement du programme 'Soleil pour Tous' dans les zones rurales",
          date: "2025-05-15",
          description:
            "Dans le cadre de sa responsabilité sociale, Solex Energy a lancé un programme visant à fournir des kits solaires aux villages isolés du Moyen Atlas. Plus de 150 foyers sont déjà équipés.",
        },
        {
          image: "/Actualites/actualites3.png",
          titre: "Participation au Salon International de l'Énergie à Casablanca",
          date: "2025-04-10",
          description:
            "Solex Energy a participé à la 19e édition du Salon de l'Énergie pour présenter ses innovations en matière de stockage et d'optimisation de l'énergie solaire.",
        },
        {
          image: "/Actualites/actualites4.png",
          titre: "Nouvelle gamme de panneaux solaires haut rendement",
          date: "2025-03-01",
          description:
            "Lancement officiel d’une nouvelle gamme de panneaux solaires avec un rendement de 22%, adaptés aux toits résidentiels et aux installations industrielles.",
        },
      ];

      const {t}=useTranslation();
      
    return(
        <>

        <div>
           <Home />

           <div className="news-container">
  <h2>{t("nav_act")}</h2>
  {actualitesSolaires.map((actualite, index) => (
    <div className="news-card" key={index}>
      <img loading="lazy" src={actualite.image} alt={actualite.titre} />
      <h3>{actualite.titre}</h3>
      <h4>{actualite.date}</h4>
      <p>{actualite.description}</p>
    </div>
  ))}
</div>

        </div>
        </>
    )
}