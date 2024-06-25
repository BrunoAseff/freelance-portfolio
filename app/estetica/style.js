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
  font-family: var(--font-bitter);
`;

export const Button = styled.button`
  border-radius: 15px;
  border: 2px solid transparent;
  background-color: rgb(89, 87, 88);
  color: white;
  font-size: 1.3rem;
  padding: 10px 15px;
  margin: 20px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
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
  background-image: radial-gradient(var(--pink), var(--pink));
  opacity: 0.3;
  top: -50%;
  right: -10%;
  position: fixed;
  width: 50%;
  height: 900px;
  border-radius: 100%;
  filter: blur(100px);
  z-index: -1;
`;

export const LeftBlob = styled.div`
  background-image: linear-gradient(to top, var(--pink), white);
  opacity: 0.4;
  left: -20%;
  bottom: -10%;
  position: fixed;
  width: 100%;
  height: 500px;
  border-radius: 100%;
  filter: blur(100px);
  z-index: -1;
`;

export const ProcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  min-width: 400px;
`;

export const ProcCard = styled.div`
  box-shadow: 0 0 200px 0.1px var(--second);
  display: flex;
  min-width: 250px;
  max-width: 600px;
  height: 200px;
  background-color: white;
  align-items: center;
  padding: 30px;
  margin: 10px;
  border: solid 0.7px transparent;
  border-radius: 15px;
  text-align: left;
  width: 50px;

  &.top-right {
    width: 100px;
  }

  &.top-left {
    text-align: right;
    width: 600px;
  }

  &:hover {
    cursor: pointer;
    border: solid 0.7px var(--text);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProcText = styled.h1`
  font-size: 1.5rem;
`;

export const ProcSubtitle = styled.p`
  font-size: 1rem;
`;

export const ProcImage = styled(Image)`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border: 1px solid #595758;
`;
