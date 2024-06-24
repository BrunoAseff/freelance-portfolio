"use client";

import Image from "next/image";

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Nav = styled.div`
  margin-top: 40px;
  position: sticky;
  width: 100%;
  font-size: 15px;
`;

const underlineAnimation = keyframes`
  0% {
    width: 0;
    right: 100%;
  }
  100% {
    width: 100%;
    right: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  position: relative;
  text-decoration: none;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: #595758;
      animation: ${underlineAnimation} 0.3s forwards;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 80%;
  margin-top: 5%;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 2vw + 1rem, 3rem);
  font-family: var(--font-playfair);
`;

export const Button = styled.button`
  border-radius: 15px;
  border: 1px solid #595758;
  background-color: transparent;
  font-size: 1.3rem;
  padding: 10px 15px;
  margin: 20px;
  &:hover {
    cursor: pointer;
    background-color: white;
    transition: 0.5s;
  }
`;

export const HeroImage = styled(Image)`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border: 1px solid #595758;
  width: clamp(150px, 30vw, 300px);
  height: auto;
`;

export const RightBlob = styled.div`
  background-image: radial-gradient(#f2a172, #f2a172);
  opacity: 0.5;
  top: -50%;
  right: -20%;
  position: fixed;
  width: 500px;
  height: 700px;
  border-radius: 100%;
  filter: blur(100px);
  z-index: -1;
`;

export const LeftBlob = styled.div`
  background-image: linear-gradient(to top, #f2ceae, white);
  opacity: 1;
  left: -20%;
  bottom: -10%;
  position: fixed;
  width: 100%;
  height: 500px;
  border-radius: 100%;
  filter: blur(100px);
  z-index: -1;
`;

export const ProcSection = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const ProcContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const ProcCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  min-height: 300px;
  max-width: 500px;
  max-height: 450px;
  background-color: white;
  padding: 30px;
  flex: 1 1 300px;

  &.top-right {
    text-align: left;
    border-top-right-radius: 50%;
    background-image: url("mesh.png");
    border: solid 1px transparent;

    &:hover {
      cursor: pointer;
      border: solid 1px #595758;
    }
  }

  &.top-left {
    text-align: right;
    border-top-left-radius: 50%;
    background-image: url("mesh2.png");
    border: solid 1px transparent;

    &:hover {
      cursor: pointer;
      border: solid 1px #595758;
    }
  }

  &.bottom-left {
    text-align: right;
    border-bottom-left-radius: 50%;
    background-image: url("mesh3.png");
    border: solid 1px transparent;

    &:hover {
      cursor: pointer;
      border: solid 1px #595758;
    }
  }

  &.bottom-right {
    border-bottom-right-radius: 50%;
    border: solid 1px transparent;

    background-image: url("mesh4.png");

    &:hover {
      cursor: pointer;
      border: solid 1px #595758;
    }
  }
`;

export const ProcText = styled.h1`
  font-size: 1.5rem;
`;

export const ProcSubtitle = styled.p`
  font-size: 1rem;
`;
