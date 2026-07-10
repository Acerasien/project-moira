---
doc_id: "18"
title: "Testing Standard"
owner: "QA"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 18 — Testing Standard

## Test types required
| Type | Required for | Tooling |
|---|---|---|
| Unit | Services (cardService, spreadService), data validation, utility functions | Vitest |
| Component | Card components, SpreadBoard, Interpretation display | Vitest + React Testing Library |
| Snapshot | Card/spread data files (ensures no malformed data) | Vitest |
| End-to-end | Not required initially — manual QA for export and animations | N/A |

## Coverage expectations
- Services must have 100% coverage of public API surface
- Card data files must pass validation snapshot tests
- Critical user paths (draw card, reveal, export) must have component tests
- No strict percentage threshold — focus on meaningful tests over coverage metrics

## What QA checks before sign-off
- [ ] Acceptance criteria met
- [ ] No regression in existing tests
- [ ] Edge cases from `14-project-memory.md` re-verified
- [ ] Security-sensitive changes reviewed by Security agent (if applicable)

## Defect report format
- **Title:** Clear one-line summary
- **Steps to reproduce:** Minimal numbered steps
- **Expected behavior:** What should happen
- **Actual behavior:** What happened instead
- **Environment:** Browser, OS, screen size
- **Screenshots:** If visual (layout, animation, export)
