import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pageObjects/AccountPage';
import { SigninPage } from '../../pageObjects/SigninPage';
import { SignupPage } from '../../pageObjects/SignupPage';

export type PageObjectsFixture = {
  signupPage: SignupPage;
  loginPage: SigninPage;
  accountPage: AccountPage;
};

export const pageObjectsDesktopFixture: Fixtures<PageObjectsFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage));
  },
  loginPage: async ({ contextPage }, use) => {
    await use(new SigninPage(contextPage));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage));
  }
};
