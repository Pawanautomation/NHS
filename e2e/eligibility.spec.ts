import { test, expect } from '@playwright/test';

test('eligibility questionnaire flow', async ({ page }) => {
  await page.goto('http://localhost:5173/eligibility'); // Added semicolon here

  // Find first question
  const firstQuestion = page.getByText('Have you donated blood in the last 12 weeks?');
  await expect(firstQuestion).toBeVisible();

  // Click No
  await page.getByRole('button', { name: 'No' }).click();

  // Verify next question appears
  await page.waitForSelector('text=Are you feeling well today?');
  await expect(page.getByText('Are you feeling well today?')).toBeVisible();
});
