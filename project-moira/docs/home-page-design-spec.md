# Design Spec: Moira — Home Page

> Generated from `$impeccable shape` — 2026-07-09
> Confirmed design brief. This is the implementation blueprint.

---

## 1. Visual Language

**Creative North Star:** "The Private Library"

Moira's Home page is a quiet, wood-paneled reading room at dusk. A single gold lamp casts warmth. The mystery comes from restraint — Deep Indigo darkness as the canvas, Warm Gold as the rare, earned accent. Every element breathes. Nothing rushes.

**Mood:** Calm, intentional, curious, unhurried.
**Density:** Sparse. Generous whitespace. One idea per section.
**Surface feel:** Elevated cards float above the canvas. Depth is suggested, not shouted.

---

## 2. Design Tokens

### 2.1 Colors

| Token | Hex | OKLCH | Role |
|---|---|---|---|
| `--color-bg` | `#0B1020` | `oklch(16% 0.025 265)` | Page background canvas |
| `--color-surface` | `#141B2D` | `oklch(20% 0.025 265)` | Elevated cards, panels, CTAs |
| `--color-border` | `#2A3550` | `oklch(30% 0.025 265)` | Card borders, dividers, input strokes |
| `--color-text` | `#F5F1E8` | `oklch(95% 0.01 90)` | Primary body text — warm cream |
| `--color-text-muted` | `#A6AFC3` | `oklch(75% 0.01 260)` | Secondary text, labels, placeholder |
| `--color-accent` | `#C8A96A` | `oklch(75% 0.08 85)` | Warm gold — primary CTA, wordmark accent, dividers, icons |

**Usage rules:**
- Gold appears on ≤10% of the viewport. Never as a background.
- Gold is used on: primary CTA border/accent, "Moira" wordmark dot or underline, thin section dividers, decorative geometry (low opacity), selected/focused states.
- The two-step background (bg → surface) provides layering without shadows.

### 2.2 Typography

**Display Font:** Cormorant Garamond (fallback: EB Garamond, Georgia, serif)
**Body Font:** Inter (fallback: Geist, system-ui, sans-serif)

| Role | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | Cormorant Garamond | 300 (Light) | `clamp(3rem, 8vw, 5rem)` | 1.05 | `-0.02em` | "MOIRA" hero wordmark |
| `display-lg` | Cormorant Garamond | 300 (Light) | `clamp(2rem, 5vw, 3rem)` | 1.1 | `-0.02em` | Section headings (The Philosophy, etc.) |
| `body-lg` | Inter | 400 (Regular) | `1.125rem` | 1.7 | `normal` | Philosophy body, How Tarot Works |
| `body` | Inter | 400 (Regular) | `1rem` | 1.6 | `normal` | CTA descriptions, footer |
| `label` | Inter | 500 (Medium) | `0.875rem` | 1.4 | `0.04em` | CTA labels (uppercase), navigation |
| `reflection` | Cormorant Garamond | 300 (Light Italic) | `clamp(1.25rem, 3vw, 1.75rem)` | 1.5 | `normal` | Today's Reflection quote |
| `tagline` | Inter | 400 (Regular) | `1rem` | 1.5 | `0.02em` | Hero tagline beneath "MOIRA" |

**Rules:**
- **The Serif Ceiling.** Cormorant Garamond is used for the wordmark, section headings, and Today's Reflection only. Never for body text or UI labels.
- **The Line Length Rule.** All body text (philosophy, tarot primer) is capped at 65–75ch. Never full-width on desktop.
- **The Weight Restraint Rule.** Cormorant Garamond uses Light (300) only. No bold, no regular. Inter uses Regular (400) and Medium (500). No bold weights.

### 2.3 Spacing

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `4px` | Icon-to-text gaps, tight inline spacing |
| `--space-sm` | `8px` | Internal padding within small elements |
| `--space-md` | `16px` | Standard padding, card internal spacing |
| `--space-lg` | `32px` | Section padding, card gaps |
| `--space-xl` | `64px` | Inter-section vertical rhythm |
| `--space-2xl` | `96px` | Major section separation (Hero → Philosophy, last CTA → Footer) |
| `--space-3xl` | `128px` | Top/bottom page padding |

