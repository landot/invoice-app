import { Item } from "../data/types/Data"
import { HeadingS } from "../styles/header/HeadingS.styles"
import { BodyText } from "../styles/text/Text.styles"
import { TextField } from "./TextField"
import { useState } from "react"
import { ReactComponent as DeleteIcon } from '../assets/icon-delete.svg';
import { ItemListStyles, ItemTableStyles, ItemTableRow, ItemNameCellStyles, ItemQuantityCellStyles, ItemPriceCellStyles, ItemTotalCellStyles, ItemDeleteCellStyles } from "../styles/ItemList.styles";
import { StyledButton } from "./Button"
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle"

export function ItemList(props: {items: Item[], handleItemUpdate?: (updatedItems: Item[]) => void}) {
    const [items, setItems] = useState(props.items);
    
    function handleItemUpdate(index: number, field: 'quantity' | 'price' | 'total', value: string) {
        setItems(prev => {
            const newItems = [...prev];
            const itemToUpdate = newItems[index];
            itemToUpdate[field] = parseFloat(value);
            if (field === 'quantity' || field === 'price') {
                itemToUpdate.total = parseFloat((itemToUpdate.price * itemToUpdate.quantity).toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join("."));
            }
            props.handleItemUpdate && props.handleItemUpdate(newItems);
            return newItems;
        })
    }

    function handleItemNameUpdate(index: number, name: string) {
        setItems(prev => {
            const newItems = [...prev];
            newItems[index].name = name;
            props.handleItemUpdate && props.handleItemUpdate(newItems);
            return newItems;
        })
    }
    
    function handleItemDelete(indexToDelete: number) {
        setItems(prev => {
            const updatedItems = prev.filter((_item, index) => index !== indexToDelete);
            props.handleItemUpdate && props.handleItemUpdate(updatedItems);
            return updatedItems;
        })
    }

    function handleNewItem() {
        const newItem: Item = {
            name: '',
            quantity: 0,
            price: 0,
            total: 0
        }
        setItems(prev => {
            return [
                ...prev, 
                newItem
            ]
        })
    }

    return (
        <ItemListStyles>
            <HeadingS>Item List</HeadingS>
            <ItemTableStyles>
                <ItemTableRow key='header'>
                    <th><BodyText>Item Name</BodyText></th>
                    <th><BodyText>Qty.</BodyText></th>
                    <th><BodyText>Price</BodyText></th>
                    <th><BodyText>Total</BodyText></th>
                    <th></th>
                </ItemTableRow>
                {items.map((item, index) => (
                    <ItemTableRow key={index}>
                        <ItemNameCellStyles><TextField inputType='text' value={item.name} handleChange={(value) => handleItemNameUpdate(index, value)}/></ItemNameCellStyles>
                        <ItemQuantityCellStyles><TextField inputType='int' value={item.quantity.toString()} handleChange={(value) => handleItemUpdate(index, 'quantity', value)}/></ItemQuantityCellStyles>
                        <ItemPriceCellStyles><TextField inputType='number' value={item.price.toString()} handleChange={(value) => handleItemUpdate(index, 'price', value)}/></ItemPriceCellStyles>
                        <ItemTotalCellStyles><HeadingS>{(item.total).toString()}</HeadingS></ItemTotalCellStyles>
                        <ItemDeleteCellStyles><DeleteIcon onClick={() => handleItemDelete(index)}/></ItemDeleteCellStyles>
                    </ItemTableRow>
                ))}
            </ItemTableStyles>
            <StyledButton 
                text="+ Add New Item" 
                type={{
                    ...SecondaryButtonStyle,
                    includeAddIcon: false,
                    width: '100%'
                }}
                onClick={() => handleNewItem()} 
            />
        </ItemListStyles>
    )
}