import {createGlobalStyle} from 'styled-components';

import MontserratRegularWoff2 from 'Fonts/Montserrat-Regular.woff2';
import MontserratRegularWoff from 'Fonts/Montserrat-Regular.woff';
import MontserratRegularTtf from 'Fonts/Montserrat-Regular.ttf';

import MontserratBoldWoff2 from 'Fonts/Montserrat-Bold.woff2';
import MontserratBoldWoff from 'Fonts/Montserrat-Bold.woff';
import MontserratBoldTtf from 'Fonts/Montserrat-Bold.ttf';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Montserrat, sans-serif;
  }


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
    overflow: hidden;
    background-color: #010101;
 
  }

  h1,h2,h3{
    font-family: Montserrat-bold, sans-serif;
  }
  


@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'),
    url(${MontserratRegularWoff2}) format('woff2'),
    url(${MontserratRegularWoff}) format('woff'),
    url(${MontserratRegularTtf}) format('truetype');
}
@font-face {
  font-family: 'Montserrat-bold';
  src: local('Montserrat-bold'),
    url(${MontserratBoldWoff2}) format('woff2'),
    url(${MontserratBoldWoff})  format('woff'),
    url(${MontserratBoldTtf}) format('truetype');
}
`;

export default GlobalStyle;
