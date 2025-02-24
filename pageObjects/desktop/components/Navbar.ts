import { Page } from '@playwright/test';
import { Button } from '../../elements/Button';

export class Navbar {
  public page: Page;
  public isMobile: boolean;
  public accountButton: Button;
  public artButton: Button;
  public checkoutButton: Button;

  constructor(page: Page, { isMobile } = { isMobile: false }) {
    this.page = page;
    this.isMobile = isMobile;
    this.accountButton = new Button('Account button', page.getByRole('link', { name: 'My Account' }));
    this.artButton = new Button('Art button', page.getByRole('link', { name: 'Art' }));
    this.checkoutButton = new Button('Checkout button', page.getByRole('link', { name: 'Checkout' }));
  }
}
