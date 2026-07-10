# Design Spec: Moira — Daily Draw

> Generated from `$impeccable shape` — 2026-07-09
> Confirmed design brief. This is the implementation blueprint.

---

## 1. Visual Language

**Creative North Star:** "The Private Library" — carries forward from Home.

The Daily Draw inherits Moira's full visual language: Deep Indigo canvas, Warm Gold accent at ≤10%, serif display + sans body, restrained motion. What changes is the focus: the Home page establishes atmosphere through typography and space; the Daily Draw centers everything on a single object — the card. The card IS the page. Everything else recedes.

**Mood:** Quiet, anticipatory, still, personal.
**Density:** Extremely sparse. Card + prompt text + interpretation + actions. Nothing else.
**Surface feel:** The card floats in empty space. The interpretation flows downward like reading a single page in a book.

---

## 2. Design Tokens

### 2.1 Colors

All tokens carry forward from the Home page design spec. No new colors.

| Token | Hex | Role on Daily Draw |
|---|---|---|
| `--color-bg` | `#0B1020` | Page canvas |
| `--color-surface` | `#141B2D` | Not used on this page (intentionally — no surface cards) |
| `--color-border` | `#2A3550` | Not used |
| `--color-text` | `#F5F1E8` | Card name, interpretation body |
| `--color-text-muted` | `#A6AFC3` | Prompt text, keywords, secondary labels |
| `--color-accent` | `#C8A96A` | Gold rim light on hover, action button border, card back line art, decorative elements |

### 2.2 Typography

All tokens carry forward. New usage roles on this page:

| Role | Token | Usage on Daily Draw |
|---|---|---|
| Card Name | `display-lg` | The card's name, revealed first after stillness. Serif, light, the typographic anchor. |
| Keywords | `label` | Comma-separated keywords, muted, sans. Secondary information. |
| Summary | `body-lg` | First interpretation paragraph. Slightly larger for emphasis. |
| Meaning | `body` | Main interpretation body. The educational + poetic core. |
| Reflection | `body` | Personal reflection prompt. Same size as meaning, distinct through content. |
| Guidance | `body` | Actionable advice. Same size, distinct through content. |
| Prompt text | `body` | The face-down invitation text. Muted. |
| Action labels | `label` | Button labels. Uppercase, tracked. |

### 2.3 Spacing, Radius, Shadows, Motion

All tokens carry forward from Home page design spec. No new tokens needed.

---

## 3. Component Library

### 3.1 DailyDrawPage

The orchestrator. Manages the flow state machine: `ritual → face-down → revealing → stillness → interpreting → complete`.

**State machine:**

```
ritual ──(auto, 1-1.5s)──▶ face-down ──(tap)──▶ revealing ──(700ms)──▶ stillness
                                                                          │
                                                                    (400-600ms)
                                                                          │
                                                                          ▼
complete ◀──(all text shown)── interpreting
```

**Specs:**
- Full viewport height: `min-h-screen`
- Vertically centered content
- No navigation chrome (the card IS the page)
- Background: `--color-bg`

### 3.2 OpeningRitual

Automatic sequence on mount. Skipped if `prefers-reduced-motion: reduce`.

```
┌──────────────────────────────────────┐
│                                      │
│          [deck appears]              │  ← 5 cards stacked, slight offset,
│          ┌─┐                            fade in over 400ms
│          ┌─┐                         │
│          ┌─┐                         │
│          ┌─┐                         │
│          └─┘                         │
│                                      │
│          ┌─┐                         │  ← Top card separates: translates
│            └─┘                           upward 40px + rotate(-3°)
│          ┌─┐                         │
│          ┌─┐                         │
│          └─┘                         │
│                                      │
│               ┌─┐                    │  ← Selected card glides to center.
│               └─┘                       Remaining deck fades out (300ms).
│                                      │     Card rests. Ready.
└──────────────────────────────────────┘
```

**Animation timeline:**

| Time | Event | Duration |
|---|---|---|
| 0ms | Deck of 5 cards fades in at center | 400ms |
| 400ms | Top card separates — translateY(-40px) + rotate(-3deg) | 300ms |
| 700ms | Selected card glides to center resting position. Remaining deck fades out. | 300ms |
| 1000ms | Card rests. Prompt text fades in. | 300ms |
| 1300ms | Ready for interaction. | — |

