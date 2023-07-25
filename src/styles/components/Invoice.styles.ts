import styled from "styled-components"
import { BodyText } from "../text/Text.styles"
import { BoxCss } from "./Box.styles"


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
    white-space: nowrap;
`
export const InvoiceStatusCellStyles = styled.td`
    width: 150px;
    display: flex;
    justify-content: flex-end;
`
export const InvoiceNavigationStyles = styled.td`
    width: 5px;
    text-align: right;
`

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

    td {
        width: fit-content;
    }

    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(2, auto);
        padding: 24px;

        ${InvoiceIdCellStyles}, ${InvoiceDateCellStyles}, ${InvoiceCostCellStyles}  {
            grid-column: 1;
            text-align: left;
        }

        ${InvoiceContactCellStyles}, ${InvoiceStatusCellStyles}  {
            grid-column: 2;
            text-align: right;
            width: 100%;
        }

        ${InvoiceStatusCellStyles} {
            margin-top: 10px;
        }

        ${InvoiceCostCellStyles} {
            margin-top: 9px;
        }

        ${InvoiceDateCellStyles} {
            margin-top: 34px;
        }

        ${InvoiceNavigationStyles} {
            visibility: hidden;
            display: none;
        }
    }

`
