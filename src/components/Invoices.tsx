import { Invoice } from "./Invoice";
import { InvoicesStyles } from "../styles/components/Invoices.styles";
import { InvoiceData } from "../data/types/Data";


export function Invoices(props: {invoices: InvoiceData[]}) {
    return (
        <InvoicesStyles id='invoices'>
            {props.invoices.map(invoice => <Invoice invoice={invoice} key={invoice.id} />)}
        </InvoicesStyles>
    )
}