import { HeadingL } from "../styles/header/HeadingL.styles";
import { ButtonType, StyledButton } from "./Button";
import { useState } from "react";
import { HeaderStyles, TitleStyles, ActionStyles } from "../styles/Header.styles";
import { Filter } from "./Filter";
import { BodyText } from "../styles/text/Text.styles"
import { Status } from "../data/types/Data";

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
                {props.invoices.length > 0 ? (
                    <BodyText>There are {props.invoices.length} invoices</BodyText>
                ): (
                    <BodyText>No invoices</BodyText>
                )}
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