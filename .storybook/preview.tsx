// .storybook/preview.tsx
import type { Preview } from '@storybook/nextjs';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;