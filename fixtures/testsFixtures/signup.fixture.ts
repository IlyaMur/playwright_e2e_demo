import { Fixtures } from '@playwright/test';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { WebRoute } from '../../constants/routes';

export type SignupContextFixture = {
  loginUser: void;
};

export const signupTestFixture: Fixtures<SignupContextFixture, PageContextFixture> = {
  loginUser: [
    async ({ contextPage }, use) => {
      await contextPage.goto(WebRoute.LOGIN);
      await use();
    },
    { auto: true }
  ]
};
