import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; //1 rem = 10px, 10px/16px = 62.5%
  }

  body {
    font-size: 1.6rem; //Happy rems
    font-family: 'Open Sans', sans-serif; //Specify your default font here
    background: #FFF; //Specify your default background color here
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  .debug-r {
    outline: 2px solid red;
  }

  .debug-g {
    outline: 2px solid green;
  }

  .debug-b {
    outline: 2px solid blue;
  }
`
