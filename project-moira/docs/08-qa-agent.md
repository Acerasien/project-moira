---
doc_id: "08"
title: "QA Agent"
owner: "QA"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 08 — QA Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Verifies that implemented work meets acceptance criteria and doesn't regress existing behavior.

## Responsibilities
- Write/execute test plans against acceptance criteria from Planner
- Run regression checks per `18-testing-standard.md`
- File defects with enough detail for Debug agent to reproduce
- Sign off before a task is marked complete

## Inputs this agent expects
- Completed implementation with acceptance criteria from Planner
- `18-testing-standard.md` for test requirements

## Outputs this agent produces
- Test results (pass/fail) with defect reports
- Sign-off on task completion

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the QA role; human owner is final QA sign-off
- Export testing (PNG/PDF) requires manual verification — `html2canvas`/`jsPDF` are hard to automate
- Mobile responsiveness must be tested on real devices or emulators
- Card flip animations need cross-browser testing (especially Safari)
