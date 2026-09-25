import assert from "node:assert/strict";
import path from "node:path";
import { test } from "node:test";

import { ESLint, RuleTester } from "eslint";

import policy from "./eslint-policy.mjs";
import BrowserReporter from "./playwright-no-skips.mjs";
import UnitReporter from "./vitest-no-skips.mjs";

const tester = new RuleTester();
const filename = path.resolve("apps/web/components/ui/BoundaryProbe.tsx");
tester.run("workspace public boundaries", policy.rules["package-boundaries"], {
  valid: [
    { filename, code: 'import { Badge } from "./Badge";' },
    { filename, code: 'import { OpenSeatProvider } from "@openseat/design-system/theme";' },
  ],
  invalid: [
    {
      filename,
      code: 'import x from "../../../../packages/private/src";',
      errors: [{ messageId: "boundary" }],
    },
    {
      filename,
      code: 'export * from "@openseat/private/internal";',
      errors: [{ messageId: "boundary" }],
    },
    {
      filename,
      code: 'const x = import("@openseat/private/internal");',
      errors: [{ messageId: "boundary" }],
    },
    {
      filename,
      code: 'const x = require("@openseat/private/internal");',
      errors: [{ messageId: "boundary" }],
    },
  ],
});

test("typed source rejects undocumented APIs, any, floating promises and default exports", async () => {
  const eslint = new ESLint();
  const [result] = await eslint.lintText(
    "export default function probe(value: any) { Promise.resolve(value); return value; }",
    { filePath: "apps/web/components/ui/Badge.tsx" },
  );
  for (const rule of [
    "@typescript-eslint/no-explicit-any",
    "@typescript-eslint/no-floating-promises",
    "import/no-default-export",
    "jsdoc/require-jsdoc",
  ]) {
    assert.ok(
      result.messages.some((message) => message.ruleId === rule),
      `Expected ${rule}`,
    );
  }
});

test("lint rejects a disabled test and an untracked TODO", async () => {
  const eslint = new ESLint();
  const [result] = await eslint.lintText(
    'import { it } from "vitest";\n// TODO: later\nit.skip("missing", () => {});',
    { filePath: "apps/web/components/ui/Badge.test.tsx" },
  );
  for (const rule of ["vitest/no-disabled-tests", "policy/tracked-todos"])
    assert.ok(result.messages.some((message) => message.ruleId === rule));
});

test("runtime reporters reject skips that static analysis cannot detect", () => {
  const reporter = new UnitReporter();
  const testModule = {
    children: {
      allTests: () => [{ result: () => ({ state: "skipped" }), fullName: "conditional test" }],
    },
  };
  assert.throws(() => reporter.onTestRunEnd([testModule]), /Skipped/);
  assert.doesNotThrow(() => reporter.onTestRunEnd([]));
  const browser = new BrowserReporter();
  browser.onTestEnd({ title: "conditional test" }, { status: "skipped" });
  assert.deepEqual(browser.onEnd({ status: "passed" }), { status: "failed" });
});
