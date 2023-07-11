import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import Theme from '../styles/themeProvider';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders with selected value and title', () => {
    const { getByText } = render(
      <Theme>
        <Dropdown 
          title='Payment Terms'
          data={[
            {name: '1', value: 1},
            {name: '2', value: 2},
            {name: '3', value: 3},
          ]}
          selectedValue={2}
          handleChange={() => null}
        />
      </Theme>
    );
    const text = getByText('2');
    expect(text).toBeInTheDocument();
    const title = getByText('Payment Terms');
    expect(title).toBeInTheDocument();
  });

  it('selected value can be updated', () => {
    const mockChange = vi.fn();
    const { getByTestId } = render(
      <Theme>
        <Dropdown 
            title={'Payment Terms'}
            data={[
              { name: 'test1', value: 0 },
              { name: 'test2', value: 1 },
              { name: 'test3', value: 2 },
            ]}
            selectedValue={0}
            handleChange={mockChange}
        />
      </Theme>
    );
   
    const selectedValue = getByTestId('selected-value');
    expect(selectedValue).toBeInTheDocument();
    expect(selectedValue.textContent).toBe('test1');
    fireEvent.click(selectedValue);
    expect(getByTestId('option-0')).toBeInTheDocument();
    expect(getByTestId('option-1')).toBeInTheDocument();
    expect(getByTestId('option-2')).toBeInTheDocument();
    fireEvent.click(getByTestId('option-2'));
    expect(selectedValue.textContent).toBe('test3');
    expect(mockChange).toHaveBeenCalledTimes(1);
  });
});
