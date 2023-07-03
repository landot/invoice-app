import { InvoiceData, Invoice } from "./Invoice";
import { InvoicesStyles } from "../styles/Invoices.styles";


export function Invoices(props: {invoices: InvoiceData[]}) {
    return (
        <InvoicesStyles id='invoices'>
            {props.invoices.map(invoice => <Invoice invoice={invoice}/>)}
        </InvoicesStyles>
    )
}