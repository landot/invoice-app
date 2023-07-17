import styled from "styled-components"
import { Header } from "../components/Header"
import { Invoices } from "../components/Invoices"
import { Status } from "../data/types/Data"
import { Page } from "./Page"
import { InvoicesStyles } from "../styles/components/Invoices.styles"
import { useState } from "react"
import { EditInvoice } from "../components/EditInvoice"
import { LeftOverlay } from "../components/LeftOverlay"
import { useAppSelector } from '../../app/hooks';
import { selectInvoices } from "../../features/invoice/invoiceSlice"
import { NoInvoice } from "../components/NoInvoice"

export const InvoicesPageStyles = styled.div`
    height: 100%;

    ${InvoicesStyles} {
        margin-top: 60px;
    }
`

export function InvoicesPage() {
    const invoices = useAppSelector(selectInvoices);
    const [filters, setFilters] = useState<Status[]>([Status.Draft, Status.Paid, Status.Pending]);
    const [showNewInvoice, setShowNewInvoice] = useState(false);
    const filteredInvoices = invoices.filter(invoice => filters.includes(invoice.status));

    return (
        <Page>
            <InvoicesPageStyles>
                {showNewInvoice && (
                    <LeftOverlay handleClose={() => null}>
                        <EditInvoice
                            type='add'
                            hideModal={() => setShowNewInvoice(false)} 
                        />
                    </LeftOverlay>
                )}
                <Header 
                    invoices={filteredInvoices} 
                    activeFilters={filters}
                    handleFilterUpdate={(updatedFilters: Status[]) => setFilters(updatedFilters)} 
                    handleNewInvoice={() => setShowNewInvoice(true)} 
                />
                {filteredInvoices.length > 0 ? (
                    <Invoices invoices={filteredInvoices} />
                ): (
                    <NoInvoice />
                )}
            </InvoicesPageStyles>
        </Page>
    )
}
