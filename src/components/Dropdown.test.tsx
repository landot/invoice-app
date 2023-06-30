import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import Theme from '../styles/themeProvider';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders with selected value and title', () => {
    const { getByText } = render(
      <Theme>
        <Dropdown 
            title={'Payment Terms'}
            values={['1', '2', '3']}
            selectedValue={'2'}
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
            values={['test1', 'test2', 'test3']}
            selectedValue={'test1'}
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
