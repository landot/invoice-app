import { InvoiceStatus } from "./InvoiceStatus";
import { ReactComponent as RightArrow } from '../assets/icon-arrow-right.svg';
import { HeadingS } from "../styles/header/HeadingS.styles";
import { BodyText } from "../styles/text/Text.styles";
import { HeadingSAlt } from "../styles/header/AlternateHeadingS.styles";
import { InvoiceRowStyles, InvoiceIdCellStyles, InvoiceDateCellStyles, InvoiceContactCellStyles, InvoiceCostCellStyles, InvoiceStatusCellStyles, InvoiceNavigationStyles } from "../styles/Invoice.styles";
import { Status } from "./Filter";

export interface InvoiceData {
    id: string;
    date: string;
    contact: string;
    cost: number;
    status: Status;
}

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
                    Due  {props.invoice.date}
                </BodyText>
            </InvoiceDateCellStyles>
            <InvoiceContactCellStyles>
                <BodyText>
                    {props.invoice.contact}
                </BodyText>
            </InvoiceContactCellStyles>
            <InvoiceCostCellStyles>
                <HeadingSAlt>
                    {`£ ${props.invoice.cost}`}
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