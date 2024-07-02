"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";

//Geral

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
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
  top: 5%;
  left: 0%;
  font-size: 15px;
  z-index: 99;
  background-color: white;
  padding: 5px 15px;
  min-width: 500px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 45px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    min-width: unset;
    position: fixed;
    top: 5%;
    left: -230px;
    width: 230px;
    height: 100%;
    padding: 0;
    background-color: white;
    transition: left 0.3s;
    border: 1px solid #595758;
    border-radius: 10px;
    border-left: none;
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
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
  cursor: pointer;

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

    &::after {
      content: "";
      position: absolute;
      top: -5px;
      right: -20px;
      width: 20px;
      height: 20px;
      background-image: url("/sparkleBlack.svg");
      background-size: cover;
      background-repeat: no-repeat;
      scale: 0.6;
      transition: 0.5s;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 10px 0;
  padding: 0;
  box-sizing: border-box;

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

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    padding: 3px 5px;
    z-index: 1000;
    scale: 1.5;
    background: white;
    border-radius: 5px;
    border: 1px solid #595758;
  }
`;

// HEROSECTION

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 80%;
  max-width: 1200px;
  margin-top: 5%;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 15%;
  }
`;

export const HeroTitle = styled.h1`
  position: relative;
  font-size: clamp(2rem, 2vw + 1rem, 3rem);
  font-family: var(--font-playfair);
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

export const SpecialWord = styled.span`
  font-family: var(--font-sofia), sans-serif;
  color: #ff99ac;
  font-style: italic;
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  background-color: black;
  border: none;
  color: white;
  text-align: center;
  font-size: 17px;
  padding: 16px;
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 10px;
    position: absolute;
    left: 15%;
  }

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

export const ImageContainer = styled.div`
  position: relative;
`;

export const HeroImage = styled(Image)`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border: 1px solid #595758;
  width: clamp(100px, 28vw, 300px);
  height: auto;
`;

export const HeroIcon = styled(Image)`
  position: absolute;
  right: 10%;
  @media (max-width: 700px) {
    scale: 0.7;
    right: 5%;
  }
  @media (max-width: 600px) {
    scale: 0.7;
    right: 0;
  }
  @media (max-width: 500px) {
    scale: 0.5;
    right: -10%;
  }
  @media (max-width: 400px) {
    right: -15%;
  }
`;
// PROCEDIMENTOS

export const ProcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-top: 100px;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  min-width: 400px;
  max-width: 1350px;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }
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
    justify-content: center;
    height: 350px;
    font-size: 1.2rem;
    margin-top: 40px;
  }
  &.top-right {
    width: 100px;
  }

  &.top-left {
    text-align: right;
    width: 600px;

    @media (max-width: 1000px) {
      text-align: center;
      width: 50px;
    }
  }

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    z-index: 1;
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
  margin: 10px;
  width: clamp(100px, 12vw, 120px);
  height: auto;
  border: 1px solid #595758;
`;

// SOBRE MIM

export const AboutCard = styled.div`
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 100px 0;
  width: 60%;
  max-width: 700px;
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
  margin: 50px 0;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
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
  box-shadow: 0 0 130px 0.5px var(--second);
`;

//ENTRE EM CONTATO

export const ContactSection = styled.div`
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background-color: white;
  border-top: 1px black solid;
`;

export const ContactTitle = styled.h1`
  margin-top: 100px;
  margin-bottom: 0;
  font-size: 3rem;
  color: black;
  padding: 0 40px;
`;

export const ContactSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 50px;
  padding: 0 40px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 50%;
  background-color: white;
  padding: 30px 7px 7px 7px;
  min-width: 70%;
  flex-shrink: 0;
  min-width: 1100px;
  box-shadow: 0 0 200px 1px rgba(255, 84, 238, 0.3);
  border-radius: 30px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    min-width: unset;
    padding: 20px 20px 10px 20px;
    gap: 3rem;
  }
  @media (max-width: 1200px) {
    min-width: unset;
    gap: 4rem;
    padding: 30px 40px 20px 40px;
  }
`;

export const ContactTextWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  text-align: left;
  gap: 0.3rem;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  &::before {
    content: "";
    position: absolute;
    top: 33%;
    left: 50%;
    width: 70px;
    height: 70px;
    background-color: var(--second);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @media (max-width: 1000px) {
      margin-top: 5px;
    }
  }
`;

export const ContactImage = styled(Image)`
  position: relative;
  margin-top: 2px;
  z-index: 1;
`;

export const ContactText = styled.div`
  font-size: 1.2rem;
  color: black;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;

export const ContactDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin-top: 5px;
`;

export const ContactButton = styled.button`
  margin: 30px;
  background-color: black;
  color: white;
  font-size: 1rem;
  padding: 20px 40px;
  border: black solid 0px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1c000d;
    cursor: pointer;
  }
`;
