import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ["src/theme/openseat.d.ts"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
]);
