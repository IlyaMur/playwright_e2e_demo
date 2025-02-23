import { Fixtures, PlaywrightTestArgs } from '@playwright/test';
import { mockStatic as mockStatic } from '../../utils/mocks';
import { PageContextFixture } from './types/pageObjectContext.fixture';

export const staticMockContextFixture: Fixtures<PageContextFixture, PlaywrightTestArgs> = {
  contextPage: async ({ page }, use) => {
    await mockStatic(page);
    await use(page);
    await page.unrouteAll();
  }
};
export { PageContextFixture };
