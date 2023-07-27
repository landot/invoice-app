import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Theme from '../styles/themeProvider';
import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
  it('should render the logo and profile image', () => {
    const { getByTestId } = render(        
        <Provider store={store}>
            <Theme>
                <Sidebar />
            </Theme>
        </Provider>,
        { wrapper: BrowserRouter }
    );

    const logo = getByTestId('logo');
    const profileImage = getByTestId('profile');

    expect(logo).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });

  it('should call the navigate function when the logo is clicked', async () => {
    window.history.pushState({}, '', 'test');
    const { getByTestId } = render(        
        <Provider store={store}>
            <Theme>
                <Sidebar />
            </Theme>
        </Provider>,
        { wrapper: BrowserRouter }
    );

    const logo = getByTestId('logo');
    await userEvent.click(logo);
    expect(window.location.pathname).toBe(`/`);
  });
});