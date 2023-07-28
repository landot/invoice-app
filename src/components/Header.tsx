import { HeadingL } from "../styles/header/HeadingL.styles";
import { ButtonType, StyledButton } from "./Button";
import {
  HeaderStyles,
  TitleStyles,
  ActionStyles,
} from "../styles/components/Header.styles";
import { Filter } from "./Filter";
import { BodyText } from "../styles/text/Text.styles";
import { InvoiceData, Status } from "../data/types/Data";
import { PrimaryButtonStyle } from "../data/types/PrimaryButtonStyle";
import useWindowSize from "../utils/useWindowSize";

const buttonType: ButtonType = {
  includeAddIcon: true,
  width: "fit-content",
  ...PrimaryButtonStyle,
};

export function Header(props: {
  invoices: InvoiceData[];
  activeFilters: Status[];
  handleFilterUpdate: (updatedFilters: Status[]) => void;
  handleNewInvoice: () => void;
}) {
  const size = useWindowSize();

  return (
    <HeaderStyles>
      <TitleStyles>
        <HeadingL>Invoices</HeadingL>
        {props.invoices.length > 0 ? (
          <BodyText data-testid='invoices-shown'>There are {props.invoices.length} invoices</BodyText>
        ) : (
          <BodyText data-testid='no-invoices'>No invoices</BodyText>
        )}
      </TitleStyles>
      <ActionStyles>
        <Filter
          selectedFilters={props.activeFilters}
          filters={[Status.Draft, Status.Paid, Status.Pending]}
          handleUpdate={(updatedFilters: Status[]) =>
            props.handleFilterUpdate(updatedFilters)
          }
        />
        <StyledButton
          testId="new-invoice-button"
          text={size.width && size.width <= 500 ? "New" : "New Invoice"}
          type={buttonType}
          onClick={props.handleNewInvoice}
        />
      </ActionStyles>
    </HeaderStyles>
  );
}
