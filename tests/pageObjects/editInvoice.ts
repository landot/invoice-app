import { Locator, Page } from '@playwright/test';

export class EditInvoiceModal {
  readonly page: Page;
  readonly newItemButton: Locator;
  readonly deleteItemButton: Locator;
  readonly saveAsDraft: Locator;
  readonly saveAndSend: Locator;
  readonly saveChanges: Locator;
  readonly cancel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newItemButton = page.getByTestId('add-item');
    this.deleteItemButton = page.getByTestId('new-invoice-button');
    this.saveAsDraft = page.getByTestId('save-as-draft');
    this.saveAndSend = page.getByTestId('save-and-send');
    this.saveChanges = page.getByTestId('save-changes');
    this.cancel = page.getByTestId('cancel');
  }
}
