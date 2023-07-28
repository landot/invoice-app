import { test, expect } from '@playwright/test';
import { ViewInvoicePage } from './pageObjects/ViewInvoicePage';
import { sampleData } from '../data';
import { InvoicesPage } from './pageObjects/InvoicesPage';

const url = 'http://localhost:5173';

// todo take edit invoice selectors out of InvoicesPage into it's own page object file
// add better data-testids for edit invoice page

test('InvoicesPage - Invoices list can be filtered', async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  await invoicesPage.navigateTo();
  expect(await invoicesPage.invoice.count()).toEqual(7);
  expect(await invoicesPage.invoicesShown.textContent()).toContain('7');
  await invoicesPage.filterDropdown.click();
  await invoicesPage.draftFilter.click();
  expect(await invoicesPage.invoice.count()).toEqual(6);
  expect(await invoicesPage.invoicesShown.textContent()).toContain('6');
  await invoicesPage.pendingFilter.click();
  await invoicesPage.paidFilter.click();
  expect(await invoicesPage.invoicesShown.count()).toBe(0);
  expect(await invoicesPage.noInvoicesMessage.count()).toBe(1);
  expect(await invoicesPage.noInvoicesBodySvg.count()).toBeGreaterThan(0);
});

test('InvoicesPage - Clicking an invoice loads the view invoice page', async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  await invoicesPage.navigateTo();
  await invoicesPage.clickInvoice(0);
  await page.waitForURL(`${url}/${sampleData[0].id}`);
});

test('ViewInvoicePage - User can mark an invoice as paid', async ({ page }) => {
  const viewInvoicePage = new ViewInvoicePage(page);
  viewInvoicePage.navigateTo(sampleData[1].id);
  expect(await viewInvoicePage.status.textContent()).toBe('pending');
  await viewInvoicePage.clickMarkAsPaid();
  expect(await viewInvoicePage.status.textContent()).toBe('paid');
});

test('ViewInvoicePage - User can delete an invoice', async ({ page }) => {
  const viewInvoicePage = new ViewInvoicePage(page);
  const invoiceToDelete = sampleData[0];
  viewInvoicePage.navigateTo(invoiceToDelete.id);
  await viewInvoicePage.clickDelete();
  await viewInvoicePage.clickDeleteModalCancel();
  await viewInvoicePage.clickDelete();
  await viewInvoicePage.clickDeleteModalDelete();
  await page.waitForURL(url);
  expect(await page.getByText(sampleData[0].id).count()).toBe(0);
});

test('ViewInvoicePage - User can go back', async ({ page }) => {
  const viewInvoicePage = new ViewInvoicePage(page);
  viewInvoicePage.navigateTo(sampleData[0].id);
  await viewInvoicePage.clickGoBack();
  await page.waitForURL(url);
});

test('ViewInvoicePage - User can edit an invoice', async ({ page }) => {
  const viewInvoicePage = new ViewInvoicePage(page);
  const invoicesPage = new InvoicesPage(page);
  viewInvoicePage.navigateTo(sampleData[0].id);
  await viewInvoicePage.clickEdit();
  await page.getByTestId('text-input').first().clear();
  await page.getByTestId('text-input').first().type('test');
  await invoicesPage.saveChanges.click();
  expect(await page.getByText('test').count()).toBe(1);
});

test('InvoicesPage - User can add draft invoices', async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  await invoicesPage.navigateTo();
  expect(await invoicesPage.invoice.count()).toEqual(7);
  await invoicesPage.newInvoiceButton.click();
  await invoicesPage.newItemButton.click();
  const textInputs = await page.getByTestId('text-input').all();
  for (const input of textInputs) {
    await input.type('test');
  }
  const intInputs = await page.getByTestId('int-input').all();
  for (const input of intInputs) {
    await input.type('1');
  }
  const numberInputs = await page.getByTestId('number-input').all();
  for (const input of numberInputs) {
    await input.type('1.50');
  }
  await invoicesPage.saveAsDraft.click();
  expect(await invoicesPage.invoice.count()).toEqual(8);
});

test('InvoicesPage - User can add pending invoices', async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  await invoicesPage.navigateTo();
  expect(await invoicesPage.invoice.count()).toEqual(7);
  await invoicesPage.newInvoiceButton.click();
  await invoicesPage.newItemButton.click();
  const textInputs = await page.getByTestId('text-input').all();
  for (const input of textInputs) {
    await input.type('test');
  }
  const intInputs = await page.getByTestId('int-input').all();
  for (const input of intInputs) {
    await input.type('1');
  }
  const numberInputs = await page.getByTestId('number-input').all();
  for (const input of numberInputs) {
    await input.type('1.50');
  }
  await invoicesPage.saveAndSend.click();
  expect(await invoicesPage.invoice.count()).toEqual(8);
});
