import styled from "styled-components"
import { ButtonContainerStyles } from "./Button.styles"
import { BodyText } from "../text/Text.styles"

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${BodyText} {
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
