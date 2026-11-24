import {
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
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { MaliFlag, PersonRunning } from "@/components/icons";

export type Item = { icon: LucideIcon; title: string; body: string };

export type BenefitIcon = LucideIcon | typeof PersonRunning | typeof MaliFlag;

export type Benefit = {
  icons: BenefitIcon[];
  title: string;
  body: string;
  competitor: string[];
};

/* ---------- Business types (home marquee) ---------- */
export const businessTypes = [
  "Quincailleries",
  "Boutiques",
  "Supermarchés",
  "Entreprises",
  "Commerce général",
  "Pharmacies",
];

/* ---------- Home benefits (Pourquoi Djaté) ---------- */
export const benefits: Benefit[] = [
  {
    icons: [MaliFlag],
    title: "Adaptés aux réalités maliennes",
    body: "Conçu pour les commerces du Mali : FCFA, crédits clients, multi-magasins et usage quotidien simple.",
    competitor: [
      "Logiciels importés, pensés pour d'autres marchés",
      "Interface complexe, peu adaptée au terrain",
    ],
  },
  {
    icons: [PersonRunning],
    title: "Mise en service ultra rapide et support",
    body: "Installation rapide, formation incluse et accompagnement local pour démarrer sans attendre.",
    competitor: [
      "Délais d'installation longs",
      "Support distant, lent, coûteux ou inexistant",
    ],
  },
  {
    icons: [WifiOff],
    title: "Fonctionne sans internet",
    body: "Continuez à vendre, même sans connexion. Vos données se synchronisent dès que le réseau revient.",
    competitor: [
      "Dépendance totale à internet",
      "Caisse bloquée dès qu'il n'y a plus de réseau",
    ],
  },
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

/* ---------- App features (Logiciel page) ---------- */
export const features: Item[] = [
  { icon: ShoppingCart, title: "Ventes & caisse", body: "Encaissez vite, gérez les remises et imprimez le reçu instantanément." },
  { icon: FileText, title: "Factures & pro formas", body: "Imprimez en format reçu 80 mm ou en facture A4, selon votre besoin." },
  { icon: Users, title: "Clients & crédits", body: "Fichier clients, suivi des crédits et des situations." },
  { icon: Package, title: "Catalogue produits et gestion de stock", body: "Catalogue produits, entrées, sorties et niveaux de stock en temps réel." },
  { icon: Tag, title: "Changements de prix", body: "Mettez à jour vos prix pour refléter les fluctuations du marché et obtenir des rapports de bénéfices plus précis." },
  { icon: Truck, title: "Fournisseurs & commandes", body: "Fournisseurs, commandes, bon de sortie, bon de livraison et bon de réception." },
  { icon: ClipboardCheck, title: "Inventaire magasin", body: "Faites vos inventaires et corrigez les écarts facilement." },
  { icon: BarChart3, title: "Rapports et bénéfices", body: "Suivez la performance des produits, triez selon les résultats, et séparez clairement bénéfices et chiffres d'affaires." },
  { icon: Sparkles, title: "Pensé avec les commerçants", body: "Plusieurs fonctionnalités basées sur les requêtes de clients — un outil incontournable pour la gestion des ventes, du stock et de la caisse." },
];

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos formules", href: "/nos-formules" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Vidéos de formation", href: "/videos" },
  { label: "Contact", href: "/contact" },
];
