import { faker } from '@faker-js/faker';
import { Fixtures } from '@playwright/test';

export interface CommonUtilsFixture {
  password: string;
  email: string;
}

export const commonUtilsFixture: Fixtures<CommonUtilsFixture> = {
  password: async ({}, use) => {
    const password = faker.internet.password({ length: 10 });
    await use(password);
  },
  email: async ({}, use) => {
    const email = faker.internet.email();
    await use(email);
  }
};
