import { 
    createSlice, 
    PayloadAction 
} from "@reduxjs/toolkit";
import { 
    RootState, 
} from "../../app/store";
import { InvoiceData, Status } from "../../src/data/types/Data";  
import { sampleData } from "../../data";
  
    export interface InvoiceState {
      value: InvoiceData[]
      status: "idle" | "loading" | "failed"
    }
  
    const initialState: InvoiceState = {
      value: sampleData,
      status: "loading",
    }
  
    // export const fetchUserById = createAsyncThunk(
    //   'kanban/fetchKanbanData',
    //   async () => {
    //     const response = await getKanban();
    //     console.log('response', response)
    //     return response;
    //   }
    // )
    
    export const invoiceSlice = createSlice({
      name: "invoices",
      initialState,
      reducers: {
        addInvoice: (state, action: PayloadAction<InvoiceData>) => {
            const newValue = [
                ...state.value,
                action.payload
            ]
            state.value = newValue;
        },
        editInvoice: (state, action: PayloadAction<{invoiceId: string, updatedInvoice: InvoiceData }>) => {
            const newValue = [...state.value];
            const index = newValue.findIndex(invoice => invoice.id === action.payload.invoiceId);
            newValue[index] = action.payload.updatedInvoice;
            state.value = newValue;
        },
        deleteInvoice: (state, action: PayloadAction<string>) => {
            let newValue = [...state.value];
            newValue = newValue.filter(invoice => invoice.id !== action.payload);
            state.value = newValue;
        },
        markAsPaid: (state, action: PayloadAction<string>) => {
            const newValue = [...state.value];
            const [invoice] = newValue.filter(invoice => invoice.id === action.payload);
            invoice.status = Status.Paid;
            state.value = newValue;
        }
      },
    //   extraReducers(builder) {
    //     builder
    //       .addCase(fetchUserById.pending, (state) => {
    //         state.status = 'loading';
    //       })
    //       .addCase(fetchUserById.fulfilled, (state, action) => {
    //         state.status = 'idle';
    //         state.value = action.payload;
    //       })
    //       .addCase(fetchUserById.rejected, (state, action) => {
    //         state.status = 'failed';
    //         console.log('error', action.error.message)
    //       })
    //   }
    })
    
    export const { addInvoice, editInvoice, deleteInvoice, markAsPaid } = invoiceSlice.actions
    export const selectInvoices = (state: RootState) => state.invoices.value;
    export default invoiceSlice.reducer;
  
    