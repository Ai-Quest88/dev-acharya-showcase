---
description: Add a new project card to the portfolio's Projects section
argument-hint: <repo-url-or-name> [--featured]
---

Add a project to `src/components/Projects.tsx` for: $ARGUMENTS

1. Fetch the repo (gh api) to ground the card in reality: name, description, primary language, homepage. Never invent capabilities the repo doesn't show.
2. Write a 1–2 sentence description in the site's voice (first person, concrete, no buzzword padding). If it's a fork, say "(fork)" in the title and credit the upstream purpose.
3. Choose 4–6 techStack tags from what the repo actually uses.
4. `--featured`: add to `featuredProjects` with an `image` and alternate the `reverse` flag; otherwise append to `otherProjects`.
5. Verify the GitHub URL (and demo URL if any) returns 200.
6. Run `npm run build`, then show the card render in the dev preview for approval before committing.
