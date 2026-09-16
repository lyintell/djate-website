export type Screenshot = { title: string; body: string; src?: string };

/** `src` reste vide tant que les vraies captures ne sont pas fournies (voir public/assets/screenshots/). */
export const screenshots: Screenshot[] = [
  { title: "Écran de caisse", body: "La vente au quotidien." },
  { title: "Gestion du stock", body: "Produits et niveaux." },
  { title: "Rapports de ventes", body: "Chiffres et bénéfices." },
  { title: "Clients & crédits", body: "Suivi des comptes." },
];
