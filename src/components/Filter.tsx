import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Status } from "../data/types/Data";
import {
  FilterDropdownItemStyles,
  FilterStyles,
  FilterButtonContainerStyles,
  FilterButtonStyles,
  ArrowStyles,
  FilterDropdownStyles,
} from "../styles/components/Filter.styles";
import useWindowSize from "../utils/useWindowSize";

function FilterDropdownItem(props: {
  name: Status;
  selected: boolean;
  onClick: () => void;
}) {
  function handleLabelClick(e: React.MouseEvent<HTMLLabelElement>) {
    e.stopPropagation();
  }

  return (
    <FilterDropdownItemStyles onClick={() => props.onClick()}>
      <input
        readOnly
        data-testid={props.name}
        id={props.name}
        type="checkbox"
        checked={props.selected}
        value={props.name}
        onClick={() => props.onClick()}
      />
      <label htmlFor={props.name} onClick={(e) => handleLabelClick(e)}>
        {props.name}
      </label>
    </FilterDropdownItemStyles>
  );
}

export function Filter(props: {
  selectedFilters: Status[];
  filters: Status[];
  handleUpdate: (updatedFilters: Status[]) => void;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const size = useWindowSize();
  const ref = useClickAway(() => {
    setShowOptions(false);
  });

  function handleClick(name: Status) {
    let newFilters = [...props.selectedFilters];
    if (newFilters.includes(name)) {
      newFilters = newFilters.filter((f) => f !== name);
    } else {
      newFilters.push(name);
    }
    props.handleUpdate(newFilters);
  }

  return (
    <FilterStyles ref={ref}>
      <FilterButtonContainerStyles
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <FilterButtonStyles>
          {size.width && size.width <= 500 ? "Filter" : "Filter by status"}
        </FilterButtonStyles>
        <ArrowStyles $up={showOptions} data-testid='filter-dropdown' />
      </FilterButtonContainerStyles>
      {showOptions && (
        <FilterDropdownStyles>
          {props.filters.map((s) => (
            <FilterDropdownItem
              key={s}
              name={s}
              selected={props.selectedFilters.includes(s)}
              onClick={() => handleClick(s)}
            />
          ))}
        </FilterDropdownStyles>
      )}
    </FilterStyles>
  );
}
