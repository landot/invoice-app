import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import Theme from '../styles/themeProvider';
import { StyledButton } from './Button';

// todo hover results in a pointer cursor
// todo svg is hidden if flag is off
describe('Button', () => {
  it('renders with text', () => {
    const { getByText } = render(
      <Theme>
        <StyledButton 
          text={'test'} 
          type={{
            includeAddIcon: true,
            textColor: 'orange',
            backgroundColor: 'red',
            hoverTextColor: 'green',
            hoverBackgroundColor: 'blue',
            width: 'fit-content'
          }} 
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }} 
        />
      </Theme>
    );
    const text = getByText('test');
    expect(text).toBeInTheDocument();
  });

  it('clicking results in firing of onClick prop', () => {
    const mockOnClick = vi.fn()
    const { getByTestId } = render(
      <Theme>
        <StyledButton 
          text={'test'} 
          type={{
            includeAddIcon: true,
            textColor: 'orange',
            backgroundColor: 'red',
            hoverTextColor: 'green',
            hoverBackgroundColor: 'blue',
            width: 'fit-content'
          }} 
          onClick={mockOnClick()} 
        />
      </Theme>
    );
    const buttonContainer = getByTestId('styled-button');
    fireEvent.click(buttonContainer);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
