import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import { store } from "../../app/store";
import { sampleData } from "../../data";
import Theme from "../styles/themeProvider";
import { ViewInvoice } from "./ViewInvoice";
import userEvent from '@testing-library/user-event';
import configureStore from "redux-mock-store";
import { Middleware } from "@reduxjs/toolkit";

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

describe('ViewInvoice component', () => {
    const handleEditMock = vi.fn();
    const handleDeleteMock = vi.fn();
    const handleGoBackMock = vi.fn();

    it('should render the invoice details and buttons', () => {
        const testData = sampleData[0];
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <ViewInvoice
                        invoice={testData}
                        handleEdit={handleEditMock}
                        handleDelete={handleDeleteMock}
                        handleGoBack={handleGoBackMock}
                    />
                </Theme>
            </Provider>
        );
  
        expect(getByText(testData.description)).toBeInTheDocument();
        expect(getByText(testData.clientAddress.city)).toBeInTheDocument();
        expect(getByText(testData.clientAddress.country)).toBeInTheDocument();
        expect(getByText(testData.clientAddress.postCode)).toBeInTheDocument();
        expect(getByText(testData.clientAddress.street)).toBeInTheDocument();
        expect(getByText(testData.senderAddress.city)).toBeInTheDocument();
        expect(getByText(testData.senderAddress.country)).toBeInTheDocument();
        expect(getByText(testData.senderAddress.postCode)).toBeInTheDocument();
        expect(getByText(testData.senderAddress.street)).toBeInTheDocument();
        expect(getByText(testData.status)).toBeInTheDocument();
        expect(getByText(testData.clientEmail)).toBeInTheDocument();
        expect(getByText(testData.clientName)).toBeInTheDocument();
        expect(getByText(`#${testData.id}`)).toBeInTheDocument();

        const editButton = getByText('Edit');
        const deleteButton = getByText('Delete');
        const markAsPaidButton = getByText('Mark as Paid');
    
        expect(editButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
        expect(markAsPaidButton).toBeInTheDocument();
    });
  
    it('should call the handleEdit prop function when edit button is clicked', () => {
      const testData = sampleData[0];
      const { getByText } = render(
          <Provider store={store}>
              <Theme>
                  <ViewInvoice
                      invoice={testData}
                      handleEdit={handleEditMock}
                      handleDelete={handleDeleteMock}
                      handleGoBack={handleGoBackMock}
                  />
              </Theme>
          </Provider>
      );
  
      const editButton = getByText('Edit');
      userEvent.click(editButton);
      expect(handleEditMock).toHaveBeenCalledWith(testData.id);
    });

    it('should call the markAsPaid dispatch function when mark as paid button is clicked', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const testData = sampleData[0];
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <ViewInvoice
                        invoice={testData}
                        handleEdit={handleEditMock}
                        handleDelete={handleDeleteMock}
                        handleGoBack={handleGoBackMock}
                    />
                </Theme>
            </Provider>
        );
    
        const markAsPaidButton = getByText('Mark as Paid');
        userEvent.click(markAsPaidButton);
        const actions = store.getActions();
        expect(actions).toEqual([
            {
              payload: "RT3080",
              type: "invoices/markAsPaid",
            },
        ]);
      });

    it('should call the handleDelete prop function when edit button is clicked', () => {
        const testData = sampleData[0];
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <ViewInvoice
                        invoice={testData}
                        handleEdit={handleEditMock}
                        handleDelete={handleDeleteMock}
                        handleGoBack={handleGoBackMock}
                    />
                </Theme>
            </Provider>
        );
    
        const deleteButton = getByText('Delete');
        userEvent.click(deleteButton);
        expect(handleDeleteMock).toHaveBeenCalledWith(testData.id);
      });
  
      it('should call the handleGoBack prop function when go back button is clicked', () => {
        const testData = sampleData[0];
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <ViewInvoice
                        invoice={testData}
                        handleEdit={handleEditMock}
                        handleDelete={handleDeleteMock}
                        handleGoBack={handleGoBackMock}
                    />
                </Theme>
            </Provider>
        );
    
        const editButton = getByText('Go back');
        userEvent.click(editButton);
        expect(handleGoBackMock).toBeCalled();
      });
  });
