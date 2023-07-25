import { fireEvent, render } from "@testing-library/react";
import Theme from "../styles/themeProvider";
import { DeleteModal } from "./DeleteModal";
import { vi } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Middleware } from "@reduxjs/toolkit";

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

describe("DeleteModal", () => {
  it("renders with text", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const mockOnCancelClick = vi.fn();
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <BrowserRouter>
            <DeleteModal id={"asdf"} hideModal={mockOnCancelClick} />
          </BrowserRouter>
        </Theme>
      </Provider>,
    );
    const text = getByText(
      "Are you sure you want to delete invoice #asdf? This action cannot be undone.",
    );
    expect(text).toBeInTheDocument();
  });

  it("clicking cancel calls the handleCancel prop", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const mockOnCancelClick = vi.fn();
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <BrowserRouter>
            <DeleteModal id={"asdf"} hideModal={mockOnCancelClick} />
          </BrowserRouter>
        </Theme>
      </Provider>,
    );
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(mockOnCancelClick).toHaveBeenCalledTimes(1);
  });

  it("clicking delete calls the delete reducer", () => {
    // Initialize mockstore with empty state
    const mockOnCancelClick = vi.fn();
    const initialState = {};
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <BrowserRouter>
            <DeleteModal id={"asdf"} hideModal={mockOnCancelClick} />
          </BrowserRouter>
        </Theme>
      </Provider>,
    );
    const deleteButton = getByText("Delete");
    fireEvent.click(deleteButton);
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        payload: "asdf",
        type: "invoices/deleteInvoice",
      },
    ]);
  });
});
