# dev-acharya-showcase

Personal portfolio for Devesh Acharya — AI Application Engineer & Director of Quality Engineering. Live at https://devesh.aiqe.info (Firebase Hosting site `devesh-aiqe` in GCP project `finsight-dd601`, default URL https://devesh-aiqe.web.app). Every push to `main` deploys via `.github/workflows/deploy.yml`, using the hosting-only service account `github-portfolio-deploy` (repo secret `FIREBASE_SERVICE_ACCOUNT`). Lovable is no longer the host.

## Stack

- Vite + React 18 + TypeScript, Tailwind CSS, shadcn/ui components
- Originally generated with Lovable; evolved and maintained with Claude Code

## Commands

```bash
npm run dev      # dev server on port 8080
npm run build    # production build (run before every commit)
npm run lint     # eslint
```

## Structure

- `src/pages/Index.tsx` — single-page composition; section order: Hero → About → Certifications → Experience → Projects → Skills → Contact. Sets `document.title`.
- `src/components/*.tsx` — one component per section. Content lives inline in each component as typed arrays (`jobs`, `skillCategories`, `featuredProjects`, `certifications`).
- `index.html` — static `<title>`/meta fallback; keep in sync with `Index.tsx`'s `document.title`.

## Content rules (important)

- **Single identity**: the current role title is "Director of Quality Engineering" at Eftsure; the headline brand is "AI Application Engineer & Director of Quality Engineering". Any title change must be applied consistently across: `index.html`, `Index.tsx` (document.title), `Hero.tsx`, `About.tsx`, `Experience.tsx` (current job), and `src/pages/Resume.tsx`.
- **Résumé parity**: employment dates, titles, education and certifications must match the canonical résumé. Run `/consistency-check` after content edits.
- **No fictional projects**: every project card must link to a real, reachable repo or live URL. Forks are labelled "(fork)".
- Section numbers (01.–06.) are hardcoded in each component's heading; renumber all when inserting a section.
