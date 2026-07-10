---
doc_id: "14"
title: "Project Memory"
owner: "All"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 14 — Project Memory

## Purpose
A running log of decisions, gotchas, and context that isn't obvious from the code or other docs alone. This is what keeps agents from re-litigating settled questions or repeating past mistakes.

## How to use this doc
- Append, don't rewrite history. Add new entries at the top of the relevant section with a date.
- Keep entries short: what happened, why it matters, where to look for more detail.
- If an entry becomes irrelevant (e.g. a rejected approach that's now moot), move it to "Archived" rather than deleting it.

## Decisions log
- **2026-07-09** — **Tech stack: React + Vite + TypeScript + Tailwind.** Chosen for interactivity (card animations), dev speed, and static VPS deploy simplicity. Alternative: Vue/Nuxt, plain HTML.
- **2026-07-09** — **Static data, no backend.** No user accounts or real-time data make a database unnecessary overhead. Alternative: SQLite, PostgreSQL.
- **2026-07-09** — **Approach B: structured content layer.** Per-card TypeScript files for 156 interpretations. Avoids monolithic data files. Alternative: flat SPA, Markdown pipeline.
- **2026-07-09** — **Rider-Waite-Smith public domain deck.** Legally safe, universally recognized. Can swap artwork later. Alternative: custom art, Marseille deck.
- **2026-07-09** — **10 spreads.** Covers beginner to advanced across general, love, career, and reflection categories. Alternative: fewer spreads.
- **2026-07-09** — **Blended interpretation tone.** Educational foundation + warm/poetic delivery. Serves both beginners and enthusiasts. Alternative: mystical-only, clinical-only.
- **2026-07-09** — **Ephemeral readings + PNG/PDF export.** No forced persistence; users choose what to keep. Alternative: localStorage history, no export.
- **2026-07-09** — **No AI/LLM.** All interpretations are hand-crafted for consistent quality. User preference.
- **2026-07-09** — **Impeccable skill for UI/UX design.** Chosen over ui-ux-pro-max for the visual design phase. User preference.

## Known gotchas / non-obvious constraints
- `html2canvas` struggles with 3D CSS transforms — test card flip + export early
- Safari has known issues with `backface-visibility` in card flip animations — provide fallback
- 78 card images at full resolution will be large — implement lazy loading and consider WebP
- Rider-Waite-Smith is public domain in the US but copyright status varies by country — verify if deploying internationally
- Card interpretation content is the largest manual effort (156 entries) — use parallel sub-agents to write in batches

## Rejected approaches (and why)
- **Next.js SSR:** Overkill for a content app with no backend. Adds deployment complexity (Node process).
- **Database (SQLite/PostgreSQL):** Unnecessary — card data is static and small. Adds infrastructure and migration burden.
- **Monolithic data file:** 156 interpretations in one file would be unmaintainable.
- **AI-generated interpretations:** User explicitly does not want AI content. Quality and tone consistency are priorities.
- **User accounts/authentication:** Adds backend complexity for no clear value at this scale.
- **Desktop-only design:** Tarot use cases span both mobile (quick draw) and desktop (deep reading).

## Archived
{{entries no longer relevant}}
