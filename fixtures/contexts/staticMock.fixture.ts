import { Fixtures, Page, PlaywrightTestArgs } from '@playwright/test';
import { blockStatic as mockStatic } from '../../utils/mocks';
import { CommonUtilsFixture } from '../utils/common.fixture';

export type PageContextFixture = CommonUtilsFixture & {
  contextPage: Page;
};

export const staticMockContextFixture: Fixtures<PageContextFixture, PlaywrightTestArgs> = {
  contextPage: async ({ page }, use) => {
    await mockStatic(page);
    await use(page);
  }
};
