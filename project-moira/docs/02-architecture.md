---
doc_id: "02"
title: "Architecture"
owner: "Architect"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 02 — Architecture

## High-level diagram
Moira is a client-side SPA with no backend. All data is static TypeScript/JSON loaded at build time.

```
Browser
├── React App (Vite-built SPA)
│   ├── Pages (routes via React Router)
│   ├── Components (CardFace, SpreadBoard, Interpretation, etc.)
│   ├── Services (cardService, spreadService, exportService)
│   ├── Context (ReadingContext — current reading state)
│   └── Data (static card/spread definitions)
└── VPS (nginx serving static files)
```

## Components
| Component | Responsibility | Owning agent |
|---|---|---|
| `data/cards/` | 78 card definitions with upright/reversed interpretations | Frontend |
| `data/spreads/` | 10 spread definitions with positional layouts | Frontend |
| `services/cardService` | Card lookup, shuffle, draw logic | Frontend |
| `services/spreadService` | Spread lookup, category filtering | Frontend |
| `services/exportService` | PNG (html2canvas) and PDF (jsPDF) export | Frontend |
| `context/ReadingContext` | Current reading session state management | Frontend |
| `components/cards/` | CardFace, CardReveal, CardImage | Frontend |
| `components/spread/` | SpreadBoard, CardSlot | Frontend |
| `components/export/` | ExportModal | Frontend |
| `pages/` | Route-level page components | Frontend |
| nginx | Static file serving on VPS | DevOps |

## Data flow
1. At build time, Vite bundles all card and spread data as static JS modules.
2. User navigates → React Router renders the matching page component.
3. Page calls service layer (e.g., `cardService.shuffle()`, `spreadService.getSpread()`) to prepare data.
4. `ReadingContext` holds the session state: which spread, drawn cards, revealed state.
5. Components consume context and render cards, interpretations, and animations.
6. Export flow: `exportService` captures DOM → PNG via `html2canvas` or PDF via `jsPDF` → browser download.
7. No server requests at runtime (except initial page load from nginx).

## Key architectural decisions
- **Decision:** Static SPA with no backend
  **Why:** No user accounts, no real-time data — a database adds complexity without value. Static files are simpler, faster, and cheaper to deploy.
  **Date:** 2026-07-09
  **Alternatives considered:** Next.js with SSR, plain HTML/CSS

- **Decision:** Per-card TypeScript files (Approach B — structured content layer)
  **Why:** 156 interpretations (78 cards × 2 orientations) in one file is unmaintainable. Individual card files make writing, editing, and testing manageable.
  **Date:** 2026-07-09
  **Alternatives considered:** Monolithic data file, JSON/Markdown content pipeline

- **Decision:** Rider-Waite-Smith public domain deck
  **Why:** Most recognizable tarot deck, legally safe (public domain in US), no licensing costs.
  **Date:** 2026-07-09
  **Alternatives considered:** Custom art, Marseille deck

## Constraints
- **No runtime server** — everything must work as static files served by nginx
- **No AI/LLM dependency** — all interpretation content is hand-crafted
- **Fully responsive** — must work on mobile (320px) through desktop (1440px+)
- **Client-side only** — export generation happens entirely in the browser
- **Card images** — 78 images loaded as static assets; lazy-loading required for performance
