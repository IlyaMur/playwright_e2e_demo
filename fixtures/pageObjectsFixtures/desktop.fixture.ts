import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { AccountPage } from '../../pageObjects/desktop/AccountPage';
import { SigninPage } from '../../pageObjects/desktop/SigninPage';
import { SignupPage } from '../../pageObjects/desktop/SignupPage';
import { GalleryPage } from '../../pageObjects/desktop/GalleyPage';
import { PaymentPage } from '../../pageObjects/desktop/PaymentPage';
import { Basket } from '../../pageObjects/desktop/components/Basket';

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
