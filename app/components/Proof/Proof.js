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
  const [buttonHover, setButtonHover] = useState({});

  const handleMouseEnter = (color) => {
    setHoverColor(color);
  };

  const handleMouseLeave = () => {
    setHoverColor("");
  };

  const handleButtonMouseEnter = (id) => {
    setButtonHover((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleButtonMouseLeave = (id) => {
    setButtonHover((prevState) => ({ ...prevState, [id]: false }));
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
          <Text color={hoverColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button
            onMouseEnter={() => handleButtonMouseEnter("responsive")}
            onMouseLeave={() => handleButtonMouseLeave("responsive")}
          >
            Checar responsividade
            <Image
              src={buttonHover["responsive"] ? "/ArrowDark.svg" : "/arrow.svg"}
              width={20}
              height={20}
              alt="Arrow icon"
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
          <Text color={hoverColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button
            onMouseEnter={() => handleButtonMouseEnter("design")}
            onMouseLeave={() => handleButtonMouseLeave("design")}
          >
            Ver design criativo
            <Image
              src={buttonHover["design"] ? "/ArrowDark.svg" : "/arrow.svg"}
              width={20}
              height={20}
              alt="Arrow icon"
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
          <Text color={hoverColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac.
          </Text>
          <Button
            onMouseEnter={() => handleButtonMouseEnter("speed")}
            onMouseLeave={() => handleButtonMouseLeave("speed")}
          >
            Ver análise de performance
            <Image
              src={buttonHover["speed"] ? "/ArrowDark.svg" : "/arrow.svg"}
              width={20}
              height={20}
              alt="Arrow icon"
            />
          </Button>
        </TextContainer>
      </Section>
    </Container>
  );
};

export default Proof;
