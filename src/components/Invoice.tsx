import { InvoiceStatus } from "./InvoiceStatus";
import { ReactComponent as RightArrow } from '../assets/icon-arrow-right.svg';
import { HeadingS } from "../styles/header/HeadingS.styles";
import { BodyText } from "../styles/text/Text.styles";
import { HeadingSAlt } from "../styles/header/AlternateHeadingS.styles";
import { InvoiceRowStyles, InvoiceIdCellStyles, InvoiceDateCellStyles, InvoiceContactCellStyles, InvoiceCostCellStyles, InvoiceStatusCellStyles, InvoiceNavigationStyles } from "../styles/Invoice.styles";
import { InvoiceData } from "../data/types/Data";

export function Invoice(props: {invoice: InvoiceData}) {
    return (
        <InvoiceRowStyles>
            <InvoiceIdCellStyles>
                <HeadingS>
                    #{props.invoice.id}
                </HeadingS>
            </InvoiceIdCellStyles>
            <InvoiceDateCellStyles>
                <BodyText>
                    Due  {props.invoice.paymentDue}
                </BodyText>
            </InvoiceDateCellStyles>
            <InvoiceContactCellStyles>
                <BodyText>
                    {props.invoice.clientName}
                </BodyText>
            </InvoiceContactCellStyles>
            <InvoiceCostCellStyles>
                <HeadingSAlt>
                    {`£ ${props.invoice.total}`}
                </HeadingSAlt> 
            </InvoiceCostCellStyles>
            <InvoiceStatusCellStyles>
                <InvoiceStatus type={props.invoice.status}/>
            </InvoiceStatusCellStyles>
            <InvoiceNavigationStyles>
                <RightArrow />
            </InvoiceNavigationStyles>
        </InvoiceRowStyles>
    )
}