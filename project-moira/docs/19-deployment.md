---
doc_id: "19"
title: "Deployment"
owner: "DevOps"
applies_to: "Yes"
last_updated: "2026-07-09"
---

# 19 — Deployment

## Environments
| Environment | Purpose | URL/access |
|---|---|---|
| Local | Development | `http://localhost:5173` (Vite dev server) |
| Production | Live site | VPS with nginx serving static build output |

## Deployment process
1. Run `npm run build` — Vite outputs to `dist/`
2. Verify build locally: `npm run preview`
3. Copy `dist/` contents to VPS (rsync, scp, or git pull + build on server)
4. nginx serves `dist/` as document root
5. Verify production URL loads correctly

No CI/CD pipeline required initially — manual deploy is sufficient for solo use.

## Rollback procedure
1. Keep previous `dist/` backup before each deploy
2. To rollback: restore previous `dist/` directory and reload nginx
3. nginx config should be version-controlled in the repo

## Secrets / config management
No secrets required — Moira is a static site with no API keys, database credentials, or auth tokens. If analytics or other services are added later, use environment variables (`.env` file, not committed) and nginx `env` directives.

## Monitoring & alerts
Minimal for solo use:
- nginx access/error logs on VPS
- Optional: Uptime monitoring via a free service (e.g., UptimeRobot)
- No application-level monitoring needed (static site, no backend)
