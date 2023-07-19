import type { Preview } from "@storybook/react";
import React from "react";
import Theme from "../src/styles/themeProvider";
import GlobalStyle from "../src/styles/globalStyles"
import { Provider } from "react-redux";
import { store } from "../app/store"
import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withRouter,
  (Story, context) => (
    <Theme>
      <Provider store={store}>
        <GlobalStyle />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </Provider>
    </Theme>
  )
];

export default preview;
