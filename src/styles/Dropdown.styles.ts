import styled from "styled-components"
import { TextVariant } from "./text/TextVariant.styles"

export const DropdownStyles = styled.div`
    width: 100%;
    height: 48px;
    position: relative;
    cursor: pointer;

    ${TextVariant} {
        color: ${({ theme }) => theme.colors.grayBlue};
        margin-bottom: 9px;
    }
`

export const SelectedItemStyles = styled.div<{open: boolean}>`
    border: ${p => p.open ? `1px solid ${p.theme.colors.brightPurple}`: `1px solid ${p.theme.colors.lightGrayBlue}`};
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px 9px 20px;
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extraSmall};
    letter-spacing: ${({ theme }) => theme.spacing.medium};
    caret-color: ${({ theme }) => theme.colors.lightPurple};

    p {
        margin: 0; 
    }
`

export const DropdownListStyles = styled.div`
    background: ${({ theme }) => theme.colors.white};
    z-index: 20;
    width: 100%;
    position: absolute;
    top: 95px;
    left: 0;
    list-style-type: none;
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
    border-radius: 8px;
`

export const DropdownListItemStyles = styled.div<{selected: boolean}>`
    height: 100%;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    padding: 16px 24px;

    color: ${p => p.selected ? p.theme.colors.brightPurple: p.theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extraSmall};
    letter-spacing: ${({ theme }) => theme.spacing.medium};
    caret-color: ${({ theme }) => theme.colors.lightPurple};

    
    &:not(:last-of-type) {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrayBlue}`};
    }
`