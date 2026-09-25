import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { coverageThresholds } from "../../tools/coverage-policy.mjs";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    include: ["**/*.test.{ts,tsx}"],
    reporters: ["default", "../../tools/vitest-no-skips.mjs"],
    coverage: {
      provider: "v8",
      include: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
      exclude: ["**/*.test.{ts,tsx}", "**/*.d.ts", "app/layout.tsx"],
      reporter: ["text", "html", "lcov"],
      thresholds: coverageThresholds,
    },
  },
});
