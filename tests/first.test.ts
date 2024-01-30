import { test, expect } from "@playwright/tests";
import { HomePage } from "../page-objects/HomePage";

// test odsouhlasení cookies
test("TestPage", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.gotoHome();
});
