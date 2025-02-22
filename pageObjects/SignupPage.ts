import test, { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { WebRoute } from '../constants/routes';
import { UserData } from '../services/users';
import { Button } from './elements/Button';
import { Input } from './elements/Input';

export class SignupPage extends BasePage {
  public readonly emailInput: Input;
  public readonly passwordInput: Input;
  public readonly regButton: Button;
  private readonly name = 'Registration';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.SIGNUP, options);
    this.emailInput = new Input('Email input', page.getByRole('textbox', { name: 'E-Mail' }));
    this.passwordInput = new Input('Password input', page.getByRole('textbox', { name: 'Password' }));
    this.regButton = new Button('Button registration', page.getByRole('button', { name: 'Register' }));
  }

  public async submitForm() {
    await this.regButton.click();
  }

  public async inputEmail(email: string) {
    await this.emailInput.typeText(email);
  }

  public async inputPassword(password: string) {
    await this.passwordInput.typeText(password);
  }

  public async submitRegisterForm({ email, password }: UserData) {
    await test.step('Signup user by submiting register form', async () => {
      await this.inputEmail(email);
      await this.inputPassword(password);
      await this.submitForm();
    });
    await test.step('Awaiting redirect to Account page', async () => {
      await this.page.waitForURL(WebRoute.ACCOUNT);
    });
  }
}
