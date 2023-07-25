import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import invoiceReducer from "../features/invoice/invoiceSlice";
import { useSelector as useReduxSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
