import { expect, test } from "@playwright/test";

test("home page loads successfully", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("body")).toBeVisible();
});
