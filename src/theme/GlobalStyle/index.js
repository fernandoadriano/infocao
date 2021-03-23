import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.azulClaro};
      font-family: ${theme.fontePadrao};
    }    
  `}
`;

export default GlobalStyle;
