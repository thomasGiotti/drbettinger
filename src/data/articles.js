export const articles = [
  {
    slug: "marche-et-veines",
    title: "Pourquoi la marche est bénéfique pour vos veines",
    date: "2026-03-10",
    excerpt:
      "La marche régulière est l'un des gestes les plus simples pour entretenir la circulation veineuse. Explications sur son rôle dans le retour du sang vers le cœur.",
    body: [
      "Marcher active la « pompe musculaire du mollet » : à chaque pas, la contraction des muscles du mollet comprime les veines profondes et aide le sang à remonter vers le cœur, en s'appuyant sur les valvules veineuses.",
      "Une marche quotidienne de 30 minutes, à un rythme modéré, est une mesure simple et accessible pour soulager les jambes lourdes et accompagner la prise en charge de l'insuffisance veineuse.",
      "Cette recommandation est également valable en cas d'artériopathie des membres inférieurs, où la marche régulière fait partie intégrante du traitement, sous réserve d'un avis médical préalable.",
    ],
  },
  {
    slug: "comprendre-echo-doppler",
    title: "Comprendre l'écho-doppler en 5 questions",
    date: "2026-02-18",
    excerpt:
      "Cet examen d'imagerie, central en médecine vasculaire, suscite souvent des questions. Voici les réponses aux plus fréquentes.",
    body: [
      "Est-ce douloureux ? Non, l'écho-doppler est un examen totalement indolore, réalisé à l'aide d'une sonde posée sur la peau avec un peu de gel.",
      "Faut-il se préparer ? Aucune préparation particulière n'est nécessaire ; il est simplement conseillé de porter des vêtements faciles à retirer.",
      "Combien de temps dure l'examen ? Généralement entre 20 et 40 minutes, selon la zone explorée (jambes, cou, abdomen).",
      "Les résultats sont-ils immédiats ? Oui, l'examen et son interprétation sont réalisés dans le même temps que la consultation.",
      "Cet examen remplace-t-il une consultation ? Non, il s'intègre à une consultation de médecine vasculaire, qui comprend également un examen clinique.",
    ],
  },
  {
    slug: "idees-recues-bas-de-contention",
    title: "Bas de contention : 4 idées reçues à corriger",
    date: "2026-01-22",
    excerpt:
      "Inconfortables, inefficaces, réservés aux personnes âgées : la compression veineuse souffre de nombreux préjugés, souvent infondés.",
    body: [
      "« Les bas de contention sont forcément inconfortables. » Faux : avec la bonne taille et la classe de compression adaptée, ils sont conçus pour être portés toute une journée sans gêne.",
      "« Ils ne sont utiles qu'en cas de varices visibles. » Faux : ils sont également recommandés en prévention, notamment lors de longs trajets ou de stations debout prolongées.",
      "« Une seule taille suffit pour tout le monde. » Faux : une prise de mesures précise est nécessaire pour garantir l'efficacité et le confort de la compression.",
      "« Ils sont réservés aux personnes âgées. » Faux : l'insuffisance veineuse peut concerner des personnes de tous âges, notamment en cas d'antécédents familiaux ou de métiers exposés.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}
