import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 0.520833333333333333333333333333vw;
  }

  body {
    font-size: 1.6rem; //Happy rems
    font-family: "PingFangSC-Regular", "Roboto", "Helvetica Neue", "Helvetica", "Tahoma", "Arial", "PingFang SC-Light", "Microsoft YaHei";
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

  .debug-r {
    outline: 2px solid red;
  }

  .debug-g {
    outline: 2px solid green;
  }

  .debug-b {
    outline: 2px solid blue;
  }

  button {
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
  }

  button:active {
    opacity: 0.6;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .justify-start {
    display: flex;
    justify-content: flex-start;
  }
  .justify-center {
    display: flex;
    justify-content: center;
  }

  .justify-end {
    display: flex;
    justify-content: flex-end;
  }
  .justify-evenly {
    display: flex;
    justify-content: space-evenly;
  }
  .justify-around {
    display: flex;
    justify-content: space-around;
  }
  .justify-between {
    display: flex;
    justify-content: space-between;
  }
  .align-start {
    display: flex;
    align-items: flex-start;
  }
  .align-center {
    display: flex;
    align-items: center;
  }
  .align-end {
    display: flex;
    align-items: flex-end;
  }
  .unselectable {
    user-select: none;
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE 10+ */
  }
`;
