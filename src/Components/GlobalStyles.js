import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    overflow:hidden;
    background-color: var(--color-background-dark);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --color-background: #414141;
    --color-background-dark: #252525;
    --color-background-darker: #212121;
    --color-background-light: #727272;
    --color-background-lighter: #929292;
    --color-background-white: #D9D9D9;


    --color-button: #1561fb;
    --color-button-darker: #0349d5;

    --color-font: #B2B2B2;
    --color-font-dark: #676767;
    --color-font-light: #D1D1D1;

    --max-space: 800px
  }
`;

export default GlobalStyle;
