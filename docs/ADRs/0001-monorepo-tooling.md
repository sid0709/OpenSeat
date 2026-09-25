# ADR 0001: npm workspaces and Turborepo

- Status: Accepted
- Date: 2026-09-22

## Context

OpenSeat starts with one Next.js application and needs shared packages without
independent lockfiles or inconsistent build and test commands.

## Decision

Use npm workspaces with one root lockfile and Turborepo for dependency-aware tasks
and caching. npm ships with Node and minimizes onboarding requirements. Turborepo
adds incremental execution without imposing a framework or code generator.

```text
apps/*       deployable applications
packages/*   reusable libraries with public entry points
 tools/*     repository tooling (workspace packages or root scripts)
infra/*      deployment and infrastructure configuration
```

Use Node 24 and npm 11.13.0. `npm ci` is the reproducible installation command.
All packages extend `tsconfig.base.json` and use the root ESLint and Prettier policy.
Each workspace supplies lint, typecheck, test, test:coverage, and build scripts.
Only apps with browser behavior need e2e. Root commands orchestrate workspace tasks.

Libraries declare public `exports` and dependencies explicitly. Import another
workspace only by its package name, never a relative filesystem path or private
subpath. Libraries cannot depend on apps; apps cannot depend on other apps.
The lint pipeline checks the manifest graph for cycles and validates the script
contract; ESLint checks source cycles and import boundaries.

Turborepo hashes root policy/configuration along with package inputs. CI caches
`.turbo` per job; build outputs include `.next` and `dist`. E2E is never cached.

## Alternatives and consequences

pnpm offers efficient shared storage but introduces another required installation.
Yarn also works but offers no needed advantage for this initial repository. Nx has
useful generators and graph tooling but adds conventions beyond current needs.
npm plus Turbo keeps familiar package scripts and leaves migration possible.

Maintainers must add owners, public exports, scripts, tests, and TypeScript config
when creating a workspace. The graph validator makes omissions fail in CI.
