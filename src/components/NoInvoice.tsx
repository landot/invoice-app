import { ReactComponent as NoInvoiceSvg } from "../assets/illustration-empty.svg";
import { BodyText } from "../styles/text/Text.styles";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { NoInvoiceStyles } from "../styles/components/NoInvoice.styles";

export function NoInvoice() {
  return (
    <NoInvoiceStyles>
      <NoInvoiceSvg data-testid='no-invoice-svg'/>
      <HeadingM>There is nothing here</HeadingM>
      <BodyText>
        Create an invoice by clicking the <b>New Invoice</b> button and get
        started
      </BodyText>
    </NoInvoiceStyles>
  );
}
