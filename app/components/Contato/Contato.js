"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: clamp(0.1rem, 3rem, 5rem);
  color: #f7ece1;
  margin: 3rem 1rem 5rem 1rem;
  z-index: 1;
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 7rem;
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
    opacity: 0.7;
    transition: 0.3;
  }
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

export default function Contato() {
  return (
    <Container>
      <Blur3 />
      <Blur2 />
      <Blur />
      <Title>Entre em contato</Title>
      <CircleContainer>
        <Link href="https://wa.me/5547991031009?text=" target="_blank">
          <Circle>
            {" "}
            <Image
              src="/whatsapp.svg"
              width={55}
              height={55}
              alt="Whatsapp logo"
            />
          </Circle>
        </Link>
        <Link href="https://www.instagram.com/brunoaseff" target="_blank">
          <Circle>
            {" "}
            <Image
              src="/instagram.svg"
              width={55}
              height={55}
              alt="Instagram logo"
            />
          </Circle>
        </Link>
        <Link
          href="https://www.linkedin.com/in/bruno-aseff-374835207/"
          target="_blank"
        >
          <Circle>
            {" "}
            <Image
              src="/linkedin.svg"
              width={55}
              height={55}
              alt="Linkedin logo"
            />
          </Circle>
        </Link>
        <Link href="https://github.com/BrunoAseff" target="_blank">
          <Circle>
            {" "}
            <Image src="/github.svg" width={55} height={55} alt="Github logo" />
          </Circle>
        </Link>
      </CircleContainer>
    </Container>
  );
}
