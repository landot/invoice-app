import { useState } from "react";
import styled from "styled-components"
import { TextVariant } from "../styles/text/TextVariant.styles"

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

export function TextField(props: {title: string, handleChange?: (value: string) => void}) {
    const [value, setValue] = useState('');
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.handleChange && props.handleChange(e.target.value);
        setValue(e.target.value);
    }

    return (
        <TextFieldStyles>
            <TextVariant>{props.title}</TextVariant>
            <TextInputStyles 
                type='text' 
                value={value} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                data-testid={'text-input'}
            />
        </TextFieldStyles>
    )
}
