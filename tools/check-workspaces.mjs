import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function requiredScripts(workspace) {
  const scripts = ["lint", "typecheck", "build"];
  if (!workspace.directory.startsWith("packages/")) scripts.push("test", "test:coverage");
  return scripts;
}

/** Validate workspace contracts and dependency direction before source linting. */
export function validateWorkspaces(workspaces) {
  const errors = [];
  const byName = new Map(workspaces.map((workspace) => [workspace.name, workspace]));
  if (byName.size !== workspaces.length) errors.push("Workspace names must be unique");
  for (const workspace of workspaces) {
    if (!String(workspace.name).startsWith("@openseat/"))
      errors.push(`${workspace.directory}: use @openseat scope`);
    for (const script of requiredScripts(workspace)) {
      if (!workspace.scripts?.[script]) errors.push(`${workspace.name}: missing ${script} script`);
    }
    if (workspace.directory.startsWith("packages/") && !workspace.exports)
      errors.push(`${workspace.name}: declare public exports`);
    for (const dependency of Object.keys({
      ...workspace.dependencies,
      ...workspace.devDependencies,
      ...workspace.peerDependencies,
      ...workspace.optionalDependencies,
    })) {
      const target = byName.get(dependency);
      if (dependency.startsWith("@openseat/") && !target)
        errors.push(`${workspace.name}: unknown workspace ${dependency}`);
      if (target?.directory.startsWith("apps/"))
        errors.push(`${workspace.name}: cannot depend on app ${dependency}`);
    }
  }
  const visited = new Set();
  function visit(name, stack = []) {
    if (stack.includes(name)) {
      errors.push(`Workspace cycle: ${[...stack, name].join(" -> ")}`);
      return;
    }
    if (visited.has(name)) return;
    const workspace = byName.get(name);
    for (const dependency of Object.keys({
      ...workspace.dependencies,
      ...workspace.devDependencies,
      ...workspace.peerDependencies,
      ...workspace.optionalDependencies,
    })) {
      if (byName.has(dependency)) visit(dependency, [...stack, name]);
    }
    visited.add(name);
  }
  for (const name of byName.keys()) visit(name);
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const workspaces = ["apps", "packages", "tools"].flatMap((root) =>
    readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const directory = `${root}/${entry.name}`;
        const manifest = JSON.parse(readFileSync(`${directory}/package.json`, "utf8"));
        const tsconfig = JSON.parse(readFileSync(`${directory}/tsconfig.json`, "utf8"));
        if (tsconfig.extends !== "../../tsconfig.base.json")
          throw new Error(`${directory}: extend shared tsconfig`);
        return { ...manifest, directory };
      }),
  );
  const errors = validateWorkspaces(workspaces);
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else console.log(`Validated ${workspaces.length} workspace(s)`);
}
