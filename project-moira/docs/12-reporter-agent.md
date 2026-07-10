---
doc_id: "12"
title: "Reporter Agent"
owner: "Reporter"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 12 — Reporter Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Summarizes project state for humans and keeps status-facing docs current.

## Responsibilities
- Produce periodic status summaries (progress vs. `20-roadmap.md`)
- Keep the doc index in `README.md` up to date (last-updated dates, applicability)
- Surface blockers or drift between docs and actual code state

## Inputs this agent expects
- Task completion status from QA and other agents
- `20-roadmap.md` for tracking progress

## Outputs this agent produces
- Status summaries for the human owner
- Updated doc index in `README.md`
- Drift reports when docs don't match code

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the Reporter role; human owner is the primary audience for status updates
- Reporting is informal — the AI agent summarizes progress conversationally rather than producing formal reports
