"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  min-height: 50vh;
`;

const Title = styled.h1`
  font-size: 3.3rem;
  text-align: center;
  color: #f7ece1;
  margin: 13rem;
  z-index: 1;
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15rem;
  gap: 4rem;
`;
const Circle = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  border: 1px solid #f7ece1;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: -10%;
  filter: blur(100px);
  width: 50%;
  height: 20%;
  background-color: #0ae448;
`;

const Blur2 = styled.div`
  position: absolute;
  top: -10%;
  filter: blur(100px);
  width: 50%;
  height: 20%;
  background-color: #ff4564;
  right: 10%;
`;

const Blur3 = styled.div`
  position: absolute;
  top: -10%;
  filter: blur(100px);
  width: 50%;
  height: 20%;
  background-color: #00acff;
  right: 40%;
`;

export default function Contato() {
  return (
    <Container>
      <Blur3 />

      <Blur2 />
      <Blur />
      <Title>Entre em contato</Title>
      <CircleContainer>
        <Circle>
          {" "}
          <Image
            src="/whatsapp.svg"
            width={55}
            height={55}
            alt="Whatsapp logo"
          />
        </Circle>
        <Circle>
          {" "}
          <Image
            src="/instagram.svg"
            width={55}
            height={55}
            alt="Instagram logo"
          />
        </Circle>
        <Circle>
          {" "}
          <Image
            src="/linkedin.svg"
            width={55}
            height={55}
            alt="Linkedin logo"
          />
        </Circle>
        <Circle>
          {" "}
          <Image src="/github.svg" width={55} height={55} alt="Github logo" />
        </Circle>
      </CircleContainer>
    </Container>
  );
}
