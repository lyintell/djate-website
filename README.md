# Handoff: Site vitrine Djaté POS

## Overview
Site vitrine (marketing) pour **Djaté POS**, un système de point de vente et de gestion pour les
commerces du Mali (boutiques, alimentations, quincailleries, supermarchés, commerce général,
entreprises). Objectif : présenter l'application et la machine, montrer des captures et des vidéos de
formation, afficher les offres/tarifs, et permettre la prise de contact. Éditeur : **Ly Intell**.

Le site comporte 4 pages :
- **Accueil** (`/`) — hero avec vidéo, bénéfices, machine, mode Cloud, offres, tarifs, témoignages, CTA
- **Fonctionnalités** (`/fonctionnalites`) — grille de fonctionnalités de l'app + captures d'écran
- **Vidéos** (`/videos`) — vidéos gratuites + formations réservées aux clients
- **Contact** (`/contact`) — formulaire + coordonnées

## About the Design Files
Les fichiers de ce bundle sont des **références de design**. Deux formes sont fournies :

1. `design-reference/*.dc.html` — les prototypes HTML originaux (look & comportement visés).
2. `nextjs/` — une **implémentation Next.js de référence, déjà organisée et fonctionnelle** (App
   Router + TypeScript), qui traduit ces prototypes en composants React.

La tâche pour le développeur : reprendre le projet `nextjs/` tel quel (il compile et tourne), ou
recréer ces designs dans l'environnement cible existant en suivant ses conventions. Ne pas expédier
les `.dc.html` en production — ce sont des maquettes.

## Fidelity
**Hi-fi.** Couleurs, typographie, espacements et interactions sont définitifs. Reproduire fidèlement.
Le contenu marketing (bénéfices, tarifs, coordonnées) est réel ; **témoignages, captures d'écran et
vidéos sont des placeholders** à remplacer par les vrais éléments du client.

## Getting started (implémentation de référence)
```bash
cd nextjs
npm install
npm run dev        # http://localhost:3000
```
Stack : Next.js 14 (App Router), React 18, TypeScript, `lucide-react` pour les icônes, polices
Google `Barlow` + `Barlow Condensed` via `next/font`. Aucun autre framework CSS — un seul
`app/globals.css` porte les tokens et les classes utilitaires.

## Structure
```
nextjs/
  app/
    layout.tsx              # <html>, polices, métadonnées SEO/OpenGraph
    globals.css             # tokens (couleurs, type) + classes (.btn, .card, grilles, bands…)
    page.tsx                # Accueil
    fonctionnalites/page.tsx
    videos/page.tsx
    contact/page.tsx        # 'use client' (état du formulaire)
  components/
    Nav.tsx                 # 'use client' (usePathname pour l'onglet actif)
    Footer.tsx
    ui.tsx                  # SectionHead + CtaBand réutilisables
  lib/
    data.ts                 # TOUT le contenu (textes, listes, tarifs, coordonnées, nav)
  public/assets/            # logo + photos machine
```
Le contenu est centralisé dans `lib/data.ts` : c'est le point d'entrée pour éditer textes, prix,
coordonnées, liste des fonctionnalités, etc.

## Screens / Views

### 1. Accueil (`app/page.tsx`)
- **Bande types de commerce** : ligne pleine largeur, Barlow Condensed 700, `clamp(14px,2.9vw,30px)`,
  MAJUSCULES, couleur accent, items joints par « · ». Source : `businessTypes`.
