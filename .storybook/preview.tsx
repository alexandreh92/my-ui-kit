import GlobalStyles from '../src/globals/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Story } from '@storybook/react';
import { theme } from '../src/globals/defaultTheme';
import ToastProvider from '../src/contexts/ToastContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  docs: {
    source: {
      type: 'dynamic',
      excludeDecorators: true,
    },
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
};

export const decorators = [
  (Story: Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
