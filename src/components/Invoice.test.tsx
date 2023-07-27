import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { store } from "../../app/store";
import { sampleData } from "../../data";
import Theme from "../styles/themeProvider";
import { getDateStringForTimestamp } from "../utils/getDateStringForTimestamp";
import { getTotalString } from "../utils/totalUtils";
import { Invoice } from "./Invoice";
import userEvent from '@testing-library/user-event';

describe("Invoice Component", () => {
    const mockInvoice = sampleData[0];

  test("renders without errors", () => {
    render(
        <Provider store={store}>
                <Theme>
                    <Invoice invoice={mockInvoice} />
                </Theme>
        </Provider>,
        { wrapper: BrowserRouter }
    )
  });

  test("displays the correct information", () => {
    const { getByText } = render(
        <Provider store={store}>
                <Theme>
                    <Invoice invoice={mockInvoice} />
                </Theme>
        </Provider>,
        { wrapper: BrowserRouter }
    )
    const invoiceId = getByText(`#${mockInvoice.id}`);
    expect(invoiceId).toBeInTheDocument();
    const dueDate = screen.getByText(`Due ${getDateStringForTimestamp(mockInvoice.paymentDue)}`);
    expect(dueDate).toBeInTheDocument();
    const clientName = screen.getByText(mockInvoice.clientName);
    expect(clientName).toBeInTheDocument();
    const invoiceTotal = screen.getByText(`£ ${getTotalString(mockInvoice.items)}`);
    expect(invoiceTotal).toBeInTheDocument();
    const invoiceStatus = screen.getByText(mockInvoice.status);
    expect(invoiceStatus).toBeInTheDocument();
  });

  // investigate why the pathname is not updating on invoice click
  test.skip("navigates to the correct URL when clicked", async () => {
    const { getByTestId } = render(
        <Provider store={store}>
                <MemoryRouter>
                    <Theme>
                        <Invoice invoice={mockInvoice} />
                    </Theme>
                </MemoryRouter>
        </Provider>
    )

    const invoiceRow = getByTestId("invoice-row");
    await userEvent.click(invoiceRow);
    expect(window.location.pathname).toBe(`/${mockInvoice.id}`);
  });
});