import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size:16px;
    @media(min-width:768px){
      font-size:18px;
    } 
    @media(min-width:1024px){
      font-size:20px;
    } 
  }

  body{
    overflow:hidden;
    background-color: var(--color-background-dark);
    font-family: Montserrat;
  }

  h1,h2,h3{
    font-family: Montserrat-bold;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --color-background: #111111;
    --color-background-dark: #010101;
    --color-background-darker: #515151;
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
