import { useState } from "react";
import chevronDown from "../assets/icon-arrow-down.svg";
import {
  DropdownStyles,
  SelectedItemStyles,
  DropdownListStyles,
  DropdownListItemStyles,
} from "../styles/components/Dropdown.styles";
import { TextVariant } from "../styles/text/TextVariant.styles";
import { useClickAway } from "@uidotdev/usehooks";

export interface DropdownItem {
  name: string;
  value: number;
}

export function Dropdown(props: {
  title: string;
  data: DropdownItem[];
  selectedValue: number;
  handleChange: (status: number) => void;
}) {
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const ref = useClickAway(() => {
    setShowDropdownItems(false);
  });

  function handleDropdownUpdate(value: number) {
    setSelectedValue(value);
    setShowDropdownItems(false);
    props.handleChange(value);
  }

  function getNameForValue(value: number): string {
    return props.data.filter((item) => item.value === value)[0].name;
  }

  return (
    <DropdownStyles ref={ref}>
      <TextVariant>{props.title}</TextVariant>
      <SelectedItemStyles
        data-testid={"selected-value"}
        open={showDropdownItems}
        onClick={() => setShowDropdownItems((prev) => !prev)}
      >
        <p>{getNameForValue(selectedValue)}</p>
        <img src={chevronDown} alt="dropdown arrow" />
      </SelectedItemStyles>
      {showDropdownItems && (
        <DropdownListStyles>
          {props.data.map((data: DropdownItem, index) => (
            <DropdownListItemStyles
              data-testid={`option-${index}`}
              key={index}
              selected={selectedValue === data.value}
              onClick={() => handleDropdownUpdate(data.value)}
            >
              {data.name}
            </DropdownListItemStyles>
          ))}
        </DropdownListStyles>
      )}
    </DropdownStyles>
  );
}
