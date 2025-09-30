import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',       // 放測試檔的資料夾
  timeout: 30 * 1000,       // 單個測試最大執行時間 (30秒)
  retries: 0,               // 失敗重試次數
  reporter: [['list'], ['html']], // 測試結果報告
  use: {
    headless: false,        // false: 開啟瀏覽器介面，true: 不開啟
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
