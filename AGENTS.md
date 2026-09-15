## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Contraintes de contenu (ne pas modifier sans demande explicite)

- Le message de sécurité « En cas d'urgence vitale, contactez le 15 (SAMU) ou
  le 112, plutôt que le cabinet. » (`src/components/EmergencyNotice.astro`)
  doit rester présent sur la page Contact (`src/pages/contact.astro`) et dans
  le pied de page (`src/components/Footer.astro`). Ne jamais le supprimer, le
  reformuler ou le rendre moins visible, y compris lors de refontes futures.
- La mention d'équipement du cabinet (`site.equipment` dans `src/data/site.js`)
  doit rester factuelle : pas de superlatif ni d'argument commercial ("matériel
  de pointe", "à la pointe de la technologie", etc.).
- La note sur les créneaux d'urgence (`site.urgentSlotsNote`) doit rester
  formulée de façon neutre et informative, sans incitation ("réservez vite"…)
  ni mise en avant visuelle particulière (pas de badge, pas de couleur accent).
