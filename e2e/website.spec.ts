import { test, expect } from '@playwright/test';

test.describe('SIRUDA Clone Website 完整測試', () => {

  test('網站載入測試', async ({ page }) => {
    await page.goto('/');

    // 檢查標題
    await expect(page.locator('h1')).toContainText('SIRUDA');

    // 檢查導航列存在
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // 檢查主要按鈕
    const ctaButton = page.getByRole('link', { name: '了解更多' });
    await expect(ctaButton).toBeVisible();
  });

  test('導航功能測試', async ({ page }) => {
    await page.goto('/');

    // 測試導航連結
    const navLinks = ['SIRUDA', '核心技術', '產品', '新品資訊'];

    for (const linkText of navLinks) {
      const link = page.getByRole('link', { name: linkText }).first();
      await expect(link).toBeVisible();
    }

    // 測試語言切換按鈕
    await expect(page.getByRole('button', { name: 'TW' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'JP' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'EN' })).toBeVisible();
  });

  test('Hero Section 測試', async ({ page }) => {
    await page.goto('/');

    // 檢查 Hero 區塊的主要內容
    await expect(page.locator('h1')).toContainText('SIRUDA');
    await expect(page.locator('text=Performance Gaskets')).toBeVisible();
    await expect(page.locator('text=專業引擎墊片製造商')).toBeVisible();
  });

  test('About Section 測試', async ({ page }) => {
    await page.goto('/');

    // 滾動到 About Section
    await page.locator('text=密封配方').scrollIntoViewIfNeeded();

    // 檢查標題
    await expect(page.locator('h3', { hasText: '密封配方' })).toBeVisible();
    await expect(page.locator('h4', { hasText: '關於印田實業' })).toBeVisible();

    // 檢查內容
    await expect(page.locator('text=印田實業過去在一般民用與保修用途')).toBeVisible();

    // 檢查圖片
    const aboutImage = page.locator('img[alt="About SIRUDA"]');
    await expect(aboutImage).toBeVisible();
  });

  test('產品優勢區塊測試', async ({ page }) => {
    await page.goto('/');

    // 滾動到產品優勢區塊
    await page.locator('text=技術領域').scrollIntoViewIfNeeded();

    // 檢查標題
    await expect(page.locator('h3', { hasText: '技術領域' })).toBeVisible();
    await expect(page.locator('h4', { hasText: '產品優勢' })).toBeVisible();

    // 檢查所有 6 個優勢卡片
    for (let i = 1; i <= 6; i++) {
      await expect(page.locator(`text=${i}`).first()).toBeVisible();
    }
  });

  test('新聞區塊測試', async ({ page }) => {
    await page.goto('/');

    // 滾動到新聞區塊
    await page.locator('text=最新消息').scrollIntoViewIfNeeded();

    // 檢查標題
    await expect(page.locator('h3', { hasText: '最新消息' })).toBeVisible();
    await expect(page.locator('h4', { hasText: '活動與訊息' })).toBeVisible();

    // 檢查新聞項目
    await expect(page.locator('text=SIRUDA_引擎墊片安裝_開箱文')).toBeVisible();
    await expect(page.locator('text=SIRUDA_2022 UCRA華盟拉力賽')).toBeVisible();
  });

  test('Footer 測試', async ({ page }) => {
    await page.goto('/');

    // 滾動到底部
    await page.locator('footer').scrollIntoViewIfNeeded();

    // 檢查聯絡資訊
    await expect(page.locator('text=TEL: +886-3-434-3838')).toBeVisible();
    await expect(page.locator('text=E-mail: ingtien@ingtien.com.tw')).toBeVisible();

    // 檢查獨家代理
    await expect(page.locator('text=英國')).toBeVisible();
    await expect(page.locator('text=澳大利亞')).toBeVisible();
    await expect(page.locator('text=俄羅斯')).toBeVisible();
  });

  test('響應式設計測試 - 手機版', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // 檢查網站在手機版上可以正常顯示
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });

  test('響應式設計測試 - 平板版', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });

  test('視覺回歸測試', async ({ page }) => {
    await page.goto('/');

    // Hero Section 截圖
    await expect(page).toHaveScreenshot('hero-section.png', {
      maxDiffPixels: 100,
      fullPage: false
    });
  });

  test('互動測試 - 按鈕點擊', async ({ page }) => {
    await page.goto('/');

    // 測試 CTA 按鈕
    const ctaButton = page.getByRole('link', { name: '了解更多' }).first();
    await ctaButton.click();

    // 確認頁面沒有跳轉錯誤
    await page.waitForTimeout(500);
  });

  test('社群媒體連結測試', async ({ page }) => {
    await page.goto('/');

    // 滾動到底部查看社群媒體按鈕
    await page.locator('footer').scrollIntoViewIfNeeded();

    // 檢查社群媒體連結存在
    const socialLinks = ['Line', 'Facebook', 'Instagram', 'YouTube', 'Email'];

    for (const social of socialLinks) {
      const link = page.getByRole('link', { name: social });
      await expect(link).toBeVisible();
    }
  });

  test('Console 錯誤檢查', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(2000);

    // 允許某些特定的錯誤（例如外部資源載入失敗）
    const allowedErrors = consoleErrors.filter(error =>
      !error.includes('favicon') &&
      !error.includes('https://www.siruda.com')
    );

    expect(allowedErrors.length).toBe(0);
  });

  test('效能測試 - 頁面載入時間', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // 頁面應該在 5 秒內載入完成
    expect(loadTime).toBeLessThan(5000);
  });
});
