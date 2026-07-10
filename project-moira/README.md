# Moira

> *An immersive tarot reading experience — elegant, restrained, and deeply intentional.*

Moira is a beautifully crafted tarot web app that provides daily single-card draws and curated multi-card spreads using a traditional 78-card Rider-Waite-Smith deck. Every interpretation is hand-crafted — no AI generation, no accounts, no clutter. Just a quiet, meaningful reading experience.

---

## ✨ Features

- **Daily Draw** — A single card pulled fresh each day for a moment of reflection
- **10 Curated Spreads** — From a simple single card to the full 10-card Celtic Cross
- **78-Card Deck** — Full Rider-Waite-Smith deck with all Major and Minor Arcana
- **156 Hand-Crafted Interpretations** — Upright and reversed meanings written with warmth and depth
- **Card Library** — Browse, search, and study all 78 cards and their meanings
- **Export Ready** — Save memorable readings as PNG or PDF keepsakes
- **Ephemeral by Default** — Nothing is stored unless you choose to save it
- **Fully Accessible** — WCAG AA compliant, keyboard navigable, reduced-motion support

---

## 📖 Spreads

| Spread | Cards | Purpose |
|---|---|---|
| Single Card | 1 | Quick daily insight |
| Yes / No | 1 | Direct answer to a question |
| Past · Present · Future | 3 | Narrative arc reading |
| Mind · Body · Spirit | 3 | Holistic self-check |
| Relationship | 5 | Two-person dynamic |
| Career Path | 5 | Professional guidance |
| Horseshoe | 7 | Situation & outcome overview |
| Star Guide | 6 | Life path & purpose |
| New Moon | 7 | Intention setting |
| Celtic Cross | 10 | Deep, comprehensive reading |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | TypeScript |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 |
| Build | Vite 6 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/Acerasien/project-moira.git
cd project-moira/project-moira

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Start local development server
npm run build     # Compile TypeScript + bundle for production
npm run preview   # Preview the production build locally
```

---

## 🎨 Design System

Moira's aesthetic is inspired by **"The Private Library"** — a quiet, wood-paneled reading room at dusk. The interface draws from Notion's clean hierarchy, Arc Browser's refined motion, and Spotify's editorial depth.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Deep Indigo | `#0B1020` | Primary canvas background |
| Elevated Navy | `#141B2D` | Cards, panels, modals |
| Border Slate | `#2A3550` | Dividers, borders |
| Cream Text | `#F5F1E8` | Primary body text |
| Muted Lavender-Gray | `#A6AFC3` | Secondary text, labels |
| Warm Gold | `#C8A96A` | Sole accent — ≤10% of any screen |

### Typography

- **Display** — Cormorant Garamond (serif) — for card names, headlines, ritual moments
- **Body** — Inter (sans-serif) — for all interpretation text and UI copy

---

## 📁 Project Structure

```
project-moira/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── daily-draw/      # Daily draw page components
│   │   ├── decorative/      # Atmospheric / visual elements
│   │   ├── home/            # Landing page sections
│   │   ├── spread-browser/  # Spread selection UI
│   │   └── spread-reading/  # Active spread reading UI
│   ├── data/
│   │   ├── cards/
│   │   │   ├── major/       # 22 Major Arcana card data
│   │   │   └── minor/       # 56 Minor Arcana (Cups, Wands, Swords, Pentacles)
│   │   └── spreads/         # Spread definitions and positions
│   ├── pages/               # Route-level page components
│   ├── services/            # Card and spread logic
│   ├── App.tsx              # Root component & routing
│   └── main.tsx             # Application entry point
├── docs/                    # Project documentation
├── DESIGN.md                # Design system reference
├── PRODUCT.md               # Product vision & principles
└── package.json
```

---

## 📐 Design Principles

1. **The card is the hero.** UI recedes until needed.
2. **Depth without intimidation.** Beginners feel welcomed; enthusiasts find substance.
3. **Stillness over noise.** Every element earns its place.
4. **Warmth through craft.** Hand-written interpretations, human care in design.
5. **Moments, not metrics.** Readings are experiences to savor, not data to track.

---

## ♿ Accessibility

- WCAG AA contrast compliance across all text and interactive elements
- `prefers-reduced-motion` support on all animations
- Full keyboard navigation
- Color is never the sole differentiator — suits use icons and labels alongside color
- Body text ≥ 16px with comfortable line length (65–75ch)

---

## 📄 License

This project is private. All card interpretations are original hand-crafted content.
