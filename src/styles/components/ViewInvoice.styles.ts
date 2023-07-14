import styled from "styled-components"
import { HeadingSAlt } from "../header/AlternateHeadingS.styles"
import { HeadingM } from "../header/HeadingM.styles"
import { HeadingS } from "../header/HeadingS.styles"
import { BodyText } from "../text/Text.styles"
import { Box } from "./Box.styles"

export const ViewInvoiceHeaderLeftStyles = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ViewInvoiceHeaderRightStyles = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ViewInvoiceHeaderStyles = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
`

export const ViewInvoiceRefStyles = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ViewInvoiceBodyStyles = styled(Box)`
    padding: 48px;
`

export const ViewInvoiceBillingStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 100px;
`

export const ViewInvoiceItemStyles = styled.div``

export const AmountDueStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 8px 8px;
    background: ${({ theme }) => theme.colors.darkGray};
    padding: 27px 32px 21px 32px;

    ${HeadingM}, ${BodyText} {
        color: ${({ theme }) => `${theme.colors.white} !important`};
    };
`

export const TableHeaderAlignLeft = styled.th`
    text-align: left;
`

export const TableHeaderAlignRight = styled.th`
    text-align: right;
`

export const TableHeaderAlignCenter = styled.th`
    text-align: center;
`

export const TableCellAlignLeft = styled.td`
    text-align: left;
`

export const TableCellAlignRight = styled.td`
    text-align: right;
`

export const TableCellAlignCenter = styled.td`
    text-align: center;
`

export const InvoiceTableStyles = styled.table`
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    background: ${({ theme }) => theme.colors.lightGray};
    padding: 0 32px;
    border-spacing: 0 32px;
`

export const ViewInvoiceRefIdStyles = styled.div`
    ${BodyText} {
        margin-top: 7px;
    }
`

export const ViewInvoiceRefSenderStyles = styled.div`
    text-align: right;
`

export const ViewInvoiceDateStyles = styled.div``

export const InvoiceSectionStyles = styled.div`
    ${HeadingSAlt} {
        margin-top: 13px;
    }
`

export const ViewInvoiceBillingInfoStyles = styled.div``

export const GoBackStyles = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    ${HeadingS} {
        margin-left: 24px;
    }
`

export const ViewInvoiceContainerStyles = styled.div`
    width: 100%;
    max-width: 800px;

    ${ViewInvoiceHeaderStyles} {
        margin-top: 30px;
    }

    ${ViewInvoiceBodyStyles} {
        margin-top: 24px;
    }

    ${InvoiceTableStyles} {
        margin-top: 40px;
    }

    ${ViewInvoiceBillingStyles} {
        margin-top: 40px;
    }

    ${BodyText} {
        color: ${({ theme }) => theme.colors.grayBlue};
    }
`
