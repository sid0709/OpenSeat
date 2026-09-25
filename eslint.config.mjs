import path from "node:path";

import vitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";

import policy from "./tools/eslint-policy.mjs";

export default defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/out/**",
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/next-env.d.ts",
    "**/playwright-report/**",
    "**/test-results/**",
  ]),
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    plugins: { policy, jsdoc },
    settings: {
      "import/internal-regex": "^@/",
      "import/resolver": {
        typescript: {
          project: [
            "apps/*/tsconfig.json",
            "packages/*/tsconfig.json",
            "tools/*/tsconfig.json",
          ].map((pattern) => path.join(import.meta.dirname, pattern).replaceAll("\\", "/")),
        },
      },
      next: { rootDir: path.join(import.meta.dirname, "apps/web/") },
    },
    rules: {
      "react-hooks/exhaustive-deps": "error",
      "import/no-cycle": "error",
      "import/no-relative-packages": "error",
      "import/no-self-import": "error",
      "import/no-absolute-path": "error",
      "import/no-default-export": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "policy/package-boundaries": "error",
      "policy/tracked-todos": "error",
      complexity: ["error", 15],
      "max-lines-per-function": ["error", { max: 80, skipBlankLines: true, skipComments: true }],
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: true,
          contexts: [
            "TSInterfaceDeclaration",
            "TSTypeAliasDeclaration",
            "ExportNamedDeclaration > VariableDeclaration",
          ],
          require: { FunctionDeclaration: true },
        },
      ],
    },
  },
  {
    files: [
      "**/*.config.{js,mjs,ts,mts}",
      "tools/**/*.mjs",
      "apps/*/app/**/{page,layout,loading,error,not-found,template,default}.tsx",
    ],
    rules: { "import/no-default-export": "off" },
  },
  {
    files: ["**/*.config.{js,mjs,ts,mts}", "tools/**/*.mjs"],
    rules: { "jsdoc/require-jsdoc": "off" },
  },
  {
    files: ["**/*.test.{js,mjs,cjs,ts,tsx}", "**/*.spec.{js,mjs,cjs,ts,tsx}"],
    plugins: { vitest },
    rules: {
      "vitest/no-disabled-tests": "error",
      "vitest/no-focused-tests": "error",
      "max-lines-per-function": "off",
    },
  },
  // Declarative design-gallery markup has no business logic; keep complexity enforced.
  {
    files: ["apps/web/app/style-guide/page.tsx", "apps/web/components/ui/TokenDemo.tsx"],
    rules: {
      "max-lines-per-function": ["error", { max: 300, skipBlankLines: true, skipComments: true }],
    },
  },
  {
    files: ["**/*.config.{js,mjs,ts,mts}"],
    rules: { "policy/package-boundaries": "off", "import/no-relative-packages": "off" },
  },
  prettier,
]);
