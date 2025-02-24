import test, { Page } from '@playwright/test';
import { WebRoute } from '../../constants/routes';
import { UserData } from '../../services/users';
import { BasePage } from '../BasePage';
import { Button } from '../elements/Button';
import { Input } from '../elements/Input';

export class SigninPage extends BasePage {
  public readonly emailInput: Input;
  public readonly passwordInput: Input;
  public readonly loginButton: Button;
  public readonly goToSignupButton: Button;
  private readonly name = 'Signin';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.LOGIN, options);
    this.goToSignupButton = new Button('Go to Register button', page.getByTestId('go-to-signup-button'));
    this.loginButton = new Button('Login button', page.getByRole('button', { name: 'Login' }));
    this.emailInput = new Input('Email input', page.getByRole('textbox', { name: 'E-Mail' }));
    this.passwordInput = new Input('Password input', page.getByRole('textbox', { name: 'Password' }));
  }

  public async inputEmail(email: string) {
    await this.emailInput.typeText(email);
  }

  public async inputPassword(password: string) {
    await this.passwordInput.typeText(password);
  }

  public async loginUser({ email, password }: UserData) {
    await test.step('Login user by submiting login form', async () => {
      await this.inputEmail(email);
      await this.inputPassword(password);
      await this.loginButton.click();
      await test.step('Awaiting redirect to main page', async () => {
        await this.page.waitForURL(WebRoute.GALLERY);
      });
    });
  }
}
