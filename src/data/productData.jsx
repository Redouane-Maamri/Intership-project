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
      },
      {
        reference: "STR-ALU",
        name: "Structure en Aluminium",
        description: "Structure légère et résistante en aluminium.",
        image: "/Structures/structure2.jpeg",
        poids: "7 kg/m²",
        marque: "AluSolar",
        dateAjout: today,
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
        image: "/cables/cable4mm2.jpeg",
        poids: "0.15 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
      },
      {
        reference: "CABL-SOL-6",
        name: "Câble solaire 6 mm²",
        description: "Câble solaire isolé 6 mm², adapté pour installations moyennes.",
        image: "/cables/cable6mm2.jpeg",
        poids: "0.23 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
      },
      {
        reference: "CABL-SOL-10",
        name: "Câble solaire 10 mm²",
        description: "Câble solaire haute capacité 10 mm².",
        image: "/cables/cable10mm2.jpeg",
        poids: "0.38 kg/m",
        marque: "HeliosPV",
        dateAjout: today,
      },
      {
        reference: "CABL-IMMERGE-H07RN-F",
        name: "Câble immergé H07RN-F",
        description: "Câble étanche et flexible pour installation immergée.",
        image: "/cables/cable_h07rnf.jpeg",
        poids: "0.45 kg/m",
        marque: "TopCable",
        dateAjout: today,
      },
      {
        reference: "CABL-IMMERGE-RVK",
        name: "Câble immergé RV-K",
        description: "TOP CABLE - Câble immergé haute performance.",
        image: "/cables/cable_rvk.jpeg",
        poids: "0.50 kg/m",
        marque: "TopCable",
        dateAjout: today,
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
        image: "/connecteurs/mc4.jpeg",
        poids: "0.02 kg/unité",
        marque: "SolarLink",
        dateAjout: today,
      },
      {
        reference: "CONN-MC4-KIT",
        name: "Kit Connecteurs MC4 (2 mâles + 2 femelles)",
        description: "Kit complet pour branchement rapide et sûr.",
        image: "/connecteurs/mc4kit.jpeg",
        poids: "0.06 kg/kit",
        marque: "SolarLink",
        dateAjout: today,
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
        image: "/protection/disjoncteur2p.jpeg",
        poids: "0.8 kg",
        marque: "ABB",
        dateAjout: today,
      },
      {
        reference: "PROT-DC-3P",
        name: "Disjoncteur DC 3 pôles",
        description: "Protection DC 3 pôles haute fiabilité.",
        image: "/protection/disjoncteur3p.jpeg",
        poids: "1.1 kg",
        marque: "Schneider",
        dateAjout: today,
      },
      {
        reference: "PROT-DC-4P",
        name: "Disjoncteur DC 4 pôles",
        description: "Protection DC 4 pôles pour installations complexes.",
        image: "/protection/disjoncteur4p.jpeg",
        poids: "1.5 kg",
        marque: "Schneider",
        dateAjout: today,
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
        image: "/protection/parafoudre_dc800.jpeg",
        poids: "0.5 kg",
        marque: "Phoenix Contact",
        dateAjout: today,
      },
      {
        reference: "PARA-DC-1000",
        name: "Parafoudre DC 1000 V",
        description: "Parafoudre pour installations photovoltaïques standard.",
        image: "/protection/parafoudre_dc1000.jpeg",
        poids: "0.55 kg",
        marque: "Dehn",
        dateAjout: today,
      },
      {
        reference: "PARA-DC-1200",
        name: "Parafoudre DC 1200 V",
        description: "Parafoudre haute capacité pour systèmes robustes.",
        image: "/protection/parafoudre_dc1200.jpeg",
        poids: "0.6 kg",
        marque: "Dehn",
        dateAjout: today,
      },
      {
        reference: "PARA-AC-TRI",
        name: "Parafoudre AC triphasé",
        description: "Protection pour réseau triphasé industriel.",
        image: "/protection/parafoudre_ac_tri.jpeg",
        poids: "1.3 kg",
        marque: "Dehn",
        dateAjout: today,
      }
    ],
    disponibilite: ["2P", "3P", "4P"],
    avantages: [
      "Protection des équipements contre les surtensions",
      "Réduction des risques de pannes ou dysfonctionnements"
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
      },
      {
        reference: "BOX-JONCT-XL",
        name: "Boîtier de jonction XL",
        description: "Boîtier grande capacité pour installations complexes.",
        image: "/junction/box_xl.jpeg",
        poids: "3.8 kg",
        marque: "IPBox",
        dateAjout: today,
      }
    ]
  }
];

export default installationAccessories;
