import { Page } from '@playwright/test';

export const blockStatic = async (page: Page): Promise<void> => {
  await page.route('**/*.{ico,png,jpg,mp3,woff,woff2,webp}', (route) => route.abort());
};