**Rules:**
- **The Breathing Room Rule.** No two major sections are closer than `--space-xl` (64px). The page breathes.
- **The Section Rhythm Rule.** Inter-section spacing alternates: 96px between atmosphere sections (Hero → Philosophy), 64px between content sections (Philosophy → Tarot Primer), 96px before CTAs (Reflection → CTAs).

### 2.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Small accents, inline elements |
| `--radius-md` | `8px` | CTA cards, panels, interactive surfaces |
| `--radius-lg` | `12px` | Modal containers (not on Home page) |
| `--radius-full` | `9999px` | Focus rings, small decorative pills |

**Rules:**
- **The Gentle Curve Rule.** Interactive surfaces use `--radius-md` (8px). Never sharp (0px) and never pill-shaped (>16px) for cards. Focus rings use `--radius-full` for a clean halo.

### 2.5 Shadows & Elevation

Moira is flat by default. Elevation appears only on state.

| Token | Value | Usage |
|---|---|---|
| `--shadow-glow` | `0 0 24px rgba(200, 169, 106, 0.08)` | Gold hover glow on primary CTA |
| `--shadow-lift` | `0 4px 12px rgba(0, 0, 0, 0.3)` | Subtle lift on CTA hover |

**Rules:**
- **The Flat-By-Default Rule.** Surfaces sit at `--color-bg` and `--color-surface` without shadows. Elevation (glow or lift) appears only on hover/focus. No ambient shadows at rest.
- **The Ghost Card Prohibition.** Never pair `border: 1px solid` with `box-shadow` blur ≥16px on the same element. Pick one.

### 2.6 Motion

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default transition easing (expo-out) |
| `--duration-fast` | `150ms` | Hover state transitions, focus ring appearance |
| `--duration-md` | `300ms` | Staggered section fade-in, page transitions |
| `--duration-slow` | `600ms` | Ambient decorative animation cycles |
| `--stagger-step` | `150ms` | Delay increment between staggered section entrances |

**Rules:**
- **The Unhurried Rule.** No transition faster than 150ms. No interaction feels rushed.
- **The Reduced Motion Rule.** All animations and transitions are disabled inside `@media (prefers-reduced-motion: reduce)`. Use `opacity` crossfade (300ms) as the sole transition.
- **No layout property animations.** Animate `opacity` and `transform` only. Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.

---

## 3. Component Library

### 3.1 Hero Section

The topmost section. Full viewport height on first load, minimum 70vh.

```
┌──────────────────────────────────────┐
│                                      │
│           [decorative geometry]       │
│                                      │
│               M O I R A              │  ← Cormorant Garamond Light 300
│                                      │     display-xl, color: --color-text
│         Every card is a mirror.      │  ← Inter Regular 400
│     Every reading begins with        │     tagline, color: --color-text-muted
│            intention.                │
│                                      │
│           [decorative geometry]       │
│                                      │
└──────────────────────────────────────┘
```

**Specs:**
- Background: `--color-bg` with a soft radial gradient centered at 50% 40% — `radial-gradient(ellipse at 50% 40%, rgba(20, 27, 45, 0.6) 0%, #0B1020 70%)`
- "MOIRA": `display-xl`, letter-spacing `0.08em` (tracked out for presence), `text-wrap: balance`
- Tagline: `tagline`, centered, max-width 480px, `text-wrap: balance`
- Decorative layer: Abstract gold celestial geometry at 8–12% opacity. Constellation lines (thin strokes, `--color-accent`), astrolabe circles (no fill, 1px stroke), scattered star points (2px dots). Positioned absolutely behind text, centered. CSS-only or inline SVG.
- Vertical padding: `--space-3xl` top and bottom

### 3.2 The Philosophy Section

```
┌──────────────────────────────────────┐
│                                      │
│          A Quiet Practice            │  ← display-lg, color: --color-text
│                                      │
│   Moira is a space for reflection    │  ← body-lg, color: --color-text
│   and self-discovery through the     │     max-width 600px, centered
│   ancient practice of tarot. Here,   │     text-wrap: pretty
│   there are no predictions — only    │
│   mirrors. Each visit is an          │
│   invitation to pause, to listen,    │
│   to notice what the cards gently    │
│   bring forward.                     │
│                                      │
│        [thin gold divider]           │  ← 1px, --color-accent, 40% opacity
│                                      │     width 60px, centered
└──────────────────────────────────────┘
```

