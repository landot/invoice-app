import { fireEvent, render } from '@testing-library/react';
import Theme from '../styles/themeProvider';
import { TextField } from './TextField';


describe('TextField', () => {
  it('renders with title', () => {
    const { getByText } = render(
      <Theme>
        <TextField title={'test'} />
      </Theme>
    );
    const text = getByText('test');
    expect(text).toBeInTheDocument();
  });

  it('entering text updates input text', () => {
    const { getByTestId } = render(
      <Theme>
        <TextField title={'test'} />
      </Theme>
    );
    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {target: { value: '12345' }})
    expect((input as HTMLInputElement).value).toBe('12345')
  });
});
