"use client";

import {
  HeroTitle,
  Container,
  Li,
  A,
  Ul,
  Nav,
  HeroSection,
  HeroImage,
  LeftBlob,
  RightBlob,
  ProcSection,
  ProcContainer,
  ProcText,
  ProcSubtitle,
  ProcCard,
  Button,
} from "./style.js";
import GlobalStyles from "./GlobalStyles.js";

export default function Estetica() {
  return (
    <>
      <GlobalStyles />
      <RightBlob />
      <LeftBlob />
      <Container>
        <Nav>
          <Ul>
            <Li>
              <A href="#">Sobre mim</A>
            </Li>
            <Li>
              <A href="#">Procedimentos</A>
            </Li>
            <Li>
              <A href="#">Depoimentos</A>
            </Li>
            <Li>
              <A href="#">Contato</A>
            </Li>
          </Ul>
        </Nav>
        <HeroSection>
          <div>
            <HeroTitle>Abrindo janelas para uma autoestima renovada.</HeroTitle>
            <Button>Entre em contato</Button>
          </div>
          <HeroImage
            src="/mulher.jpeg"
            width={390}
            height={390}
            alt="Picture of the author"
          />
        </HeroSection>
        <ProcSection>
          <ProcContainer>
            <ProcCard className="top-left">
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </ProcCard>
            <ProcCard className="top-right">
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </ProcCard>
            <ProcCard className="bottom-left">
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </ProcCard>
            <ProcCard className="bottom-right">
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </ProcCard>
          </ProcContainer>
        </ProcSection>
      </Container>
    </>
  );
}
