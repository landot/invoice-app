import styled from "styled-components"
import { TextVariant } from "../text/TextVariant.styles"

export const TextFieldStyles = styled.div<{$error?: boolean}>`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${TextVariant} {
        color: ${({ theme, $error }) => $error ? 'red': theme.colors.grayBlue};
        margin-bottom: 9px;
    }
`

export const TextFieldHeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TextInputStyles = styled.input<{$error?: boolean}>`
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
    border: ${({ theme, $error }) => `1px solid ${$error ? 'red': theme.colors.lightGrayBlue}`};
    background: ${({ theme }) => theme.colors.white};

    &::placeholder {
        color: #0C0E16;
        opacity: 0.4;
    }

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
