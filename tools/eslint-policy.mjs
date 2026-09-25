import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function workspaceFor(filename) {
  let directory = path.dirname(filename);
  while (directory !== path.dirname(directory)) {
    const manifest = path.join(directory, "package.json");
    if (existsSync(manifest)) return { directory, ...JSON.parse(readFileSync(manifest, "utf8")) };
    directory = path.dirname(directory);
  }
}

const policy = {
  rules: {
    "package-boundaries": {
      meta: {
        type: "problem",
        schema: [],
        messages: {
          boundary:
            "Import through a declared workspace public entry point; apps must not depend on other apps.",
        },
      },
      create(context) {
        const owner = workspaceFor(context.filename);
        function check(node, source) {
          if (typeof source !== "string" || !owner) return;
          if (source.startsWith(".")) {
            const target = path.resolve(path.dirname(context.filename), source);
            if (path.relative(owner.directory, target).startsWith(".."))
              context.report({ node, messageId: "boundary" });
          }
          if (source.startsWith("@openseat/")) {
            const name = source.split("/").slice(0, 2).join("/");
            if (
              source !== name ||
              name === owner.name ||
              !{ ...owner.dependencies, ...owner.devDependencies, ...owner.peerDependencies }[name]
            )
              context.report({ node, messageId: "boundary" });
          }
        }
        return {
          ImportDeclaration(node) {
            check(node, node.source.value);
          },
          ExportNamedDeclaration(node) {
            if (node.source) check(node, node.source.value);
          },
          ExportAllDeclaration(node) {
            check(node, node.source.value);
          },
          ImportExpression(node) {
            check(node, node.source.value);
          },
          CallExpression(node) {
            if (node.callee.name === "require") check(node, node.arguments[0]?.value);
          },
        };
      },
    },
    "tracked-todos": {
      meta: {
        type: "problem",
        schema: [],
        messages: { issue: "Use TODO(#123): explanation with a tracked issue." },
      },
      create(context) {
        return {
          Program() {
            for (const comment of context.sourceCode.getAllComments()) {
              if (
                /\b(?:TODO|FIXME)\b/.test(comment.value) &&
                !/\bTODO\(#[1-9]\d*\):\s+\S/.test(comment.value)
              )
                context.report({ loc: comment.loc, messageId: "issue" });
            }
          },
        };
      },
    },
  },
};

export default policy;
