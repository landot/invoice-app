import { HeadingS } from "../styles/header/HeadingS.styles";
import {
  StyledInvoice,
  Circle,
} from "../styles/components/InvoiceStatus.styles";

export function InvoiceStatus(props: { type: "paid" | "pending" | "draft" }) {
  return (
    <StyledInvoice $type={props.type}>
      <Circle $type={props.type} />
      <HeadingS>{props.type}</HeadingS>
    </StyledInvoice>
  );
}
