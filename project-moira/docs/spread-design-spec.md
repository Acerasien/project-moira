# Design Spec: Moira — Spread Browser & Spread Reading

> Generated from `$impeccable shape` — 2026-07-09
> Confirmed design brief. This is the implementation blueprint.

---

## 1. Visual Language

**Creative North Star:** "The Private Library" — carries forward from Home and Daily Draw.

All design tokens, colors, typography, spacing, and motion tokens carry forward from the Home page design spec. No new tokens are introduced. The Spread Browser inherits the curated, calm aesthetic of browsing chapters in a book. The Spread Reading inherits the card-as-hero focus of the Daily Draw, extended to a multi-card positional layout.

---

## 2. Design Tokens

All tokens from Home page carry forward. New usage roles:

| Token | Spread Browser usage | Spread Reading usage |
|---|---|---|
| `--color-bg` | Page canvas | Page canvas |
| `--color-surface` | Spread card backgrounds | Card slot backgrounds (face-down) |
| `--color-border` | Card borders, filter pill borders | Position slot borders |
| `--color-text` | Spread names, descriptions | Card names, interpretations, position labels |
| `--color-text-muted` | Subtitle, metadata, difficulty badges | Synthesis text, secondary labels |
| `--color-accent` | Active filter pill border, hover states, gold accents | Shuffle button, selected card glow, export button |

---

## 3. Spread Data Structure

### 3.1 Spread Interface

```typescript
interface SpreadPosition {
  index: number;
  label: string;
  description: string;
  row: number;
  col: number;
}

interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  category: "general" | "love" | "career" | "reflection";
  difficulty: "beginner" | "intermediate" | "advanced";
  positions: SpreadPosition[];
  synthesis: string;
}
```

### 3.2 The 10 Spreads

| # | ID | Name | Cards | Category | Difficulty | Layout |
|---|---|---|---|---|---|---|
| 1 | single-card | Single Card | 1 | reflection | beginner | 1 card centered |
| 2 | past-present-future | Past / Present / Future | 3 | general | beginner | 3 cards in a row |
| 3 | mind-body-spirit | Mind / Body / Spirit | 3 | reflection | beginner | 3 cards vertical |
| 4 | celtic-cross | Celtic Cross | 10 | general | advanced | Cross pattern (see layout map) |
| 5 | horseshoe | Horseshoe | 7 | general | intermediate | Arc of 7 cards |
| 6 | relationship | Relationship | 5 | love | intermediate | 2 columns (self + other) + bridge |
| 7 | career-path | Career Path | 5 | career | intermediate | Stepping stones layout |
| 8 | yes-no | Yes / No | 3 | general | beginner | 3 cards horizontal |
| 9 | star-guide | The Star Guide | 5 | reflection | intermediate | Star/pentagram points |
| 10 | new-moon | New Moon / Full Moon | 4 | reflection | intermediate | 2 pairs (moon phases) |

---

## 4. Component Library — Spread Browser

### 4.1 SpreadBrowserPage

The page orchestrator for `/spreads`.

**Specs:**
- Page background: `--color-bg`
- Content centered, max-width 800px
- Heading: "Choose a Spread" in `display-lg`, serif
- Subtitle: "A question deserves the right framework." in `body`, `--color-text-muted`
- Filter pills below subtitle
- Spread grid below filters
- Section entrance: staggered fade-in (300ms per section, 150ms stagger)

### 4.2 FilterPills

Horizontal row of category filter buttons.

**Specs:**
- Pills: "All", "General", "Love", "Career", "Reflection"
- Layout: `display: flex; gap: 8px; justify-content: center; flex-wrap: wrap`
- Default (inactive): `--color-border` border, `--color-text-muted` text, transparent bg
- Active: `--color-accent` border (1px), `--color-accent` text at 80% opacity, transparent bg
- Hover (inactive): border shifts to `--color-accent` at 40%
- Padding: `6px 16px`
- Border-radius: `--radius-full` (pill shape)
- Font: `label` token, uppercase
- Transition: 200ms `var(--ease-out)`
- Only one filter active at a time. "All" is default.

### 4.3 SpreadCard

Individual spread card in the grid.