**Specs:**
- Heading: `display-lg`, centered, `text-wrap: balance`
- Body: `body-lg`, max-width 600px (≈65ch), centered, `text-wrap: pretty`
- Divider: 1px height, `--color-accent` at 40% opacity, 60px wide, centered. `margin: --space-lg auto`
- Section padding: `--space-xl` vertical

### 3.3 How Tarot Works Section

```
┌──────────────────────────────────────┐
│                                      │
│        ✦  The Cards  ✦              │  ← display-lg, star glyphs as
│                                      │     decorative bookends
│   Tarot is a deck of seventy-eight   │  ← body-lg, max-width 600px
│   symbolic cards. Rather than        │     centered
│   predicting the future, each draw   │
│   offers a new perspective for       │
│   reflection and self-discovery.     │
│                                      │
└──────────────────────────────────────┘
```

**Specs:**
- Heading: `display-lg` with decorative star glyphs (✦) flanking — glyphs at 60% `--color-accent`, 0.75em size, `margin: 0 --space-sm`
- Body: `body-lg`, max-width 600px, centered
- Section padding: `--space-xl` vertical
- No divider — shorter section, let the space speak

### 3.4 Today's Reflection

```
┌──────────────────────────────────────┐
│                                      │
│                                      │
│    "Notice what has been quietly     │  ← reflection (Cormorant Garamond
│      asking for your attention."     │     Light Italic), color: --color-text
│                                      │     max-width 520px, centered
│                                      │     text-wrap: balance
│                                      │
│        [thin gold divider]           │
│                                      │
└──────────────────────────────────────┘
```

**Specs:**
- Quote: `reflection` token, centered, max-width 520px, `text-wrap: balance`
- Divider: Same as Philosophy divider (1px, `--color-accent` 40%, 60px wide)
- Section padding: `--space-2xl` vertical — this section gets extra breathing room as a contemplative pause before the CTAs
- Loading state: Skeleton pulse animation (subtle opacity wave 0.3 → 0.6 → 0.3, 1.5s cycle) on the quote text while daily content loads
- Error/fallback: Show hero tagline instead: *"Every card is a mirror. Every reading begins with intention."*
- Content source: Static array of 30+ curated prompts, indexed by day-of-year for daily rotation

### 3.5 Action Panels (CTAs)

Three destination cards. Primary card is larger and gold-accented. Two secondary cards sit below, side-by-side on desktop, stacked on mobile.

```
┌──────────────────────────────────────┐
│                                      │
│   ┌──────────────────────────────┐   │
│   │                              │   │  ← --color-surface bg
│   │     ✦  Draw Today's Card  ✦  │   │  ← label, --color-accent for ✦
│   │                              │   │     --color-text for label
│   │   A single card for a        │   │  ← body, --color-text-muted
│   │   moment of reflection.      │   │
│   │                              │   │
│   └──────────────────────────────┘   │  ← border: 1px --color-accent
│                                      │     --shadow-glow on hover
│   ┌──────────────┐ ┌──────────────┐  │
│   │              │ │              │  │  ← --color-surface bg
│   │  Start a New │ │  Explore the │  │  ← label, --color-text
│   │   Reading    │ │ Card Library │  │
│   │              │ │              │  │
│   │  Choose a    │ │  Browse all  │  │  ← body, --color-text-muted
│   │  spread and  │ │  seventy-    │  │
│   │  explore the │ │  eight cards │  │
│   │  cards in    │ │  and their   │  │
│   │  depth.      │ │  meanings.   │  │
│   │              │ │              │  │
│   └──────────────┘ └──────────────┘  │  ← border: 1px --color-border
│                                      │     --shadow-lift on hover
└──────────────────────────────────────┘
```

**Primary CTA Specs:**
- Background: `--color-surface`
- Border: `1px solid --color-accent` (this is the ≤10% gold budget)
- Border radius: `--radius-md` (8px)
- Padding: `--space-lg` (32px) all sides
- Max-width: 480px, centered
- Cursor: pointer
- Label: `label` token, `--color-text`, uppercase. Gold star glyphs (✦) flanking at `--color-accent`.
- Description: `body` token, `--color-text-muted`, centered below label. `margin-top: --space-sm`
- Hover: `--shadow-glow` (0 0 24px gold at 8%), `transform: scale(1.02)`, `transition: all --duration-fast --ease-out`
- Focus: `outline: 2px solid --color-accent`, `outline-offset: 4px`, `border-radius: --radius-full`
- Active: `transform: scale(0.98)`, `transition: transform 100ms --ease-out`

