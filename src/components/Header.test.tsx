import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import { sampleData } from '../../data';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../styles/themeProvider';

const invoicesMock = sampleData;

describe('Header component', () => {
  it('should render "Invoices" heading and invoice count when there are invoices', () => {
    const handleFilterUpdate = vi.fn();
    const handleNewInvoice = vi.fn();

    render(
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <Header
                        invoices={invoicesMock}
                        activeFilters={[]}
                        handleFilterUpdate={handleFilterUpdate}
                        handleNewInvoice={handleNewInvoice}
                    />          
                </BrowserRouter>
            </Theme>
      </Provider>,

    );

    expect(screen.getByText('Invoices')).toBeInTheDocument();
    expect(screen.getByText(`There are ${invoicesMock.length} invoices`)).toBeInTheDocument();
  });

  it('should render "No invoices" text when there are no invoices', () => {
    const handleFilterUpdate = vi.fn();
    const handleNewInvoice = vi.fn();

    render(
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <Header
                        invoices={[]}
                        activeFilters={[]}
                        handleFilterUpdate={handleFilterUpdate}
                        handleNewInvoice={handleNewInvoice}
                    />          
                </BrowserRouter>
            </Theme>
      </Provider>,
    );

    expect(screen.getByText('Invoices')).toBeInTheDocument();
    expect(screen.getByText('No invoices')).toBeInTheDocument();
  });

  it('should call handleNewInvoice when the "New Invoice" button is clicked', () => {
    const handleFilterUpdate = vi.fn();
    const handleNewInvoice = vi.fn();

    render(
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <Header
                        invoices={invoicesMock}
                        activeFilters={[]}
                        handleFilterUpdate={handleFilterUpdate}
                        handleNewInvoice={handleNewInvoice}
                    />          
                </BrowserRouter>
            </Theme>
      </Provider>,
    );

    const newInvoiceButton = screen.getByRole('button', { name: 'New Invoice' });
    userEvent.click(newInvoiceButton);
    expect(handleNewInvoice).toHaveBeenCalled();
  });
});