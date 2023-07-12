import styled from "styled-components"
import { Header } from "../../components/Header"
import { Invoices } from "../../components/Invoices"
import { InvoiceData, Status } from "../../data/types/Data"
import { Page } from "./Page"
import { InvoicesStyles } from "../components/Invoices.styles"
import { useState } from "react"

export const InvoicesPageStyles = styled.div`

    ${InvoicesStyles} {
        margin-top: 60px;
    }
`

export function InvoicesPage() {
    const tempData = [{
        "id": "XM9141",
        "createdAt": 1629321408000,
        "paymentDue": 1629407808000,
        "description": "Graphic Design",
        "paymentTerms": 30,
        "clientName": "Alex Grim",
        "clientEmail": "alexgrim@mail.com",
        "status": Status.Pending,
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "84 Church Way",
            "city": "Bradford",
            "postCode": "BD1 9PB",
            "country": "United Kingdom"
        },
        "items": [
            {
            "name": "Banner Design",
            "quantity": 1,
            "price": 156.00,
            "total": 156.00
            },
            {
            "name": "Email Design",
            "quantity": 2,
            "price": 200.00,
            "total": 400.00
            }
        ],
        "total": 556.00
        },
        {
        "id": "RG0314",
        "createdAt": 1629580608000,
        "paymentDue": 1629494208000,
        "description": "Website Redesign",
        "paymentTerms": 7,
        "clientName": "John Morrison",
        "clientEmail": "jm@myco.com",
        "status": Status.Paid,
        "senderAddress": {
            "street": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom"
        },
        "clientAddress": {
            "street": "79 Dover Road",
            "city": "Westhall",
            "postCode": "IP19 3PF",
            "country": "United Kingdom"
        },
        "items": [
            {
            "name": "Website Redesign",
            "quantity": 1,
            "price": 14002.33,
            "total": 14002.33
            }
        ],
        "total": 14002.33
    }]
    const [invoices, _setShowInvoices] = useState<InvoiceData[]>(tempData);
    const [filters, setFilters] = useState<Status[]>([Status.Draft, Status.Paid, Status.Pending]);
    const [_showNewInvoice, setShowNewInvoice] = useState(false);
    const filteredInvoices = invoices.filter(invoice => filters.includes(invoice.status));

    return (
        <Page>
            <InvoicesPageStyles>
                {/* todo add in new invoice section */}
                <Header 
                    invoices={filteredInvoices} 
                    activeFilters={filters}
                    handleFilterUpdate={(updatedFilters: Status[]) => setFilters(updatedFilters)} 
                    handleNewInvoice={() => setShowNewInvoice(true)} 
                />
                <Invoices invoices={filteredInvoices} />
            </InvoicesPageStyles>
        </Page>
    )
}