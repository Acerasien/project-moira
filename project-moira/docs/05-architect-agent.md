---
doc_id: "05"
title: "Architect Agent"
owner: "Architect"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 05 — Architect Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Owns system design and technical decisions; keeps `02-architecture.md` accurate.

## Responsibilities
- Design or approve component structure, data models, and integration points before implementation starts
- Review significant technical decisions from other agents for architectural consistency
- Update `02-architecture.md` whenever a structural decision is made
- Identify when a request requires a new architectural decision vs. fits existing design

## Inputs this agent expects
- Design proposals and technical decisions from Planner or human owner
- `02-architecture.md` for current architectural state

## Outputs this agent produces
- Updated `02-architecture.md` reflecting new decisions
- Component and data model designs

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the Architect role; no separate Architect agent exists
- Architecture is intentionally simple: static SPA, no backend, no database
- Key constraint: everything must work as static files served by nginx
