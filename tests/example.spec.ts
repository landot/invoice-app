import { test, expect } from '@playwright/test';

const url = 'http://localhost:5173/';

test('InvoicesPage - Invoices list can be filtered', async ({ page }) => {
  await page.goto(url);
  expect(await page.getByTestId('invoice-row').count()).toEqual(7);
  expect(await page.getByTestId('invoices-shown').textContent()).toContain('7');
  await page.getByTestId('filter-dropdown').click();
  await page.getByTestId('draft').click();
  expect(await page.getByTestId('invoice-row').count()).toEqual(6);
  expect(await page.getByTestId('invoices-shown').textContent()).toContain('6');
  await page.getByTestId('pending').click();
  await page.getByTestId('paid').click();
  expect(await page.getByTestId('invoices-shown').count()).toBe(0);
  expect(await page.getByTestId('no-invoices').count()).toBe(1);
  expect(await page.getByTestId('no-invoice-svg').count()).toBeGreaterThan(0);
});

test.skip('InvoicesPage - User can add draft invoices', async ({ page }) => {
});

test.skip('InvoicesPage - User can add pending invoices', async ({ page }) => {
});

test.skip('InvoicesPage - Clicking an invoice loads the view invoice page', async ({ page }) => {
});

test.skip('ViewInvoicePage - User can edit an invoice', async ({ page }) => {
});

test.skip('ViewInvoicePage - User can mark an invoice as paid', async ({ page }) => {
});

test.skip('ViewInvoicePage - User can delete an invoice', async ({ page }) => {
});
