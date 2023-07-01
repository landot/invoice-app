import styled from "styled-components"
import { HeadingL } from "../styles/header/HeadingL.styles"
import { Text } from "../styles/text/Text.styles"
import { ButtonType, StyledButton } from "./Button"
import { ButtonContainerStyles } from "../styles/Button.styles"

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${Text} {
        color: ${({ theme }) => theme.colors.gray};
        margin-top: 6px;
    };
`

export const ActionStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;


    ${ButtonContainerStyles} {
        margin-left: 40px;
    };
`

export const HeaderStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const buttonType: ButtonType = {
    includeAddIcon: true,
    textColor: 'white',
    backgroundColor: 'red',
    hoverTextColor: 'white',
    hoverBackgroundColor: 'orange',
    width: 'fit-content'
}

export function Header(props: {invoices: object[], handleFilterUpdate: () => void, handleNewInvoice: () => void}) {
    return (
        <HeaderStyles>
            <TitleStyles>
                <HeadingL>Invoices</HeadingL>
                <Text>There are {props.invoices.length} invoices</Text>
            </TitleStyles>
            <ActionStyles>
                {/* <Filter /> */}
                <p>filter placeholder</p>
                <StyledButton 
                    text={"New Invoice"} 
                    type={buttonType} 
                    onClick={() => null} 
                />
            </ActionStyles>
        </HeaderStyles>
    )
}