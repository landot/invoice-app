import type { Preview } from "@storybook/react";
import React from "react";
import Theme from "../src/styles/themeProvider";
import GlobalStyle from "../src/styles/globalStyles"

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
  (Story, context) => (
    // <Provider store={store}>
    <Theme>
      <GlobalStyle />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    </Theme>
    // </Provider>
  )
];

export default preview;
