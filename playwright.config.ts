import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = 
{
  testDir: "./tests",
  timeout: 20 * 1000,

  expect: {
    timeout: 20 * 1000,
  },

  reporter: 'html',
  workers: 1,
  retries: 1,

  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'retain-on-failure',
    actionTimeout: 300000,
    navigationTimeout: 30000,
  },
};

export default config;