- **Hero** : grille 2 colonnes `.hero` (mobile 1 col ; ≥900px `0.85fr 1.35fr` — la vidéo est plus large
  que le texte). Gauche : H1 `clamp(40px,8vw,68px)` avec « simplement. » en accent, sous-texte, 2
  boutons (primary → /contact, secondary → #offres). Droite : **placeholder vidéo** 16/9, cadre vert
  foncé `#05331f` rayon 16px, image machine en fond opacité 0.4, bouton play rond blanc Ø84, libellé
  « Vidéo de présentation ». Brancher le vrai `<video>`/embed sur le bouton.
- **Bénéfices** : `.hgrid.hc3` (grille filaire, 1/2/3 colonnes), 6 items (`benefits`), icône Lucide 28px
  stroke 1.5 accent + titre 22px + corps 15px.
- **Machine** (`#machine`) : 2 colonnes ; à gauche 2 photos (`machine-front`, `machine-back`) en cadres
  verts ; à droite kicker + H2 + 4 specs 2×2 (`specs`).
- **Mode Cloud** : band vert foncé `.band-dark`, H2 + paragraphe, 3 avantages (`cloud`) en liste filaire
  claire, icônes menthe `#8fd3ac`.
- **Offres** (`#offres`) : `.surface`, 2 cartes (`OfferCard`) Fast (claire) / Pro (foncée) avec listes à
  puces ✓ (`offerFast`, `offerPro`). Lien vers `#tarifs`.
- **Tarifs** (`#tarifs`) : bandeau accent clair « Inclus : Formation incluse · 1 mois de suivi » (icônes
  GraduationCap, Clock). Puis 2 `PriceCard` **de hauteur égale, boutons alignés en bas** (`margin-top:auto`) :
  - Fast — Logiciel seul **300 000 FCFA** / Système complet avec machine **600 000 FCFA**
  - Pro — Logiciel seul **400 000 FCFA** / Système complet avec machine **700 000 FCFA**
- **Témoignages** : `.grid.cols3`, 3 cartes (`testimonials`, placeholders).
- **CtaBand** : band accent « Demandez une démonstration gratuite ».

### 2. Fonctionnalités (`app/fonctionnalites/page.tsx`)
En-tête (kicker + H1 + lead), grille filaire `.hgrid.hc3` de **9 fonctionnalités** (`features`), section
captures `.grid.cols2` (4 placeholders « Capture à venir »), CtaBand.

### 3. Vidéos (`app/videos/page.tsx`)
En-tête, section **Vidéos gratuites** (tag « Accès libre », `.grid.cols3`, 3 cartes avec bouton play
rond accent), section **Formations clients** (tag outline « Réservé aux clients », 3 cartes verrouillées
icône cadenas sur fond gris), CtaBand. Données : `videosFree`, `videosLocked`.

### 4. Contact (`app/contact/page.tsx`, client component)
2 colonnes : formulaire (Nom, Téléphone/WhatsApp, Email, Message) + colonne coordonnées (carte foncée
téléphones/email/localisation) et carte « Suivez-nous » (Facebook). Le formulaire ne poste pas vers un
serveur : il construit un **lien `mailto:` vers djatepos@gmail.com** et un **lien `wa.me`** pré-remplis à
partir des champs. Pour une vraie soumission, brancher une API route / service (Formspree, Resend, etc.).

## Interactions & Behavior
- **Nav** : sticky, fond translucide + blur ; onglet actif souligné (barre accent 2px) via `usePathname`.
- **Boutons** : hover = `--accent-600` (primary) ou fond `--accent-100` (secondary) ; focus visible =
  contour accent 2px offset 2px (défini globalement).
- **Formulaire contact** : état local React ; `mailto`/`wa.me` recalculés à chaque frappe.
- **Responsive (mobile-first)** : grilles à nombre de colonnes fixe — 1 col < 600px, 2 cols ≥ 600px,
  3–4 cols ≥ 960px (rangées pleines, pas d'orphelins). Titres fluides via `clamp()`.

## State Management
Aucun état global. Seul `Contact` a un `useState({nom, tel, email, msg})`. `Nav` lit `usePathname()`.

## Design Tokens (dans `app/globals.css`, `:root`)
Couleurs :
- bg `#f2f2f3`, texte `#1d1f20`, neutres 500 `#9a9b9d` / 600 `#5d5d60` / 700 `#3a3b3c`
- accent `#0e7a43` ; ramp : 100 `#e4f0e9`, 200 `#c8e1d3`, 300 `#9fdcb8`, 400 `#3e9c63`, 600 `#0a5f36`,
  700 `#0a4f2e`, 800 `#084026`, 900 `#05331f`
- menthe `#8fd3ac`, vert foncé (dark) `#05331f`
- lignes : `rgba(29,31,32,.12)` / `.16`

Typographie : titres **Barlow Condensed** (600/700), corps **Barlow** (400–700). Échelle : H1
`clamp(40px,8vw,68px)`, H2 `clamp(28px,5vw,40px)`, lead 19px, corps 15–17px, kicker 14px `.14em` MAJ.

Rayons : cartes/bands 16px, boutons/champs 10px, tags 999px. Ombres : uniquement le play du hero
(`0 8px 30px rgba(0,0,0,.3)`).

## Assets (`public/assets/`)
- `djate-logo.png` — logo (utilisé en blanc dans le footer via `filter: brightness(0) invert(1)`)
- `machine-front.jpg`, `machine-back.jpg` — photos du terminal
- `app-screen.jpg` — capture d'app (fournie, non encore placée)
À fournir par le client : vraie **vidéo de présentation**, **captures d'écran** de l'app, **vidéos de
formation**, vrais **témoignages**, URL **Facebook** réelle (placeholder `https://facebook.com`).

## Icons
`lucide-react`, stroke 1.5 (interface) / 1.8–2 (coches, puces). Mapping dans `lib/data.ts`.

## Files
- Implémentation de référence : `nextjs/**`
- Prototypes originaux : `design-reference/*.dc.html`
