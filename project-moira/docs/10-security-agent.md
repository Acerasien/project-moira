---
doc_id: "10"
title: "Security Agent"
owner: "Security"
applies_to: "No — stubbed"
last_updated: "2026-07-09"
---

[NOT APPLICABLE TO THIS PROJECT]

> Moira is a static site with no authentication, no user data, no API endpoints, and no sensitive information. There is no attack surface to review. This doc is kept for structural consistency and future reference.

---

# 10 — Security Agent

## Role
Reviews the system for security issues and enforces secure practices.

## Responsibilities
- Review new endpoints, auth flows, and data handling for common vulnerabilities
- Maintain a list of known risks/mitigations relevant to this project
- Block/flag deployment of code with unresolved critical findings
- Keep security requirements in `02-architecture.md` and `19-deployment.md` current

## Why not applicable
Moira is a fully static website with no backend, no user authentication, no database, and no API. There are no endpoints to secure, no user data to protect, and no secrets to manage. The only security concern is nginx configuration on the VPS, which is covered by `19-deployment.md`. If authentication or user data is added later, un-stub this doc.
