import { Locator, Page } from '@playwright/test';

export class InvoicesPage {
  readonly page: Page;
  readonly invoice: Locator;
  readonly invoicesShown: Locator;
  readonly filterDropdown: Locator;
  readonly draftFilter: Locator;
  readonly paidFilter: Locator;
  readonly pendingFilter: Locator;
  readonly noInvoicesMessage: Locator;
  readonly noInvoicesBodySvg: Locator;
  readonly newInvoiceButton: Locator;
  readonly newItemButton: Locator;
  readonly deleteItemButton: Locator;
  readonly saveAsDraft: Locator;
  readonly saveAndSend: Locator;
  readonly saveChanges: Locator;
  readonly cancel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoice = page.getByTestId('invoice-row');
    this.invoicesShown = page.getByTestId('invoices-shown');
    this.filterDropdown = page.getByTestId('filter-dropdown');
    this.draftFilter = page.getByTestId('draft');
    this.paidFilter = page.getByTestId('paid');
    this.pendingFilter = page.getByTestId('pending');
    this.noInvoicesMessage = page.getByTestId('no-invoices');
    this.noInvoicesBodySvg = page.getByTestId('no-invoice-svg');
    this.newInvoiceButton = page.getByTestId('new-invoice-button');
    this.newItemButton = page.getByTestId('add-item');
    this.deleteItemButton = page.getByTestId('new-invoice-button');
    this.saveAsDraft = page.getByTestId('save-as-draft');
    this.saveAndSend = page.getByTestId('save-and-send');
    this.saveChanges = page.getByTestId('save-changes');
    this.cancel = page.getByTestId('cancel');
  }

  async navigateTo() {
    await this.page.goto(`http://localhost:5173`);
  }

  async clickInvoice(index: number) {
    await this.invoice.nth(index).click();
  }
}
