import { expect, test } from "@playwright/test";

test("home page uses the shared document shell and links to the design gallery", async ({
  page,
}) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBe(true);
  await expect(page).toHaveTitle("OpenSeat");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("link", { name: "Design tokens" }).click();
  await expect(page.getByRole("heading", { name: "OpenSeat style guide" })).toBeVisible();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Light", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
