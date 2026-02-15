---
created: 2026-02-01T11:08
title: Configure lint on the web project
area: tooling
files: []
---

## Problem

The 8bitcn-ui web project doesn't have a lint script configured. Running `npm run lint` or `bun run lint` fails with "Script not found".

The project uses `ultracite` for checking (via `pnpm check` / `bun run check`), but there's no dedicated lint command that can be run in isolation or integrated into the CI pipeline.

This was discovered during Phase 2 execution when trying to verify component transformations with lint checks.

## Solution

TBD - Options include:
- Add ESLint configuration and script
- Expose the ultracite check as a lint alias
- Add both for different use cases (fast ultracite for commits, full ESLint for CI)
