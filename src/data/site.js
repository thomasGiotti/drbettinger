// ---------------------------------------------------------------------------
// Toutes les informations réelles du cabinet sont centralisées ici.
// Remplacez les valeurs entre crochets [ ] puis vérifiez les pages
// "Mentions légales" et "Contact" qui affichent aussi certaines de ces infos.
// ---------------------------------------------------------------------------

export const site = {
  doctorName: "Dr Stéphane Bettinger",
  doctorFirstName: "Stéphane",
  doctorLastName: "Bettinger",
  speciality: "Médecin spécialiste en médecine vasculaire",
  city: "Langres",
  addressLine1: "11 Place Jeanne Mance",
  addressLine2: "52200 Langres",
  fullAddress: "11 Place Jeanne Mance, 52200 Langres",
  phone: "03 25 88 44 58",
  phoneHref: "+33325884458",
  hours: [
    { day: "Lundi – Vendredi", hours: "[9h00 – 18h00]" },
    { day: "Samedi", hours: "[Sur rendez-vous]" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  access: "[Accès : métro/bus à préciser, parking à proximité]",
  // Information factuelle sur les conditions d'exercice, à présenter sans
  // superlatif ni argument commercial (pas de "matériel de pointe", etc.).
  equipment:
    "Le cabinet est équipé d'un système d'échographie à ultrasons GE Logiq E10 BT19.",
  // Formulation neutre et informative, sans incitation ni mise en avant
  // visuelle particulière (pas de badge, pas de couleur accent).
  urgentSlotsNote:
    "Des créneaux d'urgence peuvent être mis à disposition selon les disponibilités du cabinet.",
  // La prise de rendez-vous se fait uniquement par téléphone auprès du
  // secrétariat. Aucune plateforme tierce (type Doctolib), aucun formulaire.
  // Les CTA "Prendre rendez-vous" déclenchent donc un appel (lien tel:).
  bookingUrl: "tel:+33325884458",
  bookingLabel: "Prendre rendez-vous",
  bookingLabelShort: "Prendre RDV",
  rpps: "10004943295",
  diplomas: [
    "Diplôme d'État de Docteur en médecine générale - Faculté de médecine Necker-Enfants Malades, Paris",
    "Capacité d'angiologie - Université Paris 12 (Créteil), 1998-2000",
    "Qualification en médecine vasculaire",
    "DIU Laser médical - Université Paris Descartes (Sorbonne)",
  ],
  onSiteActs: [
    "Écho-doppler transcrânien",
    "Écho-doppler artériel des troncs supra-aortiques",
    "Écho-doppler artériel des membres supérieurs",
    "Écho-doppler aortique et des branches viscérales",
    "Écho-doppler artériel des membres inférieurs",
    "Écho-doppler veineux des membres inférieurs",
    "Écho-doppler pénien",
    "Dépistage et suivi des maladies anévrismales",
    "Dépistage et prise en charge des phlébites, y compris les formes héréditaires (thrombophilies)",
  ],
  legalFormName: "[Nom de la structure d'exercice, le cas échéant]",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Le médecin", href: "/le-medecin/" },
  {
    label: "Examens & actes",
    href: "/pathologies/",
    children: [], // rempli dynamiquement depuis pathologies.js dans le Header
  },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Actualités", href: "/actualites/" },
  { label: "Contact", href: "/contact/" },
];
