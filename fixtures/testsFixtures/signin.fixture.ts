import { Fixtures, request } from '@playwright/test';
import { WebRoute } from '../../constants/routes';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { createUser } from '../../services/users';

export type SigninContextFixture = {
  signinUser: void;
};

export const signinTestFixture: Fixtures<SigninContextFixture, PageContextFixture> = {
  signinUser: [
    async ({ contextPage, email, password }, use) => {
      await createUser({ email, password }, await request.newContext());
      await contextPage.goto(WebRoute.LOGIN);
      await use();
    },
    { auto: true }
  ]
};
