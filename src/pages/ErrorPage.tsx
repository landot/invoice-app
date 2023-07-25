import { StyledButton } from "../components/Button";
import { PrimaryButtonStyle } from "../data/types/PrimaryButtonStyle";
import { ErrorPageStyles } from "../styles/pages/ErrorPage.styles";
import { Page } from "./Page";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Page>
      <ErrorPageStyles>
        <p>Invoice id is not valid</p>
        <StyledButton
          text={"Return to Invoices"}
          type={{
            includeAddIcon: false,
            width: "fit-content",
            ...PrimaryButtonStyle,
          }}
          onClick={() => navigate("/")}
        />
      </ErrorPageStyles>
    </Page>
  );
}
