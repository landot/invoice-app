import { useState } from "react";
import { ReactComponent as ArrowDownIcon } from '../assets/icon-arrow-down.svg';
import styled from "styled-components"
import { useClickAway } from "@uidotdev/usehooks";

export const FilterStyles = styled.div`
    position: relative;
`

export const ArrowStyles = styled(ArrowDownIcon)<{up: boolean}>`
    transform: ${p => p.up ? 'rotate(180deg)': ''};
`

export const FilterButtonStyles = styled.button``

export const FilterButtonContainerStyles = styled.div`
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
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
`

export const FilterDropdownItemStyles = styled.div`
    display: flex;
    padding: 12px 24px;
    cursor: pointer;

    input {
        width: 16px;
        height: 16px;
        margin-right: 12px;
        accent-color: #7C5DFA;
    }

    label {
        text-transform: capitalize;
    }

    input[type=checkbox]:not(:checked):before {
        position: absolute;
        content: '';
        border-radius: 2px;
        background-color: #DFE3FA;
    }
`

export function FilterDropdownItem(props: {
    name: Status,
    selected: boolean,
    onClick: () => void
}) {
    return (
        <FilterDropdownItemStyles>
            <input id={props.name} type="checkbox" checked={props.selected} onClick={props.onClick} value={props.name} />
            <label htmlFor={props.name}>{props.name}</label>
        </FilterDropdownItemStyles>
    )
}

export enum Status {
    Draft = 'draft',
    Pending = 'pending',
    Paid = 'paid'
}

export function Filter(props: {
    selectedFilters: Status[],
    filters: Status[],
    handleUpdate: React.Dispatch<React.SetStateAction<Status[]>>
}) {
    const [showOptions, setShowOptions] = useState(true);
    const ref = useClickAway(() => {
        setShowOptions(false);
    });
    
    function handleClick(name: Status) {
        const newFilters = [...props.selectedFilters];
        if (newFilters.includes(name)) {
            newFilters.filter(f => f !== name);
        } else {
            newFilters.push(name);
        }
        props.handleUpdate(newFilters);

    }

    return (
        <FilterStyles ref={ref}>
            <FilterButtonContainerStyles onClick={() => setShowOptions(prev => !prev)}>
                <FilterButtonStyles>
                    Filter by status
                </FilterButtonStyles>
                <ArrowStyles up={showOptions} />
            </FilterButtonContainerStyles>
            {showOptions && (
                <FilterDropdownStyles>
                    {props.filters.map(s => (
                        <FilterDropdownItem
                            name={s} 
                            selected={props.selectedFilters.includes(s)} 
                            onClick={() => handleClick(s)} 
                        />
                    ))}
                </FilterDropdownStyles>
            )}
        </FilterStyles>
    )
}