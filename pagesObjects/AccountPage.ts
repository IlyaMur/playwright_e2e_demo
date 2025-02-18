import test, { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { TextField } from '../ui/elements/TextField';
import { WebRoute } from '../constants/routes';

export class AccountPage extends BasePage {
  public readonly userData: TextField;
  private readonly name = 'Account';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.ACCOUNT, options);
    this.userData = new TextField('User data', page.getByText('My AccountEmail:'));
  }

  async assertUserData(userData: string) {
    await test.step(`Assert ${this.name} contains data ${userData}`, async () => {
      await this.visit();
      await this.userData.containsValue(userData);
    });
  }
}
