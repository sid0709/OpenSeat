# Production infrastructure audit

Audit of the requested baseline, 2026-09-24. This distinguishes existing work,
completed repository changes, and settings that require a maintainer/provider.

## Already present before this change

- npm workspaces and Turbo, standard `apps/`, `packages/`, `tools/`, `infra/` layout,
  one lockfile, and shared strict TypeScript configuration.
- Web app typed ESLint rules, import-order/cycle rules, zero-warning lint command.
- Separate lint, format, typecheck, unit, build, and e2e CI jobs; npm install caching.
- Prettier, Husky, commitlint, and lint-staged, but only scoped to the web app.
- An 80% coverage threshold, but only imported/tested files were measured.
- `.editorconfig`, PR checklist, partial docs, and an ownership file.

## Incomplete items implemented in this change

| Scope                    | Gap found                                                      | Completed repository change                                                                                                                        |
| ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace policy         | No manifest cycle/direction validation or contributor contract | Shared root lint config; graph validator, required scripts/shared tsconfig, public library exports; policy regression tests                        |
| Lint and format          | Hooks and formatter missed root/future packages                | Root hooks, lint-staged, Prettier and commitlint; full-repository zero-warning lint/format CI                                                      |
| Boundaries               | Relative/package-private access insufficiently guarded         | ESLint public-entry boundary checks for imports, re-exports, require, and dynamic literal imports; manifest cycles checked by lint                 |
| Coding style             | Document ended inside a code block                             | Naming, exports, function/complexity limits, errors, JSDoc/TSDoc, tracked TODOs, review rules, root style link                                     |
| Onboarding and branching | Contribution guide and ADR truncated                           | Completed setup, trunk workflow, review checklist, architecture rationale, junior rules and issue #2 cross-reference                               |
| Releases                 | Empty workflow; no Changesets                                  | SemVer/Changesets configuration, example release note, version scripts and version-PR workflow; private app is never npm-published                 |
| Ownership                | Owner names lacked GitHub `@` syntax                           | Corrected existing owner and app/package/tool/infra/governance coverage; documented approval counts and live setup                                 |
| CI                       | No task cache or PR-title validation                           | Per-job Turbo caches, policy tests, Conventional Commit PR-title check including title edits, Changesets validation                                |
| Testing                  | Coverage only represented Badge; no skip protection            | 12 behavior tests, explicit source coverage, shared threshold with documented overrides, static and runtime skip/focus protection                  |
| Browser tests            | Basic body visibility on dev server                            | Production-server smoke test verifies document shell, navigation, gallery, and theme interaction                                                   |
| Staging                  | Empty workflow                                                 | GitHub Pages staging workflow, exact-SHA static export, isolated environment/concurrency, and `/OpenSeat` asset handling; issue #5 cross-reference |

## Not complete: external setup required

1. **Main branch enforcement:** verify/apply required checks, code-owner review,
   two approvals, stale-review dismissal, linear history, no direct pushes, no force
   pushes, no deletion, and administrator enforcement. Local files cannot activate
   these settings. Follow [repository settings](REPOSITORY_SETTINGS.md).
2. **Reviewer authority:** verify `@odu-523` has write access and designate senior
   reviewers. No team or second approver has been supplied. Path-sensitive senior
   enforcement remains pending; issue #2 owns the final assignment.
3. **Release automation credentials:** provision the release GitHub App and allow
   PR creation, or use the documented manual version PR process. No package has
   been published. Future public-library publishing needs its own registry setup.
4. **Actual staging activation:** enable GitHub Pages with “GitHub Actions” as its
   source, create the protected `staging` environment, set its environment URL, and
   verify the first deployment and rollback. The repository workflow and static
   export are complete; production/Athens AI resources were not configured.

The GitHub CLI is unavailable here, and live repository administration was not
verified. The issue must remain open until the external setup is completed.

## Validation

- Root lint and formatting checks, TypeScript check, and production Next build.
- 12 unit tests; source coverage: 100% lines/statements/functions, 98.55% branches.
  Next's root layout is covered by the browser smoke test rather than unit coverage.
- Infrastructure policy tests validate boundaries, manifest cycles, typed lint,
  documentation requirements, tracked TODOs, and static/runtime skip rejection.
- Production browser scenario passes using installed Chrome via
  `PLAYWRIGHT_CHANNEL=chrome`. Downloading Playwright's pinned browser timed out;
  the exact pinned Chromium run remains for CI.
- Changesets recognizes the web patch release; workflow YAML parses successfully.
- Root Husky hooks activated. No commits, pushes, deployment, or publication performed.
- `npm run github:check` provides a read-only live audit; `npm run github:apply`
  applies main protection, the staging environment branch policy, and Pages workflow
  mode when run with an administrator token. It never handles release secret values.
