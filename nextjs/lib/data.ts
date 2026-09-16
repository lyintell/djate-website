import {
  Zap,
  Package,
  Store,
  WifiOff,
  Users,
  BarChart3,
  Hand,
  Printer,
  Cpu,
  HardDrive,
  Cloud,
  MonitorSmartphone,
  RefreshCw,
  ShoppingCart,
  FileText,
  Tag,
  Truck,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

export type Item = { icon: LucideIcon; title: string; body: string };

/* ---------- Business types (hero band) ---------- */
export const businessTypes = [
  "Boutiques",
  "Alimentations",
  "Quincailleries",
  "Supermarchés",
  "Commerce général",
  "Entreprises",
];

/* ---------- Home benefits ---------- */
export const benefits: Item[] = [
  { icon: Zap, title: "Vente rapide en caisse", body: "Encaissez et imprimez le reçu en quelques secondes." },
  { icon: Package, title: "Suivi du stock en temps réel", body: "Sachez toujours ce qu’il vous reste." },
  { icon: Store, title: "Plusieurs magasins", body: "Gérez plusieurs magasins depuis un seul système." },
  { icon: WifiOff, title: "Fonctionne sans internet", body: "Vendez à tout moment, même sans connexion." },
  { icon: Users, title: "Clients & fournisseurs", body: "Suivez les situations de vos clients et fournisseurs." },
  { icon: BarChart3, title: "Rapports & bénéfices clairs", body: "Voyez vos ventes et vos gains d’un coup d’œil." },
];

/* ---------- Machine specs ---------- */
export const specs: Item[] = [
  { icon: Hand, title: "Écran tactile", body: "Caisse rapide et intuitive." },
  { icon: Printer, title: "Imprimante intégrée", body: "Tickets et reçus directement." },
  { icon: Cpu, title: "Processeur i5", body: "Fluide toute la journée." },
  { icon: HardDrive, title: "SSD ultra-rapide", body: "Démarrage instantané." },
];

/* ---------- Cloud advantages ---------- */
export const cloud: Item[] = [
  { icon: Cloud, title: "Accès partout", body: "Depuis la boutique, la maison ou en déplacement." },
  { icon: MonitorSmartphone, title: "Plusieurs appareils", body: "Ordinateur, tablette ou téléphone, au choix." },
  { icon: RefreshCw, title: "Synchronisé & sauvegardé", body: "Vos données à jour et en sécurité en permanence." },
];

/* ---------- App features (Fonctionnalités page) ---------- */
export const features: Item[] = [
  { icon: ShoppingCart, title: "Ventes & caisse", body: "Encaissez vite, gérez les remises et imprimez le reçu instantanément." },
  { icon: FileText, title: "Factures & pro formas", body: "Générez factures et pro formas propres et professionnelles." },
  { icon: Users, title: "Clients & crédits", body: "Fichier clients, suivi des crédits et des situations." },
  { icon: Package, title: "Gestion du stock", body: "Entrées, sorties et niveaux de stock toujours à jour." },
  { icon: Tag, title: "Prix & promotions", body: "Changez les prix et lancez des promotions en un instant." },
  { icon: Truck, title: "Fournisseurs & commandes", body: "Fournisseurs, commandes et bons de stock (réception, sortie, livraison)." },
  { icon: ClipboardCheck, title: "Inventaire magasin", body: "Faites vos inventaires et corrigez les écarts facilement." },
  { icon: BarChart3, title: "Rapports & bénéfices", body: "Ventes, marges et bénéfices, clairs d’un coup d’œil." },
  { icon: WifiOff, title: "Fonctionne hors ligne", body: "Continuez à vendre même sans connexion internet." },
];

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Vidéos", href: "/videos" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Contact", href: "/contact" },
];
