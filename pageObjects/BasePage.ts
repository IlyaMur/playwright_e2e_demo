import test, { Page } from '@playwright/test';
import { Navbar } from '../ui/components/Navbar';
import { WebRoute } from '../constants/routes';

export abstract class BasePage {
  public readonly page: Page;
  public readonly navbar: Navbar;
  public readonly isMobile: boolean;
  protected readonly url: WebRoute;

  constructor(page: Page, url: WebRoute, options = { isMobile: false }) {
    this.page = page;
    this.isMobile = options.isMobile;
    this.navbar = new Navbar(page, options);
    this.url = url;
  }

  async visit() {
    await test.step(`Opening the url "${this.page}"`, async () => {
      await this.page.goto(this.url, { waitUntil: 'load' });
    });
  }

  async reload() {
    await test.step(`Reloading page with url ${this.url}`, async () => {
      await this.page.reload({ waitUntil: 'load' });
    });
  }
}
