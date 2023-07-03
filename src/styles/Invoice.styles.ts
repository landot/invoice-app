import styled from "styled-components"
import { BodyText } from "./text/Text.styles"

export const InvoiceRowStyles = styled.tr`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.10);
    padding: 16px 32px;

    ${BodyText} {
        color: #888EB0;
    }
`

export const InvoiceIdCellStyles = styled.td`
    width: 100px;
`
export const InvoiceDateCellStyles = styled.td`
    width: 150px;
`
export const InvoiceContactCellStyles = styled.td`
    width: 150px;
`
export const InvoiceCostCellStyles = styled.td`
    width: 100px;
    text-align: right;
`
export const InvoiceStatusCellStyles = styled.td`
    width: 150px;
    display: flex;
    justify-content: flex-end;
`
export const InvoiceNavigationStyles = styled.td`
    width: 20px;
`