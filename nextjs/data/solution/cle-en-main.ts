import { PackageCheck, PlugZap } from "lucide-react";
import { formationIncluse, suiviUnMois, type Advantage } from "./shared";

export type { Advantage };

export const cleEnMainAdvantages: Advantage[] = [
  {
    icon: PackageCheck,
    title: "Tout inclus",
    body: "Terminal, logiciel, formation et suivi — tout est prêt pour démarrer.",
  },
  {
    icon: PlugZap,
    title: "Installation en 1 jour",
    body: "Prêt à travailler le même jour — installation et configuration, vous vendez dès le jour J.",
  },
  formationIncluse,
  suiviUnMois,
];
