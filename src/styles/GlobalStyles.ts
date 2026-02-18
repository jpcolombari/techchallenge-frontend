import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;
export default GlobalStyles;