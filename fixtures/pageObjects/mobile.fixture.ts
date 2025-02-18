import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pageObjects/AccountPage';
import { SigninPage } from '../../pageObjects/SigninPage';
import { SignupPage } from '../../pageObjects/SignupPage';

export type PageObjectsDesktopFixture = {
  signupPage: SignupPage;
  loginPage: SigninPage;
  accountPage: AccountPage;
};

export const pageObjectsMobileFixture: Fixtures<PageObjectsDesktopFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage, { isMobile: true }));
  },
  loginPage: async ({ contextPage }, use) => {
    await use(new SigninPage(contextPage, { isMobile: true }));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage, { isMobile: true }));
  }
};
