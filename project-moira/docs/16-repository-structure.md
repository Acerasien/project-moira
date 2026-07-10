---
doc_id: "16"
title: "Repository Structure"
owner: "All"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 16 — Repository Structure

## Top-level layout
```
project-moira/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── public/
│   └── cards/                    # 78 Rider-Waite-Smith card images
│       ├── major/                # 00-the-fool.jpg through 21-the-world.jpg
│       └── minor/                # Organized by suit
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── data/
│   │   ├── cards/                # 78 TypeScript card definition files
│   │   ├── spreads/              # 10 spread definition files
│   │   └── index.ts              # Barrel exports
│   ├── services/
│   │   ├── cardService.ts
│   │   ├── spreadService.ts
│   │   └── exportService.ts
│   ├── context/
│   │   └── ReadingContext.tsx
│   ├── components/
│   │   ├── layout/               # Nav, Layout
│   │   ├── cards/                # CardFace, CardReveal, CardImage
│   │   ├── spread/               # SpreadBoard, CardSlot
│   │   ├── reading/              # ShuffleAnimation, Interpretation, Synthesis
│   │   ├── export/               # ExportModal
│   │   └── ui/                   # Shared primitives (Button, Modal, etc.)
│   ├── pages/                    # One file per route
│   └── hooks/                    # useReading, useCardAnimation
└── docs/                         # Project documentation (21 files)
```

## Where things live
| Path | Contents | Owning agent |
|---|---|---|
| `src/data/cards/` | Card definitions with interpretations | Frontend |
| `src/data/spreads/` | Spread definitions with positional layouts | Frontend |
| `src/services/` | Business logic (card ops, spread ops, export) | Frontend |
| `src/context/` | React context for reading state | Frontend |
| `src/components/` | Reusable UI components | Frontend |
| `src/pages/` | Route-level page components | Frontend |
| `public/cards/` | Card artwork images | Frontend |
| `docs/` | Project documentation | All |

## Naming conventions
- **Files:** kebab-case (`card-service.ts`, `daily-draw-page.tsx`)
- **Components:** PascalCase (`CardFace`, `SpreadBoard`)
- **Hooks:** camelCase prefixed with `use` (`useReading`, `useCardAnimation`)
- **Card data files:** kebab-case matching card ID (`the-fool.ts`, `ace-of-cups.ts`)
- **Spread data files:** kebab-case matching spread ID (`celtic-cross.ts`)

## What NOT to put where
- Do not put card images in `src/` — they belong in `public/cards/`
- Do not put business logic in page components — extract to services
- Do not put interpretation content inline in components — it belongs in `data/cards/`
- Do not mix spread definitions with card definitions — they are separate domains
