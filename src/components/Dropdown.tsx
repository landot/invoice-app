import { useState } from 'react';
import chevronDown from '../assets/icon-arrow-down.svg';
import { DropdownStyles, SelectedItemStyles, DropdownListStyles, DropdownListItemStyles } from '../styles/Dropdown.styles';
import { TextVariant } from "../styles/text/TextVariant.styles"


export function Dropdown(props: {
    title: string,
    values: string[],
    selectedValue: string, 
    handleChange: (status: string) => void
}) {
    const [selectedValue, setSelectedValue] = useState(props.selectedValue);
    const [showDropdownItems, setShowDropdownItems] = useState(false);

    function handleDropdownUpdate(newStatus: string) {
        setSelectedValue(newStatus);
        setShowDropdownItems(false);
        props.handleChange(newStatus);
    }
    
    return (
        <DropdownStyles>
            <TextVariant>{props.title}</TextVariant>
            <SelectedItemStyles data-testid={'selected-value'} open={showDropdownItems} onClick={() => setShowDropdownItems(prev => !prev)}>
                <p>{selectedValue}</p>
                <img src={chevronDown} alt="dropdown arrow" />
            </SelectedItemStyles>
            {showDropdownItems && (
                <DropdownListStyles>
                    {props.values.map((value, index) => (
                        <DropdownListItemStyles 
                            data-testid={`option-${index}`} 
                            key={index} 
                            selected={selectedValue === value}
                            onClick={() => handleDropdownUpdate(value)}
                        >
                            {value}
                        </DropdownListItemStyles>
                    ))}
                </DropdownListStyles>
            )}
        </DropdownStyles>
    )
}