import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// API tests often need different baseURL and faster timeouts.
dotenv.config({ path: `.env.${process.env.ENV || 'local'}` });

export default defineConfig({
  testDir: './tests/api',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    // Example API base url (can be overridden via env)
    // Using jsonplaceholder because some demo APIs are protected by anti-bot layers (403).
    baseURL: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    trace: 'on-first-retry'
  },
});
