# Testing standard

Unit tests live next to source as `*.test.ts` or `*.test.tsx`. Test observable behavior,
error paths, defaults, and boundary cases. Browser tests live in each app's `e2e/`.
Run unit coverage with `npm run test:coverage`; run production browser tests with
`npm run build` followed by `npm run e2e`.

The shared minimum is 80% lines, statements, functions, and branches. Include all
runtime source, including files never imported by tests. Generated files, declarations,
and tool configuration are not runtime source. The Next root layout is verified by
e2e because its font loader and generated route types require Next's runtime.

Packages may override coverage thresholds in their Vitest configuration only with
a tracked issue, owner approval, rationale, and expiry documented alongside it.
Do not reduce coverage by excluding untested business logic. CI fails below thresholds.

Focused, skipped, todo, and conditional skip tests cannot silently pass the gates.
Lint rejects disabled tests; runtime reporters reject skips/todos. Do not merge
failing tests. Any temporary exception must be tracked, narrowly implemented, dated,
and reviewed by the owner; there are no active exceptions in this baseline.

For local browser setup, run `npx playwright install chromium` once. If the download
is unavailable and Chrome is installed, set `PLAYWRIGHT_CHANNEL=chrome` locally
(PowerShell: `$env:PLAYWRIGHT_CHANNEL='chrome'`) before `npm run e2e`. CI always
uses Playwright's pinned Chromium, regardless of this override.
