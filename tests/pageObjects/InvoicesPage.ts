import { Locator, Page } from '@playwright/test';
import { EditInvoiceModal } from './editInvoice';

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
  readonly newInvoiceModal: EditInvoiceModal;

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
    this.newInvoiceModal = new EditInvoiceModal(page);
  }

  async navigateTo() {
    await this.page.goto(`http://localhost:5173`);
  }

  async clickInvoice(index: number) {
    await this.invoice.nth(index).click();
  }
}