**Specs:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Border-radius: `--radius-md` (8px)
- Padding: `--space-lg` (32px)
- Cursor: pointer
- Role: link/button navigating to `/spreads/:id`

**Internal layout:**

```
┌──────────────────────────────────┐
│                                  │
│  Celtic Cross                    │  ← display-lg, serif, --color-text
│                                  │
│  10 cards  ·  Advanced           │  ← label, --color-text-muted
│                                  │
│  The most comprehensive spread   │  ← body, --color-text-muted
│  for deep exploration of any     │     max 2 lines, line-clamp
│  question or situation.          │
│                                  │
│  [General]                       │  ← Category tag (small pill, muted)
│                                  │
└──────────────────────────────────┘
```

**States:**
- **Default:** As above
- **Hover:** `transform: translateY(-2px)`, border shifts to `--color-accent` at 35%, `box-shadow: 0 4px 12px rgba(0,0,0,0.2)`, transition 200ms
- **Focus-visible:** Gold focus ring (2px, 4px offset, pill)

### 4.4 SpreadGrid

Responsive grid container.

**Specs:**
- `display: grid`
- `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`
- `gap: --space-lg` (32px)
- `max-width: 800px`, centered
- On mobile (<640px): `grid-template-columns: 1fr`, cards full width

### 4.5 Empty Filter State

When a filter yields zero matches:

```
┌──────────────────────────────────┐
│                                  │
│     No spreads match this        │  ← body, --color-text-muted
│     filter. Try another          │
│     category.                    │
│                                  │
└──────────────────────────────────┘
```

---

## 5. Component Library — Spread Reading

### 5.1 SpreadReadingPage

The page orchestrator for `/spreads/:id`.

**State machine:**

```
arrival ──(auto)──▶ shuffling ──(done/skip)──▶ dealing ──(done)──▶ ready
                                                                      │
                                                                      ▼
                                              complete ◀──(all revealed)──▶ revealing
```

**Phases:**

| Phase | What happens |
|---|---|
| `arrival` | Positional layout renders with empty slots. Position labels visible. "Skip Shuffle" button. |
| `shuffling` | Card shuffle animation at center. "Skip" button visible. Auto-completes in 2-3s. |
| `dealing` | Cards slide from center to positions one by one (200ms per card, 100ms stagger). |
| `ready` | All positions filled with face-down cards. User can tap any card. "Reshuffle" button available. |
| `revealing` | A card has been tapped — 3D flip (500ms). Interpretation appears below layout. |
| `complete` | All cards revealed. Synthesis appears. Export button appears. |

### 5.2 TopBar

Minimal top navigation bar.

**Specs:**
- Left: "← Spreads" back link — `label` token, `--color-text-muted`, hover → `--color-text`
- Center: Spread name — `display-lg`, serif, `--color-text`
- Right: Empty (balance)
- Padding: `py-lg px-lg`
- Background: transparent (inherits page bg)
- No border

### 5.3 PositionalLayout

The core spatial component. Renders spread positions as a CSS Grid based on the spread's position coordinates.

**Specs:**
- Each spread defines its positions with `{ row, col }` coordinates
- The grid is auto-sized: `grid-template-rows` and `grid-template-columns` are derived from the max row/col values
- Gap: `--space-lg` (32px) between positions
- Centered on the page
- Max container width: 700px

**Layout maps for each spread:**

**Celtic Cross (10 cards):**
```
        col 0    col 1    col 2    col 3
row 0                    [3]
row 1                             [10]
row 2           [1]               [2]
row 3   [6]              [4]      [5]
row 4                    [9]
row 5           [7]               [8]
```

**Past/Present/Future (3 cards):**
```
        col 0    col 1    col 2
row 0   [1]      [2]      [3]
```

**Mind/Body/Spirit (3 cards):**
```
        col 0
row 0   [1]
row 1   [2]
row 2   [3]
```

**Horseshoe (7 cards):**
```
        col 0    col 1    col 2    col 3    col 4    col 5    col 6
row 0   [1]      [2]      [3]      [4]      [5]      [6]      [7]
```

**Relationship (5 cards):**
```
        col 0    col 1    col 2
row 0   [1]               [2]
row 1                    [3]
row 2   [4]               [5]
```

