# Éléments à fournir ou à valider par le Dr Bettinger

Le site n'invente aucune information : tant qu'un élément n'est pas fourni,
un repère visible `[À COMPLÉTER PAR LE DR BETTINGER : …]` ou un rendu neutre
reste en place. Une fois l'information reçue, on la reporte à l'endroit indiqué
puis on redéploie le site.

## 1. Photo portrait

- **Où elle apparaît** : section « Votre médecin » de l'accueil et page
  « Le médecin ».
- **À fournir** : un portrait (format carré de préférence, 600 × 600 px
  minimum, fond sobre).
- **Où la déposer** : `src/assets/images/dr-bettinger.jpg` (recommandé, Astro
  la convertit en AVIF/WebP) ou `public/images/dr-bettinger.jpg` (servie telle
  quelle : la réduire au préalable). Aucun code à modifier : le composant
  `DoctorPortrait.astro` la détecte au build. Texte alternatif :
  « Dr Stéphane Bettinger ».
- **En attendant** : un médaillon bleu nuit avec les initiales « SB », sans
  aucune photo.

## 2. Venir au cabinet (accueil et page Contact)

L'adresse et le lien Google Maps sont déjà affichés. Il manque trois lignes,
à renseigner dans `src/data/site.js` → `site.access` :

- [ ] **Stationnement** (`parking`) : possibilités de stationnement à proximité
  du 11 Place Jeanne Mance.
- [ ] **Accès PMR** (`pmr`) : le cabinet est-il accessible aux personnes à
  mobilité réduite (plain-pied, ascenseur, marches…) ?
- [ ] **Transports** (`transports`) : lignes et arrêts de transport en commun
  utiles, si pertinent.

Une ligne sans objet peut être retirée du bloc sur simple demande.

## 3. Page Tarifs : titre « Tarifs indicatifs »

La section intitulée « Tarifs indicatifs » (`src/pages/tarifs.astro`) ne
contient aucun montant : chaque ligne indique « Tarif conventionné secteur 1 ».
Le texte n'a pas été modifié. **Question au Dr Bettinger :**

- [ ] **Option A** : publier les montants (consultation et chaque type
  d'écho-doppler). Merci de fournir les montants exacts à afficher.
- [ ] **Option B** : ne pas publier de montants et renommer le titre (par
  exemple « Prise en charge des actes »). Merci de valider la formulation.

## 4. Points déjà signalés dans le code

- [ ] **Horaires d'ouverture** (`src/data/site.js` → `site.hours`) : à
  confirmer. Une fois validés, passer `hoursConfirmed` à `true` pour les
  publier aussi dans les données structurées Google.
- [ ] **Mentions légales** : département d'inscription au Conseil de l'Ordre
  des médecins à confirmer.

## 5. Illustrations des pages d'examens (pour information)

Les 12 pages d'examens ont chacune une illustration schématique (dessin
vectoriel, sans photographie ni réalisme anatomique). Si le Dr Bettinger
souhaite un ajustement sur l'une d'elles (notamment la page « Écho-doppler
pénien », volontairement très abstraite), il suffit de l'indiquer.
