---
doc_id: "01"
title: "System Overview"
owner: "All"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 01 — System Overview

## What this project is
Moira is a modern, elegant tarot reading web application built with React + Vite + TypeScript + Tailwind CSS. It provides an immersive tarot reading experience using a traditional 78-card Rider-Waite-Smith deck. Users can draw a daily single card or explore 10 curated spreads, with hand-crafted card interpretations blending educational foundation with warm, poetic delivery. The app is a static SPA deployable on a VPS with nginx — no backend, no AI, no user accounts.

## Core problem it solves
Provides a beautiful, accessible tarot reading experience that serves both curious beginners and seasoned enthusiasts — without requiring an internet connection for AI, creating an account, or relying on generic auto-generated interpretations.

## Key user flows
1. **Daily Draw** — User lands, taps to reveal a single card, reads its interpretation, optionally exports/saves.
2. **Full Spread Reading** — User browses 10 available spreads, picks one, shuffles and draws cards position by position, reveals and reads each card's meaning.
3. **Card Library** — User browses all 78 cards filtered by suit or arcana, taps a card to see its full upright and reversed interpretations.
4. **Export Reading** — After any reading, user can export as PNG or PDF to save or share.

## Out of scope
- AI/LLM-generated interpretations (all content is curated and pre-written)
- User accounts, authentication, or profiles
- Backend server or database (static site only)
- Multiplayer or social features
- Community-contributed interpretations
- E-commerce or paid readings
- Mobile native apps (responsive web only)

## Glossary
| Term | Definition |
|---|---|
| **Arcana** | The two divisions of a tarot deck: Major Arcana (22 trump cards) and Minor Arcana (56 suit cards) |
| **Spread** | A predefined layout of card positions, each with a specific meaning (e.g., Past/Present/Future) |
| **Upright / Reversed** | The two possible orientations of a drawn card, each with a distinct interpretation |
| **Rider-Waite-Smith (RWS)** | The most widely recognized tarot deck, published 1909, now in the public domain |
| **Suit** | The four categories of Minor Arcana: Cups, Pentacles, Swords, Wands |
| **Synthesis** | A summary interpretation that ties together all cards in a spread's positional context |
