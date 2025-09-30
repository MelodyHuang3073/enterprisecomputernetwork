import { test, expect } from '@playwright/test';

test.describe('Club React 網站測試', () => {
  const baseURL = 'http://localhost:5173'; // Vite dev server 預設 port

  test('首頁 Hero 與最新消息 Modal 測試', async ({ page }) => {
    await page.goto(baseURL);

    // 檢查 Hero 標題
    const hero = page.getByTestId('hero');
    await expect(hero).toHaveText(/歡迎來到幼幼社/);

    // 點擊第一則最新消息 "點我看更多"
    const firstNewsMore = page.getByTestId('news-more-modal1');
    await firstNewsMore.click();

    // 檢查 Modal 是否出現
    const modal = page.getByTestId('news-modal-content-modal1');
    await expect(modal).toBeVisible();
    await expect(modal.getByText('2025/09/20 活動預告')).toBeVisible();

    // 關閉 Modal
    const closeBtn = page.getByTestId('news-modal-close-modal1');
    await closeBtn.click();
    await expect(modal).toBeHidden();
  });

  test('最新消息預覽文字檢查', async ({ page }) => {
    await page.goto(baseURL);

    const firstNewsItem = page.getByTestId('news-item-modal1');
    await expect(firstNewsItem).toContainText('我們將於 2025/09/20 舉辦秋季');
  });

  test('社團宗旨檢查', async ({ page }) => {
    await page.goto(baseURL);

    const purpose = page.getByTestId('purpose');
    await expect(purpose).toBeVisible();
    await expect(purpose).toContainText('幼幼社致力於關懷幼兒的成長與發展');
  });
});
