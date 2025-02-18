import { Page } from '@playwright/test';

export const mockStatic = async (page: Page): Promise<void> => {
  await page.route('**/*.{ico,png,jpg,webp}', (route) => route.abort());
};
