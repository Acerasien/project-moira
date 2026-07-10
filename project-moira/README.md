# Moira — Documentation

> **This `docs/` folder is the single source of truth for this project.**
> If code and docs disagree, docs win until a human explicitly resolves the conflict.
> Every agent (human or AI) MUST read `docs/00-project-rules.md` and its own role doc before taking action.

## Status
- Created: 2026-07-09
- Last full sync: 2026-07-09
- Project stage: planning

## Doc Index

| # | Doc | Owning Agent(s) | Applies to this project? | Last updated |
|---|-----|------------------|---------------------------|--------------|
| 00 | [Project Rules](docs/00-project-rules.md) | All | Yes | 2026-07-09 |
| 01 | [System Overview](docs/01-system-overview.md) | All | Yes | 2026-07-09 |
| 02 | [Architecture](docs/02-architecture.md) | Architect | Yes | 2026-07-09 |
| 03 | [Orchestrator](docs/03-orchestrator.md) | Orchestrator | Yes | 2026-07-09 |
| 04 | [Planner Agent](docs/04-planner-agent.md) | Planner | Yes (light) | 2026-07-09 |
| 05 | [Architect Agent](docs/05-architect-agent.md) | Architect | Yes (light) | 2026-07-09 |
| 06 | [Backend Agent](docs/06-backend-agent.md) | Backend | No — stubbed | 2026-07-09 |
| 07 | [Frontend Agent](docs/07-frontend-agent.md) | Frontend | Yes | 2026-07-09 |
| 08 | [QA Agent](docs/08-qa-agent.md) | QA | Yes (light) | 2026-07-09 |
| 09 | [Debug Agent](docs/09-debug-agent.md) | Debug | Yes (light) | 2026-07-09 |
| 10 | [Security Agent](docs/10-security-agent.md) | Security | No — stubbed | 2026-07-09 |
| 11 | [DevOps Agent](docs/11-devops-agent.md) | DevOps | Yes (light) | 2026-07-09 |
| 12 | [Reporter Agent](docs/12-reporter-agent.md) | Reporter | Yes (light) | 2026-07-09 |
| 13 | [Agent Communication](docs/13-agent-communication.md) | All | Yes | 2026-07-09 |
| 14 | [Project Memory](docs/14-project-memory.md) | All | Yes | 2026-07-09 |
| 15 | [Workflow](docs/15-workflow.md) | All | Yes | 2026-07-09 |
| 16 | [Repository Structure](docs/16-repository-structure.md) | All | Yes | 2026-07-09 |
| 17 | [Coding Standard](docs/17-coding-standard.md) | Backend, Frontend | Yes | 2026-07-09 |
| 18 | [Testing Standard](docs/18-testing-standard.md) | QA | Yes | 2026-07-09 |
| 19 | [Deployment](docs/19-deployment.md) | DevOps | Yes | 2026-07-09 |
| 20 | [Roadmap](docs/20-roadmap.md) | Planner, Human | Yes | 2026-07-09 |

## How to use this doc set

1. **Before starting any task**, read `00-project-rules.md`, your own role doc, and `14-project-memory.md`.
2. **When you make a decision** that future agents need to know about, record it in `14-project-memory.md`, not just in chat/commit history.
3. **When you finish a task**, update the "Last updated" field for any doc you touched.
4. **If you disagree with a doc**, don't silently override it — propose the change, get it confirmed (by a human, or per the escalation rule in `00-project-rules.md`), then edit the doc.
5. **Run a sync pass periodically** (see `15-workflow.md`) to catch docs that have drifted from reality.
