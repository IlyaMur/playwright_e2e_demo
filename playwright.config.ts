import { defineConfig, devices } from '@playwright/test';

import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 5 : undefined,
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL,
    video: 'on',
    trace: 'on-first-retry',
    testIdAttribute: 'data-qa'
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/*.desktop.spec.ts'
    },
    {
      name: 'mobile',
      use: { ...devices['Galaxy S9+'] },
      testMatch: '**/*.mobile.spec.ts'
    }
  ],

  webServer: {
    command: process.env.CI ? './bin/my_app_linux' : './bin/my_app_mac',
    url: 'http://127.0.0.1:2221',
    reuseExistingServer: !process.env.CI
  }
});
