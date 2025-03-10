import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pageObjects/pages/desktop/AccountPage';
import { SigninPage } from '../../pageObjects/pages/desktop/SigninPage';
import { SignupPage } from '../../pageObjects/pages/desktop/SignupPage';

export type PageObjectsMobileFixture = {
  signupPage: SignupPage;
  signinPage: SigninPage;
  accountPage: AccountPage;
};

export const pageObjectsMobileFixture: Fixtures<PageObjectsMobileFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage, { isMobile: true }));
  },
  signinPage: async ({ contextPage }, use) => {
    await use(new SigninPage(contextPage, { isMobile: true }));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage, { isMobile: true }));
  }
};