**Career Path (5 cards):**
```
        col 0
row 0   [1]
row 1   [2]
row 2   [3]
row 3   [4]
row 4   [5]
```

**Yes/No (3 cards):**
```
        col 0    col 1    col 2
row 0   [1]      [2]      [3]
```

**Single Card (1 card):**
```
        col 0
row 0   [1]
```

**Star Guide (5 cards):**
```
                 col 2
row 0            [1]
row 1   [2]              [3]
row 2            [4]
row 3            [5]
```

**New Moon / Full Moon (4 cards):**
```
        col 0    col 1
row 0   [1]      [2]
row 1   [3]      [4]
```

### 5.4 CardSlot

Individual position in the spread layout. Renders as either:
- **Empty:** A dashed-border placeholder with the position label visible
- **Face-down:** A miniature card back with the position label above
- **Face-up:** The revealed card image with the position label above

**Specs:**

| State | Visual |
|---|---|
| **Empty** | Dashed border (`--color-border`, 1px, dash 4 4), position label centered inside, `--color-text-muted`, `label` token. Background: transparent. |
| **Face-down** | Card back image (custom Moira SVG, scaled down). Position label above (outside the card). Subtle gold rim on hover. |
| **Face-up** | Card face image. Position label above. No hover effect (already revealed). |

**Dimensions:**
- Card slot: `clamp(80px, 18vw, 140px)` width, aspect-ratio `2.5/3.5`
- Position label: `label` token, `--color-text-muted`, centered above slot, `margin-bottom: 4px`

**Interaction (face-down only):**
- **Hover:** Card lifts 3px, gold rim light (`box-shadow: 0 0 12px rgba(200, 169, 106, 0.1)`)
- **Click:** Triggers card reveal (3D flip, 500ms)
- **Keyboard:** Tab to slot, Enter/Space to reveal
- **Focus-visible:** Gold outline around the slot
- **After reveal:** No longer interactive (card is face-up)

### 5.5 ShuffleAnimation

Cards shuffling at the center of the layout before dealing.

**Specs:**
- 5-7 card backs rapidly swapping positions at center
- CSS animation: cards translate and swap z-indices
- Duration: 2-3 seconds, auto-completes
- "Skip" button visible during shuffle: `--color-text-muted`, hover → `--color-text`
- After shuffle completes (or is skipped), dealing begins automatically
- Skipped entirely if `prefers-reduced-motion`

### 5.6 DealAnimation

Cards sliding from center to their positions.

**Specs:**
- Each card starts at center, animates to its grid position
- `transform: translate()` from center to target
- Duration: 200ms per card, 100ms stagger between cards
- Easing: `var(--ease-out)`
- After all cards are dealt, position labels fade out
- Skipped if `prefers-reduced-motion` (cards appear instantly in position)

### 5.7 CardReveal

3D flip animation for revealing a card in the spread.

