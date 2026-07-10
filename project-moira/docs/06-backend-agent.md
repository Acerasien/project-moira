---
doc_id: "06"
title: "Backend Agent"
owner: "Backend"
applies_to: "No — stubbed"
last_updated: "2026-07-09"
---

[NOT APPLICABLE TO THIS PROJECT]

> Moira is a static SPA with no backend, no API, and no database. There is no server-side code to implement. This doc is kept for structural consistency and future reference.

---

# 06 — Backend Agent

## Role
Implements server-side logic, APIs, and data-layer code.

## Responsibilities
- Implement endpoints/services per the architecture and current task spec
- Write tests per `18-testing-standard.md`
- Never change a public API contract without flagging it to Architect and Frontend agents
- Follow `17-coding-standard.md` for all code produced

## Why not applicable
Moira has no backend component. All logic runs client-side in the browser. Card data, spread definitions, and interpretations are static TypeScript modules compiled at build time. If a backend is added later (e.g., for user accounts or reading history), un-stub this doc.