**Card stack rendering:**
- 5 overlapping card-back SVGs
- Each offset by 2px X and 3px Y from the one below (creating a slight fan)
- All use the custom Moira card back design
- Opacity: 100% for top card, decreasing to 60% for bottom card
- The "selected" card is the top one — it separates and becomes the interactive card

### 3.3 CardBack (Custom Moira Design)

A self-contained inline SVG component. This is the face-down visual and the deck stack visual.

**Design spec:**

```
┌─────────────────────────────┐
│ ╔═════════════════════════╗ │  ← Double-line outer border (gold, 0.5px + 1px)
│ ║                         ║ │
│ ║    ┌───────────────┐    ║ │
│ ║    │  ☽   ○   ☉   │    ║ │  ← Moon phase symbols across top
│ ║    └───────────────┘    ║ │
│ ║                         ║ │
│ ║       ╭───────╮         ║ │
│ ║      ╱         ╲        ║ │  ← Astrolabe circles (2 concentric,
│ ║     │           │       ║ │     partial arcs, gold stroke)
│ ║     │     M     │       ║ │  ← "M" sigil at center
│ ║     │           │       ║ │     (Cormorant Garamond, light, gold)
│ ║      ╲         ╱        ║ │
│ ║       ╰───────╯         ║ │
│ ║                         ║ │
│ ║    ┌───┬───┬───┬───┐    ║ │  ← Four suit symbols
│ ║    │ 🏆 │ ⚔ │ ✦ │ ◎ │    ║ │     (Cup, Sword, Wand, Pentacle)
│ ║    └───┴───┴───┴───┘    ║ │     Small, gold, evenly spaced
│ ║                         ║ │
│ ║  ┌───────────────────┐  ║ │
│ ║  │  ·  ·  ·  ·  ·  · │  ║ │  ← Constellation dots along bottom
│ ║  └───────────────────┘  ║ │
│ ║                         ║ │
│ ╚═════════════════════════╝ │
└─────────────────────────────┘
```

**Specs:**
- Background: `--color-bg` (#0B1020) — matches page, card defined by border only
- Outer border: double-line, 0.5px + 1px, `--color-accent` at 60% and 40%
- Inner padding: 12% of card width on all sides
- Moon phases: ☽ (crescent) · (new) ☉ (full) — across top third, gold at 50%
- Astrolabe circles: 2 concentric partial arcs (not full circles — ~300° arcs), 0.5px stroke, gold at 40%
- Center sigil: "M" in Cormorant Garamond Light, gold at 70%, ~18% of card width
- Suit symbols: 🏆 ⚔ ✦ ◎ — bottom third, evenly spaced, gold at 50%, ~6% of card width each
- Constellation dots: 6 dots along bottom edge, 1px radius, gold at 30%
- Corner ornaments: small gold dots or arcs at each corner inside the border, gold at 40%
- Aspect ratio: 2.5:3.5 (standard tarot card proportion)
- No gradients. No textures. No bright colors.

### 3.4 CardFace

The revealed card image.

**Specs:**
- Renders the Rider-Waite-Smith card image from `public/cards/`
- Same dimensions as CardBack (2.5:3.5 aspect ratio)
- Image loads lazily — preloaded in the background during the opening ritual
- `alt` text: card name (e.g., "The Fool")
- Border: 1px `--color-accent` at 30% — subtle frame, not a heavy border

### 3.5 CardContainer

The interactive card wrapper. Manages flip state, hover state, and the 3D transform.

**Specs:**

```
┌─────────────────────────────────────────┐
│                                         │
│   perspective: 800px                    │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  transform-style: preserve-3d   │   │
│   │                                 │   │
│   │  ┌───────────┐ ┌───────────┐   │   │
│   │  │ CardBack  │ │ CardFace  │   │   │
│   │  │ (0deg)    │ │ (180deg)  │   │   │
│   │  └───────────┘ └───────────┘   │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

**Dimensions:**
- Width: `clamp(200px, 45vw, 300px)` — responsive card size
- Height: auto (maintains 2.5:3.5 aspect ratio via `aspect-ratio`)

**States:**

| State | Transform | Other |
|---|---|---|
| Face-down (default) | `rotateY(0deg)` | CardBack visible, CardFace hidden (`backface-visibility: hidden`) |
| Hover (desktop) | `rotateY(0deg)` + `translateY(-4px)` + `scale(1.02)` | Gold rim light: `box-shadow: 0 0 20px rgba(200, 169, 106, 0.12)` on the card edges |
| Revealing | `rotateY(180deg)` over 700ms | `transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out). Background dims to 90% opacity during rotation. |
| Face-up (revealed) | `rotateY(180deg)` | CardFace visible, CardBack hidden. Gold rim light fades out. |

