# ADR 0001: Monorepo Tooling

- Status: Accepted
- Date: 2026-09-22
- Decision Owners: OpenSeat Engineering

## Context

OpenSeat requires a repository structure that can support multiple
applications, shared packages, development tools, and infrastructure
configuration while maintaining consistent engineering standards.

The repository must support:

- multiple applications under `apps/`
- reusable packages under `packages/`
- repository tooling under `tools/`
- infrastructure configuration under `infra/`
- shared linting, formatting, type-checking, testing, and build commands
- deterministic dependency installation
- dependency-aware task execution
- local and CI caching
- clear package boundaries
- incremental growth without requiring contributors to understand
  repository-specific tribal knowledge

The initial OpenSeat codebase consisted of a single Next.js application.
The architecture must allow the repository to grow without requiring a
future migration away from a single-project layout.

## Decision

OpenSeat will use:

1. npm workspaces for dependency and workspace management.
2. Turborepo for task orchestration and caching.
3. A single repository-level `package-lock.json`.
4. A standard workspace layout:

```text
apps/
packages/
tools/
infra/