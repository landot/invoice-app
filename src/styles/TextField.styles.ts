import styled from "styled-components"
import { TextVariant } from "./text/TextVariant.styles"

export const TextFieldStyles = styled.div`
    display: flex;
    flex-direction: column;

    ${TextVariant} {
        color: ${({ theme }) => theme.colors.grayBlue};
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
    width: 240px;
    padding: 18px 20px 15px 20px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBlue}`};
    background: ${({ theme }) => theme.colors.white};
    margin-top: 9px;

    &:focus {
        border: ${({ theme }) => `1px solid ${theme.colors.lightPurple}`};
    }
`
