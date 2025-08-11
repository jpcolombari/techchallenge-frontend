'use client';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
export default AppThemeProvider;