**Secondary CTA Specs:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Border radius: `--radius-md` (8px)
- Padding: `--space-lg` (32px) all sides
- Flex: equal width, `gap: --space-lg` on desktop. Stack vertically on mobile.
- Label: `label` token, `--color-text`, uppercase. No decorative glyphs.
- Description: `body` token, `--color-text-muted`, centered below label
- Hover: Border color transitions to `--color-accent` at 40% opacity, `--shadow-lift`, `transform: translateY(-2px)`
- Focus: `outline: 2px solid --color-accent`, `outline-offset: 4px`
- Active: `transform: translateY(0)`

**Layout:**
- Desktop (≥768px): Primary card centered above. Two secondary cards side-by-side in a row (`display: flex`, `gap: --space-lg`, `justify-content: center`, max-width 720px combined)
- Mobile (<768px): All three cards stacked vertically, full-width, `gap: --space-md` between them

### 3.6 Footer

```
┌──────────────────────────────────────┐
│                                      │
│        ─────── ✦ ───────            │  ← 1px gold line, 40% opacity,
│                                      │     120px wide, star glyph centered
│                                      │
│               M O I R A              │  ← label, --color-text-muted,
│                                      │     letter-spacing 0.12em
│                                      │
│   Tarot as reflection,               │  ← body, --color-text-muted,
│   not prediction.                    │     centered, italic optional
│                                      │
└──────────────────────────────────────┘
```

**Specs:**
- Divider: 1px height, `--color-accent` at 40% opacity, 120px wide, centered. Star glyph (✦) at center, `--color-accent` at 60%, 12px.
- "MOIRA": `label` token, `--color-text-muted`, `letter-spacing: 0.12em`, centered
- Closing line: `body` token, `--color-text-muted`, centered, `margin-top: --space-sm`
- Section padding: `--space-2xl` vertical
- No interactivity. Purely presentational.

---

## 4. Layout System

### 4.1 Page Grid

```
┌─────────────────────────────────────────────┐
│                 padding: 128px               │
│  ┌───────────────────────────────────────┐  │
│  │           content max-width            │  │
│  │           720px (desktop)              │  │
│  │          100% - 32px (mobile)          │  │
│  │                                       │  │
│  │              [sections]               │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                 padding: 128px               │
└─────────────────────────────────────────────┘
```

- Page background: `--color-bg`, full viewport width
- Content container: `max-width: 720px`, `margin: 0 auto`, `padding: 0 --space-lg` (16px on mobile for edge breathing room)
- Vertical page padding: `--space-3xl` (128px) top and bottom

### 4.2 Section Rhythm

| Section | Top Margin | Bottom Margin | Rationale |
|---|---|---|---|
| Hero | `--space-3xl` (128px) | `--space-2xl` (96px) | Major entrance, major exit |
| The Philosophy | `--space-2xl` (96px) | `--space-xl` (64px) | Atmosphere section, needs room |
| How Tarot Works | `--space-xl` (64px) | `--space-xl` (64px) | Shorter section, tighter |
| Today's Reflection | `--space-2xl` (96px) | `--space-2xl` (96px) | Contemplative pause — extra room |
| Action Panels | `--space-2xl` (96px) | `--space-xl` (64px) | Major call to action |
| Footer | `--space-2xl` (96px) | `--space-3xl` (128px) | Closing, needs finality |

### 4.3 Alignment

- All text is **centered**. Every heading, body, CTA, divider, and decorative element.
- This reinforces the "quiet ritual" feel — symmetrical, balanced, meditative.
- No left-aligned content on the Home page. (Card Library and Spread Reading pages will use left alignment for scanability.)

---

## 5. Responsive Behavior

### 5.1 Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| `mobile` | < 640px | Single column, reduced decorative elements, tighter spacing |
| `tablet` | 640px – 1024px | Single column, full decorative elements, desktop spacing |
| `desktop` | ≥ 1024px | Full experience, side-by-side secondary CTAs |

