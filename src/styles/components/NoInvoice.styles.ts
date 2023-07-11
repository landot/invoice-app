import styled from "styled-components";
import { HeadingM } from "../header/HeadingM.styles";
import { BodyText } from "../text/Text.styles";

export const NoInvoiceStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ${HeadingM} {
        margin-top: 66px;
    }

    ${BodyText} {
        margin-top: 23px;
        text-align: center;
        color: ${({ theme }) => theme.colors.gray};
    }
`
