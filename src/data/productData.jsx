const productsData = [
  {
    type: "Onduleurs",
    items: [
      {
        reference: "ONDL-3000W",
        name: "Onduleur 3000W",
        description: "Onduleur hybride pour installation résidentielle",
        image: "/Onduleur/onduleur1.jpeg",
        prix: "8000 DH",
        marque: "Growatt",
        garantie: "2 ans"
      },
      {
        reference: "ONDL-5000W",
        name: "Onduleur 5000W",
        description: "Puissant onduleur 5kW pour panneaux solaires",
        image: "/Onduleur/onduleur2.jpeg",
        prix: "12000 DH",
        marque: "Huawei",
        garantie: "2 ans"
      },
      {
        reference: "ONDL-TPH",
        name: "Onduleur triphasé",
        description: "Pour les installations industrielles",
        image: "/Onduleur/onduleur3.webp",
        prix: "18000 DH",
        marque: "SMA",
        garantie: "3 ans"
      },
      {
        reference: "ONDL-PORT",
        name: "Onduleur portable",
        description: "Compact et facile à transporter",
        image: "/Onduleur/onduleur4.jpeg",
        prix: "4500 DH",
        marque: "EcoFlow",
        garantie: "1 an"
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
        prix: "30 DH / m",
        marque: "TopSolar",
        garantie: "10 ans"
      },
      {
        reference: "CABL-6MM2",
        name: "Câble 6mm²",
        description: "Adapté aux fortes puissances",
        image: "/CablesSolaire/cable2.jpeg",
        prix: "45 DH / m",
        marque: "Solarflex",
        garantie: "10 ans"
      },
      {
        reference: "CABL-SOUP",
        name: "Câble souple",
        description: "Pour installation flexible",
        image: "/CablesSolaire/cable3.png",
        prix: "50 DH / m",
        marque: "Nexans",
        garantie: "5 ans"
      },
      {
        reference: "CABL-GAIN",
        name: "Câble gainé",
        description: "Résistant aux UV et intempéries",
        image: "/CablesSolaire/cable4.jpeg",
        prix: "55 DH / m",
        marque: "H1Z2Z2-K",
        garantie: "10 ans"
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
        prix: "2000 DH",
        marque: "Schneider",
        garantie: "2 ans"
      },
      {
        reference: "VAR-02",
        name: "Variateur solaire 2",
        description: "Contrôle efficace pour panneaux solaires",
        image: "/images/variateur2.jpg",
        prix: "2500 DH",
        marque: "Delta",
        garantie: "2 ans"
      },
      {
        reference: "VAR-03",
        name: "Variateur solaire 3",
        description: "Optimisation de l'énergie photovoltaïque",
        image: "/images/variateur3.jpg",
        prix: "3000 DH",
        marque: "ABB",
        garantie: "3 ans"
      },
      {
        reference: "VAR-04",
        name: "Variateur solaire 4",
        description: "Gestion avancée de la production solaire",
        image: "/images/variateur4.jpg",
        prix: "3500 DH",
        marque: "Siemens",
        garantie: "3 ans"
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
        prix: "1500 DH",
        marque: "Eaton",
        garantie: "2 ans"
      },
      {
        reference: "PROT-PARA",
        name: "Parafoudre",
        description: "Protection contre les surtensions dues à la foudre",
        image: "/Protection/protection2.jpeg",
        prix: "2200 DH",
        marque: "Phoenix Contact",
        garantie: "2 ans"
      },
      {
        reference: "PROT-FUS",
        name: "Fusible solaire",
        description: "Protection des circuits photovoltaïques",
        image: "/Protection/protection3.jpeg",
        prix: "800 DH",
        marque: "Ferraz Shawmut",
        garantie: "1 an"
      },
      {
        reference: "PROT-REL",
        name: "Relais de protection",
        description: "Détection et protection en cas de défaut électrique",
        image: "/Protection/protection4.webp",
        prix: "1800 DH",
        marque: "Schneider",
        garantie: "2 ans"
      }
    ]
  },

  
    {
      type: "Tableau électrique",
      items: [
        {
          reference: "TAB-001",
          name: "Tableau électrique résidentiel",
          description: "Tableau de distribution pour installations domestiques.",
          image: "/MaterielElectrique/tableau1.jpeg",
          prix: "600 DH",
          marque: "Legrand",
          garantie: "2 ans"
        },
        {
          reference: "TAB-002",
          name: "Tableau électrique industriel",
          description: "Tableau pour distribution électrique industrielle.",
          image: "/MaterielElectrique/tableau2.jpeg",
          prix: "1200 DH",
          marque: "Schneider",
          garantie: "3 ans"
        },
        {
          reference: "TAB-003",
          name: "Tableau modulaire",
          description: "Tableau compact modulaire pour petits locaux.",
          image: "/MaterielElectrique/tableau3.jpeg",
          prix: "850 DH",
          marque: "Hager",
          garantie: "2 ans"
        },
        {
          reference: "TAB-004",
          name: "Tableau à disjoncteurs",
          description: "Tableau avec disjoncteurs intégrés.",
          image: "/MaterielElectrique/tableau4.jpeg",
          prix: "1000 DH",
          marque: "Legrand",
          garantie: "2 ans"
        }
      ]
    },
    {
      type: "Compteur d'énergie",
      items: [
        {
          reference: "COMP-001",
          name: "Compteur digital simple",
          description: "Compteur digital pour usage résidentiel.",
          image: "/MaterielElectrique/compteur1.jpeg",
          prix: "950 DH",
          marque: "Schneider",
          garantie: "2 ans"
        },
        {
          reference: "COMP-002",
          name: "Compteur digital avancé",
          description: "Compteur avec fonction télérelevé.",
          image: "/MaterielElectrique/compteur2.jpeg",
          prix: "1500 DH",
          marque: "Siemens",
          garantie: "3 ans"
        },
        {
          reference: "COMP-003",
          name: "Compteur mécanique",
          description: "Compteur électrique mécanique traditionnel.",
          image: "/MaterielElectrique/compteur3.jpeg",
          prix: "700 DH",
          marque: "Hager",
          garantie: "1 an"
        },
        {
          reference: "COMP-004",
          name: "Compteur multi-tarif",
          description: "Compteur supportant plusieurs plages tarifaires.",
          image: "/MaterielElectrique/compteur4.jpeg",
          prix: "1300 DH",
          marque: "Legrand",
          garantie: "2 ans"
        }
      ]
    },
    {
      type: "Disjoncteur",
      items: [
        {
          reference: "DISJ-001",
          name: "Disjoncteur 16A",
          description: "Protection contre les courts-circuits et surcharges.",
          image: "/MaterielElectrique/disjoncteur1.jpeg",
          prix: "120 DH",
          marque: "Schneider",
          garantie: "3 ans"
        },
        {
          reference: "DISJ-002",
          name: "Disjoncteur 32A",
          description: "Disjoncteur haute capacité pour circuits puissants.",
          image: "/MaterielElectrique/disjoncteur2.jpeg",
          prix: "180 DH",
          marque: "Hager",
          garantie: "3 ans"
        },
        {
          reference: "DISJ-003",
          name: "Disjoncteur différentiel",
          description: "Protection contre les fuites de courant.",
          image: "/MaterielElectrique/disjoncteur3.jpeg",
          prix: "250 DH",
          marque: "Legrand",
          garantie: "3 ans"
        },
        {
          reference: "DISJ-004",
          name: "Disjoncteur compact",
          description: "Disjoncteur pour installations compactes.",
          image: "/MaterielElectrique/disjoncteur4.jpeg",
          prix: "140 DH",
          marque: "Schneider",
          garantie: "2 ans"
        }
      ]
    },
    {
      type: "Câbles électriques",
      items: [
        {
          reference: "CABL-001",
          name: "Câble cuivre 3G2.5mm²",
          description: "Câble électrique pour installations domestiques.",
          image: "/MaterielElectrique/cable1.jpeg",
          prix: "15 DH/m",
          marque: "Nexans",
          garantie: "10 ans"
        },
        {
          reference: "CABL-002",
          name: "Câble cuivre 3G4mm²",
          description: "Câble électrique haute capacité.",
          image: "/MaterielElectrique/cable2.jpeg",
          prix: "25 DH/m",
          marque: "Prysmian",
          garantie: "10 ans"
        },
        {
          reference: "CABL-003",
          name: "Câble électrique blindé",
          description: "Câble blindé pour installations industrielles.",
          image: "/MaterielElectrique/cable3.jpeg",
          prix: "40 DH/m",
          marque: "Legrand",
          garantie: "10 ans"
        },
        {
          reference: "CABL-004",
          name: "Câble souple 3G1.5mm²",
          description: "Câble souple pour circuits mobiles.",
          image: "/MaterielElectrique/cable4.jpeg",
          prix: "12 DH/m",
          marque: "Hager",
          garantie: "10 ans"
        }
      ]
    }
  ];

export default productsData;
