"use client";

import { useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";
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
          <Text color={hoverColor}>Apareça bem em qualquer dispositivo.</Text>
          <Link
            href="https://codebeautify.org/responsive-website-tester?&URL=https://freelance-portfolio-orpin-xi.vercel.app/&Size=1&Scr=defaultSize"
            target="_blank"
          >
            <Button
              onMouseEnter={() => handleButtonMouseEnter("responsive")}
              onMouseLeave={() => handleButtonMouseLeave("responsive")}
            >
              Checar responsividade
              <Image
                src={
                  buttonHover["responsive"] ? "/arrowDark.svg" : "/arrow.svg"
                }
                width={20}
                height={20}
                alt="Arrow icon"
              />
            </Button>
          </Link>
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
            Designs personalizados para destacar a sua marca.
          </Text>
          <Link href="/design" target="_blank">
            <Button
              onMouseEnter={() => handleButtonMouseEnter("design")}
              onMouseLeave={() => handleButtonMouseLeave("design")}
            >
              Ver design criativo
              <Image
                src={buttonHover["design"] ? "/arrowDark.svg" : "/arrow.svg"}
                width={20}
                height={20}
                alt="Arrow icon"
              />
            </Button>
          </Link>
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
            Desempenho otimizado para acesso ágil e eficiente.
          </Text>
          <Link
            href="https://pagespeed.web.dev/analysis/https-freelance-portfolio-orpin-xi-vercel-app/016gyemhwc?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=pt&utm_source=lh-chrome-ext"
            target="_blank"
          >
            <Button
              onMouseEnter={() => handleButtonMouseEnter("speed")}
              onMouseLeave={() => handleButtonMouseLeave("speed")}
            >
              Ver análise de performance
              <Image
                src={buttonHover["speed"] ? "/arrowDark.svg" : "/arrow.svg"}
                width={20}
                height={20}
                alt="Arrow icon"
              />
            </Button>
          </Link>
        </TextContainer>
      </Section>
    </Container>
  );
};

export default Proof;
