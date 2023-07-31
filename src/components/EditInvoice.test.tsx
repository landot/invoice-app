import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import { store } from "../../app/store";
import { sampleData } from "../../data";
import Theme from "../styles/themeProvider";
import userEvent from '@testing-library/user-event';
import configureStore from "redux-mock-store";
import { Middleware } from "@reduxjs/toolkit";
import { EditInvoice } from "./EditInvoice";
import { BrowserRouter } from "react-router-dom";
import { Status } from "../data/types/Data";

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

describe('EditInvoice component', () => {
    const handleHideModal = vi.fn();
    const testData = sampleData[0];

    it('Clicking discard button calls hideModal prop (add modal)', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const discardButton = getByText('Discard');
        userEvent.click(discardButton);
        expect(handleHideModal).toHaveBeenCalled();
    });

    it('Clicking cancel button calls hideModal prop (edit modal)', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"edit"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const cancelButton = getByText('Cancel');
        userEvent.click(cancelButton);
        expect(handleHideModal).toHaveBeenCalled();
    });

    it('Inputs values are empty when prefill prop is empty', () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"edit"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const textInputs = getAllByTestId('text-input');
        textInputs.forEach((input) => {
            expect(input.getAttribute('value')).toBe('');
        });

        const numberInputs = getAllByTestId('number-input');
        numberInputs.forEach((input) => {
            expect(input.getAttribute('value')).toBe('0');
        });

        const intInputs = getAllByTestId('int-input');
        intInputs.forEach((input) => {
            expect(input.getAttribute('value')).toBe('0');
        });
    }) 

    it('Data is prefilled when prefill prop is used', () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"edit"} 
                            prefill={testData}
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const textInputs = getAllByTestId('text-input');
        textInputs.forEach((input) => {
            expect(input.getAttribute('value')).not.toBe('');
        });

        const numberInputs = getAllByTestId('number-input');
        numberInputs.forEach((input) => {
            expect(input.getAttribute('value')).not.toBe('0');
        });

        const intInputs = getAllByTestId('int-input');
        intInputs.forEach((input) => {
            expect(input.getAttribute('value')).not.toBe('0');
        });
    });

    it('Should call hideModal prop and addInvoice dispatch when form is filled and save as draft button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        const { getByTestId, getAllByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const textInputs = getAllByTestId('text-input');
        textInputs.forEach((input) => {
            userEvent.type(input, 'asdf');
        });

        const numberInputs = getAllByTestId('number-input');
        numberInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        const intInputs = getAllByTestId('int-input');
        intInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        userEvent.click(getByTestId('save-as-draft'));
        expect(handleHideModal).toHaveBeenCalled();
        const actions = mockedStore.getActions();
        expect(actions[0].type).toBe('invoices/addInvoice');
        expect(actions[0].payload.status).toBe(Status.Draft);
    });

    it('Should call hideModal prop and addInvoice dispatch when form is filled and save and send button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        console.log(mockedStore.getState());
        const { getByTestId, getAllByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const textInputs = getAllByTestId('text-input');
        textInputs.forEach((input) => {
            userEvent.type(input, 'asdf');
        });

        const numberInputs = getAllByTestId('number-input');
        numberInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        const intInputs = getAllByTestId('int-input');
        intInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        userEvent.click(getByTestId('save-and-send'));
        expect(handleHideModal).toHaveBeenCalled();
        const actions = mockedStore.getActions();
        expect(actions[0].type).toBe('invoices/addInvoice');
        expect(actions[0].payload.status).toBe(Status.Pending);
    });

    it('Should call hideModal prop and editInvoice dispatch when form is filled and save changes button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        const { getByTestId, getAllByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"edit"} 
                            prefill={testData}
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const textInputs = getAllByTestId('text-input');
        textInputs.forEach((input) => {
            userEvent.type(input, 'asdf');
        });

        const numberInputs = getAllByTestId('number-input');
        numberInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        const intInputs = getAllByTestId('int-input');
        intInputs.forEach((input) => {
            userEvent.type(input, '1');
        });

        userEvent.click(getByTestId('save-changes'));
        expect(handleHideModal).toHaveBeenCalled();
        const actions = mockedStore.getActions();
        expect(actions[0].type).toBe('invoices/editInvoice');
    });

    it('Should NOT call hideModal prop and addInvoice dispatch when form is unfilled and save as draft button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        userEvent.click(getByTestId('save-as-draft'));
        expect(handleHideModal).not.toHaveBeenCalled();
    });

    it('Should NOT call hideModal prop and addInvoice dispatch when form is unfilled and save and send button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        userEvent.click(getByTestId('save-and-send'));
        expect(handleHideModal).not.toHaveBeenCalled();
    });

    it('Should NOT call hideModal prop and editInvoice dispatch when form is unfilled and save changes button is clicked', () => {
        const initialState = {invoices: []};
        const mockedStore = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={mockedStore}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"edit"}
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        userEvent.click(getByTestId('save-changes'));
        expect(handleHideModal).not.toHaveBeenCalled();
    });

    it('go back button should appear on smaller screens and redirect to invoices page', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
        const { getByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );

        const goBack = getByTestId('go-back');
        userEvent.click(goBack);
        expect(handleHideModal).toHaveBeenCalled();
        expect(window.location.pathname).toBe(`/`);
    });


    it('go back button should not appear on large screens', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
        const { queryByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <EditInvoice 
                            type={"add"} 
                            hideModal={handleHideModal}                    
                        />
                    </BrowserRouter>
                </Theme>
            </Provider>
        );
        expect(queryByTestId('go-back')).toBeNull();
    });
  });
