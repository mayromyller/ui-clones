import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'sofiapro';
    src: url('../../public/fonts/sofiapro.ttf') format('trutype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    font-family: sofipro, sans-serif;
  }
`;

export default GlobalStyle;
