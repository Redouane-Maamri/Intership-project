const productsData = [
  {
    type: "Onduleurs",
    items: [
      {
        reference: "ONDL-3000W",
        name: "Onduleur 3000W",
        description: "Onduleur hybride pour installation résidentielle",
        image: "/Onduleur/onduleur1.jpeg",
        prix: "8000 DH"
      },
      {
        reference: "ONDL-5000W",
        name: "Onduleur 5000W",
        description: "Puissant onduleur 5kW pour panneaux solaires",
        image: "/Onduleur/onduleur2.jpeg",
        prix: "12000 DH"
      },
      {
        reference: "ONDL-TPH",
        name: "Onduleur triphasé",
        description: "Pour les installations industrielles",
        image: "/Onduleur/onduleur3.webp",
        prix: "18000 DH"
      },
      {
        reference: "ONDL-PORT",
        name: "Onduleur portable",
        description: "Compact et facile à transporter",
        image: "/Onduleur/onduleur4.jpeg",
        prix: "4500 DH"
      }
    ]
  },
  {
    type: "Câbles solaires",
    items: [
      {
        reference: "CABL-4MM2",
        name: "Câble 4mm²",
        description: "Câble cuivre double isolation pour solaire",
        image: "/CablesSolaire/cable1.webp",
        prix: "30 DH / m"
      },
      {
        reference: "CABL-6MM2",
        name: "Câble 6mm²",
        description: "Adapté aux fortes puissances",
        image: "/CablesSolaire/cable2.jpeg",
        prix: "45 DH / m"
      },
      {
        reference: "CABL-SOUP",
        name: "Câble souple",
        description: "Pour installation flexible",
        image: "/CablesSolaire/cable3.png",
        prix: "50 DH / m"
      },
      {
        reference: "CABL-GAIN",
        name: "Câble gainé",
        description: "Résistant aux UV et intempéries",
        image: "/CablesSolaire/cable4.jpeg",
        prix: "55 DH / m"
      }
    ]
  },
  {
    type: "Variateur solaire",
    items: [
      {
        reference: "VAR-01",
        name: "Variateur solaire 1",
        description: "Variateur pour régulation de puissance solaire",
        image: "/images/variateur1.jpg",
        prix: "2000 DH"
      },
      {
        reference: "VAR-02",
        name: "Variateur solaire 2",
        description: "Contrôle efficace pour panneaux solaires",
        image: "/images/variateur2.jpg",
        prix: "2500 DH"
      },
      {
        reference: "VAR-03",
        name: "Variateur solaire 3",
        description: "Optimisation de l'énergie photovoltaïque",
        image: "/images/variateur3.jpg",
        prix: "3000 DH"
      },
      {
        reference: "VAR-04",
        name: "Variateur solaire 4",
        description: "Gestion avancée de la production solaire",
        image: "/images/variateur4.jpg",
        prix: "3500 DH"
      }
    ]
  },
  {
    type: "Protection",
    items: [
      {
        reference: "PROT-DC",
        name: "Disjoncteur DC",
        description: "Protection contre les surcharges en courant continu",
        image: "/Protection/protection1.jpeg",
        prix: "1500 DH"
      },
      {
        reference: "PROT-PARA",
        name: "Parafoudre",
        description: "Protection contre les surtensions dues à la foudre",
        image: "/Protection/protection2.jpeg",
        prix: "2200 DH"
      },
      {
        reference: "PROT-FUS",
        name: "Fusible solaire",
        description: "Protection des circuits photovoltaïques",
        image: "/Protection/protection3.jpeg",
        prix: "800 DH"
      },
      {
        reference: "PROT-REL",
        name: "Relais de protection",
        description: "Détection et protection en cas de défaut électrique",
        image: "/Protection/protection4.webp",
        prix: "1800 DH"
      }
    ]
  }
];

export default productsData;
