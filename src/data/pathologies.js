// Contenu médical de vulgarisation générique et non personnalisé.
// Chaque fiche décrit un examen ou un acte réalisé au cabinet (voir site.onSiteActs).
// Toute décision individuelle relève d'une consultation.
export const pathologies = [
  {
    slug: "echo-doppler-transcranien",
    icon: "brain",
    navTitle: "Écho-doppler transcrânien",
    cardTitle: "Écho-doppler transcrânien",
    cardDesc:
      "L'exploration par ultrasons de la circulation du sang dans les artères situées à l'intérieur du crâne, pour évaluer la vascularisation du cerveau.",
    question: "Qu'est-ce que l'écho-doppler transcrânien ?",
    intro:
      "L'écho-doppler transcrânien permet d'étudier la circulation du sang dans les artères situées à l'intérieur du crâne, de façon totalement indolore et sans injection. C'est un examen de référence pour surveiller la vascularisation du cerveau.",
    whatIsIt:
      "À l'aide d'une sonde à ultrasons posée sur les zones où l'os du crâne est plus fin (la tempe, la nuque, le pourtour de l'œil), l'examen mesure la vitesse et le sens de circulation du sang dans les principales artères cérébrales. Il complète l'écho-doppler des artères du cou et aide à repérer un rétrécissement, un spasme ou une circulation de suppléance.",
    course:
      "Vous êtes installé allongé ou semi-assis. Le médecin applique un peu de gel puis déplace lentement la sonde sur plusieurs points du crâne et du cou. L'examen dure de 20 à 30 minutes environ, ne nécessite aucune préparation et n'entraîne aucune douleur ni effet secondaire. Les résultats vous sont expliqués immédiatement.",
    tips:
      "Aucune préparation n'est nécessaire : vous pouvez manger et prendre vos traitements habituels normalement. Signalez simplement vos antécédents (accident vasculaire, migraine, chirurgie du cou) et apportez vos examens d'imagerie antérieurs si vous en avez.",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-troncs-supra-aortiques",
    icon: "artery",
    navTitle: "Écho-doppler des troncs supra-aortiques",
    cardTitle: "Écho-doppler artériel des troncs supra-aortiques",
    cardDesc:
      "L'examen des artères du cou (carotides et vertébrales) qui amènent le sang au cerveau : un dépistage simple et indolore.",
    question: "Qu'est-ce que l'écho-doppler des troncs supra-aortiques ?",
    intro:
      "Les troncs supra-aortiques sont les artères qui montent vers la tête : les carotides et les artères vertébrales. Leur exploration par écho-doppler est un examen clé dans la prévention de l'accident vasculaire cérébral.",
    whatIsIt:
      "L'examen combine l'échographie (pour voir la paroi des artères et d'éventuelles plaques d'athérome) et le doppler (pour mesurer la circulation du sang). Il permet de dépister un rétrécissement (sténose), d'en évaluer l'importance et de suivre son évolution. Il est fréquemment demandé en cas de facteurs de risque cardiovasculaire, de souffle perçu à l'auscultation du cou, ou après un accident vasculaire.",
    course:
      "Allongé sur le dos, la tête légèrement tournée, vous restez immobile pendant que le médecin passe la sonde le long du cou avec un peu de gel. L'examen est indolore, dure environ 20 à 30 minutes et ne demande aucune préparation. Le compte rendu et les éventuelles suites (surveillance, avis spécialisé) vous sont exposés en fin de consultation.",
    tips:
      "Portez un vêtement dégageant facilement le cou. Aucune autre préparation n'est requise. Pensez à apporter vos comptes rendus antérieurs pour permettre une comparaison dans le temps.",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-membres-superieurs",
    icon: "artery",
    navTitle: "Écho-doppler artériel des membres supérieurs",
    cardTitle: "Écho-doppler artériel des membres supérieurs",
    cardDesc:
      "L'exploration des artères des bras et des mains, en cas de doigts qui blanchissent au froid, de douleurs à l'effort, ou avant certains gestes médicaux.",
    question: "Qu'est-ce que l'écho-doppler artériel des membres supérieurs ?",
    intro:
      "Cet examen étudie la circulation artérielle dans les épaules, les bras, les avant-bras et les mains. Il est utile lorsque des symptômes évoquent une gêne à l'irrigation des membres supérieurs.",
    whatIsIt:
      "Grâce aux ultrasons, le médecin visualise les artères du bras et mesure le flux sanguin à différents niveaux. L'examen recherche un rétrécissement, une compression (par exemple au niveau de l'épaule), ou une cause aux phénomènes de doigts qui changent de couleur au froid (phénomène de Raynaud). Il est aussi réalisé dans le bilan préalable à la création d'un abord vasculaire pour dialyse.",
    course:
      "Vous êtes assis ou allongé, le bras dénudé et détendu. Le médecin applique du gel et déplace la sonde de l'épaule jusqu'au poignet, parfois en réalisant des manœuvres simples (changement de position du bras). L'examen dure 20 à 30 minutes, est indolore et sans préparation. Les résultats sont commentés aussitôt.",
    tips:
      "Prévoyez des vêtements permettant de dégager entièrement les deux bras. Si vous décrivez une gêne déclenchée par le froid ou une position particulière, notez les circonstances exactes : cela aide à orienter l'examen.",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-aortique-visceral",
    icon: "aorta",
    navTitle: "Écho-doppler aortique et des branches viscérales",
    cardTitle: "Écho-doppler aortique et des branches viscérales",
    cardDesc:
      "L'examen de l'aorte abdominale et des artères qui irriguent les reins et le tube digestif, pour dépister un anévrisme ou un rétrécissement.",
    question: "Qu'est-ce que l'écho-doppler aortique et des branches viscérales ?",
    intro:
      "L'aorte abdominale est la principale artère du ventre ; elle donne naissance aux artères des reins et de l'intestin. Son exploration par écho-doppler permet de dépister une dilatation (anévrisme) ou un rétrécissement, sans aucun rayonnement.",
    whatIsIt:
      "L'examen mesure le diamètre de l'aorte sur toute sa longueur abdominale et analyse la circulation dans les artères rénales et digestives. Il sert notamment au dépistage de l'anévrisme de l'aorte abdominale (recommandé chez les hommes de 65 à 75 ans ayant fumé), à la recherche d'une cause vasculaire à une hypertension, ou à l'exploration de douleurs abdominales survenant après les repas.",
    course:
      "L'examen se fait allongé, à jeun de préférence pour limiter les gaz digestifs qui gênent la visualisation. Le médecin passe la sonde sur le ventre avec du gel, en demandant parfois de retenir la respiration quelques secondes. Il dure 30 à 40 minutes. Les résultats vous sont donnés en fin de consultation, avec le rythme de surveillance adapté.",
    tips:
      "Un jeûne de 4 à 6 heures est conseillé (vous pouvez boire de l'eau et prendre vos médicaments). Évitez les boissons gazeuses et le chewing-gum la veille et le matin de l'examen, qui favorisent l'accumulation d'air dans l'abdomen.",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-arteriel-membres-inferieurs",
    icon: "artery",
    navTitle: "Écho-doppler artériel des membres inférieurs",
    cardTitle: "Écho-doppler artériel des membres inférieurs",
    cardDesc:
      "L'examen des artères des jambes en cas de douleurs à la marche, de plaie qui cicatrise mal, ou de facteurs de risque cardiovasculaire.",
    question: "Qu'est-ce que l'écho-doppler artériel des membres inférieurs ?",
    intro:
      "Cet examen explore les artères qui irriguent les jambes, du bassin jusqu'aux pieds. Il est essentiel au diagnostic et au suivi de l'artériopathie oblitérante des membres inférieurs (AOMI).",
    whatIsIt:
      "Le médecin visualise les artères des jambes et mesure la circulation du sang à chaque étage. Il repère les rétrécissements ou les obstructions liés aux plaques d'athérome, en précise la localisation et le retentissement. L'examen est souvent complété par la mesure de la pression aux chevilles (indice de pression systolique). Il est indiqué en cas de douleur du mollet à la marche, de crampes, de refroidissement d'un pied, d'une plaie qui ne guérit pas, ou en dépistage chez les patients à risque (tabac, diabète).",
    course:
      "Allongé, les jambes découvertes, vous restez détendu pendant que le médecin parcourt le trajet des artères avec la sonde, de l'aine jusqu'au pied. L'examen dure 30 à 40 minutes, est indolore et sans injection. Le compte rendu, l'interprétation et la conduite à tenir vous sont expliqués immédiatement.",
    tips:
      "Prévoyez une tenue permettant de dégager les deux jambes entièrement. Aucune préparation particulière : mangez et prenez vos traitements habituels. Si la douleur apparaît après une certaine distance de marche, indiquez-la précisément (votre « périmètre de marche »).",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-veineux-membres-inferieurs",
    icon: "vein",
    navTitle: "Écho-doppler veineux des membres inférieurs",
    cardTitle: "Écho-doppler veineux des membres inférieurs",
    cardDesc:
      "L'examen de référence des veines des jambes : recherche de phlébite, bilan de varices ou de jambes lourdes.",
    question: "Qu'est-ce que l'écho-doppler veineux des membres inférieurs ?",
    intro:
      "L'écho-doppler veineux est l'examen incontournable pour explorer les veines des jambes. Indolore et sans injection, il sert aussi bien à confirmer une phlébite en urgence qu'à faire le bilan de varices ou de jambes lourdes.",
    whatIsIt:
      "L'examen étudie les veines profondes et superficielles des jambes. Il permet de rechercher un caillot (thrombose veineuse), d'évaluer le fonctionnement des valvules veineuses, et de cartographier précisément les varices avant une éventuelle prise en charge. Le médecin réalise des manœuvres douces (compression du mollet, mise en position debout) pour analyser la circulation dans les deux sens.",
    course:
      "Une partie de l'examen se fait allongé, une autre debout pour bien évaluer le reflux veineux. Le médecin passe la sonde le long des jambes avec du gel et exerce de légères pressions sur les muscles. L'examen dure 30 à 45 minutes, ne nécessite aucune préparation et n'entraîne aucune douleur.",
    tips:
      "Prévoyez de pouvoir dégager les deux jambes jusqu'à l'aine. Aucune préparation : hydratez-vous normalement, une bonne hydratation facilite l'examen. En cas de suspicion de phlébite, ne différez pas le rendez-vous.",
    sideEffects: null,
  },
  {
    slug: "echo-doppler-penien",
    icon: "doppler",
    navTitle: "Écho-doppler pénien",
    cardTitle: "Écho-doppler pénien",
    cardDesc:
      "L'exploration de la circulation sanguine de la verge, dans le cadre du bilan d'un trouble de l'érection.",
    question: "Qu'est-ce que l'écho-doppler pénien ?",
    intro:
      "L'écho-doppler pénien étudie la circulation artérielle et veineuse de la verge. Il s'inscrit dans le bilan d'une dysfonction érectile, pour en préciser la part vasculaire. C'est un examen médical courant, réalisé dans le respect de votre intimité.",
    whatIsIt:
      "L'examen mesure le flux sanguin dans les artères qui permettent l'érection et vérifie l'absence de fuite veineuse. Il est le plus souvent réalisé après l'injection locale d'un médicament vasodilatateur qui provoque une érection, afin d'analyser la circulation en conditions réelles. Il aide à distinguer une cause artérielle, veineuse ou non vasculaire, et à orienter la prise en charge.",
    course:
      "Après un temps d'explication, le médecin réalise si besoin une micro-injection à la base de la verge, puis effectue les mesures au doppler à plusieurs reprises pendant une vingtaine de minutes. L'examen se déroule dans un cadre confidentiel. Les résultats et les suites vous sont exposés à la fin.",
    tips:
      "Aucune préparation particulière. Prévenez le médecin si vous prenez des anticoagulants ou si vous avez déjà présenté une érection prolongée. Si une injection est réalisée, il est préférable de ne pas conduire juste après l'examen.",
    sideEffects:
      "Après une injection, une érection peut se prolonger quelques heures. Si elle dépasse 3 heures, il est important de contacter rapidement le cabinet ou un service d'urgence : cette situation, rare, se traite facilement lorsqu'elle est prise en charge tôt. De petits bleus au point d'injection sont possibles et sans gravité.",
  },
  {
    slug: "depistage-anevrisme",
    icon: "shield",
    navTitle: "Dépistage des maladies anévrismales",
    cardTitle: "Dépistage et suivi des maladies anévrismales",
    cardDesc:
      "Le repérage précoce d'une dilatation anormale d'une artère (le plus souvent l'aorte abdominale), pour la surveiller avant toute complication.",
    question: "Qu'est-ce qu'un anévrisme ?",
    intro:
      "Un anévrisme est une dilatation localisée et permanente d'une artère, dont la paroi se fragilise. Le plus fréquent touche l'aorte abdominale. Dépisté tôt, il se surveille simplement et se traite avant tout risque.",
    whatIsIt:
      "Un anévrisme se forme le plus souvent sans aucun symptôme : c'est pourquoi le dépistage est essentiel. L'écho-doppler mesure précisément le diamètre de l'artère concernée. En dessous d'un certain seuil, une simple surveillance régulière suffit ; au-delà, un avis chirurgical est demandé pour discuter une intervention préventive. Le dépistage de l'anévrisme de l'aorte abdominale est particulièrement recommandé chez les hommes de 65 à 75 ans ayant fumé, et en cas d'antécédent familial.",
    course:
      "Le dépistage repose sur un écho-doppler abdominal, indolore et sans rayonnement, réalisé au cabinet en une trentaine de minutes. Si un anévrisme est déjà connu, l'examen de suivi mesure son évolution et adapte le rythme de surveillance (généralement annuel, parfois plus rapproché).",
    tips:
      "Venez de préférence à jeun de 4 à 6 heures et évitez les boissons gazeuses la veille, pour une meilleure visualisation. Le contrôle des facteurs de risque - arrêt du tabac en premier lieu, équilibre de la tension artérielle - ralentit l'évolution des anévrismes.",
    sideEffects:
      "Un anévrisme sous surveillance ne doit pas faire renoncer à une activité physique adaptée, mais certaines situations (efforts très intenses, port de charges lourdes) méritent d'être discutées en consultation. Toute douleur brutale du ventre ou du dos chez une personne porteuse d'un anévrisme impose d'appeler les urgences.",
  },
  {
    slug: "phlebites-thrombophilies",
    icon: "clot",
    navTitle: "Phlébites & thrombophilies",
    cardTitle: "Phlébites et thrombophilies (formes héréditaires)",
    cardDesc:
      "La prise en charge des caillots veineux et la recherche des prédispositions, parfois familiales, à la coagulation.",
    question: "Phlébites et thrombophilies : de quoi parle-t-on ?",
    intro:
      "La phlébite (ou thrombose veineuse) est la formation d'un caillot dans une veine. Certaines personnes y sont prédisposées en raison d'une particularité de la coagulation, parfois héréditaire : on parle alors de thrombophilie. Ces situations sont bien connues et se prennent en charge efficacement.",
    whatIsIt:
      "On distingue la phlébite superficielle, généralement bénigne, de la thrombose veineuse profonde, qui nécessite un traitement rapide en raison du risque d'embolie pulmonaire (migration du caillot vers les poumons). Une thrombophilie est une tendance excessive à former des caillots ; elle peut être acquise ou génétique (par exemple mutation du facteur V Leiden, du gène de la prothrombine, ou déficit en inhibiteurs de la coagulation). Un bilan de thrombophilie est discuté au cas par cas : phlébite survenue sans facteur déclenchant, avant 50 ans, récidivante, de localisation inhabituelle, ou antécédents familiaux marqués.",
    course:
      "En cas de suspicion de phlébite, un écho-doppler veineux est réalisé sans délai pour confirmer le diagnostic et localiser le caillot. Un traitement anticoagulant est le plus souvent débuté, associé à une compression. La recherche d'une thrombophilie, lorsqu'elle est indiquée, repose sur une prise de sang réalisée à distance de l'épisode aigu et de l'arrêt des anticoagulants ; ses résultats sont interprétés en consultation, y compris pour le conseil aux proches.",
    tips:
      "Si un traitement anticoagulant vous est prescrit, respectez scrupuleusement la dose et la durée, et signalez tout saignement inhabituel. La marche est généralement encouragée plutôt que l'immobilisation. Lors d'un voyage long, d'une immobilisation ou d'une intervention, rappelez vos antécédents à tout médecin : des mesures de prévention pourront être proposées.",
    sideEffects:
      "Toute suspicion de phlébite profonde - jambe gonflée, douloureuse, chaude - justifie un avis médical rapide, de même qu'un essoufflement ou une douleur thoracique brutale. Ce site ne remplace pas une consultation : en cas de doute, contactez le cabinet ou les services d'urgence sans attendre.",
  },
];

export function getPathologyBySlug(slug) {
  return pathologies.find((p) => p.slug === slug);
}