**3D setup:**
- Container: `perspective: 800px`
- Inner wrapper: `transform-style: preserve-3d`, `position: relative`
- Both faces: `position: absolute; inset: 0; backface-visibility: hidden`
- CardFace: `transform: rotateY(180deg)` (pre-rotated, so it's hidden until the container flips)

**Hover glow implementation:**
- A pseudo-element (`::after`) on the container with `inset: -2px`, `border-radius: inherit`, `box-shadow: 0 0 20px rgba(200, 169, 106, 0.12)`, `opacity: 0`
- On hover: `opacity: 1`, `transition: opacity 300ms var(--ease-out)`
- This creates a soft gold rim light without affecting the card's border

### 3.6 AtmosphericGlow

A soft radial gradient behind the card, creating depth and focus.

**Specs:**
```css
background: radial-gradient(
  ellipse at 50% 45%,
  rgba(20, 27, 45, 0.5) 0%,
  rgba(200, 169, 106, 0.03) 40%,
  transparent 70%
);
```

- Positioned absolutely behind the card, centered
- Size: ~150% of card dimensions
- No animation at rest
- During reveal: gold component fades from 0.03 to 0.06, then back — a subtle breath

### 3.7 CelestialBackground

Faint constellation elements behind the card — carries forward the decorative language from Home.

**Specs:**
- 6–8 scattered star points (1px dots, `--color-accent` at 6–10% opacity)
- 3–4 thin constellation lines connecting nearby stars (0.5px, `--color-accent` at 4–6%)
- 1 partial astrolabe arc behind the card (0.5px, `--color-accent` at 5%)
- Positioned absolutely behind the AtmosphericGlow
- Size: ~200% of card dimensions, centered
- No animation (static, atmospheric only)
- `aria-hidden="true"`

### 3.8 PromptText

The invitation text shown below the card when face-down.

**Specs:**
- Copy: *"Take a quiet moment. Reveal today's reflection when you're ready."*
- Font: `body`, `--color-text-muted`
- Max-width: 320px, centered
- `text-wrap: balance`
- Fades in after opening ritual completes (300ms)
- Fades out when card is tapped (200ms)
- Not shown after card is revealed

### 3.9 Interpretation

The progressive text reveal after the stillness pause. Six sections, staggered.

**Reveal order and timing:**

| # | Section | Typography | Delay from stillness end | Duration |
|---|---|---|---|---|
| 1 | Card Name | `display-lg`, serif, `--color-text` | 0ms | 300ms fade |
| 2 | Keywords | `label`, sans, `--color-text-muted`, comma-separated | 250ms | 300ms fade |
| 3 | Summary | `body-lg`, sans, `--color-text` | 500ms | 300ms fade |
| 4 | Meaning | `body`, sans, `--color-text` | 750ms | 300ms fade |
| 5 | Reflection | `body`, sans, `--color-text` | 1000ms | 300ms fade |
| 6 | Guidance | `body`, sans, `--color-text` | 1250ms | 300ms fade |

**Layout:**
- All sections centered below the card
- Max-width: 520px
- Card Name: `margin-top: 48px` (space between card and name)
- Each subsequent section: `margin-top: 16px`
- Each section fades in via `opacity: 0 → 1` + `transform: translateY(4px) → translateY(0)`

**Label styling for sections 3–6:**
- Summary, Meaning, Reflection, and Guidance each have a small muted label above the body text
- Labels: `label` token, `--color-text-muted`, `text-transform: uppercase`, `letter-spacing: 0.06em`
- Label copy: "Summary", "Meaning", "Reflection", "Guidance"

### 3.10 ActionBar

Post-reading actions. Appears after the final interpretation section fades in.

**Specs:**
- Fades in 300ms after Guidance section appears (total: ~1550ms after stillness ends)
- Centered below the interpretation
- `margin-top: 48px`

**Buttons (initial release):**

| Priority | Label | Style | Behavior |
|---|---|---|---|
| Primary | Export Reading | Gold accent border, `--color-surface` bg | Opens export modal → PNG or PDF download |
| Secondary | View Card Details | Muted border, `--color-surface` bg | Navigate to `/cards/:id` |
| Tertiary | Return Home | No border, text only, `--color-text-muted` | Navigate to `/` |

**Layout:**
- Desktop: Primary centered above, two secondaries side-by-side below
- Mobile: All stacked vertically, full width

**Button specs:**
- Padding: `px-lg py-md` (32px × 16px)
- Border-radius: `--radius-md` (8px)
- Hover (primary): gold border glow, `box-shadow: 0 0 16px rgba(200, 169, 106, 0.08)`
- Hover (secondary): border color shifts to gold at 35% opacity
- Hover (tertiary): text color shifts to `--color-text`
- Focus-visible: gold outline ring (2px, 4px offset, pill)
- All transitions: 200ms `var(--ease-out)`

---

## 4. Layout System

### 4.1 Page Layout

```
┌──────────────────────────────────────┐
│                                      │
│         [celestial background]        │
│         [atmospheric glow]            │
│                                      │
│              ┌───────┐               │
│              │ CARD  │               │  ← Vertically and horizontally centered
│              └───────┘               │
│                                      │
│           [prompt text]              │
│                                      │
│         [interpretation]             │
│                                      │
│          [action buttons]            │
│                                      │
└──────────────────────────────────────┘
```

- Page: `min-h-screen`, `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`
- Content wrapper: `max-width: 720px`, `padding: 0 16px` (mobile), `padding: 0 32px` (desktop)
- Card: centered, with generous vertical space above and below
- Page scrolls naturally if interpretation + actions exceed viewport height

### 4.2 Mobile Adaptations (< 640px)

| Element | Desktop | Mobile |
|---|---|---|
| Card width | `clamp(200px, 45vw, 300px)` | `clamp(160px, 70vw, 260px)` |
| Prompt text max-width | 320px | 280px |
| Interpretation max-width | 520px | 100% minus 32px padding |
| Action buttons | Primary centered above, secondaries side-by-side | All stacked, full width |
| Card-to-name spacing | 48px | 32px |
| Section-to-section spacing | 16px | 12px |
| ActionBar margin-top | 48px | 32px |

### 4.3 Reduced Motion

All animation timelines collapse:

| Normal | Reduced Motion |
|---|---|
| Opening ritual (1.3s) | Card appears instantly face-down. Prompt text visible immediately. |
| Card flip (700ms 3D) | Card crossfades back→face (300ms opacity). No rotation. |
| Stillness pause (400-600ms) | Skipped. Interpretation begins immediately. |
| Interpretation stagger (1.5s total) | All sections appear at once (300ms fade). No stagger. |
| Hover effects | Instant. No transitions. |

---

## 5. Motion Guidelines

### 5.1 Opening Ritual Choreography

| Phase | Property | Duration | Easing |
|---|---|---|---|
| Deck fade in | `opacity: 0 → 1` | 400ms | `var(--ease-out)` |
| Card separate | `transform: translateY(0) → translateY(-40px) rotate(-3deg)` | 300ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight overshoot for organic feel) |
| Card glide to center | `transform: translate → center` | 300ms | `var(--ease-out)` |
| Deck fade out | `opacity: 1 → 0` | 300ms | `var(--ease-out)` |
| Prompt text fade in | `opacity: 0 → 1` | 300ms | `var(--ease-out)` |

