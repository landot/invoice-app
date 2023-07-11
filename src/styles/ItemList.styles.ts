import styled from "styled-components"
import { ButtonContainerStyles } from "./Button.styles"
import { TextInputStyles } from "./TextField.styles"
import { HeadingS } from "./header/HeadingS.styles"
import { BodyText } from "./text/Text.styles"

export const ItemNameCellStyles = styled.td`
    width: 50%;
`

export const ItemQuantityCellStyles = styled.td`
    width: 10%;

    ${TextInputStyles} {
        text-align: center;
    }
`

export const ItemPriceCellStyles = styled.td`
    width: 15%;
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
        margin-top: 10px;
    };

    > ${HeadingS} {
        width: fit-content;
        margin: 0 16px;
        color: #777F98;
    }
`

export const ItemTableStyles = styled.table`
    width: 100%;
    border-spacing: 16px 18px;

    th > ${BodyText} {
        color: #7E88C3;
        text-align: left;
    }

`

export const ItemTableRow = styled.tr`
    ${HeadingS} {
        color: #888EB0;
    }
`
