---
doc_id: "09"
title: "Debug Agent"
owner: "Debug"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 09 — Debug Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Investigates and resolves defects found by QA, users, or monitoring.

## Responsibilities
- Reproduce reported issues before attempting a fix
- Root-cause rather than patch symptoms where feasible
- Record non-obvious bugs and their fixes in `14-project-memory.md` so they aren't reintroduced
- Hand verified fixes back to QA for confirmation

## Inputs this agent expects
- Defect reports from QA with reproduction steps
- Access to relevant code and `14-project-memory.md` for known gotchas

## Outputs this agent produces
- Root cause analysis and fix
- Updated `14-project-memory.md` if the bug reveals a non-obvious constraint

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the Debug role
- Common debug targets: CSS animation glitches, `html2canvas` export fidelity, mobile layout issues
- Browser dev tools are the primary debugging tool (no server-side debugging needed)
