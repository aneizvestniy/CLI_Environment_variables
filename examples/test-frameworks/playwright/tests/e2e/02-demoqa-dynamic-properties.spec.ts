import { test, expect } from '@playwright/test';
import { Urls } from '../../src/utils/urls';

test.describe('DemoQA Dynamic Properties (E2E)', () => {
  test('auto-waiting example', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}${Urls.demoqaDynamicProperties}`);

    const enableAfter = page.locator('#enableAfter');
    await expect(enableAfter).toBeEnabled();

    const visibleAfter = page.locator('#visibleAfter');
    await expect(visibleAfter).toBeVisible();
  });
});
