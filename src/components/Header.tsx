import { HeadingL } from "../styles/header/HeadingL.styles";
import { ButtonType, StyledButton } from "./Button";
import { useState } from "react";
import { HeaderStyles, TitleStyles, ActionStyles } from "../styles/Header.styles";
import { Status, Filter } from "./Filter";
import { BodyText } from "../styles/text/Text.styles"

const buttonType: ButtonType = {
    includeAddIcon: true,
    textColor: 'white',
    backgroundColor: 'red',
    hoverTextColor: 'white',
    hoverBackgroundColor: 'orange',
    width: 'fit-content'
}

export function Header(props: {invoices: object[], handleFilterUpdate: () => void, handleNewInvoice: () => void}) {
    const [activeFilters, setActiveFilters] = useState([Status.Draft, Status.Paid, Status.Pending]);

    return (
        <HeaderStyles>
            <TitleStyles>
                <HeadingL>Invoices</HeadingL>
                <BodyText>There are {props.invoices.length} invoices</BodyText>
            </TitleStyles>
            <ActionStyles>
                <Filter selectedFilters={activeFilters} filters={[Status.Draft, Status.Paid, Status.Pending]} handleUpdate={setActiveFilters} />
                <StyledButton 
                    text={"New Invoice"} 
                    type={buttonType} 
                    onClick={() => null} 
                />
            </ActionStyles>
        </HeaderStyles>
    )
}