<!-- SEED: re-run $impeccable document once there's code to capture the actual tokens and components. -->

---
name: Moira
description: An immersive tarot reading experience — elegant, restrained, and deeply intentional.
---

# Design System: Moira

## 1. Overview

**Creative North Star: "The Private Library"**

Moira is not a carnival booth or a fortune-teller's tent. It is a quiet, wood-paneled reading room at dusk — a single gold lamp casting warmth across an open book. The mystery comes from restraint, not from flooding the interface with color. Every interaction feels like performing a quiet ritual: unhurried, deliberate, memorable.

The design draws from three reference points: **Notion** (clean spacing, clear hierarchy, calm interactions), **Arc Browser** (rounded surfaces, refined motion, premium micro-interactions), and **Spotify's editorial pages** (strong typography, confident dark theme, immersive layered depth). The goal is not to copy these products, but to emulate their sense of quality and focus.

**Key Characteristics:**
- Deep indigo darkness as the canvas; gold as the rare, earned accent
- Serif display typography for ritual and tradition; clean sans for effortless reading
- Motion that supports the ritual — purposeful, never decorative
- Generous breathing room; every element earns its place
- Rounded, refined surfaces with premium polish

This system explicitly rejects neon mysticism, purple gradients, glitter, glowing crystal balls, comic-style moons, and cheap "Halloween" aesthetics. The user should feel they are entering a private library of ancient wisdom — calm, intentional, and quietly extraordinary.

## 2. Colors

**The Restrained Rule.** The mystery comes from restraint. Gold is the only accent and it is used on ≤10% of any given screen — its rarity is the point. Never use gold as a large background; it appears only on active buttons, selected cards, icons, dividers, and small decorative elements.

### Primary
- **Deep Indigo** (#0B1020): The canvas. The background against which everything else sits. Dark enough to feel immersive, not pure black — there's a hint of blue depth.
- **Elevated Navy** (#141B2D): Surfaces that sit above the background — cards, panels, modals. A half-step lighter for subtle layering.

### Neutral
- **Border Slate** (#2A3550): Dividers, card borders, input strokes. Visible enough to define edges, muted enough to not compete.
- **Cream Text** (#F5F1E8): Primary body text. Warm off-white — reads like lamplight on paper, not sterile white.
- **Muted Lavender-Gray** (#A6AFC3): Secondary text, labels, placeholder content. Readable against the dark background without pulling focus.

### Accent
- **Warm Gold** (#C8A96A): The sole accent. Appears on active buttons, selected cards, icons, dividers, and small decorative elements. Never a background. Never more than 10% of the visible surface. Its scarcity creates its significance.

**The Gold Ceiling Rule.** Gold is a signal, not a surface. If gold appears on more than 10% of the viewport, the restraint has been broken. Scale back.

## 3. Typography

**Display Font:** Cormorant Garamond (with EB Garamond, Canela as alternatives)
**Body Font:** Inter (with Geist, Source Sans as alternatives)

**Character:** The serif display provides a timeless, ritualistic feel — it evokes ancient books, illuminated manuscripts, quiet libraries. The sans body keeps the reading experience effortless and modern. The contrast between them mirrors the app's duality: depth and accessibility.

### Hierarchy
- **Display** (Light 300, clamp(2.5rem, 6vw, 4.5rem), line-height 1.1): Hero headlines. The app name "Moira." Section titles on key pages. Used sparingly — one per view.
- **Headline** (Regular 400, clamp(1.5rem, 3vw, 2rem), line-height 1.2): Card names in readings. Spread titles. Major section headers.
- **Body** (Regular 400, 1rem/16px, line-height 1.6): Card interpretations, reading text, descriptions. Max line length 65–75ch for comfortable reading. This is where users spend most of their time — readability is paramount.
- **Label** (Medium 500, 0.875rem, letter-spacing 0.02em, uppercase): Spread position labels, navigation items, metadata. Small but deliberate.

[Font pairing to be finalized at implementation; the families above are the direction.]

## 4. Elevation

Moira is **flat by default, layered by intent.** Shadows are soft and diffuse — they suggest depth without calling attention to themselves. The primary layering mechanism is the two-step background surface: Deep Indigo (#0B1020) as the canvas, Elevated Navy (#141B2D) for cards and panels that float above.

Cards in a spread reading gain a subtle glow on hover — a soft gold halo at low opacity — signaling interactivity without breaking the quiet mood. No hard drop shadows, no aggressive layering.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Elevation appears only as a response to state — hover, selection, or focus. The depth should feel like lamplight catching the edge of a card, not a 3D extrusion.

## 5. Components

[No components yet — this is a pre-implementation seed. Components will be documented when the first build pass captures real tokens.]

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Indigo (#0B1020) as the dominant background canvas
- **Do** use Warm Gold (#C8A96A) sparingly — ≤10% of any viewport, on interactive elements only
- **Do** use the serif display font for card names, headings, and ritual moments
- **Do** use the sans body font for all interpretation text at a comfortable 65–75ch line length
- **Do** keep motion purposeful: card flip, card deal, text fade-in, soft hover glow
- **Do** give every element breathing room — generous padding, clear hierarchy, intentional whitespace
- **Do** round surfaces gently (8–12px) — refined, not sharp, not pill-shaped
- **Do** let the card artwork be the visual hero of every reading view

### Don't:
- **Don't** use purple gradients, neon accents, glitter, or glowing crystal ball effects
- **Don't** use comic-style moons, stars, or "Halloween" mysticism iconography
- **Don't** use gold as a large background surface — it is a signal, not a canvas
- **Don't** use floating particles, constant ambient motion, or excessive decorative animations
- **Don't** rush transitions — every animation should feel unhurried and deliberate
- **Don't** use hard drop shadows or aggressive 3D layering
- **Don't** use border-left or border-right greater than 1px as a colored accent stripe
- **Don't** use gradient text (`background-clip: text`) — emphasis comes from weight and size, not effects
- **Don't** let any element feel like a "carnival fortune-telling booth" — no neon, no glitter, no kitsch
- **Don't** clutter — if an element doesn't earn its place, remove it
