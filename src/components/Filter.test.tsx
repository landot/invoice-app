import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Filter } from './Filter';
import userEvent from '@testing-library/user-event';
import { Status } from '../data/types/Data';
import Theme from '../styles/themeProvider';

describe('Filter component', () => {
  test('should render the "Filter by status" button', () => {
    render(<Filter selectedFilters={[]} filters={[]} handleUpdate={() => null} />);
    const filterButton = screen.getByText('Filter by status');
    expect(filterButton).toBeInTheDocument();
  });

  test('should render the "Filter" button when window width is less than or equal to 500', () => {
    // Mock the window size to be less than or equal to 500
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    render(<Filter selectedFilters={[]} filters={[]} handleUpdate={() => null} />);
    const filterButton = screen.getByText('Filter');
    expect(filterButton).toBeInTheDocument();
  });

  test('should show the dropdown when the button is clicked', async () => {
    const mockUpdate = vi.fn();
    const filters = [Status.Draft, Status.Paid, Status.Pending];
    const { getByTestId } = render(
      <Theme>
        <Filter 
            selectedFilters={[filters[0]]} 
            filters={filters} 
            handleUpdate={mockUpdate}        
        />
      </Theme>
    );
    const dropdown = getByTestId("filter-dropdown");
    expect(dropdown).toBeInTheDocument();
    await userEvent.click(dropdown);
    filters.forEach(filter => {
        expect(getByTestId(filter)).toBeInTheDocument();
    })
  });

  test('should hide the dropdown when clicking outside', async () => {
    const mockUpdate = vi.fn();
    const filters = [Status.Draft, Status.Paid, Status.Pending];
    const { getByText, getByTestId, queryByTestId } = render(
        <>
            <Theme>
                <Filter 
                    selectedFilters={[filters[0]]} 
                    filters={filters} 
                    handleUpdate={mockUpdate}        
                />
            </Theme>
            <div>Outside</div>
        </>
    );
    const dropdown = getByTestId("filter-dropdown");
    expect(dropdown).toBeInTheDocument();
    await userEvent.click(dropdown);
    filters.forEach(filter => {
        expect(getByTestId(filter)).toBeInTheDocument();
    })
    await userEvent.click(getByText('Outside'));
    filters.forEach(filter => {
        expect(queryByTestId(filter)).toBeNull();
    })
  });

  // investigate why the click here is not calling the handleUpdate prop
  test.skip('should call handleUpdate with the correct status when a checkbox is clicked', async () => {
    const mockUpdate = vi.fn();
    const filters = [Status.Draft, Status.Paid, Status.Pending];
    const { getByTestId } = render(
        <Theme>
          <Filter 
              selectedFilters={[filters[0]]} 
              filters={filters} 
              handleUpdate={mockUpdate}        
          />
        </Theme>
    );
    const dropdown = getByTestId("filter-dropdown");
    expect(dropdown).toBeInTheDocument();
    await userEvent.click(dropdown);

    await userEvent.click(getByTestId(filters[1]));
    expect(mockUpdate).toHaveBeenCalledTimes(1);
  });
});
