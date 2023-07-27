import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Theme from '../styles/themeProvider';
import { Layout } from './Layout';

const FakeComponent = () => <div>fake text</div>;

describe('Layout component', () => {
  it('should render the sidebar and outlet components', () => {
    const { getByTestId, getByText } = render(
        <Theme>
            <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<FakeComponent />} />
                </Route>
            </Routes>
            </MemoryRouter>
        </Theme>
      );
        expect(getByTestId('profile')).toBeInTheDocument();
        expect(getByTestId('logo')).toBeInTheDocument();
        expect(getByText('fake text')).toBeInTheDocument();
  });
});