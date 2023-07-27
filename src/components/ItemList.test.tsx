import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { sampleData } from '../../data';
import Theme from '../styles/themeProvider';
import { convertToCostString } from '../utils/convertToCostString';
import { ItemList } from './ItemList';

const mockItems = sampleData[1].items;

describe('ItemList component', () => {
  it('should render a list of items with proper values', () => {
    const { getAllByTestId } = render(
        <Theme>
            <ItemList items={mockItems} showErrors={false} />
        </Theme>
    );

    const itemNameCells = getAllByTestId('item-table-row');
    expect(itemNameCells).toHaveLength(mockItems.length);

    mockItems.forEach((item) => {
      expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
    });

    mockItems.forEach((item) => {
      const itemQuantityCell = screen.getByDisplayValue(item.quantity.toString());
      const itemPriceCell = screen.getByDisplayValue(item.price.toString());

      expect(itemQuantityCell).toBeInTheDocument();
      expect(itemPriceCell).toBeInTheDocument();
    });

    mockItems.forEach((item) => {
      const itemTotalCell = screen.getByText(convertToCostString(item.total));
      expect(itemTotalCell).toBeInTheDocument();
    });
  });

  it('should call handleItemUpdate when an item field is changed', () => {
    const handleItemUpdate = vi.fn();

    const { getAllByTestId } = render(
        <Theme>
            <ItemList items={mockItems} showErrors={false} handleItemUpdate={handleItemUpdate} />
        </Theme>
    );
    const itemNameCells = getAllByTestId('text-input');
    const itemQuantityCells = getAllByTestId('int-input');
    const itemPriceCells = getAllByTestId('number-input');

    userEvent.clear(itemNameCells[0]);
    userEvent.clear(itemQuantityCells[0]);
    userEvent.clear(itemPriceCells[0]);
    userEvent.paste(itemNameCells[0], 'Updated Item');
    userEvent.paste(itemQuantityCells[0], '2');
    userEvent.paste(itemPriceCells[0], '10');

    expect(handleItemUpdate).toHaveBeenCalledWith([
        {
            "name": "Updated Item",
            "price": 10,
            "quantity": 2,
            "total": 20,
        },
        {
            "name": "Email Design",
            "price": 200,
            "quantity": 2,
            "total": 400,
        },
    ]);
  });

    it('should delete item when the delete icon is clicked', () => {
        const handleItemUpdate = vi.fn();
    
        const { getAllByTestId } = render(
            <Theme>
                <ItemList items={mockItems} showErrors={false} handleItemUpdate={handleItemUpdate} />
            </Theme>
        );
        const deleteIcons = getAllByTestId('delete-icon');
    
        userEvent.click(deleteIcons[0]);

        expect(handleItemUpdate).toHaveBeenCalledWith([
            {
                "name": "Email Design",
                "price": 200,
                "quantity": 2,
                "total": 400,
            },
        ]);
      });

    it('should add an item when the add button is clicked', () => {
        const handleItemUpdate = vi.fn();
    
        const { getByRole } = render(
            <Theme>
                <ItemList items={mockItems} showErrors={false} handleItemUpdate={handleItemUpdate} />
            </Theme>
        );
        const addButton = getByRole('button');
    
        userEvent.click(addButton);

        expect(handleItemUpdate).toHaveBeenCalledWith([
            {
                "name": "Banner Design",
                "price": 156,
                "quantity": 1,
                "total": 156,
            },
            {
                "name": "Email Design",
                "price": 200,
                "quantity": 2,
                "total": 400,
            },
            {
                "name": "",
                "price": 0,
                "quantity": 0,
                "total": 0,
            },
        ]);
      });

      it('should show "an item must be added" error text when showErrors=true and no items exist', () => {
        const handleItemUpdate = vi.fn();
    
        const { getByText } = render(
            <Theme>
                <ItemList items={[]} showErrors={true} handleItemUpdate={handleItemUpdate} />
            </Theme>
        );
        const errorText = getByText('- An item must be added');
        expect(errorText).toBeInTheDocument();
      });

      it('should show "values must be greater than 0" error text when showErrors=true and item values are <= 0', () => {
        const handleItemUpdate = vi.fn();
    
        const { getByText } = render(
            <Theme>
                <ItemList items={[
                    {
                        name: 'test',
                        quantity: 0,
                        price: 0,
                        total: 0
                    }
                ]} showErrors={true} handleItemUpdate={handleItemUpdate} />
            </Theme>
        );
        const errorText = getByText('- values must be greater than 0');
        expect(errorText).toBeInTheDocument();
      });

      it('should show "All fields must be added" error text when showErrors=true and inputs are empty', () => {
        const handleItemUpdate = vi.fn();
    
        const { getByText } = render(
            <Theme>
                <ItemList items={[
                    {
                        name: '',
                        quantity: NaN,
                        price: NaN,
                        total: NaN,
                    }
                ]} showErrors={true} handleItemUpdate={handleItemUpdate} />
            </Theme>
        );
        const errorText = getByText('- All fields must be added');
        expect(errorText).toBeInTheDocument();
      });
});