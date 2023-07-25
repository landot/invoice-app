import { styled } from "styled-components";
import { InvoiceRowStyles } from "./Invoice.styles";

export const InvoiceTableBodyStyles = styled.tbody`
    width: 100%;
`

export const InvoicesStyles = styled.table`
    table-layout: fixed;
    width: 100%;
    height: auto;

    ${InvoiceRowStyles} {
        margin-bottom: 16px;
    }
`