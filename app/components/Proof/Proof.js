"use client";

import { useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import {
  Container,
  Section,
  TextContainer,
  SectionImage,
  Text,
  Title,
} from "./ProofStyles";

const Proof = () => {
  const [hoverColor, setHoverColor] = useState("");

  const handleMouseEnter = (color) => {
    setHoverColor(color);
  };

  const handleMouseLeave = () => {
    setHoverColor("");
  };

  return (
    <Container>
      <Section>
        <SectionImage
          color="rgba(10,228,72, 0.3)"
          onMouseEnter={() => handleMouseEnter("#0ae448")}
          onMouseLeave={handleMouseLeave}
          src="/responsive.png"
          width={480}
          height={480}
          alt="Picture of the author"
        />
        <TextContainer>
          <Title color={hoverColor}>Para todas as telas</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button>
            Checar responsividade
            <Image
              src="/arrow.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </Button>
        </TextContainer>
      </Section>

      <Section>
        <SectionImage
          onMouseEnter={() => handleMouseEnter("#FF4564")}
          onMouseLeave={handleMouseLeave}
          color="rgba(199, 0, 33, 0.3)"
          src="/design.png"
          width={480}
          height={480}
          alt="Picture of the author"
        />
        <TextContainer>
          <Title color={hoverColor}>Design criativo</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button>
            Ver design criativo
            <Image
              src="/arrow.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </Button>
        </TextContainer>
      </Section>

      <Section>
        <SectionImage
          color="rgba(0, 172, 255, 0.3)"
          onMouseEnter={() => handleMouseEnter("#00ACFF")}
          onMouseLeave={handleMouseLeave}
          src="/speed.png"
          width={480}
          height={480}
          alt="Picture of the author"
        />
        <TextContainer>
          <Title color={hoverColor}>Rápido e acessível</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button>
            Ver análise de performance
            <Image
              src="/arrow.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </Button>
        </TextContainer>
      </Section>
    </Container>
  );
};

export default Proof;
