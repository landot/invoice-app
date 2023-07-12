import styled from "styled-components"
import { BodyText } from "../text/Text.styles"
import { BoxCss } from "./Box.styles"

export const InvoiceRowStyles = styled.tr`
    ${BoxCss}
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    cursor: pointer;

    ${BodyText} {
        color: ${({ theme }) => theme.colors.gray};
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
    text-align: right;
`