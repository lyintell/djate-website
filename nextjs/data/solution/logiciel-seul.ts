import { Monitor } from "lucide-react";
import { formationIncluse, suiviUnMois, type Advantage } from "./shared";

export type { Advantage };

export const logicielSeulAdvantages: Advantage[] = [
  {
    icon: Monitor,
    title: "Sur vos ordinateurs",
    body: "Idéal si vous avez déjà un PC ou un terminal. Pas besoin d'acheter un nouveau matériel.",
  },
  formationIncluse,
  suiviUnMois,
];
