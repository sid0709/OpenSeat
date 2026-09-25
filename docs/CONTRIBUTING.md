# Contributing to OpenSeat

## First run

Use Node.js 24 and npm 11.13.0. From the repository root:

```sh
npm ci
npm run dev --workspace @openseat/web
```

Read [coding style](CODING_STYLE.md), [testing](TESTING.md),
[architecture](ADRs/0001-monorepo-tooling.md), and [release process](RELEASING.md).

## Branch and commit workflow

Branch from current `main`; keep branches small and short-lived (ideally under two days).
Use `feat/`, `fix/`, `chore/`, `refactor/`, `docs/`, `test/`, or `ci/` prefixes.
Rebase on main before requesting final review. Open a draft PR early for large changes.
Never push directly to main. Squash merge with a Conventional Commit PR title.

Commits use `type(scope): description`; scope is optional. Supported types include
`feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `ci`, `build`, `perf`, and `revert`.
Use `!` and a `BREAKING CHANGE:` footer for incompatible changes. Husky checks staged
files and commit messages; CI checks all files and the PR title independently.

Before review run:

```sh
npm run lint
npm run format:check
npm run typecheck
npm run test:coverage
npm run build
npm run e2e
```

Add a changeset for user-visible changes. Complete the PR template, link the issue,
explain migration requirements, and resolve conversations. Reviewers must inspect
error paths, tests, ownership, documentation, and security-sensitive changes.

## Ownership and reviews

[CODEOWNERS](../.github/CODEOWNERS) requests the existing owner, `@odu-523`.
Maintainers must verify this account has write access. New apps and packages must
have an explicit ownership entry before merging; the directory fallback prevents
unowned files while a workspace is being introduced.

Product changes require at least one independent owner approval. Changes to infra,
CI, shared tooling, dependencies, or governance require two independent approvals,
including a designated senior/platform owner. CODEOWNERS does not enforce counts
or seniority. Until maintainers assign a senior team and configure path rules, use
the conservative two-approval main protection described in [repository settings](REPOSITORY_SETTINGS.md).

Junior contributors: follow [junior contribution rules](JUNIOR_CONTRIBUTIONS.md).
The ownership policy is tracked separately in [issue #2](https://github.com/sid0709/OpenSeat/issues/2).
