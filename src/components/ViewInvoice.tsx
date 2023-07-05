import styled from "styled-components";
import { Box } from "../styles/Box.styles";
import { BodyText } from "../styles/text/Text.styles";
import { StyledButton } from "./Button";
import { HeadingSAlt } from "../styles/header/AlternateHeadingS.styles";
import { InvoiceData } from "../data/types/Data";
import { InvoiceStatus } from "./InvoiceStatus";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { HeadingS } from "../styles/header/HeadingS.styles";

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
    background: #373B53;
    padding: 27px 32px 21px 32px;

    ${HeadingM}, ${BodyText} {
        color: #FFFFFF !important;
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
    background: #F9FAFE;
    padding: 32px;

    tr, th {
        padding-bottom: 32px;
    }
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

export const ViewInvoiceContainerStyles = styled.div`
    width: 100%;
    max-width: 800px;

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
        color: #7E88C3;
    }
`

export function ViewInvoice(props: {
    invoice: InvoiceData,
    handleEdit: (id: string) => void,
    handleDelete: (id: string) => void,
    handleMarkAsPaid: (id: string) => void,
}) {
    return (
        <ViewInvoiceContainerStyles>
            <ViewInvoiceHeaderStyles>
                <ViewInvoiceHeaderLeftStyles>
                    <BodyText>Status</BodyText>
                    <InvoiceStatus type={props.invoice.status}/>
                </ViewInvoiceHeaderLeftStyles>
                <ViewInvoiceHeaderRightStyles>
                    <StyledButton 
                        text='Edit'
                        type={{
                            includeAddIcon: false,
                            textColor: '#7E88C3',
                            backgroundColor: '#F9FAFE',
                            hoverTextColor: '#7E88C3',
                            hoverBackgroundColor: '#DFE3FA',
                            width: 'fit-content'
                        }}
                        onClick={() => props.handleEdit(props.invoice.id)}
                    />
                    <StyledButton 
                        text='Delete'
                        type={{
                            includeAddIcon: false,
                            textColor: '#FFFFFF',
                            backgroundColor: '#EC5757',
                            hoverTextColor: '#FFFFFF',
                            hoverBackgroundColor: '#FF9797',
                            width: 'fit-content'
                        }}
                        onClick={() => props.handleDelete(props.invoice.id)}
                    />
                    <StyledButton 
                        text='Mark as Paid'
                        type={{
                            includeAddIcon: false,
                            textColor: '#FFFFFF',
                            backgroundColor: '#7C5DFA',
                            hoverTextColor: '#FFFFFF',
                            hoverBackgroundColor: '#9277FF',
                            width: 'fit-content'
                        }}
                        onClick={() => props.handleMarkAsPaid(props.invoice.id)}
                    />
                </ViewInvoiceHeaderRightStyles>
            </ViewInvoiceHeaderStyles>
            <ViewInvoiceBodyStyles>
                <ViewInvoiceRefStyles>
                    <ViewInvoiceRefIdStyles>
                        <HeadingSAlt>#{props.invoice.id}</HeadingSAlt>
                        <BodyText>{props.invoice.description}</BodyText>
                    </ViewInvoiceRefIdStyles>
                    <ViewInvoiceRefSenderStyles>
                        <BodyText>{props.invoice.senderAddress.street}</BodyText>
                        <BodyText>{props.invoice.senderAddress.city}</BodyText>
                        <BodyText>{props.invoice.senderAddress.postCode}</BodyText>
                        <BodyText>{props.invoice.senderAddress.country}</BodyText>
                    </ViewInvoiceRefSenderStyles>
                </ViewInvoiceRefStyles>
                <ViewInvoiceBillingStyles>
                    <ViewInvoiceDateStyles>
                        <InvoiceSectionStyles>
                            <BodyText>Invoice Date</BodyText>
                            <HeadingSAlt>{props.invoice.createdAt}</HeadingSAlt>
                        </InvoiceSectionStyles>
                        <InvoiceSectionStyles>
                            <BodyText>Payment Due</BodyText>
                            <HeadingSAlt>{props.invoice.createdAt}</HeadingSAlt>
                        </InvoiceSectionStyles>
                    </ViewInvoiceDateStyles>
                    <ViewInvoiceBillingInfoStyles>
                        <InvoiceSectionStyles>
                            <BodyText>Bill To</BodyText>
                            <HeadingSAlt>{props.invoice.createdAt}</HeadingSAlt>
                            <BodyText>{props.invoice.clientAddress.street}</BodyText>
                            <BodyText>{props.invoice.clientAddress.city}</BodyText>
                            <BodyText>{props.invoice.clientAddress.postCode}</BodyText>
                            <BodyText>{props.invoice.clientAddress.country}</BodyText>
                        </InvoiceSectionStyles>
                    </ViewInvoiceBillingInfoStyles>
                    <div>
                        <InvoiceSectionStyles>
                            <BodyText>Sent To</BodyText>
                            <HeadingSAlt>{props.invoice.clientEmail}</HeadingSAlt>
                        </InvoiceSectionStyles>
                    </div>
                </ViewInvoiceBillingStyles>
                <ViewInvoiceItemStyles>
                    <InvoiceTableStyles>
                        <TableHeaderAlignLeft>
                            <BodyText>Item Name</BodyText>
                        </TableHeaderAlignLeft>
                        <TableHeaderAlignCenter>
                            <BodyText>QTY.</BodyText>
                        </TableHeaderAlignCenter>
                        <TableHeaderAlignRight>
                            <BodyText>Price</BodyText>
                        </TableHeaderAlignRight>
                        <TableHeaderAlignRight>
                            <BodyText>Total</BodyText>
                        </TableHeaderAlignRight>
                        {props.invoice.items.map(item => (
                            <tr>
                                <TableCellAlignLeft><HeadingS>{item.name}</HeadingS></TableCellAlignLeft>
                                <TableCellAlignCenter><BodyText>{item.quantity}</BodyText></TableCellAlignCenter>
                                <TableCellAlignRight><BodyText>{item.price}</BodyText></TableCellAlignRight>
                                <TableCellAlignRight><HeadingS>£ {item.total}</HeadingS></TableCellAlignRight>
                            </tr>
                        ))}
                    </InvoiceTableStyles>
                    <AmountDueStyles>
                        <BodyText>Amount Due</BodyText>
                        <HeadingM>
                            £ {props.invoice.total}
                        </HeadingM>
                    </AmountDueStyles>
                </ViewInvoiceItemStyles>
            </ViewInvoiceBodyStyles>
        </ViewInvoiceContainerStyles>
    )
}