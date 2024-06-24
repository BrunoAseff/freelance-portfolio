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

  body {
    background-image: linear-gradient(
      to top,
      #FFE5D9,
      white
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyles;
