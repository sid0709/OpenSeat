# Contributing

## Set up the repository

OpenSeat is a Bun workspace. From the repository root, install the locked
dependencies with:

```sh
bun install --frozen-lockfile
```

The application workspaces are `openseat-frontend` and `openseat-theme`; shared
UI belongs in `packages/*`. Read the [coding style](CODING_STYLE.md) before
making shared component or token changes.

## Validate changes

Run the checks that cover the files you changed:

```sh
bun run lint
bun run format:check
bun run --filter openseat-frontend lint
bun run --filter openseat-frontend build
```

Format files with `bun run format` when needed. Keep app and theme changes in
their own focused pull requests so infrastructure work can be reviewed without
changing product files.

## Commits and pull requests

Commit messages use Conventional Commits, for example
`fix: handle empty search results` or `ci: validate the workspace`. Open pull
requests against `main`, describe the behavior or policy change, and list the
checks you ran. Follow the review requirements shown by GitHub and resolve
review conversations before merging.

The repository's existing owner is `@sid0709`, requested by
[CODEOWNERS](../.github/CODEOWNERS). Discuss ownership changes with that owner
before proposing them.
