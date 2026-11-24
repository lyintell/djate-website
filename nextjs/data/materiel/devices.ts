export type DeviceSpec = { label: string; value: string };

export type Device = {
  name: string;
  tagline: string;
  description: string;
  specs: DeviceSpec[];
};

/** Labels communs — ordre des lignes du tableau comparatif. */
export const specLabels = [
  "Système d'exploitation",
  "Châssis",
  "Adapté pour",
  "Écran",
  "Imprimante",
  "Processeur",
  "RAM",
  "SSD",
] as const;

/** Trois versions d'appareil — Windows ou Android. */
export const devices: Device[] = [
  {
    name: "Terminal Compact",
    tagline: "Pour les petits commerces",
    description:
      "Terminal compact (Windows ou Android), prêt à encaisser. Idéal pour boutiques, quincailleries et pharmacies.",
    specs: [
      { label: "Système d'exploitation", value: "Windows ou Android" },
      { label: "Châssis", value: "Plastique renforcé" },
      { label: "Adapté pour", value: "Boutiques, quincailleries, pharmacies" },
      { label: "Écran", value: "1 tactile 15\" + petit écran fluorescent (VFD)" },
      { label: "Imprimante", value: "Intégrée" },
      { label: "Processeur", value: "i5" },
      { label: "RAM", value: "8 Go" },
      { label: "SSD", value: "256 Go" },
    ],
  },
  {
    name: "Terminal Standard",
    tagline: "Le choix polyvalent",
    description:
      "Terminal tout-en-un (Windows ou Android) pour supermarchés et un usage quotidien intensif. Écran 10\" pour la visibilité du client sur ses articles.",
    specs: [
      { label: "Système d'exploitation", value: "Windows ou Android" },
      { label: "Châssis", value: "Plastique renforcé" },
      { label: "Adapté pour", value: "Supermarchés" },
      { label: "Écran", value: "1 tactile 15\" + 10\" client" },
      { label: "Imprimante", value: "Intégrée" },
      { label: "Processeur", value: "i5" },
      { label: "RAM", value: "8 Go" },
      { label: "SSD", value: "256 Go" },
    ],
  },
  {
    name: "Terminal Pro",
    tagline: "Pour un usage intensif",
    description:
      "Châssis plastique renforcé (Windows ou Android), performance élevée. Grand écran tactile 21,5\" — conçu pour entreprises et commerce général.",
    specs: [
      { label: "Système d'exploitation", value: "Windows ou Android" },
      { label: "Châssis", value: "Plastique renforcé" },
      { label: "Adapté pour", value: "Entreprises, commerce général" },
      { label: "Écran", value: "1 tactile 21,5\"" },
      { label: "Imprimante", value: "—" },
      { label: "Processeur", value: "i5" },
      { label: "RAM", value: "8 Go" },
      { label: "SSD", value: "512 Go" },
    ],
  },
];
