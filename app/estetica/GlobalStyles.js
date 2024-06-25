"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    color: #595758;
  }

  :root {
    --light: #ffe8ea;
    --second: #ff99ac;
    --pink: #f2a172;
    --text: rgb(89,87,88);
  
  }
  
`;

export default GlobalStyles;
