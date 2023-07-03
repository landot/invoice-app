import { styled } from "styled-components";
import { InvoiceRowStyles } from "./Invoice.styles";

export const InvoicesStyles = styled.table`
    width: 100%;
    height: 100%;

    ${InvoiceRowStyles} {
        margin-bottom: 16px;
    }
`