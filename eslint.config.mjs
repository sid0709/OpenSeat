import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/coverage/**",
    "openseat-frontend/**",
    "openseat-theme/**",
  ]),
  ...tseslint.configs.recommended,
  {
    files: ["packages/design-system/**/*.{ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["packages/design-system/src/theme/openseat.d.ts"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
  prettier,
]);
