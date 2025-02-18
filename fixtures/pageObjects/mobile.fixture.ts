import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pages/AccountPage';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';

export type PageObjectsDesktopFixture = {
  signupPage: SignupPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
};

export const pageObjectsMobileFixture: Fixtures<PageObjectsDesktopFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage, { isMobile: true }));
  },
  loginPage: async ({ contextPage }, use) => {
    await use(new LoginPage(contextPage, { isMobile: true }));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage, { isMobile: true }));
  }
};
