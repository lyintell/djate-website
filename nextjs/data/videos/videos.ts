export type VideoLang = "Français" | "Bambara";

export type FreeVideo = { dur?: string; title: string; body: string; youtube?: string; lang?: VideoLang };
export type LockedVideo = { title: string; body: string; youtube?: string; lang?: VideoLang };

/**
 * `youtube` : coller l'URL YouTube (ou juste l'ID de la vidéo) une fois mise en ligne.
 * Utiliser le même titre que sur YouTube. `lang` affiche un badge à côté du titre
 * ("Français" ou "Bambara").
 */
export const videosFree: FreeVideo[] = [
  { title: "Effectuer une vente", body: "Découverte de l’interface et première vente.", lang: "Bambara", youtube: "https://youtu.be/zSoP8qBqNuc" },
  { title: "Effectuer une vente", body: "Découverte de l’interface et première vente.", lang: "Français", youtube: "https://youtu.be/CinNnKwHIaU" },
  { dur: "À venir", title: "Enregistrer vos produits", body: "Créer votre catalogue et fixer les prix.", lang: "Bambara" },
  { dur: "À venir", title: "Enregistrer vos produits", body: "Créer votre catalogue et fixer les prix.", lang: "Français" },
];

export const videosLocked: LockedVideo[] = [
  { title: "Gérer le stock et les inventaires", body: "Entrées, sorties et corrections d’écarts." },
  { title: "Fournisseurs & bons de commande", body: "Réception, sortie et livraison." },
  { title: "Lire vos rapports et bénéfices", body: "Analyser vos ventes et vos marges." },
];
