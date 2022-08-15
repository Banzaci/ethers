import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: white;
    color: black;
    display: flex;
    font-family:'Roboto',sans-serif;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    width: 100%;
  }
  ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  `;