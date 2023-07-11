import { fireEvent, render } from '@testing-library/react';
import Theme from '../styles/themeProvider';
import { LeftOverlay } from './LeftOverlay';
import { vi } from 'vitest';

describe('LeftOverlay', () => {
  it('renders with text', () => {
    const mockOnClick = vi.fn()
    const { getByText } = render(
      <Theme>
        <LeftOverlay children={(
                <div style={{ backgroundColor: 'white', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <p>this is a left positioned component in the overlay</p>
                </div>
            )} handleClose={mockOnClick()}/> 
      </Theme>
    );
    const text = getByText('this is a left positioned component in the overlay');
    expect(text).toBeInTheDocument();
  });

  it('clicking the overlay calls the handleClose prop', () => {
    const mockOnClick = vi.fn()
    const { getByTestId } = render(
      <Theme>
        <LeftOverlay 
            children={(
                <div style={{ backgroundColor: 'white', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <p>this is a left positioned component in the overlay</p>
                </div>
            )} 
            handleClose={mockOnClick()}
        /> 
      </Theme>
    );
    const overlayContainer = getByTestId('left-overlay');
    fireEvent.click(overlayContainer);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
