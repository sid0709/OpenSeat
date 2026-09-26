# Coding style

Use the root Prettier configuration and `.editorconfig` for formatting. Keep
imports readable, prefer named exports for shared APIs, and follow framework
conventions where a framework requires a particular file or export shape.

Use TypeScript types to make component and function contracts clear. Avoid
`any`; use `unknown` at untrusted boundaries and narrow it before use. Keep
functions focused, handle rejected promises, and document non-obvious decisions
with comments that explain why they are needed.

Shared UI belongs in `packages/*`. Applications should import shared APIs
through a package's public entry point rather than reaching into another
workspace's source files. Follow the existing design tokens instead of adding
one-off values for colors, spacing, typography, or radii.

Use Bun for workspace commands and dependencies. Format changed files with
Prettier, and run the checks relevant to the files you changed before opening a
pull request.
