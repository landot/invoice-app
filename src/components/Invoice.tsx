import { InvoiceStatus } from "./InvoiceStatus";
import { ReactComponent as RightArrow } from '../assets/icon-arrow-right.svg';
import { HeadingS } from "../styles/header/HeadingS.styles";
import { BodyText } from "../styles/text/Text.styles";
import { HeadingSAlt } from "../styles/header/AlternateHeadingS.styles";
import { InvoiceRowStyles, InvoiceIdCellStyles, InvoiceDateCellStyles, InvoiceContactCellStyles, InvoiceCostCellStyles, InvoiceStatusCellStyles, InvoiceNavigationStyles } from "../styles/components/Invoice.styles";
import { InvoiceData } from "../data/types/Data";
import { getDateStringForTimestamp } from "../utils/getDateStringForTimestamp";
import { useNavigate } from "react-router-dom";
import { getTotalString } from "../utils/totalUtils";

export function Invoice(props: {invoice: InvoiceData}) {
    const navigate = useNavigate();

    return (
        <InvoiceRowStyles onClick={() => navigate(`/${props.invoice.id}`)}>
            <InvoiceIdCellStyles>
                <HeadingS>
                    #{props.invoice.id}
                </HeadingS>
            </InvoiceIdCellStyles>
            <InvoiceDateCellStyles>
                <BodyText>
                    Due  {getDateStringForTimestamp(props.invoice.paymentDue)}
                </BodyText>
            </InvoiceDateCellStyles>
            <InvoiceContactCellStyles>
                <BodyText>
                    {props.invoice.clientName}
                </BodyText>
            </InvoiceContactCellStyles>
            <InvoiceCostCellStyles>
                <HeadingSAlt>
                    {`£ ${getTotalString(props.invoice.items)}`}
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