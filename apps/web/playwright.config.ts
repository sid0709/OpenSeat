import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [["list"], ["../../tools/playwright-no-skips.mjs"]],
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    baseURL: "http://127.0.0.1:3000",
    channel: process.env.CI ? undefined : process.env.PLAYWRIGHT_CHANNEL,
    headless: true,
    trace: "on-first-retry",
  },

  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
