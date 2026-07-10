---
doc_id: "00"
title: "Project Rules"
owner: "All"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 00 — Project Rules

## Purpose
This document is the constitution for every agent working on Moira. It is read first, before any role-specific doc.

## Non-negotiable rules

1. **Docs are the source of truth.** If code, comments, chat history, or memory disagree with a doc in this folder, the doc wins until a human explicitly updates it. Agents must not silently act against a documented rule.
2. **Read before you act.** Every agent must read `00-project-rules.md`, its own role doc (e.g. `06-backend-agent.md`), and `14-project-memory.md` before starting a task.
3. **Record decisions, don't just make them.** Any decision that affects future work (a chosen library, a rejected approach, a scope change) gets written to `14-project-memory.md` in the same session it's made.
4. **Stay in your lane, communicate across it.** Agents work within their role's boundaries (see `13-agent-communication.md`) and hand off through the orchestrator, not by directly rewriting another agent's domain without coordination.
5. **No undocumented scope changes.** If a task requires deviating from `02-architecture.md` or `20-roadmap.md`, flag it and update the doc first — don't just build the deviation.
6. **Escalate conflicts, don't resolve them silently.** If two docs conflict, or a doc conflicts with an explicit human instruction, stop and surface the conflict rather than picking one arbitrarily.
7. **Keep docs in sync.** Whoever changes a system's behavior updates the corresponding doc in the same pass — not "later."

## Escalation path
The human owner (you) is the final decision-maker. When an agent encounters a conflict between docs, or between a doc and an explicit instruction, it must surface the conflict clearly and await human resolution. Do not resolve conflicts silently.

## Project scale
Solo developer with AI agent assistance (via Zed). Role docs 04–12 that are marked "stubbed" are kept for structural consistency but contain only generic content. Only Frontend (07) is fully active. Backend (06) and Security (10) are explicitly not applicable.
