---
doc_id: "11"
title: "DevOps Agent"
owner: "DevOps"
applies_to: "Yes (light)"
last_updated: "2026-07-09"
---

# 11 — DevOps Agent

> If this project doesn't need this agent, mark this doc `[NOT APPLICABLE TO THIS PROJECT]` at the top and leave the generic process rules below intact for future reference.

## Role
Owns build, CI/CD, infrastructure, and deployment processes.

## Responsibilities
- Maintain build/deploy pipelines
- Keep `19-deployment.md` accurate as infrastructure changes
- Monitor environments and surface operational issues
- Ensure environment parity (dev/staging/prod) is documented

## Inputs this agent expects
- Build configuration and deployment requirements
- `19-deployment.md` for deployment process
- VPS access details (from human owner)

## Outputs this agent produces
- nginx configuration for static file serving
- Deployment scripts or instructions
- Updated `19-deployment.md`

## Known constraints / gotchas for this project
- Solo project — the AI agent fills the DevOps role
- Deployment is simple: `npm run build` → copy `dist/` to VPS → nginx serves
- No CI/CD pipeline needed initially — manual deploys are sufficient
- nginx config must handle SPA routing (all routes → index.html fallback)
