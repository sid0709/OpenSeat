# OpenSeat coding style

## Names and structure

Use camelCase for values/functions, PascalCase for components/types, and UPPER_SNAKE_CASE
for module constants. React component files use PascalCase (`Button.tsx`); other
files and folders use kebab-case. Framework-required names such as `page.tsx` and
`layout.tsx` take precedence. Co-locate `*.test.ts` / `*.test.tsx` with source.

Use named exports so APIs are easy to find and rename. Default exports are allowed
only where framework conventions or configuration loaders require them. Re-export
shared APIs from the package entry point; consumers must never import package internals.

## TypeScript and functions

Strict mode, typed linting, and exhaustive hook dependencies are mandatory. Do not
use implicit or explicit `any`. Narrow `unknown` at trust boundaries. Use type-only
imports. Handle every promise with `await`, return it, or explicitly attach error handling.

Functions have a maximum of 80 nonblank, noncomment lines and cyclomatic complexity
15, enforced by ESLint. Test suites are exempt from the line limit. The two existing
declarative design galleries have a 300-line limit, not a complexity exemption.
Extract business logic into small tested functions; do not add blanket lint suppressions.

## Errors

Validate external data at entry points. Throw `Error` objects with actionable context;
catch only where recovery, translation, or reporting is possible. Preserve the cause
when wrapping failures. Return typed expected outcomes for routine validation failures.
Never swallow exceptions or expose secrets, tokens, or internal stack traces to users.
Async event handlers must catch failures and show an appropriate user-facing state.

## Documentation and comments

JSDoc/TSDoc is required for every exported function, interface, type, and public value.
Describe the API contract, constraints, side effects, and meaningful failure conditions.
Comments explain why an unusual decision is needed; avoid narrating obvious syntax.
No commented-out code may merge: Git preserves history. Reviewers enforce this rule
because distinguishing explanatory examples from dead code requires context.

TODO comments must use `// TODO(#123): explanation` and reference a real tracked issue.
ESLint enforces the shape; reviewers verify the issue exists and remains relevant.
Do not use untracked FIXME comments. Exceptions require an issue, owner, removal date,
and a narrow documented rule override reviewed by the code owner.

## Formatting

Prettier is the only formatter. Run `npm run format`; do not hand-align code or add
competing format rules. `.editorconfig` defines indentation and line endings. Imports
are grouped and alphabetized by ESLint. Hooks check staged files, and CI checks the
entire repository with zero allowed warnings.
