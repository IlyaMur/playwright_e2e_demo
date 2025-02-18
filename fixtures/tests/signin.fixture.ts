import { Fixtures, request } from '@playwright/test';
import { ShopRoute } from '../../constants/routes';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { createUser } from '../../services/users';

export type LoginContextFixture = {
  createUser: void;
};

export const loginTestFixture: Fixtures<LoginContextFixture, PageContextFixture> = {
  createUser: [
    async ({ contextPage, email, password }, use) => {
      await createUser({ email, password }, await request.newContext());
      await contextPage.goto(ShopRoute.LOGIN);
      await use();
    },
    { auto: true }
  ]
};