### 5.2 Mobile Adaptations (< 640px)

| Element | Desktop | Mobile |
|---|---|---|
| "MOIRA" wordmark | `clamp(3rem, 8vw, 5rem)` | `clamp(2.5rem, 12vw, 4rem)` — scales with viewport |
| Hero section | Min 70vh | Min 60vh — still immersive, less aggressive |
| Decorative geometry | Full complexity | Reduced — fewer constellation lines, larger star points for visibility |
| Body text | `max-width: 600px` | `max-width: 100%`, `padding: 0 --space-md` |
| Secondary CTAs | Side by side, equal width | Stacked vertically, full width |
| Primary CTA | `max-width: 480px` | Full width minus 32px padding |
| Section spacing | As per rhythm table | Multiply all spacings by 0.75 (e.g., 96px → 72px, 64px → 48px) |
| Footer divider | 120px wide | 80px wide |

### 5.3 Tablet (640px – 1024px)

- Same as desktop layout, but secondary CTAs may stack if the combined width exceeds the container
- Decorative elements at full complexity
- Section spacing at full values

---

## 6. Interaction States

### 6.1 Focus Ring System

All interactive elements (CTAs, any future nav links) use a consistent focus ring:

```
outline: 2px solid var(--color-accent);
outline-offset: 4px;
border-radius: 9999px;
```

- Visible on `:focus-visible` only (not `:focus` — avoids mouse-click focus rings)
- Gold color matches the accent — consistent with the restrained palette
- Rounded pill shape contrasts gently with the 8px card corners

### 6.2 CTA State Machine

```
Default ──hover──▶ Hover ──click──▶ Active ──▶ Navigate
  │                  │
  └──focus-visible──▶ Focus
```

| State | Primary CTA | Secondary CTA |
|---|---|---|
| **Default** | `--color-surface` bg, `1px --color-accent` border | `--color-surface` bg, `1px --color-border` border |
| **Hover** | `--shadow-glow`, `scale(1.02)`, cursor pointer | Border → `--color-accent` at 40%, `--shadow-lift`, `translateY(-2px)`, cursor pointer |
| **Focus-visible** | Gold focus ring (2px, 4px offset, pill) | Gold focus ring (2px, 4px offset, pill) |
| **Active** | `scale(0.98)`, 100ms ease-out | `translateY(0)`, 100ms ease-out |

### 6.3 Page Entrance

On first load:
1. Hero section: visible immediately (0ms delay)
2. The Philosophy: fades in at 300ms, duration 300ms
3. How Tarot Works: fades in at 450ms, duration 300ms
4. Today's Reflection: fades in at 600ms, duration 300ms
5. Action Panels: fades in at 750ms, duration 300ms
6. Footer: fades in at 900ms, duration 300ms

Total entrance sequence: ~1.2s. Each element transitions `opacity: 0 → 1` + `transform: translateY(8px) → translateY(0)`.

**Reduced motion:** All elements appear instantly (`opacity: 1`, no transform). No stagger.

---

## 7. Motion Guidelines

### 7.1 Ambient Motion

**Decorative geometry** (constellation lines, astrolabe circles):
- Subtle rotation: 360° over 120s, `linear` easing. Imperceptible in real-time; adds life over minutes.
- Star points: gentle opacity pulse, 0.08 → 0.15 → 0.08 over 4s per star, staggered start times. No more than 3 stars pulsing simultaneously.
- All ambient motion disabled under `prefers-reduced-motion`.

### 7.2 Interactive Motion

| Interaction | Property | Duration | Easing |
|---|---|---|---|
| CTA hover enter | `transform`, `box-shadow`, `border-color` | 150ms | `--ease-out` |
| CTA hover leave | `transform`, `box-shadow`, `border-color` | 250ms | `--ease-out` (slightly slower exit) |
| CTA active (press) | `transform` | 100ms | `--ease-out` |
| Focus ring appear | `opacity` | 150ms | `--ease-out` |
| Page entrance stagger | `opacity`, `transform` | 300ms per section | `--ease-out` |

### 7.3 Prohibited Motion

