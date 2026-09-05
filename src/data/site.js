// ---------------------------------------------------------------------------
// Toutes les informations réelles du cabinet sont centralisées ici.
// Remplacez les valeurs entre crochets [ ] puis vérifiez les pages
// "Mentions légales" et "Contact" qui affichent aussi certaines de ces infos.
// ---------------------------------------------------------------------------

export const site = {
  doctorName: "Dr Stéphane Bettinger",
  doctorFirstName: "Stéphane",
  doctorLastName: "Bettinger",
  speciality: "Angiologue — Médecine vasculaire",
  city: "[Ville]",
  addressLine1: "[Numéro et rue]",
  addressLine2: "[Code postal] [Ville]",
  fullAddress: "[Numéro et rue, Code postal Ville]",
  phone: "[01 23 45 67 89]",
  phoneHref: "+33123456789",
  email: "[contact@cabinet-exemple.fr]",
  hours: [
    { day: "Lundi – Vendredi", hours: "[9h00 – 18h00]" },
    { day: "Samedi", hours: "[Sur rendez-vous]" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  access: "[Accès : métro/bus à préciser, parking à proximité]",
  // La prise de rendez-vous se fait uniquement par téléphone ou via le formulaire
  // de contact du site. Aucune plateforme tierce (type Doctolib).
  bookingUrl: "/contact/",
  bookingLabel: "Prendre rendez-vous",
  bookingLabelShort: "Prendre RDV",
  rpps: "[Numéro RPPS]",
  adeli: "[Numéro ADELI]",
  diplomas: [
    "[Diplôme d'État de Docteur en Médecine — Université de …]",
    "[Diplôme d'Études Spécialisées (DES) en Médecine Vasculaire]",
    "[Diplôme Universitaire (DU) d'Échographie-Doppler Vasculaire]",
    "[Diplôme Universitaire (DU) de Phlébologie]",
    "[Membre de la Société Française de Médecine Vasculaire (SFMV)]",
  ],
  onSiteActs: [
    "Écho-doppler veineux et artériel réalisé au cabinet",
    "Sclérothérapie (traitement des varices et varicosités)",
    "[Traitement endoveineux au laser, si pratiqué]",
    "Bilan et suivi de compression veineuse (bas de contention)",
  ],
  legalFormName: "[Nom de la structure d'exercice, le cas échéant]",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Le médecin", href: "/le-medecin/" },
  {
    label: "Pathologies & actes",
    href: "/pathologies/",
    children: [], // rempli dynamiquement depuis pathologies.js dans le Header
  },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Actualités", href: "/actualites/" },
  { label: "Contact", href: "/contact/" },
];
