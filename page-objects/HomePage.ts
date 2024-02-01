import { Locator, Page } from "@playwright/test";
export class HomePage {
  page: Page;
  aboutUsButtonClick: Locator;
  whatWeDoButtonClick: Locator;
  ourTripsButtonClick: Locator;
  whereToGoButtonClick: Locator;
  reviewsButtonClick: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutUsButtonClick = page.locator("#about");
    this.whatWeDoButtonClick = page.locator("#what-we-do");
    this.ourTripsButtonClick = page.locator("#trips");
    this.whereToGoButtonClick = page.locator("#where");
    this.reviewsButtonClick = page.locator("#reviews");
  }

  async gotoHome() {
    await this.page.goto(
      "https://lukaskanka.cz/YourTravelAssistant/cestovatel.html"
    );
    return this;
  }

  async clickAboutUsButton() {
    await this.aboutUsButtonClick.click();
    return this;
  }

  async clickWhatWeDoButton() {
    await this.whatWeDoButtonClick.click();
    return this;
  }

  async clickOurTripsButton() {
    await this.ourTripsButtonClick.click();
    return this;
  }

  async clickWhereToGoButton() {
    await this.whereToGoButtonClick.click();
    return this;
  }

  async clickReviewButtonClick() {
    await this.reviewsButtonClick.click();
    return this;
  }
}
