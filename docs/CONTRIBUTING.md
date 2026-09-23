# Contributing to OpenSeat

This document describes the required workflow for contributing to OpenSeat.

## Development Model

OpenSeat uses trunk-based development.

`main` is the protected integration branch.

Contributors must not push directly to `main`. Changes must be made through short-lived branches and merged through pull requests.

## Branch Naming

Use one of the following prefixes:

- `feat/` for features
- `fix/` for bug fixes
- `chore/` for maintenance and tooling
- `refactor/` for code restructuring
- `docs/` for documentation
- `test/` for test-only changes
- `ci/` for CI/CD changes

Examples:

```text
feat/seat-selection
fix/avatar-sizing
chore/update-eslint
ci/add-staging-workflow