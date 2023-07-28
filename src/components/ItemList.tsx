import { Item } from "../data/types/Data";
import { HeadingS } from "../styles/header/HeadingS.styles";
import { BodyText } from "../styles/text/Text.styles";
import { TextField } from "./TextField";
import { useState } from "react";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";
import {
  ItemErrorStyles,
  ItemListStyles,
  ItemTableStyles,
  ItemTableRow,
  ItemNameCellStyles,
  ItemQuantityCellStyles,
  ItemPriceCellStyles,
  ItemTotalCellStyles,
  ItemDeleteCellStyles,
} from "../styles/components/ItemList.styles";
import { StyledButton } from "./Button";
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle";
import { convertToCostString } from "../utils/convertToCostString";

export function ItemList(props: {
  items: Item[];
  showErrors: boolean;
  handleItemUpdate?: (updatedItems: Item[]) => void;
}) {
  const [items, setItems] = useState(props.items);

  function handleItemUpdate(
    index: number,
    field: "quantity" | "price" | "total",
    value: string,
  ) {
    setItems((prev) => {
      const newItems = [...prev];
      const updatedItem = { ...newItems[index] };
      updatedItem[field] = parseFloat(value);
      if (field === "quantity" || field === "price") {
        updatedItem.total = parseFloat(
          (updatedItem.price * updatedItem.quantity)
            .toString()
            .split(".")
            .map((el, i) => (i ? el.split("").slice(0, 2).join("") : el))
            .join("."),
        );
      }
      newItems[index] = updatedItem;
      props.handleItemUpdate && props.handleItemUpdate(newItems);
      return newItems;
    });
  }

  function handleItemNameUpdate(index: number, name: string) {
    setItems((prev) => {
      const newItems = [...prev];
      const updatedItem = { ...newItems[index] };
      updatedItem.name = name;
      newItems[index] = updatedItem;
      props.handleItemUpdate && props.handleItemUpdate(newItems);
      return newItems;
    });
  }

  function handleItemDelete(indexToDelete: number) {
    setItems((prev) => {
      const updatedItems = prev.filter(
        (_item, index) => index !== indexToDelete,
      );
      props.handleItemUpdate && props.handleItemUpdate(updatedItems);
      return updatedItems;
    });
  }

  function handleNewItem() {
    const newItem: Item = {
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    };
    setItems((prev) => {
      const updatedItems = [...prev, newItem];
      props.handleItemUpdate && props.handleItemUpdate(updatedItems);
      return updatedItems;
    });
  }

  return (
    <ItemListStyles>
      <HeadingS>Item List</HeadingS>
      <ItemTableStyles>
        <thead>
          <ItemTableRow>
            <th>
              <BodyText>Item Name</BodyText>
            </th>
            <th>
              <BodyText>Qty.</BodyText>
            </th>
            <th>
              <BodyText>Price</BodyText>
            </th>
            <th>
              <BodyText>Total</BodyText>
            </th>
            <th></th>
          </ItemTableRow>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <ItemTableRow key={index} data-testid='item-table-row'>
              <ItemNameCellStyles>
                <TextField
                  inputType="text"
                  value={item.name}
                  handleChange={(value) => handleItemNameUpdate(index, value)}
                  error={props.showErrors ? item.name === "" : false}
                  errorText=""
                />
              </ItemNameCellStyles>
              <ItemQuantityCellStyles>
                <TextField
                  inputType="int"
                  value={item.quantity.toString()}
                  handleChange={(value) =>
                    handleItemUpdate(index, "quantity", value)
                  }
                  error={
                    props.showErrors
                      ? item.quantity <= 0 || isNaN(item.quantity)
                      : false
                  }
                  errorText=""
                />
              </ItemQuantityCellStyles>
              <ItemPriceCellStyles>
                <TextField
                  inputType="number"
                  value={item.price.toString()}
                  handleChange={(value) =>
                    handleItemUpdate(index, "price", value)
                  }
                  error={
                    props.showErrors
                      ? item.price <= 0 || isNaN(item.price)
                      : false
                  }
                  errorText=""
                />
              </ItemPriceCellStyles>
              <ItemTotalCellStyles data-testid='item-total'>
                <HeadingS>{convertToCostString(item.total)}</HeadingS>
              </ItemTotalCellStyles>
              <ItemDeleteCellStyles>
                <DeleteIcon onClick={() => handleItemDelete(index)} data-testid='delete-icon'/>
              </ItemDeleteCellStyles>
            </ItemTableRow>
          ))}
        </tbody>
      </ItemTableStyles>
      <StyledButton
        testId="add-item"
        text="+ Add New Item"
        type={{
          ...SecondaryButtonStyle,
          includeAddIcon: false,
          width: "100%",
        }}
        onClick={() => handleNewItem()}
      />
      <ItemErrorStyles>
        {props.showErrors && items.length === 0 && (
          <BodyText>- An item must be added</BodyText>
        )}
        {props.showErrors &&
          items.find((item) => item.quantity <= 0 || item.price <= 0) && (
            <BodyText>- values must be greater than 0</BodyText>
          )}
        {props.showErrors &&
          items.find(
            (item) =>
              item.name === "" || isNaN(item.quantity) || isNaN(item.price),
          ) && <BodyText>- All fields must be added</BodyText>}
      </ItemErrorStyles>
    </ItemListStyles>
  );
}
