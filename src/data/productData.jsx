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
    description: "Panneaux solaires bifaciaux captant la lumière des deux côtés pour un rendement supérieur.",
    items: [
      {
        reference: "PS-TRINA-570-600",
        name: "Panneau Trina Solar DUO-MAX 570Wc-600Wc",
        description: "Panneau monocristallin haute performance.",
        image: "/bifacial/bifacial1.jpeg",
        poids: "28 kg",
        marque: "Trina Solar",
        
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
        image: "/bifacial/bifacial2.jpeg",
        poids: "27 kg",
        marque: "LONGi Solar",
        
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
        image: "/bifacial/bifacial3.jpeg",
        poids: "32 kg",
        marque: "Canadian Solar",
        
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
        image: "/bifacial/bifacial4.jpeg",
        poids: "30 kg",
        marque: "JA Solar",
        
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
        image: "/bifacial/bifacial1.jpeg",
        poids: "28 kg",
        marque: "Trina Solar",
        
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
        image: "/bifacial/bifacial2.jpeg",
        poids: "27 kg",
        marque: "LONGi Solar",
        
        avantages: [
          "Haute efficacité même en faible luminosité",
          "Design moderne",
          "Garantie 25 ans"
        ]
      },

      {
        reference: "PS-JINKO-575",
        name: "Panneau Jinko Solar Tiger Neo 575 Wc",
        description: "Panneau monocristallin N‑Type TOPCon de haute efficacité avec garantie longue durée.",
        image: "/bifacial/bifacial5.jpeg",
        poids: "27 kg", // based on similar module specs :contentReference[oaicite:1]{index=1}
        marque: "Jinko Solar",
        
        avantages: [
          "Efficacité élevée (~22,65 %) grâce à la technologie N‑Type TOPCon",
          "Garantie produit de 12 ans et de performance de 30 ans à 87,4 %",
          "Résistant à des conditions climatiques extrêmes (–40 °C à +85 °C)"
        ]
      },
      
      {
        reference: "PS-CANADIAN-660",
        name: "Panneau Canadian Solar Mono PERC 660Wc",
        description: "Panneau monocristallin haut rendement, idéal pour grandes installations.",
        image: "/bifacial/bifacial3.jpeg",
        poids: "32 kg",
        marque: "Canadian Solar",
        
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
        image: "/bifacial/bifacial4.jpeg",
        poids: "30 kg",
        marque: "JA Solar",
        
        avantages: [
          "Prix compétitif",
          "Excellente performance",
          "Idéal pour projets résidentiels et commerciaux"
        ]
      }
      
    ]
  } ,
  {
    type: "Variateurs de pompage Solaire INVT",
    description: "Les variateurs de vitesse INVT sont des dispositifs électroniques polyvalents pour les applications de contrôle de vitesse de moteurs électriques.",
    items: [
      {
        reference: "VAR-INVT",
        name: "Variateur de Pompage Solaire INVT",
        description: "Les variateurs de vitesse INVT offrent une large gamme de fonctionnalités pour les applications de contrôle de vitesse de moteurs électriques.",
        image: "/Variateur/var1.webp",  // Add the correct image path
        poids: "Variable selon modèle",
        marque: "INVT",
        
        avantages: [
          "Économie d'énergie en optimisant la vitesse du moteur",
          "Augmentation de la durée de vie du moteur",
          "Protection contre les surcharges et courts-circuits",
          "Fonctionnement en mode automatique"
        ],
        applications: [
          "Pompage dans les industries de l'eau et de l'assainissement",
          "Ventilation dans les bâtiments et les industries",
          "Convoyage dans les industries de la logistique et de la manutention"
        ]
      }
    ]
  },
  {
    type: "Onduleurs solaires OnGrid",
    description: "Onduleur solaire connecté au réseau pour convertir l'énergie solaire produite en énergie compatible avec le réseau électrique public.",
    items: [
      {
        reference: "ON-GRID",
        name: "Onduleur Solaire On-Grid",
        description: "Onduleur solaire connecté au réseau pour convertir l'énergie solaire produite en énergie compatible avec le réseau électrique public.",
        image: "/Variateur/var2.webp",  // Add the correct image path
        poids: "Variable selon modèle",
        marque: "Fronius | HUAWEI  | SOLAR X | GOODWE",
        
        avantages: [
          "Réduction de la facture d'électricité en injectant l'énergie dans le réseau",
          "Contribue à la réduction des émissions de gaz à effet de serre",
          "Optimisation de la consommation d'énergie solaire"
        ]
      }
    ]
  },
  {
    type: "Onduleur Solaire Offgrid Hybride",
    description: "Onduleur hybride capable de fonctionner en mode autonome ou connecté au réseau, permettant de maximiser l'utilisation de l'énergie solaire.",
    items: [
      {
        reference: "OFF-GRID-HYBRIDE",
        name: "Onduleur Solaire Off-Grid Hybride",
        description: "Onduleur hybride capable de fonctionner en mode autonome ou connecté au réseau, permettant de maximiser l'utilisation de l'énergie solaire.",
        image: "/Variateur/var3.jpeg",  // Add the correct image path
        poids: "Variable selon modèle",
        marque: "VEICHI | MUST | BYGD | DEYE | IMEON ENERGY",
        
        avantages: [
          "Flexibilité : fonctionnement autonome ou connecté au réseau",
          "Économie d'énergie en optimisant l'utilisation de l'énergie solaire",
          "Fiabilité et efficacité"
        ]
      }
    ]
  },
  {
    type: "Pompe Immergée",
    description: "Les pompes immergées sont des dispositifs efficaces pour pomper de l'eau à partir de sources souterraines.",
    items: [
      {
        reference: "POMPE-IMMERGEE",
        name: "Pompe Immergée",
        description: "Les pompes immergées sont des dispositifs efficaces pour pomper de l'eau à partir de sources souterraines.",
        image: "/Variateur/var5.jpeg",  // Add the correct image path
        poids: "Variable selon modèle",
        marque: "AQUASTRONG  | IBRATEC | EBARA | SHAKTI",
        
        avantages: [
          "Efficacité dans le pompage de l'eau souterraine",
          "Idéale pour l'irrigation et l'alimentation en eau",
          "Fiabilité et longévité"
        ],
        applications: [
          "Pompage depuis des puits et forages",
          "Irrigation des cultures",
          "Alimentation en eau pour maisons et fermes"
        ]
      }
    ]
  },
  {
    type: "Pompes Submersibles",
    description: "Les pompes submersibles sont efficaces pour pomper de l'eau à partir de réservoirs ou de sources souterraines.",
    items: [
      {
        reference: "POMPE-SUBMERSIBLE",
        name: "Pompe Submersible",
        description: "Les pompes submersibles sont efficaces pour pomper de l'eau à partir de réservoirs ou de sources souterraines.",
        image: "/Variateur/var6.jpeg",  // Add the correct image path
        poids: "Variable selon modèle",
        marque: "AQUASTRONG  | IBRATEC | EBARA | SHAKTI",
        
        avantages: [
          "Efficacité dans le pompage de l'eau souterraine et de réservoirs",
          "Idéale pour le drainage et l'irrigation",
          "Durabilité et performance"
        ],
        applications: [
          "Pompage depuis des puits et forages",
          "Irrigation des cultures",
          "Alimentation en eau pour maisons et fermes",
          "Drainage des eaux usées et des eaux de pluie"
        ]
      }
    ]
  },
  {
    type: "Tuyaux en PVC",
    description: "Les tuyaux en PVC sont des tuyaux résistants et légers qui sont couramment utilisés pour les applications d'irrigation, de distribution d'eau et d'évacuation des eaux usées. Ils offrent une résistance à la corrosion et un faible coût.",
    items: [
      {
        reference: "PVC-32",
        name: "Tuyau PVC 32mm",
        description: "Tuyau en PVC diamètre 32mm pour distribution d'eau.",
        image: "/irrigation/irrg1.jpeg",
        poids: "0.45 kg/m",
        marque: "IrrigTech",
        
        avantages: [
          "Résistant à la corrosion",
          "Installation facile",
          "Économique"
        ]
      },
      {
        reference: "PVC-50",
        name: "Tuyau PVC 50mm",
        description: "Tuyau en PVC diamètre 50mm pour applications d'irrigation.",
        image: "/irrigation/irrg2.png",
        poids: "0.78 kg/m",
        marque: "IrrigTech",
        
        avantages: [
          "Haute durabilité",
          "Résistant aux UV",
          "Bonne pression de service"
        ]
      }
    ]
  },
  {
    type: "Tuyaux en polyéthylène",
    description: "Les tuyaux en polyéthylène sont des tuyaux flexibles et résistants qui sont couramment utilisés pour les applications de distribution d'eau, de gaz et d'évacuation des eaux usées. Ils offrent une résistance à la corrosion, une légèreté et une flexibilité, ce qui les rend une option populaire pour de nombreuses applications.",
    items: [
      {
        reference: "PE-16",
        name: "Tuyau PE 16mm",
        description: "Tuyau en polyéthylène 16mm pour micro-irrigation.",
        image: "/irrigation/irrg3.jpeg",
        poids: "0.15 kg/m",
        marque: "FlexiPipe",
        
        avantages: [
          "Très flexible",
          "Facile à installer",
          "Résistant aux UV"
        ]
      },
      {
        reference: "PE-32",
        name: "Tuyau PE 32mm",
        description: "Tuyau en polyéthylène 32mm pour distribution d'eau.",
        image: "/irrigation/irrg4.png",
        poids: "0.38 kg/m",
        marque: "FlexiPipe",
        
        avantages: [
          "Haute résistance",
          "Flexible et adaptable",
          "Longue durée de vie"
        ]
      }
    ]
  },
  {
    type: "Goutteurs goutte à goutte",
    description: "Les tuyaux goutte à goutte sont effectivement une solution d'irrigation efficace et durable pour les plantes, et leur utilisation contribue à réduire la consommation d'eau et à améliorer la santé des plantes.",
    items: [
      {
        reference: "GG-16-33",
        name: "Tuyau goutte à goutte 16mm - 33cm",
        description: "Tuyau goutte à goutte avec goutteurs intégrés tous les 33cm.",
        image: "/irrigation/irrg5.webp",
        poids: "0.18 kg/m",
        marque: "DripTech",
        
        avantages: [
          "Économie d'eau jusqu'à 70%",
          "Distribution uniforme",
          "Réduit la croissance des mauvaises herbes"
        ]
      },
      {
        reference: "GG-16-50",
        name: "Tuyau goutte à goutte 16mm - 50cm",
        description: "Tuyau goutte à goutte avec goutteurs intégrés tous les 50cm.",
        image: "/irrigation/irrg6.jpeg",
        poids: "0.17 kg/m",
        marque: "DripTech",
        
        avantages: [
          "Idéal pour plantations espacées",
          "Faible consommation d'eau",
          "Installation facile"
        ]
      }
    ]
  },
  {
    type: "Pulvérisateur à main",
    description: "Pulvérisateurs à main pour l'application précise de produits de traitement et d'irrigation.",
    items: [
      {
        reference: "PULV-12L",
        name: "Pulvérisateur à main 12L",
        description: "Pulvérisateur à main 12L référence : OLD-12B-12",
        image: "/irrigation/irrg7.jpeg",
        poids: "2.5 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Compact et léger",
          "Facile à transporter",
          "Idéal pour petites surfaces"
        ]
      },
      {
        reference: "PULV-16L",
        name: "Pulvérisateur à main 16L standard",
        description: "Pulvérisateur à main 16L référence : OLD-16B-20 standard",
        image: "/irrigation/irrg8.jpeg",
        poids: "3.2 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Grande capacité",
          "Pompe efficace",
          "Confortable à utiliser"
        ]
      },
      {
        reference: "PULV-16L-BP",
        name: "Pulvérisateur à main 16L Back Pack",
        description: "Pulvérisateur à main 16L référence : OLD-16B-16 Back Pack",
        image: "/irrigation/irrg9.avif",
        poids: "3.5 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Port dorsal confortable",
          "Distribution uniforme",
          "Idéal pour grandes surfaces"
        ]
      },
      {
        reference: "PULV-16L-J",
        name: "Pulvérisateur à main 16L jaune",
        description: "Pulvérisateur à main 16L référence : OLD-16E jaune",
        image: "/irrigation/irrg10.webp",
        poids: "3.2 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Haute visibilité",
          "Résistant aux produits chimiques",
          "Buse ajustable"
        ]
      },
      {
        reference: "PULV-16L-SUPER",
        name: "Pulvérisateur à main 16L SUPER N5",
        description: "Pulvérisateur à main 16L référence : OLD-16B-12 SUPER N5",
        image: "/irrigation/irrg11.jpeg",
        poids: "3.4 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Performance supérieure",
          "Pression constante",
          "Durabilité améliorée"
        ]
      },
      {
        reference: "PULV-20L",
        name: "Pulvérisateur à main 20L",
        description: "Pulvérisateur à main 20L référence : OLD-20B-12",
        image: "/irrigation/irrg12.jpeg",
        poids: "4.1 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Capacité maximale",
          "Idéal pour professionnels",
          "Grande autonomie"
        ]
      },
      {
        reference: "PULV-INOX-16L",
        name: "Pulvérisateur inox 16L",
        description: "Pulvérisateur inox 16L référence : OLD-16S-35B",
        image: "/irrigation/irrg13.jpeg",
        poids: "4.5 kg",
        marque: "SprayMaster",
        
        avantages: [
          "Résistance maximale à la corrosion",
          "Idéal pour produits agressifs",
          "Durée de vie exceptionnelle"
        ]
      }
    ]
  },
  {
    type: "Pulvérisateur Spécial",
    description: "Pulvérisateurs spéciaux avec réservoir et fonctionnalités avancées pour applications professionnelles.",
    items: [
      {
        reference: "PULV-CHARIOT-80",
        name: "Pulvérisateur chariot + réservoir 80L",
        description: "Pulvérisateur avec chariot et réservoir de 80L référence : OLD-80",
        image: "/irrigation/irrg18.jpeg",
        poids: "18 kg",
        marque: "ProSpray",
        
        avantages: [
          "Grande capacité pour surfaces étendues",
          "Mobilité facilitée par le chariot",
          "Pompe haute performance"
        ]
      },
      {
        reference: "PULV-CITERNE-100L",
        name: "Pulvérisateur avec citerne 100L",
        description: "Pulvérisateur professionnel avec citerne de 100L",
        image: "/irrigation/irrg15.jpeg",
        poids: "22 kg",
        marque: "ProSpray",
        
        avantages: [
          "Idéal pour grandes exploitations",
          "Système de pompage puissant",
          "Distribution uniforme sur grandes surfaces"
        ]
      },
      {
        reference: "PULV-CHARIOT-160",
        name: "Pulvérisateur chariot + réservoir 160L",
        description: "Pulvérisateur avec chariot et réservoir de 160L référence : OLD-160",
        image: "/irrigation/irrg16.avif",
        poids: "32 kg",
        marque: "ProSpray",
        
        avantages: [
          "Capacité maximale pour usage professionnel",
          "Roues renforcées pour tous terrains",
          "Système de pulvérisation haute pression"
        ]
      }
    ]
  },
  {
    type: "TRANSPALETTE MANUEL",
    description: "Transpalettes manuels robustes pour la manutention de charges lourdes.",
    items: [
      {
        reference: "TRANS-MAN-STD",
        name: "Transpalette manuel standard",
        description: "Transpalette manuel pour charges jusqu'à 2500kg",
        image: "/irrigation/irrg17.webp",
        poids: "75 kg",
        marque: "LiftMaster",
        
        avantages: [
          "Robuste et fiable",
          "Maniabilité optimale",
          "Adapté à tous types de palettes"
        ]
      }
    ]
  },
];

export default installationAccessories;
