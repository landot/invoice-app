import { Locator, Page } from '@playwright/test';

export class ViewInvoicePage {
  readonly page: Page;
  readonly goBackLink: Locator;
  readonly editButton: Locator;
  readonly deleteButton: Locator;
  readonly markAsPaidButton: Locator;
  readonly status: Locator;
  readonly deleteModalDelete: Locator;
  readonly deleteModalCancel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goBackLink = page.getByTestId('go-back');
    this.editButton = page.getByTestId('edit');
    this.deleteButton = page.getByTestId('delete');
    this.markAsPaidButton = page.getByTestId('mark-as-paid');
    this.status = page.getByTestId('status');
    this.deleteModalDelete = page.getByTestId('delete-modal-delete');
    this.deleteModalCancel = page.getByTestId('delete-modal-cancel');
  }

  async navigateTo(invoiceId: string) {
    await this.page.goto(`http://localhost:5173/${invoiceId}`);
  }

  async clickGoBack() {
    await this.goBackLink.click();
  }

  async clickEdit() {
    await this.editButton.click();
  }

  async clickDelete() {
    await this.deleteButton.click();
  }

  async clickMarkAsPaid() {
    await this.markAsPaidButton.click();
  }

  async clickDeleteModalCancel() {
    await this.deleteModalCancel.click();
  }

  async clickDeleteModalDelete() {
    await this.deleteModalDelete.click();
  }
}
