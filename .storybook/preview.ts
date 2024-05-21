import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import defaultTheme from '../src/theme';

/* snipped for brevity */
const GlobalStyles = createGlobalStyle`
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme
    },
    Provider: ThemeProvider,
    GlobalStyles
  })
];