### 5.2 Card Flip

| Property | Duration | Easing |
|---|---|---|
| Container `rotateY(0 → 180deg)` | 700ms | `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out) |
| Background dim | 700ms | Synchronized with flip |
| Gold rim fade out | 300ms | After flip completes |

### 5.3 Stillness → Interpretation

| Phase | Duration |
|---|---|
| Stillness pause | 400–600ms (no animation) |
| Card Name fade | 300ms |
| Keywords fade | 300ms |
| Summary fade | 300ms |
| Meaning fade | 300ms |
| Reflection fade | 300ms |
| Guidance fade | 300ms |
| ActionBar fade | 300ms |

### 5.4 Prohibited Motion

- No bounce or elastic (except the slight overshoot on card separation — that's the one exception)
- No particles, sparkles, or confetti
- No continuous looping animations (the atmospheric glow breath during reveal is temporary, not looping)
- No scroll-driven effects
- No scaling above 1.02×
- No flashy glows — all glow effects are ≤12% opacity

---

## 6. Accessibility Rules

### 6.1 Contrast

All color pairs carry forward from Home page — all pass WCAG AA. No new color combinations introduced.

### 6.2 Keyboard

- **Tab order:** Card → Export Reading → View Card Details → Return Home
- **Card interaction:** `Enter` or `Space` triggers flip (same as click)
- **Focus ring:** Gold outline (2px, 4px offset, pill) on all interactive elements via `:focus-visible`
- **No Escape dismiss:** The reading is not a modal — Escape does nothing. Intentional.

### 6.3 Screen Readers

- **Face-down card:** `aria-label="Today's card — face down. Press Enter to reveal."` with `role="button"` and `tabindex="0"`
- **Face-up card:** `aria-label="[Card Name] — revealed"` with the card image having `alt="[Card Name]"`
- **Interpretation:** `aria-live="polite"` on the interpretation container so new sections are announced as they appear
- **Opening ritual:** `aria-hidden="true"` on the deck animation (purely decorative)
- **Celestial background:** `aria-hidden="true"`
- **Atmospheric glow:** `aria-hidden="true"`

### 6.4 Reduced Motion

Full `@media (prefers-reduced-motion: reduce)` compliance:
- No opening ritual
- Instant card reveal (crossfade, no rotation)
- No stillness pause
- Instant interpretation (no stagger)
- No hover transitions

### 6.5 Touch Targets

- Card: minimum 200px wide (mobile) — well above the 44px minimum
- Action buttons: `py-md` (16px) ensures 44px+ height

---

## 7. State Handling

### 7.1 Loading State

- The opening ritual IS the loading state
- If card data isn't ready when the ritual completes, show a subtle pulsing glow behind the card position (opacity wave 0.03 → 0.06 → 0.03 over 2s, `--color-accent`)
- Card data is static (no network request) — loading should resolve in <100ms
- If it takes longer than 2s, show the error state

### 7.2 Error State

- Card remains face-down
- Prompt text changes to: *"Today's card is still finding its way. Return in a moment."*
- "Return Home" button appears below (sole action)
- No card interaction available
- A `console.error` is logged with the failure reason for debugging

### 7.3 Empty State

N/A — a card is always drawn on page load. The card is randomly selected from the 78-card deck.

### 7.4 First Visit vs. Return Visit

No behavioral difference. The Daily Draw is the same experience every day — only the card changes.

---

## 8. Implementation Notes

### 8.1 Tech Mapping

| Design Concept | Implementation |
|---|---|
| Card flip 3D | CSS `transform: rotateY()` + `transform-style: preserve-3d` + `backface-visibility: hidden` |
| Opening ritual | React state machine + CSS transitions triggered by state changes |
| Progressive reveal | React state tracking which sections are visible + CSS opacity/transform transitions |
| Atmospheric glow | CSS `radial-gradient` behind card, opacity controlled by React state |
| Gold rim light | `::after` pseudo-element with `box-shadow` on card container |
| Card back | Inline SVG component |
| Card face | `<img>` with `loading="lazy"` |
| Daily card selection | `Math.random()` seeded by day-of-year for deterministic daily card, or true random per session |

### 8.2 Card Selection Strategy

Two options:
- **Deterministic daily:** Use day-of-year as seed → same card all day, across refreshes. Reinforces "today's card is unique."
- **Per-session random:** New random card each page load. More variety but loses the "daily" meaning.

**Recommendation:** Deterministic daily. Seed a PRNG with `YYYY-MM-DD` → always the same card today. The card changes at midnight.

### 8.3 File Manifest

```
src/
├── pages/
│   └── DailyDrawPage.tsx           # Page orchestrator + state machine
├── components/
│   ├── daily-draw/
│   │   ├── OpeningRitual.tsx        # Deck → card separation animation
│   │   ├── CardContainer.tsx        # 3D flip wrapper + hover
│   │   ├── CardBack.tsx             # Custom Moira SVG card back
│   │   ├── CardFace.tsx             # RWS card image
│   │   ├── AtmosphericGlow.tsx      # Radial gradient behind card
│   │   ├── CelestialBackground.tsx  # Faint constellation elements
│   │   ├── PromptText.tsx           # Face-down invitation
│   │   ├── Interpretation.tsx       # Progressive text reveal
│   │   └── ActionBar.tsx            # Post-reading actions
│   ├── decorative/
│   │   └── (reuse existing)         # SectionDivider, etc.
│   └── ui/
│       └── (reuse existing)
├── services/
│   └── cardService.ts               # getDailyCard(), getCardById()
└── data/
    └── cards/                       # Card data (to be populated)
```