- No `bounce`, `elastic`, or `back` easing curves
- No continuous looping animations on interactive elements
- No scroll-driven animations on the Home page
- No `animation` that triggers layout recalculation
- No particles, floating elements, or ambient drift (this is the anti-reference enforcement)

---

## 8. Accessibility Rules

### 8.1 Contrast Compliance (WCAG AA)

| Foreground | Background | Ratio | Pass? |
|---|---|---|---|
| `--color-text` (#F5F1E8) | `--color-bg` (#0B1020) | 14.8:1 | ✅ AAA |
| `--color-text` (#F5F1E8) | `--color-surface` (#141B2D) | 12.1:1 | ✅ AAA |
| `--color-text-muted` (#A6AFC3) | `--color-bg` (#0B1020) | 7.2:1 | ✅ AA |
| `--color-text-muted` (#A6AFC3) | `--color-surface` (#141B2D) | 5.9:1 | ✅ AA |
| `--color-accent` (#C8A96A) | `--color-bg` (#0B1020) | 5.8:1 | ✅ AA |
| `--color-accent` (#C8A96A) | `--color-surface` (#141B2D) | 4.8:1 | ✅ AA |

All combinations pass WCAG AA. Body text against background passes AAA (14.8:1).

### 8.2 Keyboard Navigation

- All CTAs are focusable (`<a>` or `<button>` elements, never `<div>` with click handlers)
- Tab order follows visual order: Primary CTA → Secondary CTA 1 → Secondary CTA 2
- `:focus-visible` ring on all interactive elements (not `:focus`)
- No keyboard traps
- Skip-to-content link (visually hidden, first focusable element) — jumps to Action Panels

### 8.3 Screen Readers

- "MOIRA" hero: `aria-label="Moira — Home"` on the section or heading
- Decorative elements: `aria-hidden="true"` on all SVG geometry, star glyphs, dividers
- CTAs: Descriptive `aria-label` that includes both the title and description (e.g., `"Draw Today's Card — A single card for a moment of reflection"`)
- Today's Reflection: `aria-live="polite"` so screen readers announce the daily quote change
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` (if nav exists)

### 8.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- All ambient decorative animation disabled
- Page entrance: instant, no stagger
- Hover transitions: instant
- Focus rings: instant

### 8.5 Color Blindness

- Gold accent (#C8A96A) vs. muted text (#A6AFC3) are distinguishable by luminance alone (5.8:1 vs. 7.2:1 against bg)
- CTAs are differentiated by border presence (primary has border, secondary has border) and size hierarchy — not color alone
- Primary CTA has gold border + larger size; secondary CTAs have muted border + smaller footprint. The hierarchy works without color.

---

## 9. State Handling

### 9.1 Loading State

Only the **Today's Reflection** block has dynamic content. The rest of the page is static.

- **Skeleton:** The reflection quote text renders as a pulsing placeholder — 3 lines of rounded rectangles, widths 80%/60%/40%, `--color-surface` bg, opacity wave 0.3 → 0.6 → 0.3 over 1.5s.
- **Duration:** ≤ 500ms (the reflection is a static array lookup, not a network request — this is near-instant in practice)
- **Fallback:** If the lookup fails for any reason, display the hero tagline: *"Every card is a mirror. Every reading begins with intention."*

### 9.2 Empty State

N/A — the Home page is always populated with static content. There is no "empty" condition.

### 9.3 Error State

- **Today's Reflection failure:** Display fallback quote (hero tagline). No error message visible to the user — the fallback is graceful and intentional.
- **Page load failure:** The page is a static SPA. If it fails to load, the browser shows its native error. No custom error state needed.

### 9.4 First Visit vs. Return Visit

No behavioral difference. The Home page IS the first-visit experience. Returning users see an updated Today's Reflection but the same structure. This consistency is intentional — the page should feel like a familiar, welcoming space every time.

---

## 10. Iconography

### 10.1 Celestial Glyphs

| Glyph | Name | Usage |
|---|---|---|
| ✦ | Star | Section dividers, CTA bookends, footer divider center |
| ☉ | Sun | Optional: decorative element in constellation geometry |
| ☽ | Crescent Moon | Optional: decorative element in astrolabe circles |
| · | Mid-dot | Spacing element in dividers |

### 10.2 Suit Symbols

| Glyph | Suit | Usage |
|---|---|---|
| 🏆 | Cups | Not on Home page (reserved for Card Library and readings) |
| ⚔ | Swords | Not on Home page |
| ✦ | Wands | Used as star glyph (dual-purpose) |
| ◎ | Pentacles | Not on Home page |

### 10.3 Implementation

- All glyphs are Unicode characters or inline SVG, not icon fonts or image files
- Glyphs are `aria-hidden="true"` — purely decorative
- Size: 0.75em relative to parent text, or 12–16px standalone
- Color: `--color-accent` at 40–60% opacity, never 100% (they're atmospheric, not structural)

---

## 11. Decorative Elements

### 11.1 Constellation Line-Work

**What:** Thin gold lines connecting scattered star points, forming abstract geometric patterns. Think: simplified astrolabe, celestial map fragments, compass rose lines.

**Specs:**
- Stroke: `1px`, `--color-accent`, opacity 8–12%
- Style: `stroke-linecap: round`
- Position: Absolute, behind content, centered in the hero section
- Size: ~60% of the hero viewport, centered
- Complexity: 8–12 line segments, 15–20 star points (2px dots)
- Motion: Subtle 120s rotation (see Motion Guidelines)

### 11.2 Astrolabe Circles

**What:** Concentric circular arcs (not full circles — partial arcs) at varying radii, centered in the hero section.

**Specs:**
- Stroke: `1px`, `--color-accent`, opacity 6–10%
- Fill: None
- Style: `stroke-dasharray: 4 8` for some arcs (dotted), solid for others
- Radii: 3–4 arcs at 40%, 55%, 70%, 85% of the container
- Motion: Same 120s rotation, opposite direction to lines for parallax feel

### 11.3 Section Dividers

**What:** Thin gold horizontal lines separating sections.

**Specs:**
- Height: `1px`
- Background: `--color-accent`, opacity 40%
- Width: 60px (standard), 120px (footer)
- Margin: `--space-lg auto` (centered)
- Optional: Star glyph (✦) at center, 12px, `--color-accent` at 60%

### 11.4 Suit & Celestial Accent Marks

**What:** Tiny glyphs used as section markers or CTA bookends.

**Specs:**
- Characters: ✦ (star), ☉ (sun), ☽ (crescent moon)
- Size: 0.75em of parent text
- Color: `--color-accent` at 60% opacity
- Position: Flanking headings or CTAs with `margin: 0 --space-xs`

---

## 12. Implementation Notes

### 12.1 Tech Mapping

| Design Concept | Implementation |
|---|---|
| Design tokens | CSS custom properties on `:root` in `index.css` |
| Typography | Tailwind `fontFamily` config + `@apply` for token classes |
| Spacing scale | Tailwind `spacing` config extension |
| Color palette | Tailwind `colors` config extension |
| Decorative geometry | Inline SVG in Hero component, CSS-animated |
| Page entrance stagger | React state + CSS transitions, triggered on mount |
| Today's Reflection | Static array in `data/reflections.ts`, indexed by day-of-year |
| Responsive behavior | Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) |
| Focus rings | Tailwind `focus-visible:` variants |
| Reduced motion | `motion-safe:` and `motion-reduce:` Tailwind variants |

### 12.2 File Manifest

```
src/
├── pages/
│   └── HomePage.tsx              # Page component
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx       # Hero with decorative geometry
│   │   ├── PhilosophySection.tsx # "A Quiet Practice"
│   │   ├── TarotPrimer.tsx       # "How Tarot Works"
│   │   ├── DailyReflection.tsx   # Today's Reflection (with loading/fallback)
│   │   ├── ActionPanels.tsx      # Three CTA cards
│   │   ├── PrimaryCTA.tsx        # Draw Today's Card
│   │   ├── SecondaryCTA.tsx      # Start Reading / Card Library
│   │   └── Footer.tsx            # Minimal footer
│   ├── decorative/
│   │   ├── ConstellationLines.tsx # SVG line-work
│   │   ├── AstrolabeCircles.tsx   # SVG arcs
│   │   └── SectionDivider.tsx     # Gold divider with optional glyph
│   └── ui/
│       └── FocusRing.tsx         # Shared focus ring styles
├── data/
│   └── reflections.ts           # 30+ curated daily prompts
└── index.css                     # Design tokens, Tailwind config
```
