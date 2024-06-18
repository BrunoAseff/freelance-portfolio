"use client";

import styled from "styled-components";

const Name = styled.h1`
  position: fixed;
  left: 5%;
  top: 5%;
  font-size: 2rem;
  font-family: var(--font-sofia);
  opacity: 0.5;
  z-index: 99;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export default function BrunoAseff() {
  return <Name>Bruno Aseff</Name>;
}
