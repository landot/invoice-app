import styled from "styled-components"
import { TextVariant } from "../text/TextVariant.styles"

export const TextFieldStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${TextVariant} {
        color: ${({ theme }) => theme.colors.grayBlue};
        margin-bottom: 9px;
    }
`

export const TextInputStyles = styled.input`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extraSmall};
    letter-spacing: ${({ theme }) => theme.spacing.medium};
    caret-color: ${({ theme }) => theme.colors.lightPurple};
    outline: none;
    height: 48px;
    width: 100%;
    padding: 0 10px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBlue}`};
    background: ${({ theme }) => theme.colors.white};

    // turn off number arrows
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }

    &[type="number"]::-webkit-outer-spin-button, 
    &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }

    &:focus {
        border: ${({ theme }) => `1px solid ${theme.colors.lightPurple}`};
    }
`
