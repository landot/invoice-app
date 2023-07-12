import { sampleData } from '../../data';
import { Status } from '../../src/data/types/Data';
import invoiceReducer, { InvoiceState, addInvoice, deleteInvoice, editInvoice, markAsPaid } from './invoiceSlice';

describe("invoice reducer", () => {
    const initialState: InvoiceState = {
        value: sampleData,
        status: "idle"
    }

    it("should handle initial state", () => {
        expect(initialState.value.length).toEqual(7);
    })

    it("should handle addInvoice", () => {
        const newInvoice = {
            ...initialState[4],
            id: 'newID'
        };
        const actual = invoiceReducer(initialState, addInvoice(newInvoice))
        expect(actual.value.length).toBe(8);
        expect(actual.value[7]).toStrictEqual(newInvoice);
    })

    it("should handle editInvoice", () => {
        const invoiceId = initialState.value[1].id;
        const updatedInvoice = {
            ...initialState[4],
            clientName: 'new name'
        };
        const actual = invoiceReducer(initialState, editInvoice({invoiceId: invoiceId, updatedInvoice: updatedInvoice}))
        expect(actual.value.length).toBe(7);
        expect(actual.value[1]).toStrictEqual(updatedInvoice);
    })


    it("should handle deleteInvoice", () => {
        const invoiceId = initialState.value[1].id;
        const actual = invoiceReducer(initialState, deleteInvoice(invoiceId));
        expect(actual.value.length).toBe(6);
        expect(actual.value.findIndex(invoice => invoice.id === invoiceId)).toBe(-1);
    })


    it("should handle markAsPaid", () => {
        const invoiceId = initialState.value[1].id;
        expect(initialState.value[1].status).toBe(Status.Pending);
        const actual = invoiceReducer(initialState, markAsPaid(invoiceId));
        expect(actual.value.length).toBe(7);
        expect(actual.value[1].status).toBe(Status.Paid);
    })
})
