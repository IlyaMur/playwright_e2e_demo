import { Fixtures } from '@playwright/test';
import { Basket } from '../../pageObjects/components/Basket';
import { AccountPage } from '../../pageObjects/pages/desktop/AccountPage';
import { GalleryPage } from '../../pageObjects/pages/desktop/GalleryPage';
import { PaymentPage } from '../../pageObjects/pages/desktop/PaymentPage';
import { SigninPage } from '../../pageObjects/pages/desktop/SigninPage';
import { SignupPage } from '../../pageObjects/pages/desktop/SignupPage';
import { PageContextFixture } from '../contexts/staticMock.fixture';

export type PageObjectsFixture = {
  signupPage: SignupPage;
  signinPage: SigninPage;
  accountPage: AccountPage;
  galleryPage: GalleryPage;
  paymentPage: PaymentPage;
};

export const pageObjectsDesktopFixture: Fixtures<PageObjectsFixture, PageContextFixture> = {
  signupPage: async ({ contextPage }, use) => {
    await use(new SignupPage(contextPage));
  },
  signinPage: async ({ contextPage }, use) => {
    await use(new SigninPage(contextPage));
  },
  accountPage: async ({ contextPage }, use) => {
    await use(new AccountPage(contextPage));
  },
  galleryPage: async ({ contextPage }, use) => {
    await use(new GalleryPage(contextPage, new Basket()));
  },
  paymentPage: async ({ contextPage }, use) => {
    await use(new PaymentPage(contextPage));
  }
};
