import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Status } from "../data/types/Data";
import { FilterDropdownItemStyles, FilterStyles, FilterButtonContainerStyles, FilterButtonStyles, ArrowStyles, FilterDropdownStyles } from "../styles/components/Filter.styles";

function FilterDropdownItem(props: {
    name: Status,
    selected: boolean,
    onClick: () => void
}) {
    return (
        <FilterDropdownItemStyles>
            <input id={props.name} type="checkbox" defaultChecked={props.selected} value={props.name} onChange={() => props.onClick()} />
            <label htmlFor={props.name}>{props.name}</label>
        </FilterDropdownItemStyles>
    )
}

export function Filter(props: {
    selectedFilters: Status[],
    filters: Status[],
    handleUpdate: (updatedFilters: Status[]) => void
}) {
    const [showOptions, setShowOptions] = useState(false);
    const ref = useClickAway(() => {
        setShowOptions(false);
    });
    
    function handleClick(name: Status) {
        let newFilters = [...props.selectedFilters];
        if (newFilters.includes(name)) {
            newFilters = newFilters.filter(f => f !== name);
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