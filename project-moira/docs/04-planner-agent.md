---
doc_id: "04"
title: "Planner Agent"
owner: "Planner"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 04 — Planner Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Turns requirements and roadmap items into concrete, sequenced tasks other agents can execute.

## Responsibilities
- Break down features/requests into atomic tasks with clear acceptance criteria
- Sequence tasks respecting dependencies (e.g. schema before backend, backend before frontend integration)
- Keep `20-roadmap.md` current as priorities shift
- Flag scope ambiguity back to the human rather than guessing

## Inputs this agent expects
- Feature requests and priorities from the human owner
- `20-roadmap.md` for current focus and backlog
- `02-architecture.md` for technical constraints

## Outputs this agent produces
- Atomic task breakdowns with acceptance criteria
- Updated `20-roadmap.md` with task sequencing

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the Planner role; no separate Planner agent exists
- Card content writing (156 interpretations) is the largest planning challenge — break into parallel batches
