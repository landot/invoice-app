import { render, screen } from '@testing-library/react';
import App from "../App";

// remove this later
describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const text = screen.getByText('Vite');
    expect(text).toBeInTheDocument();
  });
});
