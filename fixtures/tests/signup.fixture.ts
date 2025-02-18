import { Fixtures } from '@playwright/test';
import { ShopRoute } from '../../constants/routes';
import { PageContextFixture } from '../contexts/staticMock.fixture';

export type SignupContextFixture = {
  loginUser: void;
};

export const signupTestFixture: Fixtures<SignupContextFixture, PageContextFixture> = {
  loginUser: [
    async ({ contextPage }, use) => {
      await contextPage.goto(ShopRoute.LOGIN);
      await use();
    },
    { auto: true }
  ]
};
