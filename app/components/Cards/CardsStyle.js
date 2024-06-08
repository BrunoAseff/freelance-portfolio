"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CardsContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 1000px;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2s;
`;

export const Card = styled.div`
  background: #2c6e49;
  border: 1px solid rgba(255, 255, 255, 0.9);
  width: 30vw;
  height: 300px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  overflow: hidden;
  filter: saturate(0);
  &:hover {
    cursor: pointer;
    filter: saturate(1);
  }
`;

export const CardTitle = styled.h1`
  color: #f7ece1;
  font-size: 2rem;
  margin: 30px;
  position: absolute;
`;

export const CardSubtitle = styled.p`
  color: #f7ece1;

  font-size: 1.2rem;
  margin: 30px;
  position: absolute;
  top: 14%;
  opacity: 0.6;
`;

export const StyledImage = styled(Image)`
  position: relative;
  left: 30%;
  top: 40%;
  border-radius: 10px;
`;

export const Pallete = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50px;
  background: ${(props) => props.color || "red"};
  margin: 30px;
  position: absolute;
  top: ${(props) => props.top || "60%"};
  left: -10%;
  right: 40%;
`;
