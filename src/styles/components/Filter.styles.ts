import styled from "styled-components"
import { ReactComponent as ArrowDownIcon } from '../../assets/icon-arrow-down.svg';

export const FilterStyles = styled.div`
    position: relative;
`

export const ArrowStyles = styled(ArrowDownIcon)<{up: boolean}>`
    transform: ${p => p.up ? 'rotate(180deg)': ''};
`

export const FilterButtonStyles = styled.button``

export const FilterButtonContainerStyles = styled.div`
    display: inline-block;
    white-space: nowrap;
    padding: 10px;
    cursor: pointer;
    ${ArrowStyles} {
        margin-left: 14px;
    }
`

export const FilterDropdownStyles = styled.div`
    cursor: pointer;
    width: 192px;
    position: absolute;
    top: 40px;
    left: -30px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
`

export const FilterDropdownItemStyles = styled.div`
    display: flex;
    padding: 12px 24px;
    cursor: pointer;

    input {
        cursor: inherit;
        width: 16px;
        height: 16px;
        margin-right: 12px;
        accent-color: ${({ theme }) => theme.colors.brightPurple};
    }

    label {
        cursor: inherit;
        text-transform: capitalize;
    }

    input[type=checkbox]:not(:checked):before {
        position: absolute;
        content: '';
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.lightGrayBlue};
    }
`
