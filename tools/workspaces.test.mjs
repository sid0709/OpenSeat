import assert from "node:assert/strict";
import { test } from "node:test";

import { validateWorkspaces } from "./check-workspaces.mjs";

const scripts = Object.fromEntries(
  ["lint", "typecheck", "test", "test:coverage", "build"].map((name) => [name, name]),
);
const library = (name, dependencies = {}) => ({
  name,
  directory: `packages/${name.split("/")[1]}`,
  scripts,
  exports: "./dist/index.js",
  dependencies,
});

test("accepts a directed graph and rejects cycles including development dependencies", () => {
  const a = library("@openseat/a", { "@openseat/b": "*" });
  const b = library("@openseat/b");
  assert.deepEqual(validateWorkspaces([a, b]), []);
  b.devDependencies = { "@openseat/a": "*" };
  assert.ok(validateWorkspaces([a, b]).some((error) => error.includes("cycle")));
});

test("rejects imports of applications and missing public package contracts", () => {
  const app = { ...library("@openseat/web"), directory: "apps/web" };
  const libraryWithAppDependency = library("@openseat/a", { "@openseat/web": "*" });
  assert.ok(
    validateWorkspaces([app, libraryWithAppDependency]).some((error) =>
      error.includes("cannot depend on app"),
    ),
  );
  assert.ok(validateWorkspaces([{ name: "@openseat/a", directory: "packages/a" }]).length >= 6);
});
