const productsData = [
  {
    type: "Structures",
    items: [
      {
        reference: "STR-ALU-30",
        name: "Structure Aluminium 30°",
        description: "Structure en aluminium inclinée 30° pour panneaux solaires.",
        image: "/structures/structure30.jpeg",
        prix: "250 DH / m²",
        marque: "AluSolar",
      },
      {
        reference: "STR-PLAT",
        name: "Structure Toit Plat 5°",
        description: "Structure inclinée 5° adaptée aux toits plats.",
        image: "/structures/structureplat.jpeg",
        prix: "200 DH / m²",
        marque: "MorSolar",
      }
    ]
  },
  {
    type: "Câbles et connecteurs",
    items: [
      {
        reference: "CABL-4MM2",
        name: "Câble Solaire 4 mm²",
        description: "Câble solaire 4 mm² avec isolation UV.",
        image: "/cables/cablesolaire4.jpeg",
        prix: "28 DH / m",
        marque: "HeliosPV",
      },
      {
        reference: "CONN-MC4",
        name: "Connecteur MC4",
        description: "Connecteur rapide MC4 pour panneau photovoltaïque.",
        image: "/connecteurs/connmc4.jpeg",
        prix: "15 DH / unité",
        marque: "SolarLink",
      }
    ]
  },
  {
    type: "Disjoncteur de protections DC",
    items: [
      {
        reference: "PROT-DC-1000",
        name: "Disjoncteur DC 1000 V",
        description: "Protection DC pour circuit photovoltaïque jusqu'à 1000 V.",
        image: "/protection/disjoncteurDC.jpeg",
        prix: "1 400 DH",
        marque: "ABB",
      },
      {
        reference: "PROT-DC-EXP",
        name: "Disjoncteur DC Expédit",
        description: "Protection rapide 630 A pour installations solaires.",
        image: "/protection/disjoncteurDC2.jpeg",
        prix: "2 200 DH",
        marque: "Schneider",
      }
    ]
  },
  {
    type: "Parafoudre",
    items: [
      {
        reference: "PROT-PARA-SL",
        name: "Parafoudre DC 1500 V",
        description: "Parafoudre pour circuit solaire jusqu’à 1500 V.",
        image: "/protection/parafoudre.jpeg",
        prix: "2 300 DH",
        marque: "Phoenix Contact",
      },
      {
        reference: "PROT-PARA-AC",
        name: "Parafoudre AC triphasé",
        description: "Parafoudre pour réseau triphasé industriel.",
        image: "/protection/parafoudreAC.jpeg",
        prix: "1 800 DH",
        marque: "Dehn",
      }
    ]
  },
  {
    type: "Boîtier de jonction",
    items: [
      {
        reference: "BOX-JONCT-4",
        name: "Boîtier MC4 4 entrées",
        description: "Boîtier de jonction IP65 pour 4 connexions MC4.",
        image: "/junction/boxjonc4.jpeg",
        prix: "180 DH",
        marque: "IPBox",
      },
      {
        reference: "BOX-JONCT-8",
        name: "Boîtier MC4 8 entrées",
        description: "Boîtier de jonction IP65 pour 8 connexions MC4.",
        image: "/junction/boxjonc8.jpeg",
        prix: "250 DH",
        marque: "IPBox",
      }
    ]
  },
  {
    type: "Panneaux solaire photovoltaïques",
    items: [
      {
        reference: "PAN-BI-330",
        name: "Panneau Bifacial 330 W",
        description: "Panneau photovoltaïque bifacial haut rendement.",
        image: "/panneaux/panbifacial330.jpeg",
        prix: "2 200 DH",
        marque: "JA Solar",
      },
      {
        reference: "PAN-MONO-400",
        name: "Panneau Monocristallin 400 W",
        description: "Panneau monocristallin haute performance 400 W.",
        image: "/panneaux/panmono400.jpeg",
        prix: "2 500 DH",
        marque: "Longi",
      }
    ]
  },
  {
    type: "Variateurs de pompage Solaire",
    items: [
      {
        reference: "VAR-SOL-2.2",
        name: "Variateur 2.2 kW IP65",
        description: "Variateur pour pompe solaire 2.2 kW étanche IP65.",
        image: "/variateurs/variateursol2.2.jpeg",
        prix: "2 200 DH",
        marque: "InverterTech",
      },
      {
        reference: "VAR-SOL-5.5",
        name: "Variateur 5.5 kW IP65",
        description: "Haute puissance pour pompage solaire ou machine.",
        image: "/variateurs/variateursol5.5.jpeg",
        prix: "3 800 DH",
        marque: "SolarDrive",
      }
    ]
  },
  {
    type: "Onduleurs solaires ongrid",
    items: [
      {
        reference: "ONDL-3000W",
        name: "Onduleur 3 kW On‑Grid",
        description: "Onduleur on‑grid pour installation résidentielle.",
        image: "/onduleurs/ond3000.jpeg",
        prix: "8 000 DH",
        marque: "Growatt",
      },
      {
        reference: "ONDL-5000W",
        name: "Onduleur 5 kW On‑Grid",
        description: "Onduleur on‑grid puissant pour toiture PV.",
        image: "/onduleurs/ond5000.jpeg",
        prix: "12 000 DH",
        marque: "Huawei",
      }
    ]
  },
  {
    type: "Onduleurs offgrid hybride",
    items: [
      {
        reference: "ONDL-TPH",
        name: "Onduleur Triphasé Hybrid",
        description: "Onduleur hybride triphasé pour site industriel.",
        image: "/onduleurs/ondtph.jpeg",
        prix: "18 000 DH",
        marque: "SMA",
      },
      {
        reference: "ONDL-PORT",
        name: "Onduleur Portable 1 kW",
        description: "Onduleur portable compact pour site off‑grid.",
        image: "/onduleurs/ondportable.jpeg",
        prix: "4 500 DH",
        marque: "EcoFlow",
      }
    ]
  }
];

export default productsData;
