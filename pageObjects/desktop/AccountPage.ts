import test, { Page } from '@playwright/test';
import { WebRoute } from '../../constants/routes';
import { BasePage } from '../BasePage';
import { TextElement } from '../elements/TextField';

export class AccountPage extends BasePage {
  public readonly userData: TextElement;
  private readonly name = 'Account';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.ACCOUNT, options);
    this.userData = new TextElement('User data', page.getByText('My AccountEmail:'));
  }

  async assertUserData(userData: string) {
    await test.step(`Assert ${this.name} contains data ${userData}`, async () => {
      await this.userData.containsValue(userData);
    });
  }
}
