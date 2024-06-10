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
  overflow: hidden;
  flex-wrap: wrap;
  min-width: 400px;
  max-width: 500px;
  background: rgba(247, 236, 225, 0.3);
  width: 30vw;
  height: 300px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  transition: filter 0.3s;
  &:hover {
    cursor: pointer;
    filter: saturate(1);
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(0, 117, 51, 1),
      transparent 40%
    );
  }

  &:hover::before {
    opacity: 1;
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(0, 117, 51, 0.2),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(0, 117, 51, 0.2),
      transparent 40%
    );
    z-index: 1;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: 90%; /* Adjust the width for smaller screens */
    margin: 0 auto; /* Center the cards */
  }
`;

export const CardContent = styled.div`
  background-color: #0e100f;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  position: absolute;
  z-index: 0;

  @media (max-width: 600px) {
    background: linear-gradient(
      45deg,
      rgba(14, 16, 15, 1) 0%,
      rgba(14, 16, 15, 1) 50%,
      rgba(0, 45, 11, 1) 100%
    );

    padding: 20px;
    flex-wrap: wrap;
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
  margin: 0 1px 1px 0;
  position: relative;
  left: 30%;
  top: 40%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 1);
`;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Pallete = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50px;
  background: ${(props) => props.color || "red"};
  margin: 30px;
  position: absolute;
  top: ${(props) => props.top || "60%"};
  left: -15%;
  right: 40%;
`;
