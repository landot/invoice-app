import { render } from '@testing-library/react';
import Theme from '../styles/themeProvider';
import { NoInvoice } from './NoInvoice';

describe('NoInvoice component', () => {
  it('should render the SVG, headings, and text content', () => {
    const { getByTestId, getByText } = render(
        <Theme>
            <NoInvoice />
        </Theme>

    );

    const svgElement = getByTestId('no-invoice-svg');
    const headingElement = getByText('There is nothing here');
    expect(svgElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
});