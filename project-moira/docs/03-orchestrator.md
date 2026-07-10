---
doc_id: "03"
title: "Orchestrator"
owner: "Orchestrator"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 03 — Orchestrator

## Role
The orchestrator sequences work across agents, resolves handoffs, and is the only agent allowed to invoke other agents directly.

## Responsibilities
- Break incoming requests into tasks and route them to the correct agent (see `13-agent-communication.md` for the routing table)
- Track task state across the doc set (do not let two agents work on conflicting parts of the codebase simultaneously)
- Enforce `00-project-rules.md` — reject/flag any agent action that skips required reading or bypasses escalation
- Trigger doc sync passes (see `15-workflow.md`) at defined checkpoints

## Routing logic
For Moira (solo + AI agent project), routing is simplified:
- All tasks originate from the human owner and are executed by the Zed AI agent
- The agent self-routes based on task type: frontend implementation, data/content work, deployment, or QA
- No formal agent handoff chain — the human is the orchestrator, the AI agent is the executor across all active roles
- For complex multi-agent work, the agent may spawn sub-agents for parallel tasks (e.g., card interpretation writing)

## Failure handling
- If the AI agent encounters a blocker (missing info, ambiguity), it escalates to the human owner with a clear question
- If sub-agents produce conflicting output, the main agent resolves by applying the documented rules and preferences, flagging unresolved conflicts for human review
- Failed builds/tests are reported immediately with context; the agent attempts up to 2 fixes before escalating
