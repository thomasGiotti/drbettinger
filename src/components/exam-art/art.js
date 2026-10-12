// Briques graphiques partagées des illustrations d'examens.
// Valeurs reprises à l'identique de VascularArt.astro (variante "doppler",
// illustration du hero de l'accueil) pour que les deux familles se confondent.
// Correspondances avec le thème (global.css) : accent = --color-accent,
// bgMid = --color-navy, bgDeep = --color-navy-deep.

export const palette = {
  bgTop: "#16456B",
  bgMid: "#123A5C",
  bgDeep: "#0B2740",
  line: "#EAF1F7",
  accent: "#F0D8BC",
};

// Cadre commun : bandeau 21:9 identique à l'ancien en-tête des pages d'examen.
export const VIEW_W = 1050;
export const VIEW_H = 450;

// Tracés du cadre d'écho-doppler (rectangle crème + ligne de base pointillée).
// Le type de courbe distingue les familles d'examens sans changer de style.
export function tracePath(kind, x, y, w, h) {
  const base = y + h * 0.6;
  const top = y + 12;
  const start = x + 8;
  const end = x + w - 8;
  let d = `M${start} ${base}`;

  if (kind === "arterial") {
    // Pics fins et réguliers, comme le tracé du hero.
    const heights = [1, 0.62, 0.9, 0.7, 1, 0.58, 0.85];
    let px = start + 24;
    let i = 0;
    while (px + 30 < end) {
      const peak = base - (base - top) * heights[i % heights.length];
      d += ` L${px} ${base} L${px + 11} ${peak} L${px + 24} ${base}`;
      px += 46;
      i++;
    }
    d += ` L${end} ${base}`;
  } else if (kind === "venous") {
    // Ondulation lente et souple (flux phasique, modulé par la respiration).
    const amp = base - top;
    const pts = [];
    for (let px = start; px <= end; px += 4) {
      const t = px - start;
      const level = 0.5 + 0.4 * Math.sin((2 * Math.PI * t) / 64 - Math.PI / 2);
      const breath = 0.7 + 0.3 * Math.sin((2 * Math.PI * t) / 230);
      pts.push(`${px} ${(base - amp * level * breath + amp * 0.1).toFixed(1)}`);
    }
    d = `M${pts.join(" L")}`;
  } else if (kind === "pressure") {
    // Paliers successifs puis relâchement (gonflage séquentiel des chambres).
    const step = (base - top) / 3;
    let px = start + 10;
    while (px + 90 < end) {
      d += ` L${px} ${base} L${px + 4} ${base - step} L${px + 22} ${base - step}`;
      d += ` L${px + 26} ${base - 2 * step} L${px + 44} ${base - 2 * step}`;
      d += ` L${px + 48} ${top} L${px + 64} ${top} L${px + 72} ${base}`;
      px += 92;
    }
    d += ` L${end} ${base}`;
  }
  return d;
}
