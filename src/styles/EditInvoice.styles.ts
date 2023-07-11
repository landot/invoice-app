import styled from "styled-components"
import { DatePickerStyles } from "./DatePickerWrapper.styles"
import { DropdownStyles } from "./Dropdown.styles"
import { TextFieldStyles } from "./TextField.styles"
import { HeadingS } from "./header/HeadingS.styles"
import { ItemListStyles } from "./ItemList.styles"

export const FieldStyles = styled.div`
    display: flex;
    column-gap: 24px;
`

export const EditHeaderStyles = styled.div``

export const EditBillStyles = styled.div`
    display: flex;
    flex-direction: column;
`

export const EditActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 40px;
`

export const EditScrollableStyles = styled.div`
    height: 70dvh;
    overflow-y: auto;
    padding-right: 15px;
`

export const EditStyles = styled.div`
    border-radius: 0px 20px 20px 0px;
    background: ${({ theme }) => theme.colors.white};
    padding: 55px 55px  32px 55px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${TextFieldStyles}, ${DropdownStyles}, ${DatePickerStyles} {
        margin-top: 24px;
    }

    & > ${HeadingS} {
        margin-top: 46px;
        color: ${({ theme }) => theme.colors.brightPurple};
    }

    ${EditBillStyles}, ${ItemListStyles} {
        margin-top: 46px;
    }
`
