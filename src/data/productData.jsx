const today = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD

const installationAccessories = [
  {
    type: "Structures",
    description: "Supports de panneaux solaires efficaces pour une installation au toit ou au sol, légers, flexibles et résistants à la corrosion.",
    items: [
      {
        reference: "STR-GALV",
        name: "Structure en Acier Galvanisé",
        description: "Structure robuste en acier galvanisé pour installation durable.",
        image: "/Structures/structure1.jpeg",
        poids: "12 kg/m²",
        marque: "MarocStruct",
        dateAjout: today,
        avantages: [
          "Haute résistance à la corrosion",
          "Supporte les charges lourdes",
          "Adapté aux environnements difficiles"
        ]
      },
      {
        reference: "STR-ALU",
        name: "Structure en Aluminium",
        description: "Structure légère et résistante en aluminium.",
        image: "/Structures/structure2.jpeg",
        poids: "7 kg/m²",
        marque: "AluSolar",
        dateAjout: today,
        avantages: [
          "Très légère pour les toits faibles charges",
          "Résistance naturelle à l'oxydation",
          "Facilité d'installation"
        ]
      }
    ]
  },
  {
    type: "Câbles",
    description: "Câbles solaires et câbles immergés adaptés à toutes les installations, résistants aux UV et intempéries.",
    items: [
      {
        reference: "CABL-SOL-4",
        name: "Câble solaire 4 mm²",
        description: "Câble solaire isolé, résistant aux UV.",
        image: "/cable/cable1.jpeg",
        poids: "0.15 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
        avantages: [
          "Excellente conductivité",
          "Protection UV",
          "Souple et résistant"
        ]
      },
      {
        reference: "CABL-SOL-6",
        name: "Câble solaire 6 mm²",
        description: "Câble solaire isolé 6 mm², adapté pour installations moyennes.",
        image: "/cable/cable2.webp",
        poids: "0.23 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
        avantages: [
          "Bonne capacité de charge",
          "Durabilité maximale",
          "Facilité de pose"
        ]
      },
      {
        reference: "CABL-SOL-10",
        name: "Câble solaire 10 mm²",
        description: "Câble solaire haute capacité 10 mm².",
        image: "/cable/cable3.webp",
        poids: "0.38 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
        avantages: [
          "Idéal pour installations puissantes",
          "Minimise les pertes électriques",
          "Isolation renforcée"
        ]
      },
      {
        reference: "CABL-IMMERGE-H07RN-F",
        name: "Câble immergé H07RN-F",
        description: "Câble étanche et flexible pour installation immergée.",
        image: "/cable/cable4.jpeg",
        poids: "0.45 kg/m",
        marque: "TopCable",
        dateAjout: today,
        avantages: [
          "Grande flexibilité",
          "Haute résistance à l'eau",
          "Utilisable en milieux humides"
        ]
      },
      {
        reference: "CABL-IMMERGE-RVK",
        name: "Câble immergé RV-K",
        description: "TOP CABLE - Câble immergé haute performance.",
        image: "/cable/cable5.jpeg",
        poids: "0.50 kg/m",
        marque: "TopCable",
        dateAjout: today,
        avantages: [
          "Haute performance électrique",
          "Longévité assurée",
          "Normes européennes"
        ]
      }
    ]
  },
  {
    type: "Connecteurs",
    description: "Connecteurs MC4 solaires résistants aux intempéries, garantissant une connexion sécurisée et fiable.",
    items: [
      {
        reference: "CONN-MC4",
        name: "Connecteur MC4 Solaire",
        description: "Connecteur rapide pour panneaux photovoltaïques, IP67, résistant aux UV.",
        image: "/conneteurs/connecteur1.jpeg",
        poids: "0.02 kg/unité",
        marque: "SolarLink",
        dateAjout: today,
        avantages: [
          "Connexion étanche",
          "Haute résistance UV",
          "Installation rapide"
        ]
      },
      {
        reference: "CONN-MC4-KIT",
        name: "Kit Connecteurs MC4 (2 mâles + 2 femelles)",
        description: "Kit complet pour branchement rapide et sûr.",
        image: "/conneteurs/connecteur2.jpeg",
        poids: "0.06 kg/kit",
        marque: "SolarLink",
        dateAjout: today,
        avantages: [
          "Branchement sécurisé",
          "Compatibilité multi-marques",
          "Simplicité d'assemblage"
        ]
      }
    ],
    additionalInfo: {
      taillesCable: ["2.5 mm²", "4 mm²", "6 mm²"],
      voltageNominal: "1500Vdc (IEC), 600Vdc (UL)"
    }
  },
  {
    type: "Disjoncteur de protections DC",
    description: "Disjoncteurs pour protection contre les courts-circuits et surintensités en courant continu.",
    items: [
      {
        reference: "PROT-DC-2P",
        name: "Disjoncteur DC 2 pôles",
        description: "Protection DC 2 pôles jusqu'à 1000 V.",
        image: "/disjoncteur/dis1.jpeg",
        poids: "0.8 kg",
        marque: "ABB",
        dateAjout: today,
        avantages: [
          "Protection efficace",
          "Facilement intégrable",
          "Norme internationale"
        ]
      },
      {
        reference: "PROT-DC-3P",
        name: "Disjoncteur DC 3 pôles",
        description: "Protection DC 3 pôles haute fiabilité.",
        image: "/disjoncteur/dis2.avif",
        poids: "1.1 kg",
        marque: "Schneider",
        dateAjout: today,
        avantages: [
          "Robustesse garantie",
          "Protection multi-circuits",
          "Système fiable"
        ]
      },
      {
        reference: "PROT-DC-4P",
        name: "Disjoncteur DC 4 pôles",
        description: "Protection DC 4 pôles pour installations complexes.",
        image: "/disjoncteur/dis3.jpeg",
        poids: "1.5 kg",
        marque: "Schneider",
        dateAjout: today,
        avantages: [
          "Conçu pour les installations complexes",
          "Haute sécurité",
          "Qualité professionnelle"
        ]
      }
    ]
  },
  {
    type: "Parafoudre",
    description: "Parafoudres essentiels pour protéger les équipements contre les surtensions.",
    items: [
      {
        reference: "PARA-DC-800",
        name: "Parafoudre DC 800 V",
        description: "Protection contre surtensions DC jusqu'à 800 V.",
        image: "/parafoudre/par1.webp",
        poids: "0.5 kg",
        marque: "Phoenix Contact",
        dateAjout: today,
        avantages: [
          "Protection efficace contre les surtensions",
          "Installation simple",
          "Longue durée de vie"
        ]
      },
      {
        reference: "PARA-DC-1000",
        name: "Parafoudre DC 1000 V",
        description: "Parafoudre pour installations photovoltaïques standard.",
        image: "/parafoudre/par2.bmp",
        poids: "0.55 kg",
        marque: "Dehn",
        dateAjout: today,
        avantages: [
          "Adapté aux installations standards",
          "Performant sur le long terme",
          "Normes européennes respectées"
        ]
      },
      {
        reference: "PARA-DC-1200",
        name: "Parafoudre DC 1200 V",
        description: "Parafoudre haute capacité pour systèmes robustes.",
        image: "/parafoudre/par3.jpeg",
        poids: "0.6 kg",
        marque: "Dehn",
        dateAjout: today,
        avantages: [
          "Pour hautes tensions",
          "Installation robuste",
          "Protection renforcée"
        ]
      }
    ],
    disponibilite: ["2P", "3P", "4P"],
    avantages: [
      "Protège les équipements contre les surtensions",
      "Réduction des risques de pannes",
      "Optimisation de la durée de vie des systèmes"
    ]
  },
  {
    type: "Boîtiers de jonction sur-mesure",
    description: "Boîtiers électriques de distribution sur-mesure pour installations photovoltaïques.",
    items: [
      {
        reference: "BOX-JONCT-STD",
        name: "Boîtier de jonction standard",
        description: "Boîtier IP65 avec 4 connexions MC4.",
        image: "/junction/box_standard.jpeg",
        poids: "2.5 kg",
        marque: "IPBox",
        dateAjout: today,
        avantages: [
          "Étanchéité IP65",
          "Facile à configurer",
          "Conception robuste"
        ]
      },
      {
        reference: "BOX-JONCT-XL",
        name: "Boîtier de jonction XL",
        description: "Boîtier grande capacité pour installations complexes.",
        image: "/junction/box_xl.jpeg",
        poids: "3.8 kg",
        marque: "IPBox",
        dateAjout: today,
        avantages: [
          "Grande capacité de câblage",
          "Idéal pour grandes installations",
          "Protection maximale"
        ]
      }
    ]
  },


  {
    type: "Monocristallin",
    description: "Panneaux solaires monocristallins à haut rendement pour une production maximale d’énergie.",
    items: [
      {
        reference: "PS-TRINA-570-600",
        name: "Panneau Trina Solar DUO-MAX 570Wc-600Wc",
        description: "Panneau monocristallin haute performance.",
        image: "/panneaux/trina_570_600.jpeg",
        poids: "28 kg",
        marque: "Trina Solar",
        dateAjout: today,
        avantages: [
          "Haut rendement énergétique",
          "Fiabilité à long terme",
          "Résistance aux conditions climatiques extrêmes"
        ]
      },
      {
        reference: "PS-LONGI-570",
        name: "Panneau LONGi-Solar Hi-MO6 570Wc",
        description: "Panneau monocristallin de dernière génération.",
        image: "/panneaux/longi_570.jpeg",
        poids: "27 kg",
        marque: "LONGi Solar",
        dateAjout: today,
        avantages: [
          "Haute efficacité même en faible luminosité",
          "Design moderne",
          "Garantie 25 ans"
        ]
      },
      {
        reference: "PS-CANADIAN-660",
        name: "Panneau Canadian Solar Mono PERC 660Wc",
        description: "Panneau monocristallin haut rendement, idéal pour grandes installations.",
        image: "/panneaux/canadian_660.jpeg",
        poids: "32 kg",
        marque: "Canadian Solar",
        dateAjout: today,
        avantages: [
          "Haute puissance nominale",
          "Technologie Mono PERC avancée",
          "Durabilité accrue"
        ]
      },
      {
        reference: "PS-JA-SOLAR",
        name: "Panneau JA Solar Monocristallin",
        description: "Panneau solaire fiable et efficace.",
        image: "/panneaux/ja_solar.jpeg",
        poids: "30 kg",
        marque: "JA Solar",
        dateAjout: today,
        avantages: [
          "Prix compétitif",
          "Excellente performance",
          "Idéal pour projets résidentiels et commerciaux"
        ]
      }
    ]
  },

  {
    type: "Bifacial",
    description: "Panneaux solaires bifaciaux captant la lumière des deux côtés pour un rendement supérieur.",
    items: [
      {
        reference: "PS-TRINA-570-600",
        name: "Panneau Trina Solar DUO-MAX 570Wc-600Wc",
        description: "Panneau monocristallin haute performance.",
        image: "/panneaux/trina_570_600.jpeg",
        poids: "28 kg",
        marque: "Trina Solar",
        dateAjout: today,
        avantages: [
          "Haut rendement énergétique",
          "Fiabilité à long terme",
          "Résistance aux conditions climatiques extrêmes"
        ]
      },
      {
        reference: "PS-LONGI-570",
        name: "Panneau LONGi-Solar Hi-MO6 570Wc",
        description: "Panneau monocristallin de dernière génération.",
        image: "/panneaux/longi_570.jpeg",
        poids: "27 kg",
        marque: "LONGi Solar",
        dateAjout: today,
        avantages: [
          "Haute efficacité même en faible luminosité",
          "Design moderne",
          "Garantie 25 ans"
        ]
      },
      {
        reference: "PS-CANADIAN-660",
        name: "Panneau Canadian Solar Mono PERC 660Wc",
        description: "Panneau monocristallin haut rendement, idéal pour grandes installations.",
        image: "/panneaux/canadian_660.jpeg",
        poids: "32 kg",
        marque: "Canadian Solar",
        dateAjout: today,
        avantages: [
          "Haute puissance nominale",
          "Technologie Mono PERC avancée",
          "Durabilité accrue"
        ]
      },
      {
        reference: "PS-JA-SOLAR",
        name: "Panneau JA Solar Monocristallin",
        description: "Panneau solaire fiable et efficace.",
        image: "/panneaux/ja_solar.jpeg",
        poids: "30 kg",
        marque: "JA Solar",
        dateAjout: today,
        avantages: [
          "Prix compétitif",
          "Excellente performance",
          "Idéal pour projets résidentiels et commerciaux"
        ]
      }
    ]
  }
];

export default installationAccessories;
