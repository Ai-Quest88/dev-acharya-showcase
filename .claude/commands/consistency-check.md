---
description: Verify identity/content consistency across the portfolio before committing
---

Check the portfolio for internal consistency and report any mismatches:

1. **Title consistency** — the same current-role title must appear in:
   - `index.html` `<title>` and og:title/description
   - `src/pages/Index.tsx` `document.title`
   - `src/components/Hero.tsx` intro paragraph
   - `src/components/About.tsx` first paragraph
   - `src/components/Experience.tsx` first (current) job entry
   - `src/pages/Resume.tsx` header and summary
2. **Date integrity** — employment periods in `Experience.tsx` must be contiguous (no gaps or overlaps between consecutive roles) and match `Resume.tsx`.
3. **Link liveness** — every `github:` and `demo:` URL in `Projects.tsx` must return HTTP 200 (use curl). Flag any fictional or dead links.
4. **Section numbering** — headings 01.–06. must be sequential in page order (Hero has none; About 01, Certifications 02, Experience 03, Projects 04, Skills 05, Contact 06) and match the Header nav order.
5. Run `npm run build` and confirm it passes.

Output a pass/fail table per check with the exact file:line of any mismatch, then fix only what the user approves.
