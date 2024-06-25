"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";

//Geral

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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

// NAV BAR

export const Nav = styled.div`
  margin-top: 40px;
  position: sticky;
  width: 100%;
  font-size: 15px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: -250px; /* Hidden by default */
    width: 250px;
    height: 100%;
    background-color: white; /* Adjust as needed */
    transition: left 0.3s;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

// Additional styles for the button to toggle the sidebar
export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1000;
    color: black;
    scale: 1.1;
    background: transparent;
  }
`;

// HEROSECTION

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
  display: inline-block;
  border-radius: 15px;
  background-color: rgb(89, 87, 88);
  border: none;
  color: white;
  text-align: center;
  font-size: 17px;
  padding: 16px;
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover span {
    padding-right: 15px;
  }

  &:hover span::after {
    opacity: 1;
    right: 0;
  }
`;

export const ButtonSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &::after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
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

// PROCEDIMENTOS

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
  position: relative;
  box-shadow: 0 0 200px 0.1px var(--second);
  display: flex;
  min-width: 250px;
  max-width: 600px;
  min-height: 200px;
  background-color: white;
  align-items: center;
  padding: 30px;
  margin: 10px;
  border: solid 0.7px transparent;
  border-radius: 15px;
  text-align: left;
  width: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
  &.top-right {
    width: 100px;
  }

  &.top-left {
    text-align: right;
    width: 600px;
  }

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    border: solid 0.7px #595758;
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

export const Gif = styled(Image)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

// SOBRE MIM

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`;

export const AboutCard = styled.div`
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 60%;
  border-radius: 20px;
  border: 1px solid #595758;
`;

export const AboutImage = styled(Image)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 90%;
  border-radius: 100%;
  border: 1px solid #595758;
`;

// MAPA

export const MapSection = styled.div`
  margin: 100px 0;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const MapText = styled.div`
  max-width: 25%;
  margin-right: 50px;
  @media (max-width: 1000px) {
    margin-right: 0;
    max-width: 100%;

    width: 100%;
  }
`;

export const Map = styled.iframe`
  border-radius: 15px;
  max-width: 90%;
`;
