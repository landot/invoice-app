import { InvoiceData } from "../data/types/Data";
import { InvoiceStatus } from "./InvoiceStatus";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { HeadingS } from "../styles/header/HeadingS.styles";
import { ReactComponent as BackIcon } from '../assets/icon-arrow-left.svg';
import { DestructiveButtonStyle } from "../data/types/DestructiveButtonStyle";
import { PrimaryButtonStyle } from "../data/types/PrimaryButtonStyle";
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle";
import { ViewInvoiceContainerStyles, GoBackStyles, ViewInvoiceHeaderStyles, ViewInvoiceHeaderLeftStyles, ViewInvoiceHeaderRightStyles, ViewInvoiceBodyStyles, ViewInvoiceRefStyles, ViewInvoiceRefIdStyles, ViewInvoiceRefSenderStyles, ViewInvoiceBillingStyles, ViewInvoiceDateStyles, InvoiceSectionStyles, ViewInvoiceBillingInfoStyles, ViewInvoiceItemStyles, InvoiceTableStyles, TableHeaderAlignLeft, TableHeaderAlignCenter, TableHeaderAlignRight, TableCellAlignLeft, TableCellAlignCenter, TableCellAlignRight, AmountDueStyles } from "../styles/components/ViewInvoice.styles";
import { HeadingSAlt } from "../styles/header/AlternateHeadingS.styles";
import { BodyText } from "../styles/text/Text.styles";
import { StyledButton } from "./Button";

export function ViewInvoice(props: {
    invoice: InvoiceData,
    handleEdit: (id: string) => void,
    handleDelete: (id: string) => void,
    handleMarkAsPaid: (id: string) => void,
    handleGoBack: () => void
}) {

    function getDateString(timestamp: number): string {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(timestamp));
    }

    return (
        <ViewInvoiceContainerStyles>
            <GoBackStyles>
                <BackIcon />
                <a>
                    <HeadingS>Go back</HeadingS>
                </a>
            </GoBackStyles>
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
                            width: 'fit-content',
                            ...SecondaryButtonStyle
                        }}
                        onClick={() => props.handleEdit(props.invoice.id)}
                    />
                    <StyledButton 
                        text='Delete'
                        type={{
                            includeAddIcon: false,
                            width: 'fit-content',
                            ...DestructiveButtonStyle
                        }}
                        onClick={() => props.handleDelete(props.invoice.id)}
                    />
                    <StyledButton 
                        text='Mark as Paid'
                        type={{
                            includeAddIcon: false,
                            width: 'fit-content',
                            ...PrimaryButtonStyle
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
                            <HeadingSAlt>{getDateString(props.invoice.createdAt)}</HeadingSAlt>
                        </InvoiceSectionStyles>
                        <InvoiceSectionStyles>
                            <BodyText>Payment Due</BodyText>
                            <HeadingSAlt>{getDateString(props.invoice.paymentDue)}</HeadingSAlt>
                        </InvoiceSectionStyles>
                    </ViewInvoiceDateStyles>
                    <ViewInvoiceBillingInfoStyles>
                        <InvoiceSectionStyles>
                            <BodyText>Bill To</BodyText>
                            <HeadingSAlt>{props.invoice.clientName}</HeadingSAlt>
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