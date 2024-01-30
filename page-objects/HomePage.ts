import { Locator, Page } from "@playwright/test";
export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHome() {
    await this.page.goto(
      "https://lukaskanka.cz/YourTravelAssistant/cestovatel.html"
    );
  }
}
