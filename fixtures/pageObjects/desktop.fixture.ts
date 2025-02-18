import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pages/pageObjects/AccountPage';
import { LoginPage } from '../../pages/pageObjects/LoginPage';
import { SignupPage } from '../../pages/pageObjects/SignupPage';

export type PageObjectsFixture = {
  signupPage: SignupPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
};

export const pageObjectsDesktopFixture: Fixtures<PageObjectsFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage));
  },
  loginPage: async ({ contextPage }, use) => {
    await use(new LoginPage(contextPage));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage));
  }
};
