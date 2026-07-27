import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Client Work', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

    const servicesLink = page.locator('header a[href="/services"]:visible').first();
    await expect(servicesLink).toBeVisible();
    await servicesLink.click();

    await expect(page).toHaveURL(/\/services\/?$/);

    const exploreClientWorkLink = page.getByRole('link', {
      name: 'Explore Our Client Work',
      exact: true,
    });
    await expect(exploreClientWorkLink).toBeVisible();
    await exploreClientWorkLink.click();

    const clientWorkHeading = page.getByRole('heading', {
      name: 'Client Work',
      exact: true,
    });
    await expect(clientWorkHeading).toBeVisible();
    await expect(page).toHaveURL(/\/services\/client-work\/?$/);
  });
});
