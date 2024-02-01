import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";

// test odsouhlasení cookies
test("Menu button test", async ({ page }) => {
  const homePage = new HomePage(page);
  await await (
    await (
      await (
        await (
          await (await homePage.gotoHome()).clickAboutUsButton()
        ).clickWhatWeDoButton()
      ).clickOurTripsButton()
    ).clickWhereToGoButton()
  ).clickReviewButtonClick();
});
