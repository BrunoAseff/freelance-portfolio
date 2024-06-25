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
  GlobalStyle,
  ProcContainer,
  ProcText,
  ProcSubtitle,
  ProcCard,
  Button,
  TextWrapper,
  ProcImage,
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
        <ProcContainer>
          <ProcCard className="top-left">
            <ProcImage
              src="/botox.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <TextWrapper>
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="top-right">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-left">
            <TextWrapper>
              <ProcText>Toxína Botulínica</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-middle">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
          <ProcCard className="bottom-right">
            <TextWrapper>
              <ProcText>Preenchimento</ProcText>
              <ProcSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </ProcSubtitle>
            </TextWrapper>
          </ProcCard>
        </ProcContainer>
      </Container>
    </>
  );
}
