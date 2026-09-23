import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{ts,tsx}"],

    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      "react-hooks/exhaustive-deps": "error",

      "import/no-cycle": "error",
      "import/no-relative-packages": "error",
      "import/no-self-import": "error",
      "import/no-absolute-path": "error",

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  eslintConfigPrettier,

  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
]);

export default eslintConfig;