**Specs:**
- Same 3D CSS transform technique as Daily Draw
- Duration: 500ms (faster than Daily Draw's 700ms — spreads have multiple cards, speed matters)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)
- At 90°: card back swaps to card face
- After flip: card face visible, position label remains above
- No stillness pause (unlike Daily Draw — user is in a flow)
- If `prefers-reduced-motion`: crossfade (300ms opacity)

### 5.8 InterpretationPanel

Shows the interpretation for the currently selected/revealed card, blended with its position meaning.

**Specs:**

```
┌──────────────────────────────────────┐
│                                      │
│  The Fool  ·  Past Position          │  ← display-lg (card name) + label (position)
│                                      │
│  A beginning you once made without   │  ← body, --color-text
│  hesitation. The Fool in the Past    │     Blended: card meaning + position context
│  speaks to a leap that shaped who    │
│  you are now — a moment of trust     │
│  that set everything in motion.      │
│                                      │
│  Keywords: Beginnings · Innocence    │  ← label, --color-text-muted
│                                      │
└──────────────────────────────────────┘
```

**Content structure:**
1. Card Name + "·" + Position Label — `display-lg` + `label`
2. Blended interpretation — `body`, `--color-text`
3. Keywords — `label`, `--color-text-muted`

**Behavior:**
- Appears below the positional layout when a card is revealed
- Fades in over 300ms
- `margin-top: 48px`
- Max-width: 560px, centered
- Each new card reveal replaces the previous interpretation (not stacked)
- Transition: old interpretation fades out (150ms), new fades in (300ms)

### 5.9 Synthesis

Final summary that ties the reading together. Appears when all cards are revealed.

**Specs:**
- Heading: "Synthesis" — `display-lg`, serif, `--color-text`
- Body: Pre-written paragraph per spread — `body`, `--color-text`
- Appears above the InterpretationPanel when all cards are face-up
- Fades in over 300ms
- Each spread has a unique synthesis paragraph in its data definition

### 5.10 ActionBar

Post-reading actions. Same pattern as Daily Draw but adapted.

**Specs:**
- "Export Reading" — primary button (gold accent border)
- "New Reading" — secondary (navigates to `/spreads`)
- "Return Home" — tertiary (navigates to `/`)
- Appears after synthesis
- Layout: primary centered above, two secondaries side-by-side below
- Same button specs as Daily Draw ActionBar

---

## 6. Layout System

### 6.1 Spread Browser

```
┌──────────────────────────────────────┐
│  padding: 128px top                  │
│                                      │
│        Choose a Spread               │  ← centered, display-lg
│   A question deserves the right      │  ← centered, body, muted
│          framework.                  │
│                                      │
│   [All] [General] [Love] [Career]    │  ← centered filter pills
│        [Reflection]                  │
│                                      │
│   ┌──────────┐  ┌──────────┐         │
│   │          │  │          │         │  ← auto-fill grid
│   └──────────┘  └──────────┘         │
│   ┌──────────┐  ┌──────────┐         │
│   │          │  │          │         │
│   └──────────┘  └──────────┘         │
│                                      │
│  padding: 128px bottom               │
└──────────────────────────────────────┘
```

### 6.2 Spread Reading

```
┌──────────────────────────────────────┐
│  ← Spreads        Celtic Cross       │  ← TopBar
├──────────────────────────────────────┤
│                                      │
│     [positional grid layout]         │  ← Centered, flex column
│                                      │
│   ┌──┐          ┌──┐                 │
│   │  │          │  │                 │
│   └──┘          └──┘                 │
│        ┌──┐  ┌──┐                    │
│        │  │  │  │                    │
│        └──┘  └──┘                    │
│                                      │
│        [Shuffle / Reshuffle]         │  ← Phased actions
│                                      │
│   ┌──────────────────────────┐       │
│   │   Interpretation Panel    │       │  ← Below layout
│   └──────────────────────────┘       │
│                                      │
│   ┌──────────────────────────┐       │
│   │   Synthesis              │       │  ← After all revealed
│   └──────────────────────────┘       │
│                                      │
│   [Export Reading]                   │  ← Post-reading
│                                      │
└──────────────────────────────────────┘
```

Page scrolls naturally if content exceeds viewport. The positional layout stays visible at the top.

---

## 7. Responsive Behavior

### 7.1 Spread Browser

| Element | Desktop | Mobile (<640px) |
|---|---|---|
| Grid columns | `auto-fill, minmax(320px, 1fr)` | `1fr` (single column) |
| Spread cards | Full content visible | Same, slightly reduced padding |
| Filter pills | Horizontal row, centered | Wrap to multiple rows |
| Heading | `clamp(2rem, 5vw, 3rem)` | `clamp(1.5rem, 8vw, 2.5rem)` |

### 7.2 Spread Reading

| Element | Desktop | Mobile (<640px) |
|---|---|---|
| Card slot size | `clamp(80px, 18vw, 140px)` | `clamp(60px, 22vw, 100px)` |
| Grid gap | 32px | 16px |
| Position labels | Visible above slots | Smaller, may truncate |
| Interpretation panel | Max 560px | Full width, `padding: 0 16px` |
| Action buttons | Side-by-side | Stacked |

**Celtic Cross on mobile:** The 10-card cross pattern is the hardest layout. On mobile, cards scale down significantly (60–80px). The grid compresses. Users may need to scroll horizontally or the layout shifts to a more compact form. If the cross pattern doesn't fit, fall back to a 2-column condensed layout.

---

## 8. Motion Guidelines

### 8.1 Shuffle Animation

| Phase | Duration | Notes |
|---|---|---|
| Cards appear at center | 300ms fade | 5-7 card backs |
| Shuffle | 2-3s loop | Cards rapidly swap positions via CSS translate + z-index |
| Auto-complete | Fade out shuffle | Cards settle into a stack |

### 8.2 Deal Animation

| Card # | Delay from shuffle end | Duration |
|---|---|---|
| 1 | 0ms | 200ms slide to position |
| 2 | 100ms | 200ms |
| ... | +100ms each | 200ms |
| N | (N-1)×100ms | 200ms |

Total deal time for 10-card spread: ~1.1s.

### 8.3 Card Reveal

| Phase | Duration | Easing |
|---|---|---|
| 3D flip | 500ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Interpretation fade in | 300ms | `var(--ease-out)` |

### 8.4 Prohibited Motion

Same as Daily Draw: no bounce (except shuffle which is naturally chaotic), no particles, no constant animations, no scale above 1.02×.

---

## 9. Accessibility Rules

All rules from Home and Daily Draw carry forward. Additions:

### 9.1 Spread Browser
- Spread cards are `<a>` or `<button>` elements, keyboard navigable
- Filter pills announce active state via `aria-pressed`
- Grid uses semantic list markup (`<ul>` / `<li>`)

### 9.2 Spread Reading
- Card slots in face-down state: `role="button"`, `aria-label="Position [N]: [label] — face down. Press Enter to reveal."`
- Card slots face-up: `aria-label="Position [N]: [label] — [card name]"`
- Shuffle animation: `aria-hidden="true"` (decorative)
- Deal animation: `aria-hidden="true"`
- Interpretation: `aria-live="polite"` — announces new interpretation when card is revealed
- Synthesis: `aria-live="polite"`
- Phase changes announced via visually hidden status text

### 9.3 Reduced Motion
- No shuffle animation
- Cards appear instantly in positions (no deal animation)
- Card reveal is crossfade (300ms opacity, no 3D)
- Interpretation appears instantly

---

## 10. State Handling

### 10.1 Spread Browser

| State | Behavior |
|---|---|
| Loading | 6 skeleton cards (pulsing rectangles) |
| Empty filter | "No spreads match this filter. Try another category." |
| Error | "Could not load spreads. Try again." with retry button |

### 10.2 Spread Reading

| State | Behavior |
|---|---|
| Invalid spread ID | Redirect to `/spreads` |
| Loading | Positional layout renders immediately. Shuffle is the loading state for cards. |
| Card data error | The specific card slot shows "—" with a subtle error indicator. Other cards continue to work. |
| Full error | "This reading needs a moment. Try again." with retry |

---

## 11. Implementation Notes

### 11.1 Tech Mapping

| Design Concept | Implementation |
|---|---|
| Positional layout | CSS Grid with `grid-row` / `grid-column` from spread position data |
| Card flip | Same 3D CSS technique as Daily Draw (reuse CardContainer logic) |
| Shuffle animation | CSS `@keyframes` with randomized translate values |
| Deal animation | JS-triggered CSS transitions with computed target positions |
| Blended interpretations | Template: `cardData.upright.meaning` + position context prefix |
| Synthesis | Static string per spread in spread data |

### 11.2 File Manifest

```
src/
├── pages/
│   ├── SpreadBrowserPage.tsx
│   └── SpreadReadingPage.tsx
├── components/
│   ├── spread-browser/
│   │   ├── FilterPills.tsx
│   │   ├── SpreadCard.tsx
│   │   └── SpreadGrid.tsx
│   ├── spread-reading/
│   │   ├── TopBar.tsx
│   │   ├── PositionalLayout.tsx
│   │   ├── CardSlot.tsx
│   │   ├── ShuffleAnimation.tsx
│   │   ├── DealAnimation.tsx
│   │   ├── CardReveal.tsx
│   │   ├── InterpretationPanel.tsx
│   │   ├── Synthesis.tsx
│   │   └── ActionBar.tsx
│   └── decorative/
│       └── (reuse existing)
├── services/
│   └── spreadService.ts             # getSpreads, getSpreadById, filterByCategory
└── data/
    └── spreads/                     # 10 spread definition files
        ├── single-card.ts
        ├── past-present-future.ts
        └── ...
```
