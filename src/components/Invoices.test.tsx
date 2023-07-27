import { render, screen } from '@testing-library/react';
import { Invoices } from './Invoices';
import { sampleData } from '../../data';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Theme from '../styles/themeProvider';
import { store } from '../../app/store';

describe('Invoices component', () => {
  it('should render a list of invoices', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Theme>
                    <Invoices invoices={sampleData} />
                </Theme>
            </MemoryRouter>
        </Provider>
    );

    const invoiceRows = screen.getAllByTestId('invoice-row');
    expect(invoiceRows).toHaveLength(sampleData.length);

    // Verify that each invoice row contains the invoice ID
    sampleData.forEach((invoice) => {
      expect(screen.getByText(`#${invoice.id}`)).toBeInTheDocument();
    });
  });
});