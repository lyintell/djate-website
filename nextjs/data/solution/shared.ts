import { GraduationCap, Headphones, type LucideIcon } from "lucide-react";

export type Advantage = { icon: LucideIcon; title: string; body: string };

/** Textes communs — clé en main et logiciel seul. */
export const formationIncluse: Advantage = {
  icon: GraduationCap,
  title: "Formation incluse",
  body: "Votre équipe apprend à utiliser Djaté POS rapidement, sur place ou à distance.",
};

export const suiviUnMois: Advantage = {
  icon: Headphones,
  title: "1 mois de suivi",
  body: "Accompagnement après l'installation pour répondre à vos questions et ajuster le système.",
};
