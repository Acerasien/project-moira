---
doc_id: "17"
title: "Coding Standard"
owner: "Backend, Frontend"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 17 — Coding Standard

## Languages / frameworks in use
- **TypeScript** (strict mode) — all source code
- **React 18+** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **React Router v6** — client-side routing
- **html2canvas** — PNG export
- **jsPDF** — PDF export

## Style rules
- **Formatting:** Prettier with default config (2-space indent, single quotes, trailing commas)
- **Linting:** ESLint with `@typescript-eslint` and `eslint-plugin-react-hooks`
- **Naming:** See `16-repository-structure.md` for file/component naming conventions
- **Imports:** Group and order: React → third-party → local (data → services → components → pages)
- **Types:** Prefer `interface` over `type` for object shapes; use `type` for unions and aliases
- **Exports:** Named exports for components and services; barrel exports in `index.ts` files

## Patterns to follow
- **State management:** React Context + `useReducer` for reading state; local `useState` for UI-only state
- **Service layer:** All data access goes through service functions, never directly import data in components
- **Component composition:** Prefer composition over configuration; extract reusable pieces to `components/ui/`
- **Error boundaries:** Wrap each page in an error boundary; show a graceful fallback, not a white screen
- **Loading states:** Every async or animation-driven component must handle loading, empty, and error states
- **Tailwind usage:** Use utility classes directly in JSX; extract to `@apply` only for repeated patterns (3+ uses)
- **Animations:** Use CSS transitions/animations via Tailwind config; reserve Framer Motion only if Tailwind can't handle it

## Patterns to avoid
- ❌ `any` type — always define explicit types
- ❌ Direct DOM manipulation — use React state and refs
- ❌ Inline styles — use Tailwind classes
- ❌ Prop drilling beyond 2 levels — use context or composition
- ❌ `useEffect` for derived state — compute it during render instead
- ❌ Large component files (>200 lines) — split into smaller components
- ❌ Magic strings for card/spread IDs — use the typed data from `data/`

## Review checklist
- [ ] Follows naming/style conventions
- [ ] No hardcoded secrets/config
- [ ] Errors handled per project pattern
- [ ] Tests included per `18-testing-standard.md`
- [ ] No unexplained deviation from `02-architecture.md`
