export type FreeVideo = { dur: string; title: string; body: string; src?: string };
export type LockedVideo = { title: string; body: string; src?: string };

/** `src` reste vide tant que les vraies vidéos ne sont pas fournies (voir public/assets/videos/). */
export const videosFree: FreeVideo[] = [
  { dur: "À venir", title: "Premiers pas avec Djaté POS", body: "Découverte de l’interface et première vente." },
  { dur: "À venir", title: "Enregistrer vos produits", body: "Créer votre catalogue et fixer les prix." },
  { dur: "À venir", title: "Encaisser & imprimer un reçu", body: "Le déroulé d’une vente en caisse." },
];

export const videosLocked: LockedVideo[] = [
  { title: "Gérer le stock et les inventaires", body: "Entrées, sorties et corrections d’écarts." },
  { title: "Fournisseurs & bons de commande", body: "Réception, sortie et livraison." },
  { title: "Lire vos rapports et bénéfices", body: "Analyser vos ventes et vos marges." },
];
