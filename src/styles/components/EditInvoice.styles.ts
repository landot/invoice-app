import styled from "styled-components"
import { TextFieldStyles } from "./TextField.styles"
import { HeadingS } from "../header/HeadingS.styles"
import { ItemListStyles } from "./ItemList.styles"
import { DatePickerStyles } from "./DatePickerWrapper.styles"
import { DropdownStyles } from "./Dropdown.styles"
import { HeadingM } from "../header/HeadingM.styles"

export const FieldStyles = styled.div`
    display: flex;
    column-gap: 24px;
`

export const EditHeaderStyles = styled.div``

export const EditBillStyles = styled.div`
    display: flex;
    flex-direction: column;
    
    ${HeadingS} {
        color: #7C5DFA;
    }
`

export const EditActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 40px;
`

export const EditScrollableStyles = styled.div`
    height: 80dvh;
    overflow-y: auto;
    padding-right: 15px;
`

export const AddActionButtonStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const AddSaveButtonStyles = styled.div`
    display: flex;
    gap: 8px;
`

export const EditContainerStyles = styled.div`
    height: 100%;
    width: 100%;
`

export const EditStyles = styled.div`
    border-radius: 0px 20px 20px 0px;
    background: ${({ theme }) => theme.colors.white};
    padding: 55px 55px  32px 55px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

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

    @media (max-width: 500px) {
        padding: 24px 8px 24px 24px;
        border-radius: 0;
        height: calc(100% - 80px);

        ${HeadingM} {
            margin-top: 26px;
        }
    }
`
