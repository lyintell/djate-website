export type Testimonial = { quote: string; name: string; role: string };

/** Max 5 entries. Placeholders — à remplacer par de vrais témoignages clients. */
export const testimonials: Testimonial[] = [
  { quote: "Depuis Djaté POS, je connais mon stock exact et mes ventes de la journée sans calculer à la main.", name: "Nom du client", role: "Boutique — Bamako" },
  { quote: "La caisse va vite et l’impression du reçu se fait toute seule. Mes clients apprécient.", name: "Nom du client", role: "Alimentation — Ségou" },
  { quote: "Je gère mes fournisseurs et mes bons de stock au même endroit. C’est un vrai gain de temps.", name: "Nom du client", role: "Quincaillerie — Sikasso" },
];
