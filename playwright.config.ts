import { defineConfig, devices } from '@playwright/test'

import { env } from './tests/utils'

export default defineConfig({
  testDir: '.',
  outputDir: './tests/.output',
  snapshotDir: './tests/.snapshots',
  fullyParallel: true,
  forbidOnly: env.ci,
  retries: env.ci ? 2 : 0,
  workers: env.ci ? 1 : undefined,
  reporter: [[env.ci ? 'html' : 'list', { outputFolder: './tests/.report' }]],
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  use: {
    baseURL: env.app.url,
    trace: env.ci ? 'on-first-retry' : 'off',
  },
  webServer: {
    command: env.ci ? 'pnpm preview' : 'pnpm dev',
    url: env.app.url,
    reuseExistingServer: !env.ci,
  },
})
