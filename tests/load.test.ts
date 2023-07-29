import { expect, test } from '@playwright/test'

test('page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Render/)

  await page.getByRole('link', { name: '/home' }).click()
  await expect(page.getByText('Opinionated React Template')).toBeVisible()
})
