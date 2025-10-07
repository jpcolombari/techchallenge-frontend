import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  body { 
    background: ${theme.colors.bodyBackground}; 
    color: ${theme.colors.text}; 
    font-family: ${theme.fonts.main}; 
  }
  a { 
    color: inherit; 
    text-decoration: none; 
  }
`;
export default GlobalStyles;