import styled from "styled-components"
import { HeadingS } from "../header/HeadingS.styles"
import { BodyText } from "../text/Text.styles"
import { ButtonContainerStyles } from "./Button.styles"
import { TextInputStyles } from "./TextField.styles"

export const ItemNameCellStyles = styled.td`
    width: 50%;
`

export const ItemQuantityCellStyles = styled.td`
    width: 10%;
    min-width: 35px;

    ${TextInputStyles} {
        text-align: center;
    }
`

export const ItemPriceCellStyles = styled.td`
    width: 15%;
    min-width: 50px;
`

export const ItemTotalCellStyles = styled.td`
    width: 15%;
    vertical-align: middle;

    ${HeadingS} {
        margin-top: 24px;
    }
`

export const ItemDeleteCellStyles = styled.td`
    width: 10%;
    text-align: right;

    svg {
        margin-top: 24px;
        cursor: pointer;
    }
`

export const ItemListStyles = styled.div`

    ${ButtonContainerStyles} {
        margin-top: 18px;
    };

    > ${HeadingS} {
        width: fit-content;
        color: ${({ theme }) => theme.colors.mediumGray};
        margin-bottom: 14px;
    };
`

export const ItemTableStyles = styled.table`
    width: 100%;
    border-spacing: 16px 0;

    th > ${BodyText} {
        color: ${({ theme }) => theme.colors.grayBlue};
        text-align: left;
    }
`

export const ItemErrorStyles = styled.div`
    ${BodyText} {
        color: #EC5757;
    }
`

export const ItemTableRow = styled.tr`
    ${HeadingS} {
        color: ${({ theme }) => theme.colors.gray};
    }

    svg {
        fill: #888EB0;
    }

    svg:hover {
        fill: #EC5757;
    }
`
